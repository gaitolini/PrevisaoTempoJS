class Cidade {

    constructor(nome, uf, id) {

        this._nome = '';
        this._uf = '';
        this._id = 0;
        Object.freeze(this);
    }


    get id() {
        return this._id;
    }

    get nome() {
        return this._nome
    }
    get uf() {
        return this._uf;
    }

}