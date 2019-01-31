

var silabas = ["BRA", "TRO", "CLE", "VRO", "QUE", "FLO", "CHU", "BRA", "TRA", "PRA"];

var manchete1, manchete2, manchete3, manchete4, manchete5, manchete6, manchete7, manchete8, manchete9, manchete10;

var vacina, braco, livro, toalha, prato, revista, trofeu, porta, folha,
     leque, barco, bicicleta, flor, quadro, arvore, porta, tesoura, 
     chuva, isqueiro, chocolate, cobra, travesseiro, palhaco, janela, sapato, planta;


var opcoesPorSilaba;

var op;

var posCerta = [1, 2, 3, 2, 4, 1, 2, 3, 1, 4];

var sons = [];
var blocoAtual = 0;
var blocos = [];
var numBlocos = 10;

var bkgImg;
var btProxImg;
var btProxImgVetor;
var btSomImg;

var somErro;
var somSucesso;


function preload() {

  manchete1    = loadImage("../RECURSOS/IMAGENS/prato.png");
  manchete2    = loadImage("../RECURSOS/IMAGENS/manchete2.png");
  manchete3    = loadImage("../RECURSOS/IMAGENS/manchete1.png");
  manchete4    = loadImage("../RECURSOS/IMAGENS/manchete2.png");
  manchete5    = loadImage("../RECURSOS/IMAGENS/manchete1.png");
  manchete6    = loadImage("../RECURSOS/IMAGENS/manchete2.png");
  manchete7    = loadImage("../RECURSOS/IMAGENS/manchete1.png");
  manchete8    = loadImage("../RECURSOS/IMAGENS/manchete2.png");
  manchete9    = loadImage("../RECURSOS/IMAGENS/manchete1.png");
  manchete10   = loadImage("../RECURSOS/IMAGENS/manchete2.png");

  braco     = loadImage("../RECURSOS/IMAGENS/BracoF.png");
  livro     = loadImage("../RECURSOS/IMAGENS/LivroF.png");
  toalha    = loadImage("../RECURSOS/IMAGENS/ToalhaF.png");
  prato     = loadImage("../RECURSOS/IMAGENS/prato.png");

  revista   = loadImage("../RECURSOS/IMAGENS/RevistaF2.png");
  trofeu    = loadImage("../RECURSOS/IMAGENS/trofeu.png");
  porta     = loadImage("../RECURSOS/IMAGENS/PortaF.png");
  folha     = loadImage("../RECURSOS/IMAGENS/FolhaF.png");

  leque    = loadImage("../RECURSOS/IMAGENS/leque.png");
  barco     = loadImage("../RECURSOS/IMAGENS/BarcoF.png");
  bicicleta = loadImage("../RECURSOS/IMAGENS/BicicletaF.png");
  flor      = loadImage("../RECURSOS/IMAGENS/FlorF.png");

  quadro    = loadImage("../RECURSOS/IMAGENS/QuadroF.png");
  arvore    = loadImage("../RECURSOS/IMAGENS/ArvoreF.png");

  porta     = loadImage("../RECURSOS/IMAGENS/PortaF.png");
  tesoura   = loadImage("../RECURSOS/IMAGENS/TesouraF.png");

  chuva     = loadImage("../RECURSOS/IMAGENS/ChuvaF.png");

  isqueiro  = loadImage("../RECURSOS/IMAGENS/IsqueiroF.png");
  chocolate = loadImage("../RECURSOS/IMAGENS/ChocolateF.png");
  cobra     = loadImage("../RECURSOS/IMAGENS/CobraF.png");

  travesseiro = loadImage("../RECURSOS/IMAGENS/TravesseiroF.png");
  palhaco   = loadImage("../RECURSOS/IMAGENS/PalhacoF.png");
  janela    = loadImage("../RECURSOS/IMAGENS/JanelaF.png");
  sapato    = loadImage("../RECURSOS/IMAGENS/SapatoF2.png");

  planta    = loadImage("../RECURSOS/IMAGENS/PlantaF.png")

  bkgImg = loadImage("../RECURSOS/IMAGENS/mod4-rec1.png");
  btProxImg = loadImage("../RECURSOS/IMAGENS/seta.png");
  btVoltarImg = loadImage("../RECURSOS/IMAGENS/seta.png");
  btSomImg = loadImage("../RECURSOS/IMAGENS/02.png");

}

function setup() {

  angleMode(DEGREES);
  frameRate(15);
  textAlign(CENTER);
  createCanvas(innerWidth, innerHeight);

  var opcoesPorSilaba = [[manchete1], [manchete2], [manchete3], [manchete4], 
            [manchete5], [manchete6], [manchete7], [manchete8],
             [manchete9], [manchete10]];

  var opcoesPorSilaba = [[braco, livro, toalha, prato], [revista, trofeu, porta, folha],
                         [leque, barco, bicicleta, flor], [quadro, livro, arvore, prato],
                         [porta, tesoura, prato, leque], [flor, livro, folha, tesoura],
                         [toalha, chuva, quadro, arvore], [isqueiro, chocolate, cobra, porta],
                         [travesseiro, palhaco, janela, sapato], [toalha, planta, bicicleta, prato]];


  btProxImgVetor = createVector((width / 15) * 10.6, (innerHeight / 13) * 3.3);
  btSomImgVetor = createVector((width / 43) * 10.6, (innerHeight / 9) * 2);
  btVoltarImgVetor = createVector((width / 16) * 11,(innerHeight / 9.9) * 3.3);

  for(var i = 0; i < numBlocos; i++) {
    blocos[i] = new Bloco(opcoesPorSilaba[i], posCerta[i], opcoesPorSilaba[i]);
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

  var inicioBtSomX = btSomImgVetor.x;
  var inicioBtSomY = btSomImgVetor.y;

  var fimBtSomX = btSomImgVetor.x + 50;
  var fimBtSomY = btSomImgVetor.y + 50;

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

  constructor(op, posCertaArray, opcoes) {

    this.op = op;
    this.posCertaArray = posCertaArray;
    this.opcoes = opcoes;
    this.pos = 10;

    this.p1 = createVector(20*(innerWidth / 80), 55*(innerHeight / 80));
    this.p2 = createVector(30*(innerWidth / 80), 55*(innerHeight / 80)); //figuras
    this.p3 = createVector(40*(innerWidth / 80), 55*(innerHeight / 80));
    this.p4 = createVector(50*(innerWidth / 80), 55*(innerHeight / 80));

    this.tamanho = 120;

    this.posOp = createVector(40*(innerWidth / 80), 30*(innerHeight / 80));

  }

  mostrar() {

    textSize(90);
    fill(255);
    text(this.op, this.posOp.x, this.posOp.y);

    this.op[0].resize(170, 160);

    

    this.opcoes[0].resize(120, 120); // tamanho das imagens de opções
    this.opcoes[1].resize(120, 120);
    this.opcoes[2].resize(120, 120);
    this.opcoes[3].resize(120, 120);

    image(this.opcoes[0], this.p1.x, this.p1.y);
    image(this.opcoes[1], this.p2.x, this.p2.y);
    image(this.opcoes[2], this.p3.x, this.p3.y);
    image(this.opcoes[3], this.p4.x, this.p4.y);

    fill(255);

  }

  escolher(posicao) {
    console.log(posicao);
    console.log(this.posCertaArray);
    if(posicao-1 == this.posCertaArray-1) {
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
