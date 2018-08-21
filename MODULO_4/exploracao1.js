
var silabas = ["Panfleto", "Panfleto", "Panfleto", "Conta de Luz", "Conta de Água", "Nota Fiscal", "Cupom", "Certidão de Nascimento",
                "RG", "Carteira de Trabalho", "Título de Eleitor", "CPF", "Carteira de Habilitação"];

var panfleto1, panfleto2, panfleto3,
    contaAgua, contaLuz, notaFiscal, cupom,
    certidaoNascimento, RG, carteiraTrabalho, titulo, CPF, CNH;
    
var opcoesPorSilaba;

var posCerta = [1, 1, 1, 1, 1,
                1, 1, 1, 1, 1,
                1, 1, 1, 1, 1,
                1, 1, 1, 1, 1,
                1, 1, 1, 1, 1];

var sons = [];
var blocoAtual = 0;

var blocos = [];

var numBlocos = 13;

var bkgImg;
var btProxImg;
var btProxImgVetor;
var btSomImg;

var somErro;


function preload() {

  panfleto1          = loadImage("../RECURSOS/IMAGENS/panfleto1.png");
  panfleto2          = loadImage("../RECURSOS/IMAGENS/panfleto2.png");
  panfleto3          = loadImage("../RECURSOS/IMAGENS/panfleto3.png");
  contaAgua          = loadImage("../RECURSOS/IMAGENS/contaLuz.png");
  contaLuz           = loadImage("../RECURSOS/IMAGENS/contAgua.png");
  notaFiscal         = loadImage("../RECURSOS/IMAGENS/notaFiscal.png");
  cupom              = loadImage("../RECURSOS/IMAGENS/cupom.png");
  certidaoNascimento = loadImage("../RECURSOS/IMAGENS/certidaoNascimento.png");
  RG                 = loadImage("../RECURSOS/IMAGENS/RG1.png");
  carteiraTrabalho   = loadImage("../RECURSOS/IMAGENS/carteiraTrabalho.png");
  titulo             = loadImage("../RECURSOS/IMAGENS/titulo.png");
  CPF                = loadImage("../RECURSOS/IMAGENS/CPF.png");
  CNH                = loadImage("../RECURSOS/IMAGENS/CNH.png");
  
  bkgImg             = loadImage("../RECURSOS/IMAGENS/mod4-exp1.png");
  btProxImg          = loadImage("../RECURSOS/IMAGENS/seta.png");
  btVoltarImg        = loadImage("../RECURSOS/IMAGENS/seta.png");

}

function setup() {

  angleMode(DEGREES);
  frameRate(15);
  textAlign(CENTER);
  createCanvas(innerWidth, innerHeight);

  var opcoesPorSilaba = [[panfleto1], [panfleto2], [panfleto3], 
                         [contaAgua], [contaLuz], [notaFiscal], [cupom],
                         [certidaoNascimento], [RG], [carteiraTrabalho], [titulo], [CPF], [CNH]];

  btProxImgVetor = createVector((width / 15) * 10.6, (innerHeight / 13) * 10.8);
  btVoltarImgVetor = createVector((width / 16) * 11,(innerHeight / 9.9) * 9);

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
    this.pos = 13;

    this.p1 = createVector(30*(innerWidth / 80), 30*(innerHeight / 80)); // distancia horizontal da imagem

    this.tamanho = 120;

    this.posSilaba = createVector(39*(innerWidth / 80), 26*(innerHeight / 80)); // distancia horizontal da palavra de cima

  }

  mostrar() {

    textSize(50); //tamanho do titulo
    fill(255);
    text(this.silaba, this.posSilaba.x, this.posSilaba.y);

    this.opcoes[0].resize(300, 330); // tamanho da imagem

    var alturaPalavras = 32;
    var scl = 80;
    image(this.opcoes[0], this.p1.x, this.p1.y);
    fill(255);

  }
}