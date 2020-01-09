class ListaPrevisoes {

    constructor() {

        this._previsoes = [];
    }

    adiciona(previsao) {
        this._previsoes.push(previsao);
    }

    ordena(criterio) {
        this._previsoes.sort(criterio);
    }

    inverteOrdem() {
        this._previsoes.reverse();
    }

    get negociacoes() {
        return [].concat(this._previsoes);
    }

    limpa() {
        this._previsoes = [];
    }

    // get volumeTotal() {
    //     return this._negociacoes.reduce((total, n) => total + n.volume, 0.0);
    // }


}