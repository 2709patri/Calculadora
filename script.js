document.addEventListener("DOMContentLoaded", function(){
const operador1 = document.getElementById ("operador1");
const operador2 = document.getElementById ("operador2");
const suma = document.getElementById ("suma");
const resta = document.getElementById ("resta");
const division = document.getElementById ("division");
const multiplicacion = document.getElementById ("multiplicacion");
const resultado = document.getElementById ("resultado");

suma.addEventListener("click", () => {
    resultado.value = parseFloat(operador1.value) + parseFloat(operador2.value);
});

resta.addEventListener("click", () => {
    resultado.value = parseFloat(operador1.value) - parseFloat(operador2.value);
});

division.addEventListener("click", () => {
    resultado.value = parseFloat(operador1.value) / parseFloat(operador2.value);
});

multiplicacion.addEventListener("click", () => {
    resultado.value = parseFloat(operador1.value) * parseFloat(operador2.value);
});


});


