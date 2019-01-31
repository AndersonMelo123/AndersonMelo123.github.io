var palavras = ["Qual a finalidade da\ncertidão de nascimento?",
                "Com esse documento:","O que significa NACIONALIDADE?",
                "O que significa NATURALIDADE?",
                "Qual a cidade e o estado\nque aparecem na certidão de nascimento?",
                "Quais as informações constam\nna certidão de nascimento?",
                "A menina saia de casa e dizia que ia estudar,\nmas ela ia mesmo:",
                "Depois de quantas horas\no namorado dela chegou?",
                "Quem tinha um sorriso envolvente?",
                "Quem iria abençoar o casamento?",
                "O que a menina não soube disfarçar?",
                "Qual o significado de enxoval no texto?"];

var opcoesPorPalavra = [
  ["A\nPrimeiro emprego", "B\nDirigir um veículo", "C\nPrimeiro documento\nde identificação\nde uma pessoa"],
  ["A\nPassamos a ser\ncidadãos", "B\nSomos autorizados\na dirigir veículos", "C\nPodemos votar"],
  ["A\nEstado em que\nnascemos", "B\nCidade em que\nnascemos", "C\nPaís em que\nnascemos"],
  ["A\nMaternidade\nou hospital\nonde nascemos", "B\nEndereço completo\nonde nascemos", "C\nCidade em que\nnascemos"],
  ["A\nGaranhuns - PE", "B\nSão Paulo - SP", "C\nRecife - PE"],
  ["A\nNome dos tios,\ncor dos olhos", "B\nPaís, família, estado\ncidade onde nasceu\ne data de nascimento", "C\nEndereço dos pais,\ncor da pele"],
  ["A\nPassear", "B\nTrabalhar", "C\nNamorar"],
  ["A\n3 horas", "B\n4 horas", "C\n2 horas"],
  ["A\nA menina", "B\nO namorado", "C\nA amiga"],
  ["A\nO pai da menina", "B\nA mãe da menina", "C\nA amiga da menina"],
  ["A\nA raiva e o \ndesgosto do \ncasamento", "B\nA tristeza de dar\na notícia a mãe", "C\nA alegria do pedido\nde casamento"],
  ["A\nConjunto de \nroupas e acessórios\n de quem se casa", "B\nConjunto de \nroupas e acessórios\n para um bebê", "C\nConjunto de\nroupas e acessórios\npara um\nserviço ou viagem"]
];

var a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12;

var posCerta = [3, 1, 3, 3, 2, 2, 3, 3, 1, 2, 3, 1];

var sons = [];
var blocoAtual = 0;
var blocos = [];
var numBlocos = 12;

var bkgImg;
var btProxImg;
var btProxImgVetor;
var btSomImg;

var tamanhoCirculo = 50;

var somErro;
var somSucesso;



function preload() {

  a1 = loadImage("../RECURSOS/IMAGENS/certidaoNascimento.jpeg");
  a2 = loadImage("../RECURSOS/IMAGENS/certidaoNascimento.jpeg");
  a3 = loadImage("../RECURSOS/IMAGENS/certidaoNascimento.jpeg");
  a4 = loadImage("../RECURSOS/IMAGENS/certidaoNascimento.jpeg");
  a5 = loadImage("../RECURSOS/IMAGENS/certidaoNascimento.jpeg");
  a6 = loadImage("../RECURSOS/IMAGENS/certidaoNascimento.jpeg");
  a7 = loadImage("../RECURSOS/IMAGENS/cordel3.jpg");
  a8 = loadImage("../RECURSOS/IMAGENS/cordel3.jpg");
  a9 = loadImage("../RECURSOS/IMAGENS/cordel3.jpg");
  a10 = loadImage("../RECURSOS/IMAGENS/cordel3.jpg");
  a11 = loadImage("../RECURSOS/IMAGENS/cordel3.jpg");
  a12 = loadImage("../RECURSOS/IMAGENS/cordel3.jpg");

  bkgImg = loadImage("../RECURSOS/IMAGENS/mod5-atv1.png");
  btProxImg = loadImage("../RECURSOS/IMAGENS/seta.png");
  btVoltarImg = loadImage("../RECURSOS/IMAGENS/seta.png");
  btSomImg = loadImage("../RECURSOS/IMAGENS/02.png");

}

function setup() {

  angleMode(DEGREES);
  frameRate(15);
  textAlign(CENTER);
  createCanvas(innerWidth, innerHeight);

  var vetor = [[a1], [a2], [a3], [a4], [a5], [a6], [a7], [a8], [a9], [a10], [a11], [a12]];

  btProxImgVetor = createVector((width / 15) * 13.6, (innerHeight / 18) * 5);     //setas
  btSomImgVetor = createVector((width / 44) * 29.5, (innerHeight / 8) * 2);
  btVoltarImgVetor = createVector((width / 16) * 7.4, (innerHeight / 12.5) * 4.4);

  for (var i = 0; i < numBlocos; i++) {
    blocos[i] = new Bloco(vetor[i], palavras[i], posCerta[i], opcoesPorPalavra[i]);
  }

  somErro = loadSound("../RECURSOS/AUDIOS/erro.mp3");
  somSucesso = loadSound("../RECURSOS/AUDIOS/sucesso.mp3");

  somErro.setVolume(0.8);
  somSucesso.setVolume(0.8);

  // blocos[0].tocar();

}

