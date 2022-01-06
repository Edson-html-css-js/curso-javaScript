console.log(`trabalhando com Condicionais `)// crase é pra se eu quiser interpolar variaveis com ${nome}

const listaDeDestinos = new Array(
    `salvador`,
    `são paulo`,
    `rio de janeiro`
);
listaDeDestinos.push(`curitiba`, `bahia`);//adcionando um item na lista depois de ser criada

const idadeComprador = 18;
const estaAcompanhado = false;
const temPassagemComprada = false
console.log("Destinos possiveis")
console.log(listaDeDestinos);

if(idadeComprador >= 18 || estaAcompanhado){
    console.log("Boa viagem!")
    listaDeDestinos.splice(1, 1)//splice é para apagar um item da lista, apartir da posição 1, apagar só um
    console.log(listaDeDestinos)
}else{
        console.log("você é menor não pode comprar passagem!")
    }
   

    console.log("Embarque: \n\n")

    if(idadeComprador >= 18 && temPassagemComprada){
        console.log("Boa viagem")
    }else{
        console.log("Você não pode embarcar")
    }



console.log(listaDeDestinos)