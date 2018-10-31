var palavras = ["","","","","","","","","",""];

var opcoesPorPalavra = [
  ["substantivo", "pronome", "verbo", "artigo"],
  ["pronome", "artigo", "verbo", "numeral"],
  ["verbo", "substantivo", "artigo", "pronome"],
  ["artigo", "verbo", "numeral", "pronome"],
  ["pronome", "verbo", "numeral", "artigo"],
  ["verbo", "numeral", "substantivo", "artigo"],
  ["pronome", "substantivo", "artigo", "verbo"],
  ["numeral", "artigo", "pronome", "verbo"],
  ["numeral", "substantivo", "verbo", "pronome"],
  ["verbo", "numeral", "artigo", "substantivo"]
];

var a1, a2, a3, a4, a5, a6, a7, a8, a9, a10;

var posCerta = [3, 1, 2, 3, 4, 1, 2, 3, 1, 4];

var sons = [];
var blocoAtual = 0;
var blocos = [];
var numBlocos = 10;

var bkgImg;
var btProxImg;
var btProxImgVetor;
var btSomImg;

var tamanhoCirculo = 160;

var somErro;
var somSucesso;



function preload() {

  a1 = loadImage("../RECURSOS/IMAGENS/foto1.png");
  a2 = loadImage("../RECURSOS/IMAGENS/foto2.png");
  a3 = loadImage("../RECURSOS/IMAGENS/foto3.png");
  a4 = loadImage("../RECURSOS/IMAGENS/foto4.png");
  a5 = loadImage("../RECURSOS/IMAGENS/foto5.png");
  a6 = loadImage("../RECURSOS/IMAGENS/foto6.png");
  a7 = loadImage("../RECURSOS/IMAGENS/foto7.png");
  a8 = loadImage("../RECURSOS/IMAGENS/foto8.png");
  a9 = loadImage("../RECURSOS/IMAGENS/foto9.png");
  a10 = loadImage("../RECURSOS/IMAGENS/foto10.png");

  bkgImg = loadImage("../RECURSOS/IMAGENS/mod4-rec4.png");
  btProxImg = loadImage("../RECURSOS/IMAGENS/seta.png");
  btVoltarImg = loadImage("../RECURSOS/IMAGENS/seta.png");
  btSomImg = loadImage("../RECURSOS/IMAGENS/02.png");

}

function setup() {

  angleMode(DEGREES);
  frameRate(15);
  textAlign(CENTER);
  createCanvas(innerWidth, innerHeight);

  var vetor = [[a1], [a2], [a3], [a4], [a5], [a6], [a7], [a8], [a9], [a10]];

  btProxImgVetor = createVector((width / 15) * 10.6, (innerHeight / 13) * 3.3);
  btSomImgVetor = createVector((width / 44) * 10.6, (innerHeight / 8) * 2);
  btVoltarImgVetor = createVector((width / 16) * 11, (innerHeight / 9.9) * 3.3);

  for (var i = 0; i < numBlocos; i++) {
    blocos[i] = new Bloco(vetor[i], palavras[i], posCerta[i], opcoesPorPalavra[i]);
  }

  somErro = loadSound("../RECURSOS/AUDIOS/erro.mp3");
  somSucesso = loadSound("../RECURSOS/AUDIOS/sucesso.mp3");

  somErro.setVolume(0.7);
  somSucesso.setVolume(0.7);

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

  var d1 = dist(mouseX, mouseY, 25 * (innerWidth / 80), 55 * (innerHeight / 80));
  var d2 = dist(mouseX, mouseY, 35 * (innerWidth / 80), 55 * (innerHeight / 80));
  var d3 = dist(mouseX, mouseY, 45 * (innerWidth / 80), 55 * (innerHeight / 80));
  var d4 = dist(mouseX, mouseY, 55 * (innerWidth / 80), 55 * (innerHeight / 80));

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

  } else if (d4 < tamanhoCirculo) {

    if (blocos[blocoAtual].escolher(4)) {
      blocos[blocoAtual].tocarCerto();
      avancarBloco();
    } else {
      blocos[blocoAtual].tocarErrado();
    }
  }
}

class Bloco {

  constructor(imagem, palavraCompleta, posCertaArray, opcoes) {

    this.imagem = imagem;
    this.palavraCompleta = palavraCompleta;
    this.posCertaArray = posCertaArray;
    this.opcoes = opcoes;
    this.pos = 25;

    this.posImagem = createVector(25*(innerWidth / 80), 22*(innerHeight / 80)); //imagem

  }

  mostrar() {

    textSize(70);
    text(this.palavraCompleta, 40 * (innerWidth / 80), 35 * (innerHeight / 80));

    this.imagem[0].resize(600, 220);

    textSize(28);
    for (var i = 0; i < 40; i += 10) {
      fill(0);
      ellipse((this.pos + i) * (innerWidth / 80), 63 * (innerHeight / 80), tamanhoCirculo);
      fill(255);
      text(this.opcoes[i / 10], (this.pos + i) * (innerWidth / 80), 65 * (innerHeight / 80));
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
