class CidadesViews extends View {

    template(model) {

        return `   
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th onclick="cidadeController.ordena('nome')" >CIDADE</th>
                    <th onclick="cidadeController.ordena('uf')" >UF</th>
                </tr>
            </thead>

            <tbody>
                ${model.cidades.map(n => `
                    <tr>
                        <td>${n.nome}</td>
                        <td>${n.uf}</td>
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