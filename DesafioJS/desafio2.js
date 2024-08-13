
function elevarAoQuadrado(arr) {

    return arr.map(num => num * num);
}

const numeros = [2, 4, 6, 8];
const quadrados = elevarAoQuadrado(numeros);
console.log(quadrados);
