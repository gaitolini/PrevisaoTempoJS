class PrevisoesViews extends View {



    template(model) {

        return `   
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th onclick="previsaoController.ordena('dia')" >DIA</th>
                    <th onclick="negociacaoController.ordena('cidade')" >CIDADE</th>
                    <th onclick="negociacaoController.ordena('siglaPrevisao')" >PREVISÃO</th>
                </tr>
            </thead>

            <tbody>
                ${model.previsoes.map(n => `
                    <tr>
                        <td>${n.dia}</td>
                        <td>${n.cidade}</td>
                        <td>${n.siglaPrevisao}</td>
                    </tr>
                `).join('')}
            </tbody>

            <tfoot>
                <td colspan="3"></>
                <td>${model.volumeTotal}</td>
            </tfoot>
        </table>`
    }

}