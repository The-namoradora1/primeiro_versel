
var resultado = document.querySelector(".resultado")


//exercicios comandos basicos 1
export function dimensoes(){


    console.log ("Dimensões do terreno")
  

  
  
 let comprimento=parseInt(prompt("digite o comprimento do terreno:"))
  let largura = parseInt (prompt("digite a largura do terreno:"));
  //calculo da area do terreno 
   let area=comprimento*largura
  
  //exibição da area do terreno
  resultado.textContent=("a area do terreno e :"+area);
  }
  export function leitura(){
  
  console.log ("leitura dos dados")
  
  var nomeAutomovel=prompt("digite o nome do automovel:");
  var precoFabrica=parseFloat(prompt ("digite o preço de fábrica do automovel:"));
  
  //calculo do preço final
  var impostos=precoFabrica*0.45;
  var porcentagemRevendedor=precoFabrica*0.28
  var precoFinal=precoFabrica+impostos+porcentagemRevendedor;
  
  //exibiçao do resultado 
  resultado.textContent=("nome do automovel: "+ nomeAutomovel);
  resultado.textContent=("preço final do Automovel: " + precoFinal);
  }
  export function paesebroas(){
  
  
  console.log (" ler as quantidades de pães e broa")
  var  quantidadepao=parseInt(prompt("digite a quantidade de paes vendidos"));
  var quantidadesBroa=parseInt(prompt("digite a quantidade de broasvendidas:"));
  
  
  //calcuçlar o valor arrecadado 

   var valorpao=quantidadepao*0.12
 var valorBroa=quantidadesBroa*1.50
  var totalArrecadado=valorpao+valorBroa;
  
  //calcular o valor a ser guardado na conta de poupanca
  var valorpoupanca=totalArrecadado*0.1
  
  //exibir os resultados
  resultado.textContent= ("valorArrecadado R$"+ totalArrecadado);

  }
  
  
  export function gasolina(){
  
  console.log ("ler o preço do litro da gasolina")
  
  let precoLitro=parseFloat(prompt("digite o preço do litro da gasolina:"));
  
  //ler o valor do pagamento 
  let valorPagamento=parseFloat( prompt("digite o valor do pagamento"));
  
  //calcular quantos litros ele conseguiu colocar no tanque
  let litros=valorPagamento/precoLitro;
  
  //exibir o resultado
  resultado.textContent=("ele conseguiu colocar "+litros+" litros no tanque");
  }
  
  export function pesoPrato(){
  
  console.log ("leitura do peso do prato montado pelo cliente")
  
  var pesooPrato= prompt("digite o peso do prato montado(em quilos)");
  
  var valorPaagar
  //calculo do valor a pagar 
  valorPaagar=pesooPrato*12;
  
  //impressao do valor a pagar
  resultado.textContent=("o valor a pagar é R$ "+valorPaagar);

  }
  
  export function camistasVendidas(){
  
  console.log ("solicita quantidade de camisetas vendidas")
  
  var quantidadePequenas=parseInt(prompt("digite a quantidadede camisetas Pequenas vendidas:"));
  var quantidadesMedias= parseInt(prompt("digite quantidadesde camisetas medias vendidas"));
  var quantidadeGrandes=parseInt(prompt("digite a quantidade de camisetas grandes vendidas:"));
  
  //calcula o valor arrecadado
  var valorArrecadado=(quantidadePequenas*10)+
  (quantidadesMedias*12)+
  (quantidadeGrandes*15);
  //exibe o valor arrecadado 
  resultado.textContent=("o valor arrecadado sera de R$"+valorArrecadado);
  }
  
  export function trabalhosAcidentes(){
  
  console.log ("recebe a quantidade de dias de trabalho sem acidentes")
  
  let diastrabalho=1000;
  //calculo de numerode anos
  let anos=diastrabalho/365
  
  // calcula numero de meses
  let meses=diastrabalho%365/30;
  
  //calcula numero de dias restantes
  let dias=diastrabalho/365%30;
  
  //exibe o resultado
  resultado.textContent=(meses +" meses " +" e " + dias +" dias");
  }
  
  export function salarioFuncionario(){
  
  let salario=parseFloat/prompt("digite o salario do funcionario:");
  var salarioAumentado
 var salarioFinal
   salarioAumentado=salario+(salario*0.15) ;
     salarioFinal=salarioAumentado;
    (salarioAumentado*0.08);
    console.log("salario inicial R$=+salario.toFixed");
    console.log("salario com aumento:R$+salrio aumentado.tofixed");
    console.log('salario final apos desconto de impostosR$+')


    //definindo o valor do salario por hora normal e por hora extra
    const salariohoranormal=10.00;
    const salariohoraextra=15.00;
  
    //definindo quantidade de horas normais e horas extras trabalhadas pelo funcionario
    const horasnormaistrabalhadas=40;
    const horasextrastrabalhadas=10;
    //calculando o salario bruto
    const salariobruto =(salariohoranormal)*
   (horasnormaistrabalhadas)+salariohoraextra*(horasextrastrabalhadas);
  
   // calculando salario liquido descontando 10% de impostos
  const salarioliquido = (salariobruto)
  salariobruto*0.1;
  
  //imprimindo esultados
  resultado.textContent=("salario bruto:R$"+salariobruto);
  resultado.textContent= ("salarioliquido:R$"+salarioliquido);
  }  
  
