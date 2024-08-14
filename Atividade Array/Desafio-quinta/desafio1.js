function criarMultiplos(x, n) {
  x = parseInt(x);  // Converte o valor inicial para número
  n = parseInt(n);  // Converte o valor final para número

  const multiplos = []; // Criamos um array vazio para armazenar os valores
  for (let i = x; i <= n; i+=x) { // Fazemos o loop de x até n
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
  return arr.filter(numero => 
     numero >20).length;
  }
//////////////////////////////////Desafio4////////////////////////
function somarPares(arr){
  return arr.filter(numero => numero % 2 === 0).reduce((soma, numero) => soma + numero, 0);

    }
    ////////////////////////////Desafio5/////////////////
    function MultiplosDeTres(arr){
      const multiplos = arr.filter(num => num % 3 === 0);

      if (multiplos.length > 0){
      return 'true';
      }else{
       return 'false';
      }
      
    }
    

function enviarFormulario() {
  // Criamos variáveis para armazenar os elementos do HTML
  let x = document.getElementById('numeroinicial').value;
  let n = document.getElementById('numerofinal').value;
  let resultado = document.getElementById('resultado');
  let resultado2 = document.getElementById('resultado2');
  let resultado3 = document.getElementById('resultado3');
  let resultado4 = document.getElementById('resultado4');
  let resultado5 = document.getElementById('resultado5');

  // Chamamos a função criarMultiplos com os valores fornecidos pelo usuário
  const resultados = criarMultiplos(x, n);
  //chamamos a função elevarAoQuadrado com os valores do array criarMultiplos
  const  quadrados = elevarAoQuadrado(resultados);
  //chamamos a função contarMaioresQue20 co os valores do array elevarAoQuadrado
  const maioresQue20 = contarMaioresQue20(quadrados);
  const somaPares = somarPares(quadrados);
  const MultiplosTres = MultiplosDeTres(quadrados);


  // Exibimos o resultado no elemento de resultado, formatado como string/
  resultado.textContent = resultados.join(', ') ;
  resultado2.textContent = quadrados.join(',') ;
  resultado3.textContent = maioresQue20;
  resultado4.textContent = somaPares ;
  resultado5.textContent = MultiplosTres;

}