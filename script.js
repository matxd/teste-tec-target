/* PERGUNTA 01 */
function noName(soma, K, indice){
  while(K < indice){
    K++
    soma+= K
  }
  console.log(soma)
}
noName(0, 0, 13)

/* ============================= */

/* PERGUNTA 02 */
function fibonacci(numero){
  if(numero === 1){
    return 1
  } if(numero === 2){
    return 2
  }
  return fibonacci(numero - 1) + fibonacci(numero - 2)
}
console.log(fibonacci(7))

/* ============================= */

/* PERGUNTA 03 :'( :'( NÃO CONSEGUI :'( :'( */

/* ============================= */

/* PERGUNTA 04 */
function representatividade(){
  let estados = ["SP", "RJ", "MG", "ES", "Outros"]
  let faturamentoMensal = [67836, 36678, 29229, 27165, 19849]
  let totalFaturamento = 0

  for(let i = 0; i < faturamentoMensal.length; i++){
    totalFaturamento+= faturamentoMensal[i]
  }

  for(let i = 0; i < faturamentoMensal.length; i++){
    let percentualPorEstado = (faturamentoMensal[i] / totalFaturamento) * 100
      for(let i = 0; i < estados.length; i++){}
    console.log(`${percentualPorEstado.toFixed(2)}% - ${estados[i]}`)
  }
}
representatividade()

/* ============================= */

/* PERGUNTA 05 */
function stringInvertida(string){
  let caracteresInvertidos = ""
  for(let i = string.length - 1; i >= 0; i--){
    caracteresInvertidos+= string[i]
  }
  return console.log(caracteresInvertidos)
}
stringInvertida("Matheus")