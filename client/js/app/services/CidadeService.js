class CidadeService {

    constructor() {
        this._http = new HttpService();

    }


    pullCidade(nome) {

        return new Promise((resolve, reject) => {

            this._http.get(`http://servicos.cptec.inpe.br/XML/listaCidades?city=${nome}`)
                .then(xml => {
                    resolve(xml.getElementsByTagName("cidades"))
                })
                .catch(erro => {
                    console.log(erro);
                    reject('Não foi possível obter as cidades.');
                });

        });

    }
}