//Código del cuadrado
console.group("Cuadrados");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

const areaCuadrada = ladoCuadrado * ladoCuadrado;
console.log("El area del cuadrado es: " + areaCuadrada + "cm²");

console.groupEnd();

//Código del triangulo
console.group("Triangulos");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;

console.log(
    "Los lados del Triangulo miden: " 
    + ladoTriangulo1 + "cm, " 
    + ladoTriangulo2 + "cm, " 
    + baseTriangulo + "cm"
);

const alturaTriangulo = 5.5;
console.log("La altura del triángulo es " + alturaTriangulo + "cm");

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("el perimetro del triangulo es " + perimetroTriangulo + "cm");

const areaTriangulo = (baseTriangulo * alturaTriangulo) /2;
console.log("el area del triangulo es " + areaTriangulo + "cm²");

console.groupEnd();

//Código de circulos
console.group("Circulos");

//Radio
const radioCirculo = 4;
console.log("el radio del circulo es: " + radioCirculo + "cm");

//Diámetro
const diametroCirculo = radioCirculo * 2;
console.log("el diámetro del circulo es: " + diametroCirculo + "cm");

//PI
const pI = Math.PI;
console.log("el pi es: " + pI);

//Circunfenrencia
const perimetroCirculo = diametroCirculo * pI;
console.log("la circunferencia del circulo es: " + perimetroCirculo + "cm");

//Área
const areaCirculo = (radioCirculo * radioCirculo) * pI;
console.log("el área del circulo es: " + areaCirculo + "cm²");

console.groupEnd();
/*const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

const areaCuadrada = ladoCuadrado * ladoCuadrado;
console.log("El area del cuadrado es: " + areaCuadrada + "cm²");*/