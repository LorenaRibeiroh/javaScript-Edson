function criarMultiplos(x, n) {
  x = parseInt(x);  // Converte o valor inicial para número
  n = parseInt(n);  // Converte o valor final para número

  const multiplos = []; // Criamos um array vazio para armazenar os valores
  for (let i = x; i <= n; i+=i) { // Fazemos o loop de x até n
      multiplos.push(i); // Adicionamos os elementos do loop no array
  }
  return multiplos;
}
 
//////////////////////////////////////Desafio2////////////////////////

function elevarAoQuadrado(arr){
     return arr.map(numero => 
   numero*numero);
}
//////////////////////////////////////Desafio3///////////////////////
function contarMaioresQue20(arr){
  return arr.filter(numero => {
     numero >20});
  }

function enviarFormulario() {
  // Criamos variáveis para armazenar os elementos do HTML
  let x = document.getElementById('numeroinicial').value;
  let n = document.getElementById('numerofinal').value;
  let resultado = document.getElementById('resultado');
  let resultado2 = document.getElementById('resultado2');
  let resultado3 = document.getElementById('resultado3');

  // Chamamos a função criarMultiplos com os valores fornecidos pelo usuário
  const resultados = criarMultiplos(x, n);
  //chamamos a função elevarAoQuadrado com os valores do array criarMultiplos
  const resultados2 = elevarAoQuadrado(resultados);
  const resultados3 = contarMaioresQue20(resultados2);


  // Exibimos o resultado no elemento de resultado, formatado como string
  resultado.textContent = resultados.join(', ');
  resultado2.textContent = resultados2.join(',');
  resultado3.textContent = resultados3.join(',');

}