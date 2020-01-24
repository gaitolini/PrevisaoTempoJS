class PrevisoesView extends View {

    template(model) {

            return `   
        <select class="lista-cidades">
            ${model.cidades.map( n =>`
            <option value="${n.id}" selected><span>${n.nome}</span><span>-</span><span>${n.uf}</span></option>
            `).join('')}
          </select>`
    }

}