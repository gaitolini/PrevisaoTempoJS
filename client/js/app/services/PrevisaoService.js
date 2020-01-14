class PrevisaoService {

    constructor() {
        this._http = new HttpService();
    }

    pullCidade() {

        return new Promise((resolve, reject) => {

            let siteServico = 'http://servicos.cptec.inpe.br';

            this._http.get(siteServico + '/XML/listaCidades?city=blumenau')
                .then(cidades => {

                    // resolve(cidades.map(objeto => new Cidade(objeto.cidade, objeto.uf, objeto.id)));
                    resolve(cidades.map(objeto => new Cidade(objeto.cidade, objeto.uf, objeto.id)));
                })
                .catch(erro => {
                    console.log(erro);
                    reject('Não foi possível obter as cidades.');

                });

        });

    }

    pullNegociacoesDaSemanaRetrasada() {

        return new Promise((resolve, reject) => {

            this._http.get('/negociacoes/retrasada')
                .then(previsoes => {

                    resolve(previsoes.map(objeto => new Previsao(objeto.dia, objeto.cidade)));
                })
                .catch(erro => {
                    console.log(erro);
                    reject('Não foi possível obter as previsões.');

                });

        });
    }

    pullPrevisoesDaSemana() {

        return new Promise((resolve, reject) => {

            this._http.get('/negociacoes/semana')
                .then(previsoes => {
                    resolve(previsoes.map(objeto => new Previsao(objeto.diasPrevisao, objeto.cidade)));
                })
                .catch(erro => {
                    console.log(erro);
                    reject('Não foi possível obter as previsões da semana.');
                });
        });




    }

    pullPrevisoesDaSemanaAnterior() {

        return new Promise((resolve, reject) => {

            this._http.get('/negociacoes/anterior')
                .then(previsoes => {
                    resolve(previsoes.map(objeto => new Previsao(objeto.data, objeto.quantidade)));
                })
                .catch(erro => {
                    console.log(erro);
                    reject('Não foi possível obter as previsões da semana anterior.');
                });
        });
    }

    pushPrevisoes(previsao) {

        return new Promise((resolve, reject) => {

            this._http.post('/negociacoes', previsao)
                .then(mensagemOK => {
                    console.log(mensagemOK);
                    resolve('Previsão enviada para o servidor com sucesso.');

                }).catch(erro => {
                    console.log(erro);
                    reject('Não foi possivél enviar a previsão para o Servidor');
                });

        });

    }

}