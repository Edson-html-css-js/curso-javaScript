console.log(`\ntrabalhando com Condicionais `)// crase é pra se eu quiser interpolar variaveis com ${nome}

const listaDeDestinos = new Array(
    `salvador`,
    `são paulo`,
    `rio de janeiro`
);
// listaDeDestinos.push(`curitiba`, `bahia`);//adcionando um item na lista depois de ser criada

const idadeComprador = 18;
const estaAcompanhado = false;
let  temPassagemComprada = false;
const destino = "são paulo"

const podeComprar = idadeComprador >= 18 || estaAcompanhado == true; 

console.log(listaDeDestinos)

let destinoExiste = false;
   for(var i = 0; i < 3; i++){

    if(listaDeDestinos[i] == destino){
        destinoExiste = true;
        break;
    }
   }

   console.log("destino existe", destinoExiste)

   if(podeComprar && destinoExiste){
       console.log("Boa Viagem");
   }else{
       console.log("Desculpe tivemos um erro!")
   }