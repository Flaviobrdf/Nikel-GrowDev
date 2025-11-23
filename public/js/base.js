let nome= "Marcelo";
let nome2 = "Eliot"

console.log(nome)

function receberAltera(nomeNovo){
    nome=nomeNovo;
    console.log(nome);
}

receberAltera("Flavin");

let  pessoaDefault = {
    nome: "flavio",
    idade: "33"
}


function imprimirPessoa(pessoa){
    console.log(pessoa.nome)
}

imprimirPessoa(pessoaDefault);