class PrevisoesViews extends View {



    template(model) {

        return `   
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th onclick="previsaoController.ordena('diasPrevisao')" >DIAS</th>
                    <th onclick="previsaoController.ordena('siglaPrevisao')" >PREVISÃO</th>
                </tr>
            </thead>

            <tbody>
                ${model.previsoes.map(n => `
                    <tr>
                        <td>${n.diasPrevisao}</td>
                        <td>${n.siglaPrevisao}</td>
                    </tr>
                `).join('')}
            </tbody>

            <tfoot>
                <td colspan="3"></>
                <td></td>
            </tfoot>
        </table>`
    }

}