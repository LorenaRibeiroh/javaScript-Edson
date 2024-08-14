function criarMultiplos(x, n) {
  x = parseInt(x);  // Converte o valor inicial para número
  n = parseInt(n);  // Converte o valor final para número

  const multiplos = []; // Criamos um array vazio para armazenar os valores
  for (let i = x; i <= n; i++) { // Fazemos o loop de x até n
      multiplos.push(i); // Adicionamos os elementos do loop no array
  }
  return multiplos;
}
 
//////////////////////////////////////Desafio2////////////////////////

function elevarAoQuadrado(arr){
     resultados = arr;
     arr.map(numero => {
   numero*numero;
     })
}

function enviarFormulario() {
  // Criamos variáveis para armazenar os elementos do HTML
  let numeroInicial = document.getElementById('numeroinicial').value;
  let numeroFinal = document.getElementById('numerofinal').value;
  let resultado = document.getElementById('resultado');
  let resultado1 = document.getElementById('resultado1');

  // Chamamos a função criarMultiplos com os valores fornecidos pelo usuário
  const resultados = criarMultiplos(numeroInicial, numeroFinal);
  const resultados2 = elevarAoQuadrado(resultados)

  // Exibimos o resultado no elemento de resultado, formatado como string
  resultado.textContent = resultados.join(', ');
  resultado1.textContent = resultados2.join(',');


}