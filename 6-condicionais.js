console.log(`trabalhando com Condicionais `)// crase é pra se eu quiser interpolar variaveis com ${nome}

const listaDeDestinos = new Array(
    `salvador`,
    `são paulo`,
    `rio de janeiro`
);
listaDeDestinos.push(`curitiba`, `bahia`);//adcionando um item na lista depois de ser criada

const idadeComprador = 14;
const estaAcompanhado = true;
console.log("Destinos possiveis")
console.log(listaDeDestinos);

if(idadeComprador >= 18){
    console.log("Você é maior você pode comprar apassagem!")
    listaDeDestinos.splice(1, 1)//splice é para apagar um item da lista, apartir da posição 1, apagar só um
}else{
    //a pessoa é menor de idade
    if(estaAcompanhado){
        console.log("Comprador está acompanhado pode comprar passagem")
        listaDeDestinos.splice(1, 1)
    }else{
        console.log("você é menor não pode comprar passagem!")
    }
   
}



console.log(listaDeDestinos)