class ListaCidades {

    constructor() {

        this._cidades = [];
    }

    adiciona(cidade) {
        this._cidades.push(cidade);
    }

    ordena(criterio) {
        this._cidades.sort(criterio);
    }

    inverteOrdem() {
        this._cidades.reverse();
    }

    get cidades() {
        return [].concat(this._cidades);
    }

    limpa() {
        this._cidades = [];
    }

    // get volumeTotal() {
    //     return this._negociacoes.reduce((total, n) => total + n.volume, 0.0);
    // }


}