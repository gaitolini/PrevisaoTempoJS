class EnviaPrevisaoController {

    constructor() {
        let $ = document.querySelector.bind(document);
        this._inputDia = $("#dias");
        this._inputCidade = $("#nomeCidade");
        // this._inputValor = $("#valor");

        this._mensagem = new Bind(
            new Mensagem(),
            new MensageView($("#mensagemView")),
            'texto'
        );
    }

    _limpaFormulario() {
        this._inputDia.value = 1;
        this._inputCidade.value = '';
        // this._inputValor.value = 0.0
        this._inputDia.focus();
    }

    _criaPrevisao() {
        return new Previsao(
            this._inputDia.value,
            this._inputCidade.value,
            // this._inputValor.value,
        );

    }

    enviaPrevisao(event) {

        event.preventDefault();
        // let negociacao = new Negociacao(new Date(this._inputData.value), this._inputQuantidade, this._inputValor);

        let previsao = {
            data: this._inputDia.value,
            quantidade: this._inputCidade.value,
            // valor: this._inputValor.value
        };

        let service = new PrevisaoService();

        service.pushPrevisoes(Previsao).then(messagem => {
            this._mensagem.texto = messagem;
        }).catch(erro => {
            this._mensagem.texto = erro;

        })



    }


}