function criarMultiplos() {
    const x = parseInt(document.getElementById("número1").value);
  const n = parseInt(document.getElementById("número2").value);
  const multiplos = [];
  for (let i = x; i <= n; i += x) {
    multiplos.push(i); //adicionar um ou mais elementos na array
  }

  
  let resultado = document.getElementById("resultado");
  
  multiplos.forEach(num => {
    resultado.textContent += `${num}, `;
  });
 
  }