//1
import   { trabalhosAcidentes } from "./lista1.js";
import   { salarioFuncionario } from "./lista1.js";
import   { pesoPrato } from "./lista1.js";
import   { paesebroas } from "./lista1.js";
import   { leitura } from "./lista1.js";
import   { gasolina } from "./lista1.js";
import   {dimensoes} from "./lista1.js";
import   { camistasVendidas } from "./lista1.js";

//2
import   { execicio1} from "./lista2.js";
import   { exercicio2} from "./lista2.js";
import   { execicio3} from "./lista2.js";
import   { exercicio4} from "./lista2.js";
import   { exercicio5 } from "./lista2.js";
import   { exercicio6 } from "./lista2.js";

//3
import   { case1} from "./lista3.js";
import   {case2} from "./lista3.js";
import   {case3} from "./lista3.js";
import   {case4} from "./lista3.js";
import   {case5} from "./lista3.js";

//4
import   {tempoMasa} from "./lista4.js";
import   {tabuada} from "./lista4.js";
import   { tabuada2} from "./lista4.js";
import   {tabuada3} from "./lista4.js";
import   {numeroimpares} from "./lista4.js";
import   {fatoracao} from "./lista4.js";
import   {divisao} from "./lista4.js";
import   { quantEstoque} from "./lista4.js";

//Seleciona o elemento que esta na tela


var ex_1=document.querySelector("#exe_1")
var ex_2=document.querySelector("#exe_2")
var ex_3=document.querySelector("#exe_3")
var ex_4=document.querySelector("#exe_4")
var ex_5=document.querySelector("#exe_5")
var ex_6=document.querySelector("#exe_6")
var ex_7=document.querySelector("#exe_7")
var ex_8=document.querySelector("#exe_8")


var ex_1_2=document.querySelector("#exe_1_2")
var ex_2_2=document.querySelector("#exe_2_2")
var ex_3_2=document.querySelector("#exe_3_2")
var ex_4_2=document.querySelector("#exe_4_2")
var ex_5_2=document.querySelector("#exe_5_2")
var ex_6_2=document.querySelector("#exe_6_2")


var ex_1_3=document.querySelector("#exe_1_3")
var ex_2_3=document.querySelector("#exe_2_3")
var ex_3_3=document.querySelector("#exe_3_3")
var ex_4_3=document.querySelector("#exe_4_3")
var ex_5_3=document.querySelector("#exe_5_3")


var ex_1_4=document.querySelector("exe_1_4")
var ex_2_4=document.querySelector("exe_2_4")
var ex_3_4=document.querySelector("exe_3_4")
var ex_4_4=document.querySelector("exe_4_4")
var ex_5_4=document.querySelector("exe_5_4")
var ex_6_4=document.querySelector("exe_6_4")
var ex_7_4=document.querySelector("exe_7_4")
var ex_8_4=document.querySelector("exe_8_4") 


var resultado=document.querySelector(".resultado")
var bnt =document.querySelector('.bnt_apagar') 

  ex_1.addEventListener('click', dimensoes)
  ex_2.addEventListener('click',trabalhosAcidentes )
  ex_3.addEventListener('click',  salarioFuncionario)
  ex_4.addEventListener('click',pesoPrato )
  ex_5.addEventListener('click',paesebroas )
  ex_6.addEventListener('click',leitura )
  ex_7.addEventListener('click',gasolina )
  ex_8.addEventListener('click',camistasVendidas)

  
ex_1_2.addEventListener('click',execicio1)
ex_2_2.addEventListener('click',exercicio2 )
ex_3_2.addEventListener('click',execicio3)
ex_4_2.addEventListener('click',exercicio4)
ex_5_2.addEventListener('click',exercicio5 )
ex_6_2.addEventListener('click',exercicio6 )


ex_1_3.addEventListener('click', case1)
ex_2_3.addEventListener('click', case2)
ex_3_3.addEventListener('click', case3)
ex_4_3.addEventListener('click', case4)
ex_5_3.addEventListener('click', case5)


ex_1_4.addEventListener('click', tempoMasa)
ex_2_4.addEventListener('click', tabuada)
ex_3_4.addEventListener('click', tabuada2)
ex_4_4.addEventListener('click', tabuada3)
ex_5_4.addEventListener('click', numeroimpares)
ex_6_4.addEventListener('click', fatoracao)
ex_7_4.addEventListener('click',divisao )
ex_8_4.addEventListener('click',quantEstoque )

bnt.addEventListener('click',limpar)
function limpar(){
    resultado.textContent=""
}