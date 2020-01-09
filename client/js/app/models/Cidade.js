class Cidade {

    constructor(id, nome, uf) {

        this._id = 0;
        this._nome = '';
        this._uf = '';
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