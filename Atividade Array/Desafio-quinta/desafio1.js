function criarMultiplos(x,n){ //criamos a função para ela ser chamada ao apertar o botão no html

    //criamos variáveis para armazenar os elementos do html
let x = (document.getElementById('numeroinicial').value); //transformamos as strings em valores
let n = (document.getElementById('numerofinal').value);
let resultado = document.getElementById('resultado');


 

const multiplos =[]; //criamos um array vazio para armazenar os novos valores
   for (let i=x; i<=n;i++){ //fazemos o loop
    multiplos.push(i); //adicionamos elementos do loop no array vazio.
   }


   multiplos.forEach(num => { //imprimimos os novos elementos
     resultado.textContent +=`${num},`;//concatenamos os valores na variavel  resultado que tem relação com o id (resultado) do html
   })
};
