class PrevisaoController {

    constructor() {

        let $ = document.querySelector.bind(document);
        this._inputData = $("#dias");
        this._inputQuantidade = $("#cidade");

        this._ordemAtual = '';

        this._mensagem = new Bind(
            new Mensagem(),
            new MensageView($("#mensagemView")),
            'texto'
        );

        this._listaPrevisoes = new Bind(
            new ListaPrevisoes(),
            new Views($("#previsoesView")),
            'adiciona', 'limpa', 'ordena', 'inverteOrdem'
        );

    }

    _limpaFormulario() {
        this._inputDia.value = 1;
        this._inputCidade.value = 0;
        this._inputData.focus();
    }

    _criaPrevisao() {
        return new Previsao(
            this._inputDia.value,
            this._inputCidade.value,
        );

    }

    apaga() {
        this._listaPrevisoes.limpa();

        this._mensagem.texto = "Previsões apagadas com sucessos!";
    }

    adiciona(event) {

        event.preventDefault();

        try {

            this._listaPrevisoes.adiciona(this._criaPrevisao());
            this._mensagem.texto = 'Mensagem adionada com sucesso';
            this._limpaFormulario();
        } catch (erro) {
            this._mensagem.texto = erro;
        }
    }

    ordena(coluna) {
        if (this._ordemAtual == coluna) {
            //inverte a  ordem da lista
            this._listaPrevisoes.inverteOrdem();
        } else {

            this._listaPrevisoes.ordena((a, b) => a[coluna] - b[coluna]);
        }
        this._ordemAtual = coluna;

    }

    importaNegociacoes() {

        let service = new PrevisaoService();

        Promise.all([
            service.pullPrevisoesDaSemana(),
            service.pullPrevisoesDaSemanaAnterior(),
            service.pullNegociacoesDaSemanaRetrasada()]
        ).then(negociacoes => {
            negociacoes
                .reduce((arrayPrevisao, array) => arrayPrevisao.concat(array), [])
                .forEach(previsao => this._listaPrevisoes.adiciona(previsao));
            this._mensagem.texto = 'Previsões importadas com sucesso.';
        })
            .catch(erro => this._mensagem.texto = erro);
    }

}