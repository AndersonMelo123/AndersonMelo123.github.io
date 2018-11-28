
var silabas = ["Bula", "Bula", "Bula",
               "Receita", "Receita", "Receita",
               "Rótulo", "Rótulo", "Rótulo"];

var opcoesPorSilaba;

var posCerta = [1, 1, 1, 1, 1,
                1, 1, 1, 1, 1,
                1, 1, 1, 1, 1,
                1, 1, 1, 1, 1,
                1, 1, 1, 1, 1];

var sons = [];
var blocoAtual = 0;

var blocos = [];

var numBlocos = 9;

var bkgImg;
var btProxImg;
var btProxImgVetor;
var btSomImg;

var somErro;


function preload() {

  bula1                = loadImage("../RECURSOS/IMAGENS/bula.jpg");
  bula2                = loadImage("../RECURSOS/IMAGENS/bula1.jpg");
  bula3                = loadImage("../RECURSOS/IMAGENS/bula3.jpg");
  receita1                = loadImage("../RECURSOS/IMAGENS/receita.jpg");
  receita2                = loadImage("../RECURSOS/IMAGENS/receita4.jpg");
  receita3                = loadImage("../RECURSOS/IMAGENS/receita5.jpg");
  rotulo1              = loadImage("../RECURSOS/IMAGENS/rotulo1.jpg");
  rotulo2              = loadImage("../RECURSOS/IMAGENS/rotulo2.jpg");
  rotulo3              = loadImage("../RECURSOS/IMAGENS/rotulo3.jpg");
  
  bkgImg                  = loadImage("../RECURSOS/IMAGENS/mod5-exp1.png");
  btProxImg               = loadImage("../RECURSOS/IMAGENS/seta.png");
  btVoltarImg             = loadImage("../RECURSOS/IMAGENS/seta.png");

}

function setup() {

  angleMode(DEGREES);
  frameRate(15);
  textAlign(CENTER);
  createCanvas(innerWidth, innerHeight);

  var opcoesPorSilaba = [[bula1], [bula2], [bula3], 
                         [receita1], [receita2], [receita3],
                         [rotulo1], [rotulo2], [rotulo3]];

  btProxImgVetor = createVector((width / 14.5) * 10.6, (innerHeight / 12.5) * 2.2);
  btVoltarImgVetor = createVector((width / 15.5) * 11,(innerHeight / 9.5) * 2.4);

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

    this.p1 = createVector(22*(innerWidth / 80), 21*(innerHeight / 80)); // distancia horizontal da imagem

    this.tamanho = 120;

    this.posSilaba = createVector(40*(innerWidth / 80), 18*(innerHeight / 80)); // distancia horizontal da palavra de cima

  }

  mostrar() {

    textSize(50); //tamanho do titulo
    fill(255);
    text(this.silaba, this.posSilaba.x, this.posSilaba.y);

    this.opcoes[0].resize(590, 420); // tamanho da imagem L x A

    var alturaPalavras = 32;
    var scl = 80;
    image(this.opcoes[0], this.p1.x, this.p1.y);
    fill(255);

  }
}