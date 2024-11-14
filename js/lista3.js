var resultado=document.querySelector(".resultado")

export function case1(){
const compra=prompt("digite o codigo do produto: ")

switch (compra) {
    case "1":
        resultado.textContent=("Alimento não-pericivel")
        break;

        case "2":
            resultado.textContent=("Alimento pericivel")
            break;

            case "3":
                resultado.textContent=("Vestuario")
                break;

                case "4":
                    resultado.textContent=("Limpeza")
                    break;

    default:
        resultado.textContent=("Não encontramos o codigo, digite novamente.")
        break;
}
}
export function case2(){
 
var valor=prompt("Digite o primeiro numero: ");

const numer =prompt("Escolha forma de pagamento (1)debito ou (2) credito: ");
 var resultado=0;
var valorfinal=0;

switch (numer) {
case 1:
  resultado=15/100*valor 
 valorfinal=valor-resultado
 resultado.textContent=(valorfinal+"Valor final a ser pago")
    break;
 
case 2:
    resultado = 10/100*valor 
    valorfinal=valor+resulto
    resultado.textContent=( valorfinal+"é o valor final");
    break;
 
default:
    resultado.textContent=(" Modo de pagamento errado!")
    break;

}
}
export function case3(){

var operador1 = prompt("Informe um numero: ");
var operador2= prompt("Informe um  outro numero: ");
const sinal= prompt("Qual operação você deseja fazer (A)-Adição, (S)-Subtração, (M)-Multiplicação e (D)-Divisão: ");

var resulltado;
switch (sinal) {
case "A":
    resullltado=operador1+operador2
    resultado.textContent=("Esse é o resultado "+ resulltado)
 break;

case "S":
    resulltado=operador1-operador2 
    resultado.textContent=("Esse é o resultado "+ resulltado)
break;

 case "M":
  var  resulltado=operador1*operador2
  resultado.textContent=("Esse é o resultado "+ resulltado)
 break;

case "D":
    resulltado=operador1/operador2
    resultado.textContent=("Esse é o resultado "+ resulltado)
 break;
 
default:
    break;
}

}
export function case4(){

const nota=prompt(" Digite sua nota de A á F : ").trim().toUpperCase();


switch (nota) {

    case "A":
        resultado.textContent=("Excelente, você se dedicou muito")
        break;
        case "B":
            resultado.textContent=("Excelente, você se dedicou muito e atingiu o nível máximo. Parabéns.")
            break;
            case "C":
                resultado.textContent=("Você realizou tudo que proposto, continue assim. Talvez um pouco mais de esforço te leve ainda mais a frente.")
                break;
                case "D":
                    resultado.textContent=("Você tirou nota suficiente para finalizar o semestre, mas pode fazer mais.")
                    break;
                    case "E":
                        resultado.textContent=("Você deixou muito a desejar, precisa mudar com urgência")
                        break;
                        case "F":
                            resultado.textContent=("Você não está vindo para o colégio para estudar, é imperativo uma mudança de perfil.")
                            break;

    default:
        break;
}
}
export function case5(){

const mes=prompt("Digite o numero do mês desejado: ")
switch (mes) {
    case "1":
        resultado.textContent=("Janeiro")
        break;

        case "2":
            resultado.textContent=("Fevereiro")
            break;

            case "3":
                resultado.textContent=("Março")
                break;

                case "4":
                    resultado.textContent=("Abril")
                    break;
            
                    case "5":
                        resultado.textContent=("Maio")
                        break;

                        case "6":
                            resultado.textContent=("Junho")
                            break;

                            case "7":
                                resultado.textContent=("Julho")
                                break;

                                case "8":
                                    resultado.textContent=("Agosto")
                                    break;

                                    case "9":
                                        resultado.textContent=("Setembro")
                                        break;

                                        case "10":
                                            resultado.textContent=("Outubro")
                                            break;

                                            case "11":
                                                resultado.textContent=("Novembro")
                                                break;

                                                case "12":
                                                    resultado.textContent=("Dezembro")
                                                    break;
  
    default:
        break;
}
}