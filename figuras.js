//Código del cuadrado
console.group("Cuadrados");

//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
    return lado * 4;
}

//console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

//const areaCuadrada = ladoCuadrado * ladoCuadrado;
function areaCuadrada(lado) {
    return lado * lado;
}

//console.log("El area del cuadrado es: " + areaCuadrada + "cm²");

console.groupEnd();

//Código del triangulo
console.group("Triangulos");
//const ladoTriangulo1 = 6;
//const ladoTriangulo2 = 6;
//const baseTriangulo = 4;

/*console.log(
    "Los lados del Triangulo miden: " 
    + ladoTriangulo1 + "cm, " 
    + ladoTriangulo2 + "cm, " 
    + baseTriangulo + "cm"
);*/

//const alturaTriangulo = 5.5;
//console.log("La altura del triángulo es " + alturaTriangulo + "cm");

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}
//console.log("el perimetro del triangulo es " + perimetroTriangulo + "cm");

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}
//console.log("el area del triangulo es " + areaTriangulo + "cm²");

console.groupEnd();

//Código de circulos
console.group("Circulos");

//Radio
//const radioCirculo = 4;
//console.log("el radio del circulo es: " + radioCirculo + "cm");

//Diámetro
function diametroCirculo(radio){
    return radio * 2;
}
//console.log("el diámetro del circulo es: " + diametroCirculo + "cm");

//PI
const PI = Math.PI;
//console.log("el pi es: " + pI);

//Circunfenrencia
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

//const perimetroCirculo = diametroCirculo * pI;
//console.log("la circunferencia del circulo es: " + perimetroCirculo + "cm");

//Área
function areaCirculo(radio){
    return (radio * radio) * PI;
}

// const areaCirculo = (radioCirculo * radioCirculo) * pI;
// console.log("el área del circulo es: " + areaCirculo + "cm²");

console.groupEnd();