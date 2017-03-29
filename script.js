
// Ciclos
/*
for(var i = 0; i < 100 ; i++){
  console.log(i);
}
*/
/*
var i = 101 ;
while( i < 100){
  console.log("while cycle: " + i);
  i++;
}

do{
  console.log("do while cycle: " + i);
  i++;
}while(i < 100);
*/
// Objecto JSON
var empleado = {"nombre":"Hola","apellido":"valor"};

console.log(empleado.nombre);
console.log(empleado.apellido);

for(var llave in empleado){
  console.log(llave + ": " + empleado[llave]);
}

var numeros = [1,2,3,4,5,7];
console.log(numeros[0]);
console.log(numeros[4]);
console.log(numeros[5]);

var otroArreglo = ["asv",1,true, [1,2,3,4]];
console.log(otroArreglo[0]);
console.log(otroArreglo[3][1]);

otroArreglo.push(false);

console.log(otroArreglo);

console.log(otroArreglo.length);


function sumarNumeros(a,b){
  return a + b;
}

function operate(n , fn){
  return n * fn(n , n-1);
}

console.log(operate(10, sumarNumeros));

function factorial(n){
  return (n==0)?1: n * factorial(n-1);
}

console.log(factorial(4));

var unFuncion = function(a){
  return a * a;
}

console.log(operate(10, function(a,b){return a-b;}));
