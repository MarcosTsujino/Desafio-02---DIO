function calcularNivel (vitorias, derrotas) {
    //calcular saldo de vitórias
    let saldoVitorias = vitorias - derrotas;

    //Determinar o nível com base no saldo de vitórias
    let nivel;
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else { // vitórias >= 101
        nivel = "Imortal";
    }

    //Retornar mensagem com o saldo de vitórias e o nível
    return `O Herói tem um saldo de ${saldoVitorias} está no nível de ${nivel}`;

}

//Exemplo de uso da função
let vitorias = 75;
let derrotas = 25;

let mensagem = calcularNivel(vitorias, derrotas);
console.log(mensagem);