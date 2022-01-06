console.log(`trabalhando com listas `)// crase é pra se eu quiser interpolar variaveis com ${nome}

// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`
// const rioDeJaneiro = `Rio de Janeiro`;

// console.log(salvador, saoPaulo, rioDeJaneiro)

const listaDeDestinos = new Array(
    `salvador`,
    `são paulo`,
    `rio de janeiro`
);
listaDeDestinos.push(`curitiba`, `bahia`);//adcionando um item na lista depois de ser criada

console.log(listaDeDestinos);


listaDeDestinos.splice(1, 1)//splice é para apagar um item da lista, apartir da posição 1, apagar só um
console.log(listaDeDestinos);

console.log(listaDeDestinos[0], listaDeDestinos[1], listaDeDestinos[2])