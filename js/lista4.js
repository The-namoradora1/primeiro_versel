var resultado=document.querySelector(".resultado")                                          

export function tabuada() {
  
    const tabuada= prompt("Digite o número que voce deseja ver a tabuada:")
    var contador=0
    while (tabuada <= 10) {
       var resultado= tabuada * contador
       contador= contador + 1
       resultado.textContent=(tabuada+ " X" + contador+ " = "+resultado)
       
    }
}

//Exercício2


export function tabuada2() {
    alert('Ex2')
    const tabuada2= parseInt(prompt("Digite o número que voce deseja ver a tabuada:"))
    var contador2=0
    if(tabuada2 %2==0){
    while (contador2<=10) {
        var resultado2= tabuada2 * contador2
        resultado.textContent=(tabuada2+ " X" + contador2+ " = "+ resultado2)
        contador2= contador2 + 1
    }
}else {
    while (contador2<=10) {
        var resultado2= tabuada2 * contador2
        resultado.textContent=(tabuada2+ " X" + contador2+ " = "+ resultado2)
        contador2= contador2 + 2
    }
} 
}



export function tabuada3(){
alert('Ex3')
var tabuada3= parseInt(prompt("Digite o número que voce deseja ver a tabuada:"))
var contador3=1
if(tabuada3%2==1){
    resultado.textContent=("Só terá números ímpares:")
while (contador3<=11) {
    var resultado3= tabuada3 * contador3
    resultado.textContent=(tabuada3+ " X " + contador3, " = "+ resultado3)
    contador3= contador3 + 2
}
}
if(tabuada3%2==0){
    console.log("Não tem números ímpares nesta tabuada.")
}
} 

export function numeroimpares() {
    alert('Ex4')
    var num= parseInt(prompt("Digite até que número você deseja ver os números impares:"))
    cont4=1
    console.log("Esses são os números ímpares de "+cont4+ " a "+num)
    while (cont4<=num) {
        resultado.textContent=("numeros impares: "+cont4)
              cont4= cont4 + 2
    }   
}



 export function fatoracao() {
   
    var fatorar=1
   var num1= parseInt(prompt ("Digite o número do qual você deseja fatorar"))
   cont2=num1
   while (cont2 >=1) {
    var fatorar=fatorar*cont2
    cont2 =cont2- 1
    }  
    resultado.textContent=(fatorar+" é o fatorial de "+num1)
}



 export function divisao() {
  
    var numerodiv= parseInt(prompt ("Digite o número do qual você deseja ver os divisores:"))
    con=1
    while (con<=numerodiv) {
        var resto= numeroDiv%con
        if (resto==0) {
            resultado.textContent= ("Os divisores de",numeroDiv,"é",con) 
        }      
    } 
}



export function tempoMasa(){
  
    con2=0
   var massaFi=0
    var massaInic= parseInt(prompt ('Digite a massa inicial:'))
    var massaini
    while (massaini>=0.5) {
        var massaini=massaini/2
        con2=con2+50
    }
    var massaFi=massaInic
    var segundo = con2%60
    var minuto= con2/60
    var hora= minuto/60
    resultado.textContent=("A massa inicial é: ",massaini)
    resultado.textContent=("A massa final é: ",massaFi)
    resultado.textContent=("O tempo gasto foi:", hora," h ", minuto," m" , segundo," s")
}
   


 export function quantEstoque(){
  
    var quantest= parseInt(prompt ('Digite a quantidade em estoque:'))
  while (quantest>=0) {
    var escolha=prompt("Para realizar uma venda digite [V]")
    switch (escolha) {
        case "V":
            var venda= parseInt(prompt("Digite a quantidade de produtos vendidos:"))
            var quantesttotal=quantest-venda
         break;
    }
    console.log("O total em estoque é:",quantesttotal)
  }
}