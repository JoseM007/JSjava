menu();
function menu() {
    num = parseInt(prompt("elegir una opcion del 1 al 26"));

switch (num) {
    case 1:
    sumar();
    break;

    case 2:
    restar();
    break;

    case 3:
    multiplica();
    break;

    case 4:
    divicion();
    break;

    case 5:
    areaCirculo();
    break;

    case 6:
    areaTriangulo();
    break;

    case 7:
    areaRectangulo();
    break;

    case 8:
    areaCuadrado();
    break;

    case 9:
    perimetroCirculo();
    break;

    case 10:
    perimetroTriangulo();
    break;

    case 11:
    perimetroRectangulo();
    break;

    case 12:
    perimetroCuadrado();
    break;

    case 13:
    CelsiuFahrenheit();
    break;

    case 14:
    FahrenheitCelsius();
    break;

    case 15:
    maximoNumeros();
    break;

    case 16:
    minimoNumeros();
    break;

    case 17:
    maximoTresNumeros();
    break;

    case 18:
    minimoTresNumeros();
    break;

    case 19:
    parImpar();
    break;

    case 20:
    positivoNegativoCero();
    break;

    case 21:
    longitudCadena();
    break;

    case 22:
    textoMayusculs();
    break;

    case 23:
    textoMinusculas();
    break;

    case 24:
    sumaNumPares();
    break;

    case 25:
    sumaNumImpares()

    case 26:
    raizCuadrada()
    break
}
}

//1.Función que suma dos números
function sumar() {
    var a = parseInt(prompt("Ingrese el primer numero"));
    a += parseInt(prompt("Ingrese el segundo numero"));
    alert(`Resultado: ${a}`);
}

//2.Función que resta dos números
function restar() {
    var a = parseInt(prompt("Ingrese el primer numero"));
    a -= parseInt(prompt("Ingrese el segundo numero"));
    alert(`Resultado: ${a}`);
}

//3.funcion que multiplica dos numeros
function multiplica() {
    var a = parseInt(prompt("Ingrese el primer número"));
    a = a * parseInt(prompt("Ingrese el segundo número"));
    alert(`El resultado de la multiplicación es: ${a}`);
}

//4funcion que divide dos numeros
function divicion() {
    var a = parseInt(prompt("Ingrese el primer número"));
    a = a * parseInt(prompt("Ingrese el segundo número"));
    alert(`El resultado de la multiplicación es: ${a}`);
}

//5.funcion que calcule el área de un círculo dado su radio

function areaCirculo() {
    let radio = parseInt(prompt("Ingrese el radio del círculo: "));
    let area = Math.PI * radio ** 2;
    alert(`El área del círculo es: ${area}`);
}

//6.funcion que calcule el área de un triángulo dado su base y altura.¡

function areaTriangulo() {
    let base = parseInt(prompt("ingresa la base del triangulo: "));
    let altura = parseInt(prompt("ingresa la altura del triangulo: "));
    let area = (base * altura) / 2;
    alert(`El área del triangulo es: ${area}`);
}

//7.funcion que calcule el área de un rectangulo dado su base y altura.
function areaRectangulo() {
    let base = parseInt(prompt("ingresa la base del rectangulo: "));
    let altura = parseInt(prompt("ingresa la altura del rectangulo: "));
    let area = base * altura;
    alert(`El área del rectangulo es: ${area}`);
}

//8.funcion que calcule el área de un cuadrado dado su lado.
function areaCuadrado() {
    let lado = parseInt(prompt("ingresa el lado del cuadrado: "));
    let area = lado ** 2;
    alert(`El área del rectangulo es: ${area}`);
}

//9.función que calcule el perímetro de un círculo dado su radio.
function perimetroCirculo() {
    let radio = parseInt(prompt("Ingresa el radio del circulo: "));
    let perimetro = 2 * Math.PI * radio;
    alert(`El perimetro del circulo es: ${perimetro}`);
}

//10.función que calcule el perímetro de un triángulo dado sus tres lados.
function perimetroTriangulo() {
    let lado1 = parseInt(prompt("ingresa lado 1 del triangulo: "));
    let lado2 = parseInt(prompt("ingresa lado 2 del triangulo: "));
    let lado3 = parseInt(prompt("ingresa lado 3 del triangulo: "));
    let perimetro = lado1 + lado2 + lado3;
    alert(`El perimetro del triangulo es: ${perimetro}`);
}

//11.función que calcule el perímetro de un rectángulo dado sus dos lados.
function perimetroRectangulo() {
    let lado1 = parseInt(prompt("ingresa lado 1 de rectangulo: "));
    let lado2 = parseInt(prompt("ingresa lado 2 del rectangulo: "));
    let perimetro = 2 * (lado1 + lado2);
    alert(`El perimetro del rectangulo es: ${perimetro}`);
}

//12. función que calcule el perímetro de un cuadrado dado su lado.
function perimetroCuadrado() {
    let lado = parseInt(prompt("ingresa un lado de cuadrado: "));
    let perimetro = 4 * lado;
    alert(`El perimetro del cuadrado es: ${perimetro}`);
}

//13. Crea una función que convierta grados Celsius a Fahrenheit.
function CelsiuFahrenheit() {
    let celsius = parseInt(prompt("Ingresa la temperatura en grados Celsius: "));
    let fahrenheit = (celsius * 9) / 5 + 32;
    alert(`${celsius} grados Celsius equivalen a ${fahrenheit} grados Fahrenheit`);
}

