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
     return arr.map(numero => {
   numero*numero;
     })
}

function enviarFormulario() {
  // Criamos variáveis para armazenar os elementos do HTML
  let x = document.getElementById('numeroinicial').value;
  let n = document.getElementById('numerofinal').value;
  let resultado = document.getElementById('resultado');
  let resultado2 = document.getElementById('resultado2');

  // Chamamos a função criarMultiplos com os valores fornecidos pelo usuário
  const resultados = criarMultiplos(x, n);
  const resultados2 = elevarAoQuadrado(arr);

  // Exibimos o resultado no elemento de resultado, formatado como string
  resultado.textContent = resultados.join(', ');
  resultado2.textContent = resultados2.join(',');


}