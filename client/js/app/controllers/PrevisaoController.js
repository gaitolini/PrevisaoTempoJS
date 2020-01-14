class PrevisaoController {

    constructor() {

        let $ = document.querySelector.bind(document);
        this._inputDiasPrevisao = $("#diasPrevisao");
        this._inputCidade = $("#cidade");

        this._ordemAtual = '';

        this._mensagem = new Bind(
            new Mensagem(),
            new MensageView($("#mensagemView")),
            'texto'
        );

        // this._listaCidades = new Bind(
        //     new ListaPrevisoes(),
        //     new Views($("#previsoesView")),
        //     'adiciona', 'limpa', 'ordena', 'inverteOrdem'
        // );

    }

    _limpaFormulario() {
        this._inputDiasPrevisao.value = 1;
        this._inputCidade.value = '';
        this._inputData.focus();
    }

    _criaPrevisao() {
        return new Previsao(
            this._inputDia.value,
            this._inputCidade.value,
        );

    }

    apaga() {
        this._listaCidades.limpa();

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
            this._listaCidades.inverteOrdem();
        } else {

            this._listaCidades.ordena((a, b) => a[coluna] - b[coluna]);
        }
        this._ordemAtual = coluna;

    }

    importaPrevisoes() {
        let service = new PrevisaoService();

        Promise.all([
            service.pullPrevisoes(),
            // service.pullPrevisoesDaSemanaAnterior(),
            // service.pullNegociacoesDaSemanaRetrasada()
        ]
        ).then(previsoes => {
            previsoes
                .reduce((arrayPrevisao, array) => arrayPrevisao.concat(array), [])
                .forEach(previsao => this._listaPrevisao.adiciona(previsao));
            this._mensagem.texto = 'Previsoes importadas com sucesso.';
        })
            .catch(erro => this._mensagem.texto = erro);


    }



}