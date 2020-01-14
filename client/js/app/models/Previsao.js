class Previsao {

    constructor(dia, tempo, maxima, minina, iuv, atualizacao, diasPrevisao, cidade) {

        this._dia = dia;
        this._tempo = tempo;
        this._maxima = maxima;
        this._minima = minina;
        this._iuv = iuv;
        this._atualizacao = new Date(atualizacao.getTime());
        this._diasPrevisao = diasPrevisao;
        cidade = new Cidade();
        this._cidade = cidade
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