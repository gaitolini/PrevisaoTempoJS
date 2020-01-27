class CidadeController {

    constructor() {

        let dom = document.querySelector.bind(document);

        this._inputNomeCidade = dom("#nomeCidade");

        this._ordemAtual = '';
        this._mensagem = new Bind(
            new Mensagem(),
            new MensageView(dom("#mensagemView")),
            'texto'
        );

        this._listaCidade = new Bind(
            new ListaCidades(),
            new CidadesView(dom("#cidadesView")),
            'adiciona', 'limpa', 'ordena', 'inverteOrdem'
        );

        this._cidade = new Cidade();

    }

    _limpaFormulario() {
        this._inputNomeCidade.value = '';
        this._inputNomeCidade.focus();
    }


    apaga() {
        this._listaCidade.limpa();
        this._mensagem.texto = "Cidades apagadas com sucessos!";
    }

    adiciona(event) {

        event.preventDefault();

        try {

            this._listaCidade.adiciona(this._criaPrevisao());
            this._mensagem.texto = 'Mensagem adionada com sucesso';
            this._limpaFormulario();
        } catch (erro) {
            this._mensagem.texto = erro;
        }
    }

    ordena(coluna) {
        if (this._ordemAtual == coluna) {
            //inverte a  ordem da lista
            this._listaCidade.inverteOrdem();
        } else {

            this._listaCidade.ordena((a, b) => a[coluna] - b[coluna]);
        }
        this._ordemAtual = coluna;

    }

    importaCidades() {

        let service = new CidadeService();
        service.pullCidade(StrHelper.replaceSpecialChars(this._inputNomeCidade.value))
            .then(cidadesXML => {
                for (let i = 0; i < cidadesXML.length; i++) {
                    var cidade = new Cidade(
                        cidadesXML[i].getElementsByTagName("nome")[0].childNodes[0].nodeValue,
                        cidadesXML[i].getElementsByTagName("uf")[0].childNodes[0].nodeValue,
                        cidadesXML[i].getElementsByTagName("id")[0].childNodes[0].nodeValue
                    )

                    this._listaCidade.adiciona(cidade);
                }

                this._mensagem.texto = 'Cidade importada com sucesso';
                console.log('Cidades importadas com sucesso');

            }).catch(erro => {
                this._mensagem.texto = erro;
            });

    }

}