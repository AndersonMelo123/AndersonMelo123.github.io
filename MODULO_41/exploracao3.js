
var silabas = ["Bilhete", "Bilhete", "Bilhete",
               "Classificados", "Classificados", "Classificados",
               "Horóscopo", "Horóscopo", "Horóscopo",
               "Tirinhas", "Tirinhas", "Tirinhas"];

var bilhete1, bilhete2, bilhete3,
    classificados1, classificados2, classificados3,
    horoscopo1, horoscopo2, horoscopo3,
    quadrinhos1, quadrinhos2, quadrinhos3;
    
var opcoesPorSilaba;

var posCerta = [1, 1, 1, 1, 1,
                1, 1, 1, 1, 1,
                1, 1, 1, 1, 1,
                1, 1, 1, 1, 1,
                1, 1, 1, 1, 1];

var sons = [];
var blocoAtual = 0;

var blocos = [];

var numBlocos = 12;

var bkgImg;
var btProxImg;
var btProxImgVetor;
var btSomImg;

var somErro;


function preload() {

  bilhete1                = loadImage("../RECURSOS/IMAGENS/bilhete11.png");
  bilhete2                = loadImage("../RECURSOS/IMAGENS/bilhete2.png");
  bilhete3                = loadImage("../RECURSOS/IMAGENS/bilhete3.png");
  classificados1          = loadImage("../RECURSOS/IMAGENS/classificados1.png");
  classificados2          = loadImage("../RECURSOS/IMAGENS/classificados2.png");
  classificados3          = loadImage("../RECURSOS/IMAGENS/classificados3.png");
  horoscopo1              = loadImage("../RECURSOS/IMAGENS/horoscopo1.png");
  horoscopo2              = loadImage("../RECURSOS/IMAGENS/horoscopo2.png");
  horoscopo3              = loadImage("../RECURSOS/IMAGENS/horoscopo3.png");
  quadrinhos1             = loadImage("../RECURSOS/IMAGENS/quadrinhos1.png");
  quadrinhos2             = loadImage("../RECURSOS/IMAGENS/quadrinhos2.png");
  quadrinhos3             = loadImage("../RECURSOS/IMAGENS/quadrinhos3.png");
  
  bkgImg                  = loadImage("../RECURSOS/IMAGENS/mod4-exp3.png");
  btProxImg               = loadImage("../RECURSOS/IMAGENS/seta.png");
  btVoltarImg             = loadImage("../RECURSOS/IMAGENS/seta.png");

}

function setup() {

  angleMode(DEGREES);
  frameRate(15);
  textAlign(CENTER);
  createCanvas(innerWidth, innerHeight);

  var opcoesPorSilaba = [[bilhete1], [bilhete2], [bilhete3], 
                         [classificados1], [classificados2], [classificados3],
                         [horoscopo1], [horoscopo2], [horoscopo3], 
                         [quadrinhos1], [quadrinhos2], [quadrinhos3]];

  btProxImgVetor = createVector((width / 14.5) * 10.6, (innerHeight / 12.5) * 10.8);
  btVoltarImgVetor = createVector((width / 15.5) * 11,(innerHeight / 9.5) * 9);

  for(var i = 0; i < numBlocos; i++) {
    blocos[i] = new Bloco(silabas[i], opcoesPorSilaba[i]);
  }

}

function draw() {

  background(bkgImg);
  image(btProxImg, btProxImgVetor.x, btProxImgVetor.y, 50, 50);
  push();
  rotate(180);
  image(btVoltarImg, -btVoltarImgVetor.x, -btVoltarImgVetor.y, 50, 50);
  pop();
  textAlign(CENTER);
  blocos[blocoAtual].mostrar();
}

function avancarBloco() {
  blocoAtual++;
  if(blocoAtual > numBlocos-1) {
    blocoAtual = 0;
  }
}

function voltarBloco() {
  blocoAtual--;
  if(blocoAtual < 0) {
    blocoAtual = numBlocos-1;
  }
}

function mousePressed() {

  var centroImgX =  btVoltarImgVetor.x + btVoltarImg.width/4 -80;
  var centroImgY =  btVoltarImgVetor.y + btVoltarImg.height/6 -75;
  var distancia = dist(mouseX, mouseY, centroImgX, centroImgY);

  if(distancia < 50) {
    voltarBloco();
    blocos[blocoAtual].tocar();
  }

  centroImgX =  btProxImgVetor.x + btProxImg.width/4 -20;
  centroImgY =  btProxImgVetor.y + btProxImg.height/6 -24;
  distancia = dist(mouseX, mouseY, centroImgX, centroImgY);

  if(distancia < 50) {
    avancarBloco();
  }

  if(mouseX > inicioBtSomX
    && mouseX < fimBtSomX
    && mouseY > inicioBtSomY
    && mouseY < fimBtSomY) {
    console.log("som");
  }

  var d1 = dist(mouseX, mouseY, 15*(innerWidth / 80) + (60), 40*(innerHeight / 80) + (60));
  var d2 = dist(mouseX, mouseY, 30*(innerWidth / 80) + (60), 40*(innerHeight / 80) + (60));
  var d3 = dist(mouseX, mouseY, 45*(innerWidth / 80) + (60), 40*(innerHeight / 80) + (60));
  var d4 = dist(mouseX, mouseY, 60*(innerWidth / 80) + (60), 40*(innerHeight / 80) + (60));

  if(d1 < 120) {

    if(blocos[blocoAtual].escolher(1)) {
      blocos[blocoAtual].tocarCerto();
      avancarBloco();
    } else {
      blocos[blocoAtual].tocarErrado();
    }

  } else if(d2 < 120) {

    if(blocos[blocoAtual].escolher(2)) {
      blocos[blocoAtual].tocarCerto();
      avancarBloco();
    } else {
      blocos[blocoAtual].tocarErrado();
    }

  } else if(d3 < 120) {

    if(blocos[blocoAtual].escolher(3)) {
      blocos[blocoAtual].tocarCerto();
      avancarBloco();
    } else {
      blocos[blocoAtual].tocarErrado();
    }

  } else if(d4 < 120) {

    if(blocos[blocoAtual].escolher(4)) {
      blocos[blocoAtual].tocarCerto();
      avancarBloco();
    } else {
      blocos[blocoAtual].tocarErrado();
    }
  }
}

class Bloco {

  constructor(silaba, opcoes) {

    this.silaba = silaba;
    this.opcoes = opcoes;
    this.pos = 12;

    this.p1 = createVector(18*(innerWidth / 80), 22*(innerHeight / 80)); // distancia horizontal da imagem

    this.tamanho = 120;

    this.posSilaba = createVector(39*(innerWidth / 80), 21*(innerHeight / 80)); // distancia horizontal da palavra de cima

  }

  mostrar() {

    textSize(50); //tamanho do titulo
    fill(255);
    text(this.silaba, this.posSilaba.x, this.posSilaba.y);

    this.opcoes[0].resize(720, 450); // tamanho da imagem L x A

    var alturaPalavras = 32;
    var scl = 80;
    image(this.opcoes[0], this.p1.x, this.p1.y);
    fill(255);

  }
}