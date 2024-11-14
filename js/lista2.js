
var resultado=document.querySelector(".resultado")

export function execicio1(){

var numero = parseInt(prompt("numero:"))

if (numero %2==0) {
    var num=5
   
   var resultpar = num+numero
resultado.textContent=resultpar

} else {
var num=8
var resultimp = num+numero
resultado.textContent=resultimp
}
}
export function exercicio2(){ 
var auxiliar;
 var numero1;
 var numero2;
 var numero3;
 var numero4;
numero1 = parseInt(prompt("Digite o numero 1: "));
numero2 = parseInt(prompt("Digite o numero 2: "));
numero3 = parseInt(prompt("Digite o numero 3: "));
numero4 = parseInt(prompt("Digite o numero 4: "));

if (numero1 > numero2) {
    auxiliar = numero1;
    numero1 = numero2;
    numero2 = auxiliar;
}

if (numero2 > numero3) {
    auxiliar = numero2;
    numero2 = numero3;
    numero3 = auxiliar;

}
 

if (numero1 > numero2) {
    auxiliar = numero1;
    numero1 = numero2;
    numero2 = auxiliar;
}
resultado.textContent=( "Ordem decrescente: " + numero4 + " "+ numero3 + " " + numero2 + " " + numero1)
}

export function execicio3(){

    


var numA= parseInt(prompt("Digite o primeiro numero: "))
var numB= parseInt(prompt("Digite o segundo numero: "))
var numC= parseInt(prompt("Digite o terceiro numero: "))

var soma=numA+numB

if(soma>=numC){
    resultado.textContent=(soma+" é maoir ou iqual a o terceiro numero! ")
}
else {
    resultado.textContent=(soma+" é menor que o terceiro numero!")
}
}

export function exercicio4(){

var impoupar= parseInt(prompt("numero:"))

if ( impoupar %2==0) {
  
    resultado.textContent=(impoupar+" é par! ")

} else{
    resultado.textContent=(impoupar+" é impar!")
}
}
export function exercicio5(){

//Exercicio6

const pagamento=prompt("Escolha a forma de paganto: (V)-Á vista no dinheiro ou cheque; (VC)-Á vista no cartão; (C2)- No cartão em 2 vezes e (C2J)- Cartão em duas vezes com juros.")
  const valorPag=prompt("Digite o valor da compra: ")

let resultad =0
let resultadofinal= 0

switch (pagamento) {
    case "V":
        resultad=10/100*valorPag
        resultadofinal= valorPag-resultad
        resultado.textContent=(resultadofinal+"valor a ser pago")
        
        break;

  case "VC":
        resultad=15/100*valorPag
        resultadofinal= valorPag-resultad
        resultado.textContent=(resultadofinal+"valor a ser pago")
        
        break;

        case "V2":
            resultad=2/valor
            resultado.textContent=(resultad+"valor a ser pago em 2 vezes")
    
            break;
            case "V":
                var resultV2j=0
                resultad=10/100*valorPag
                resultadofinal= valorPag-resultad
                resultV2j=2/resultadofinal
                resultado.textContent=(resultadofinal+"valor a ser pago em 2 vezes")
                
                break;
}
}

export function exercicio6(){
    const altura=prompt("Digite sua altura:");
    const peso=prompt("Digite seu peso:");

        var imc=peso/altura

        if (imc<18,5) {
            resultado.textContent=(" Voce esta abaixo do peso!")  

        }
   if (imc>=18,5 <=25) {
    resultado.textContent=(" Voce esta com um peso normal!")  
   
        } 
        if(imc>=25 <30) {
            resultado.textContent= (" Voce esta acima do peso!")  
        }
        
        else{
            resultado.textContent=(" Voce esta obeso!")  
        } 
    }