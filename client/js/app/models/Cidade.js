class Cidade {

    constructor(nome, uf, id) {

        this._nome = nome;
        this._uf = uf;
        this._id = id;
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