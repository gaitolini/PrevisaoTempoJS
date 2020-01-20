class PrevisaoController {

    constructor() {

        let $ = document.querySelector.bind(document);
        this._inputNomeCidade = $("#nomeCidade");

        this._ordemAtual = '';
        this._mensagem = new Bind(
            new Mensagem(),
            new MensageView($("#mensagemView")),
            'texto'
        );

        this._listaPrevisao = new Bind(
            new ListaPrevisoes(),
            new PrevisoesView($("#previsoesViews")),
            'adiciona', 'limpa', 'ordena', 'inverteOrdem'
        );

        this._listaCidades = new ListaCidades();
        this._cidade = new Cidade();

    }

    _limpaFormulario() {
        this._inputNomeCidade.value = '';
        this._inputNomeCidade.focus();
    }

    _criaPrevisao() {
        return new Previsao(
            this._inputNomeCidade.value
        );

    }
    _criaCidade() {
        return new Cidade(
            this._inputNome.value,
            this._inputUF.value,
            this._inputID.value
        );

    }

    apaga() {
        this._listaPrevisao.limpa();
        this._mensagem.texto = "Previsões apagadas com sucessos!";
    }

    adiciona(event) {

        event.preventDefault();

        try {

            this._listaPrevisao.adiciona(this._criaPrevisao());
            this._mensagem.texto = 'Mensagem adionada com sucesso';
            this._limpaFormulario();
        } catch (erro) {
            this._mensagem.texto = erro;
        }
    }

    ordena(coluna) {
        if (this._ordemAtual == coluna) {
            //inverte a  ordem da lista
            this._listaPrevisao.inverteOrdem();
        } else {

            this._listaPrevisao.ordena((a, b) => a[coluna] - b[coluna]);
        }
        this._ordemAtual = coluna;

    }

    importaPrevisoes() {

        let parse = new XMLSerializer
        let service = new PrevisaoService();
        service.pullCidade(this._inputNomeCidade.value)
            .then(cidadesXML => {
                for (let i = 0; i < cidadesXML.length; i++) {
                    var cidade = new Cidade(
                        cidadesXML[i].getElementsByTagName("nome")[0].childNodes[0].nodeValue,
                        cidadesXML[i].getElementsByTagName("uf")[0].childNodes[0].nodeValue,
                        cidadesXML[i].getElementsByTagName("id")[0].childNodes[0].nodeValue
                    )
                }

                console.log('Cidades importadas com sucesso');
                service.pullPrevisoes(cidade.id)
                    .then(cidadePrevisaoXML => {


                        for (let i = 0; i < cidadePrevisaoXML[0].childElementCount; i++) {

                            if (cidadePrevisaoXML[0].childNodes[i].nodeName == "atualizacao") {
                                var atualizacao = new Date(cidadePrevisaoXML[0].childNodes[i].innerHTML);
                            }


                            if (cidadePrevisaoXML[0].childNodes[i].nodeName == "previsao") {

                                var previsao = new Previsao(
                                    new Date(cidadePrevisaoXML[0].childNodes[i].childNodes[0].innerHTML),
                                    cidadePrevisaoXML[0].childNodes[i].childNodes[1].innerHTML,
                                    cidadePrevisaoXML[0].childNodes[i].childNodes[2].innerHTML,
                                    cidadePrevisaoXML[0].childNodes[i].childNodes[3].innerHTML,
                                    cidadePrevisaoXML[0].childNodes[i].childNodes[4].innerHTML,
                                    new Date(atualizacao),
                                    cidade
                                )

                                this._listaPrevisao.adiciona(previsao);
                            }
                        }
                        console.log(this._listaPrevisao);

                    })
                    .catch(erro => {
                        this._mensagem.erro = erro;
                    })
            })
            .catch(erro => {
                this._mensagem.texto = erro;
            });



        // Promise.all([
        //     service.pullCidades(this._inputNomeCidade.value),
        //     service.pullPrevisoes()
        //     // service.pullNegociacoesDaSemanaRetrasada()
        // ]).then(previsoes => {
        //     previsoes
        //         .reduce((arrayPrevisao, array) => arrayPrevisao.concat(array), [])
        //         .forEach(previsao => this._listaPrevisao.adiciona(previsao));
        //     this._mensagem.texto = 'Previsoes importadas com sucesso.';
        // })
        //     .catch(erro => this._mensagem.texto = erro);


    }



}