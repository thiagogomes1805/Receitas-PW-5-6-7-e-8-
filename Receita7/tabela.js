export const criarTabela = (dados, cabecalhos, propriedades, idContainer = "resultadoDiv") => {
   const div = document.getElementById(idContainer)
   if (!div) return
   
   const ths = cabecalhos.map(cab => `<th>${cab}</th>`).join("")
   const linhas = dados.map(item => {
      const tds = propriedades.map(prop => `<td>${item[prop]}</td>`).join("")
      return `<tr>${tds}</tr>`
   }).join("\n")
   
   div.innerHTML = `
      <table class="tabela-generica">
         <thead>
            <tr>${ths}</tr>
         </thead>
         <tbody>
            ${linhas}
         </tbody>
      </table>
   `
}