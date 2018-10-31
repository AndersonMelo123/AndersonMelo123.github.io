
var silabas = ["Manchete de Jornal", "Manchete de Jornal", "Manchete de Jornal",
               "Manchete de Revista", "Manchete de Revista", "Manchete de Revista",
               "Receita Culinária", "Receita Culinária",
               "Manual de Instruções", "Manual de Instruções"];

var manchete1, manchete2, manchete3,
    manchete4, manchete5, manchete6,
    receita1, receita2,
    manual1, manual2;
    
var opcoesPorSilaba;

var posCerta = [1, 1, 1, 1, 1,
                1, 1, 1, 1, 1,
                1, 1, 1, 1, 1,
                1, 1, 1, 1, 1,
                1, 1, 1, 1, 1];

var sons = [];
var blocoAtual = 0;

var blocos = [];

var numBlocos = 10;

var bkgImg;
var btProxImg;
var btProxImgVetor;
var btSomImg;

var somErro;


function preload() {

  manchete1          = loadImage("../RECURSOS/IMAGENS/manchete1.png");
  manchete2          = loadImage("../RECURSOS/IMAGENS/manchete2.png");
  manchete3          = loadImage("../RECURSOS/IMAGENS/manchete3.png");
  manchete4          = loadImage("../RECURSOS/IMAGENS/manchete4.png");
  manchete5          = loadImage("../RECURSOS/IMAGENS/manchete5.png");
  manchete6          = loadImage("../RECURSOS/IMAGENS/manchete6.png");
  receita1           = loadImage("../RECURSOS/IMAGENS/receita.png");
  receita2           = loadImage("../RECURSOS/IMAGENS/receita2.png");
  manual1            = loadImage("../RECURSOS/IMAGENS/manual.png");
  manual2            = loadImage("../RECURSOS/IMAGENS/manual2.png");
  
  bkgImg             = loadImage("../RECURSOS/IMAGENS/mod4-exp2.png");
  btProxImg          = loadImage("../RECURSOS/IMAGENS/seta.png");
  btVoltarImg        = loadImage("../RECURSOS/IMAGENS/seta.png");

}

function setup() {

  angleMode(DEGREES);
  frameRate(15);
  textAlign(CENTER);
  createCanvas(innerWidth, innerHeight);

  var opcoesPorSilaba = [[manchete1], [manchete2], [manchete3], 
                         [manchete4], [manchete5], [manchete6],
                         [receita1], [receita2], 
                         [manual1], [manual2]];

  btProxImgVetor = createVector((width / 14.5) * 10.6, (innerHeight / 13) * 10.8);
  btVoltarImgVetor = createVector((width / 15.5) * 11,(innerHeight / 9.9) * 9);

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
    this.pos = 10;

    this.p1 = createVector(28*(innerWidth / 80), 23*(innerHeight / 80)); // distancia horizontal da imagem

    this.tamanho = 120;

    this.posSilaba = createVector(39*(innerWidth / 80), 21*(innerHeight / 80)); // distancia horizontal da palavra de cima 1 - hor / 2 - vert

  }

  mostrar() {

    textSize(50); //tamanho do titulo
    fill(255);
    text(this.silaba, this.posSilaba.x, this.posSilaba.y);

    this.opcoes[0].resize(425, 415); // tamanho da imagem L x A

    var alturaPalavras = 32;
    var scl = 80;
    image(this.opcoes[0], this.p1.x, this.p1.y);
    fill(255);

  }
}