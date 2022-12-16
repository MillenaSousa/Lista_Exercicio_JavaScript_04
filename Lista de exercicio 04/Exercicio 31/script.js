var ladoA = parseFloat(prompt("Digite o valor do lado A: ")); 
var ladoB = parseFloat(prompt("Digite o valor do lado B: ")); 
var ladoC = parseFloat(prompt("Digite o valor do lado C: ")); 


if (ladoA + ladoB > ladoC & ladoB + ladoC > ladoA & ladoA + ladoC > ladoB){
document.write("Pode se criar um triangulo");
}
else{
    document.write("Não pode se formar um triangulo");
};