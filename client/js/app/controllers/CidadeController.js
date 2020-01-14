class CidadeController {


    constructor() {

        let $ = document.querySelector.bind(document);
        this._inputNome = $("#nome");

        this._mensagem = new Bind(
            new Mensagem(),
            new MensageView($("#mensagemView")),
            'texto'
        );

        // this._listaCidades = new Bind(
        //     new ListaCidades(),
        //     new Views($("#cidadesViews")),
        //     'adiciona', 'limpa', 'ordena', 'inverteOrdem'
        // );

    }

    _criaCidades() {
        return new Cidade(
            this._inputNome.value,
            this._inputUf.value,
            this._inputId.value,
        );

    }


    apaga() {
        this._listaCidades.limpa();

        this._mensagem.texto = "Cidades apagadas com sucessos!";
    }

    // adiciona(event) {

    //     event.preventDefault();

    //     try {

    //         this._listaCidades.adiciona(this._criaCidades());
    //         this._mensagem.texto = 'Mensagem adionada com sucesso';
    //         this._limpaFormulario();
    //     } catch (erro) {
    //         this._mensagem.texto = erro;
    //     }
    // }

    ordena(coluna) {
        if (this._ordemAtual == coluna) {
            //inverte a  ordem da lista
            this._listaCidades.inverteOrdem();
        } else {

            this._listaCidades.ordena((a, b) => a[coluna] - b[coluna]);
        }
        this._ordemAtual = coluna;

    }

    importaCidades() {

        let service = new PrevisaoService();

        Promise.all([
                service.pullCidade()
            ]).then(cidades => {
                cidades
                    .reduce((arrayCidades, array) => arrayCidades.concat(array), [])
                    .forEach(cidade => this._listaCidades.adiciona(cidade));
                this._mensagem.texto = 'Cidades importadas com sucesso.';
            })
            .catch(erro => this._mensagem.texto = erro);
    }

}