function draw() {

  background(bkgImg);
  image(btProxImg, btProxImgVetor.x, btProxImgVetor.y, 50, 50);
  push();
  rotate(180);
  image(btVoltarImg, -btVoltarImgVetor.x, -btVoltarImgVetor.y, 50, 50);
  pop();
  image(btSomImg, btSomImgVetor.x, btSomImgVetor.y, 50, 50);
  textAlign(CENTER);
  blocos[blocoAtual].mostrar();

}

function avancarBloco() {
  blocoAtual++;
  if (blocoAtual > numBlocos - 1) {
    blocoAtual = 0;
  }
}

function voltarBloco() {
  blocoAtual--;
  if (blocoAtual < 0) {
    blocoAtual = numBlocos - 1;
  }
}

function mousePressed() {

  var centroImgX = btVoltarImgVetor.x + btVoltarImg.width / 4 - 80;
  var centroImgY = btVoltarImgVetor.y + btVoltarImg.height / 6 - 75;
  var distancia = dist(mouseX, mouseY, centroImgX, centroImgY);

  if (distancia < 50) {
    voltarBloco();
    blocos[blocoAtual].tocar();
  }

  centroImgX = btProxImgVetor.x + btProxImg.width / 4 - 20;
  centroImgY = btProxImgVetor.y + btProxImg.height / 6 - 24;
  distancia = dist(mouseX, mouseY, centroImgX, centroImgY);

  if (distancia < 50) {
    avancarBloco();
  }

  var inicioBtSomX = btSomImgVetor.x;
  var inicioBtSomY = btSomImgVetor.y;

  var fimBtSomX = btSomImgVetor.x + 50;
  var fimBtSomY = btSomImgVetor.y + 50;

  if (mouseX > inicioBtSomX &&
    mouseX < fimBtSomX &&
    mouseY > inicioBtSomY &&
    mouseY < fimBtSomY) {
    console.log("som");
  }

  var d1 = dist(mouseX, mouseY, 38 * (innerWidth / 80), 55 * (innerHeight / 80)); //posição clicavel
  var d2 = dist(mouseX, mouseY, 55 * (innerWidth / 80), 55 * (innerHeight / 80));
  var d3 = dist(mouseX, mouseY, 70 * (innerWidth / 80), 55 * (innerHeight / 80));
  //var d4 = dist(mouseX, mouseY, 67 * (innerWidth / 80), 55 * (innerHeight / 80));

  if (d1 < tamanhoCirculo) {

    if (blocos[blocoAtual].escolher(1)) {
      blocos[blocoAtual].tocarCerto();
      avancarBloco();
    } else {
      blocos[blocoAtual].tocarErrado();
    }

  } else if (d2 < tamanhoCirculo) {

    if (blocos[blocoAtual].escolher(2)) {
      blocos[blocoAtual].tocarCerto();
      avancarBloco();
    } else {
      blocos[blocoAtual].tocarErrado();
    }

  } else if (d3 < tamanhoCirculo) {

    if (blocos[blocoAtual].escolher(3)) {
      blocos[blocoAtual].tocarCerto();
      avancarBloco();
    } else {
      blocos[blocoAtual].tocarErrado();
    }

  } 

  /*else if (d4 < tamanhoCirculo) {

    if (blocos[blocoAtual].escolher(4)) {
      blocos[blocoAtual].tocarCerto();
      avancarBloco();
    } else {
      blocos[blocoAtual].tocarErrado();
    }
  }*/
}

class Bloco {

  constructor(imagem, palavraCompleta, posCertaArray, opcoes) {

    this.imagem = imagem;
    this.palavraCompleta = palavraCompleta;
    this.posCertaArray = posCertaArray;
    this.opcoes = opcoes;
    this.pos = 25;

    this.posImagem = createVector(0.5*(innerWidth / 80), 8*(innerHeight / 80)); //imagem

  }

  mostrar() {

    textSize(36);
    text(this.palavraCompleta, 55 * (innerWidth / 80), 40 * (innerHeight / 80)); //pergunta

    this.imagem[0].resize(520, 520); // tamanho da imagem

    textSize(28);
    var a = 0;
    for (var i = 0; i < 30; i += 10) {
      fill(0);
      ellipse((this.pos + (i+a)) * (innerWidth / 52), 54 * (innerHeight / 80), tamanhoCirculo); // esferas
      fill(255);
      text(this.opcoes[i / 10], (this.pos + (i+a)) * (innerWidth / 52), 55.5 * (innerHeight / 80)); // respostas
      a = a;
    }

    image(this.imagem[0], this.posImagem.x, this.posImagem.y);


  }

  escolher(posicao) {
    console.log(posicao);
    console.log(this.posCertaArray);
    if (posicao - 1 == this.posCertaArray - 1) {
      return true;
    } else {
      return false;
    }
  }

  tocarCerto() {
    console.log("certo");
    somSucesso.play();
  }

  tocarErrado() {
    console.log("errado");
    somErro.play();
  }
}
