/*
  ## Objetivo:

  Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
  depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

  Se vitórias for menor do que 10 = Ferro
  Se vitórias for entre 11 e 20 = Bronze
  Se vitórias for entre 21 e 50 = Prata
  Se vitórias for entre 51 e 80 = Ouro
  Se vitórias for entre 81 e 90 = Diamante
  Se vitórias for entre 91 e 100= Lendário
  Se vitórias for maior ou igual a 101 = Imortal

  ## Saída

  Ao final deve se exibir uma mensagem:
  "O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"
*/

var readline = require("readline-sync");

function rankingMatches(winsNumber, lossesNumber) {
  let winsLossesBalanceRate = winsNumber - lossesNumber;

  if (winsLossesBalanceRate < 10) {
    winsLossesValue = "Ferro";
  } else if (winsLossesBalanceRate > 10 && winsLossesBalanceRate <= 20) {
    winsLossesValue = "Bronze";
  } else if (winsLossesBalanceRate > 20 && winsLossesBalanceRate <= 50) {
    winsLossesValue = "Prata";
  } else if (winsLossesBalanceRate > 50 && winsLossesBalanceRate <= 80) {
    winsLossesValue = "Ouro";
  } else if (winsLossesBalanceRate > 80 && winsLossesBalanceRate <= 90) {
    winsLossesValue = "Diamante";
  } else if (winsLossesBalanceRate > 90 && winsLossesBalanceRate <= 100) {
    winsLossesValue = "Lendário";
  } else if (winsLossesBalanceRate > 100) {
    winsLossesValue = "Imortal";
  }

  console.clear();
  console.log(
    `O Herói tem saldo de ${winsLossesBalanceRate}, e está no nível de ${winsLossesValue}.\n\n`
  );

  resp = readline.question(
    "Digite 'sim' e clique em 'Enter' para continuar...\t"
  );
  console.clear();

  checkedResponse = resp == "sim";

  return checkedResponse;
}

do {
  wins = readline.questionFloat("Digite o numero atual de vitorias : ");
  losses = readline.questionFloat("Digite o numero atual de derrotas: ");

  let resp = rankingMatches(wins, losses);
} while (resp);
