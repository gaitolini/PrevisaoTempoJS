class PrevisoesView extends View {



    template(model) {

        return `   
        <table class="table table-hover table-bordered">
        <thead>
            <tr>
                <th>Previsão do tempo</th>
                <th>fonte: http://servicos.cptec.inpe.br/</th>
            </tr>
            <tr>
                <th onclick="previsaoController.ordena('cidade.nome')">Cidade</th>
                <th onclick="previsaoController.ordena('uf')">UF</th>
                <th onclick="previsaoController.ordena('dia')">Data Previsão</th>
                <th onclick="previsaoController.ordena('maxima')">Máxima</th>
                <th onclick="previsaoController.ordena('minima')">Mínima</th>
                <th onclick="previsaoController.ordena('iuv')">IUV</th>
                <th onclick="previsaoController.ordena('tempo')">Previsão</th>
                <th onclick="previsaoController.ordena('atualizacao')">Atualização</th>
            </tr>
        </thead>

            <tbody>
                ${model.previsoes.map(n => `
                    <tr>
                        <td>${n.cidade.nome}</td>
                        <td>${n.cidade.uf}</td>
                        <td>${DateHelper.dateToStr(n.dia)}</td>
                        <td>${n.maxima}</td>
                        <td>${n.minima}</td>
                        <td>${n.iuv}</td>
                        <td>${n.tempo}</td>
                        <td>${DateHelper.dateToStr(n.atualizacao)}</td>
                    </tr>
                `).join('')}
            </tbody>

            <tfoot>
                <td colspan="8"></>
            </tfoot>
        </table>`
    }

}