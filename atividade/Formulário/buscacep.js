

let cep =
document.getElementById("CEP");
cep.addEventListener('blur',function(){
    cep = cep.value;
    console.log(cep);

    if(cep.length == 8){
       fetch(`https://viacep.com.br/ws/${cep}/json/`) //busca o cep
       .then(response => response.json()) //retorna uma resposta,
       .then(data => {  // retorna os dados
        console.log(data);
        document.getElementById('Logradouro').value = data.logradouro;
        document.getElementById('Bairro').value = data.bairro;
        document.getElementById('Cidade').value = data.localidade;
        document.getElementById('UF').value = data.uf;
       })
    }else{
        
        alert("cep invalido");
    }
})