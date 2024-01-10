function formatarDinheiro(valor){
    valor = Math.ceil(valor * 100) / 100
    valor = valor.toFixed(2) 
     return ' $' + valor
 }
 
 function deixarNoPlural(valor){
    if (valor == 1) return valor + ' Pessoa'
    return valor + ' Pessoas'
 } 
 function update() {
    let bill = Number(document.getElementById('yourBill').value)
    let tipPercent = document.getElementById('tipInput').value
    let split = document.getElementById('splitInput').value
    

    let valor = bill * (tipPercent / 100) 
    let valorTotal = bill + valor
    let divirConta = valorTotal / split
    
    document.getElementById('tipoPorcem').innerHTML = tipPercent  + ' %'
    document.getElementById('tipValue').innerHTML =formatarDinheiro(valor) 
    document.getElementById('totalWithTip').innerHTML = formatarDinheiro(valorTotal) 
    document.getElementById('splitValue').innerHTML = deixarNoPlural (split)
    document.getElementById('billEach').innerHTML = formatarDinheiro(divirConta / split)
}
