class Previsao {

    constructor(dia, tempo, maxima, minina, iuv, atualizacao, diasPrevisao, cidade) {

        this._dia = 1;
        this._tempo = '';
        this._maxima = 0;
        this._minima = 0;
        this._iuv = 0.0;
        this._atualizacao = new Date(atualizacao.getTime());
        this._diasPrevisao = 1;
        this._cidade = new Cidade();
        Object.freeze(this);
    }


    get dia() {
        return this._dia;
    }

    get tempo() {
        return this._tempo;
    }

    get maxima() {
        return this._maxima;
    }

    get minima() {
        return this._minima;
    }

    get iuv() {
        return this._iuv;
    }

    get atualizacao() {
        return new Date(this._atualizacao.getTime());
    }

    get diasPrevisao() {
        return this._diasPrevisao;
    }

    get cidade() {
        return this._cidade;
    }

}