//14. Crea una función que convierta grados Fahrenheit a Celsius.
function FahrenheitCelsius() {
    let fahrenheit = parseInt(
    prompt("Ingresa la temperatura en grados Celsius: "));
    let celsius = ((fahrenheit - 32) * 5) / 9;
    alert(`${fahrenheit} grados fahrenheit equivalen a ${celsius} grados celcius`);
}

//15. Crea una función que calcule el máximo de dos números.
function maximoNumeros() {
    let num1 = parseInt(prompt("Ingresa el primer número: "));
    let num2 = parseInt(prompt("Ingresa el segundo número: "));
    let maximo = num1 > num2 ? num1 : num2;
    alert(`El máximo número entre ${num1} y ${num2} es: ${maximo}`);
}

//16. Crea una función que calcule el mínimo de dos números.
function minimoNumeros() {
    let num1 = parseInt(prompt("Ingresa el primer número: "));
    let num2 = parseInt(prompt("Ingresa el segundo número: "));
    let minimo = num1 < num2 ? num1 : num2;
    alert(`El minimo número entre ${num1} y ${num2} es: ${minimo}`);
}

//17. Crea una función que calcule el máximo de tres números.
function maximoTresNumeros() {
    let num1 = parseInt(prompt("Ingresa el primer número: "));
    let num2 = parseInt(prompt("Ingresa el segundo número: "));
    let num3 = parseInt(prompt("Ingresa el tercer número: "));

    let maximo = num1;
    maximo = num2 > maximo ? num2 : maximo;
    maximo = num3 > maximo ? num3 : maximo;
    alert(`El número máximo entre ${num1}, ${num2} y ${num3} es: ${maximo}`);
}

//18. Crea una función que calcule el mínimo de tres números.

function minimoTresNumeros() {
    let num1 = parseInt(prompt("Ingresa el primer número: "));
    let num2 = parseInt(prompt("Ingresa el segundo número: "));
    let num3 = parseInt(prompt("Ingresa el tercer número: "));

    let minimo = num1;
minimo = num2 < minimo ? num2 : minimo;
minimo = num3 < minimo ? num3 : minimo;

alert(`El número mínimo entre ${num1}, ${num2} y ${num3} es: ${minimo}`);
}

//19. Crea una función que calcule si un número es par o impar.
function parImpar() {
let num1 = parseInt(prompt("Ingresa el primer número: "));
let num2 = parseInt(prompt("Ingresa el segundo número: "));
let mensaje = " ";

    if (num1 % 2 === 0) {
    mensaje += `${num1} es par\n`;
    } else {
    mensaje += `${num1} es impar\n`;
}

    if (num2 % 2 === 0) {
    mensaje += `${num2} es par\n`;
    } else {
    mensaje += `${num2} es impar\n`;
}
alert(mensaje);
}

//20. Crea una función que calcule si un número es positivo, negativo o cero.
function positivoNegativoCero() {
    let num1 = parseInt(prompt("Ingresa un número: "));

    if (num1 > 0) {
    alert(`el ${num1} es positivo`);
    } else if (num1 < 0) {
    alert(`el ${num1} es negativo`);
    } else {
    alert(`el ${num1} es cero`);
}
}

//21. Crea una función que calcule la longitud de una cadena de texto.´
function longitudCadena() {
    let texto = prompt("Ingrese una cadena de texto");
    let longitud = texto.length;
    alert(`La longitud de la cadena de texto es: ${longitud}`);
}

//22. Crea una función que convierta una cadena de texto a mayúsculas.
function textoMayusculas() {
    let texto = prompt("Ingrese una cadena de texto para poner en mayúsculas");
    let textoMayus = texto.toUpperCase();
    alert(`El texto en mayúsculas es: ${textoMayus}`);
}

//23. Crea una función que convierta una cadena de texto a minúsculas.
    function textoMinusculas() {
    let texto = prompt("Ingrese una cadena de texto para poner en minúsculas");
    let textoMinus = texto.toLowerCase();
    alert(`El texto en minúsculas es: ${textoMinus}`);
}

//24. Crea una función que calcule la suma de los primeros N números pares.
function sumaNumPares() {
    let n = parseInt(prompt("Ingresa un número entero positivo: "));
    let pares = [];
    let suma = 0;

for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
    pares.push(i);
    suma += i;

    alert(
        `Los primeros ${n} números pares son: ${pares.join(", ")}. La suma de estos números es: ${suma}.`);
        }
    }
}

//25. Crea una función que calcule la suma de los primeros N números impares.
function sumaNumImpares() {
    let n = parseInt(prompt("Ingresa un número para sumar los primeros N impares: "));
    let suma = 0;
    let i = 1;
    while (suma < n) {
    if (i % 2 !== 0) {
        suma += i;
    }
    
    i++;
    }
    
    alert(`La suma de los primeros ${i - 1} números impares es: ${suma}`);
}

//26. Crea una función que calcule la raíz cuadrada de un número.
function raizCuadrada(){
    let num1 = parseInt(prompt("Ingresa un número para saber la raiz cuadrada: "));
    let raiz = Math.sqrt(num1);
    alert(`La raíz cuadrada de ${num1} es: ${raiz}`);
}
