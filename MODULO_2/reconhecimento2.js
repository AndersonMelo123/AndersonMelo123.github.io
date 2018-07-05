var silabas = ["CA","JA","BO","ES","TE","NU","DA","LI","FO","GA","ZI","XI","ME","PO","RE","VA","HO","BA","A","U"];
var balde, casa, mesa, dado, sapato, vaca, janela, xicara, alicate, revista, nuvem, barco, bola, escada, fogao, garfo, telefone, hospital, flor, isqueiro, ketchup, fogo, livro, ovo, queijo, ziper, escova, uva, porta, vaso;
var opcoesPorSilaba;
var posCerta = [0, 1, 3, 1, 2, 0, 2, 3, 2, 3, 0, 2, 3, 1, 3, 3, 0, 2, 3, 0];

var sons = [];
var blocoAtual = 0;
var blocos = [];
var numBlocos = 20;

var bkgImg;
var btProxImg;
var btProxImgVetor;
var btSomImg;

var somErro;

function preload() {

  casa      = loadImage("../RECURSOS/IMAGENS/CasaF2.png");
  mesa      = loadImage("../RECURSOS/IMAGENS/MesaF.png");
  dado      = loadImage("../RECURSOS/IMAGENS/DadoF.png");
  sapato    = loadImage("../RECURSOS/IMAGENS/SapatoF2.png");
  vaca      = loadImage("../RECURSOS/IMAGENS/VacaF2.png");
  janela    = loadImage("../RECURSOS/IMAGENS/JanelaF.png");
  xicara    = loadImage("../RECURSOS/IMAGENS/XicaraF.png");
  alicate   = loadImage("../RECURSOS/IMAGENS/AlicateF.png");
  revista   = loadImage("../RECURSOS/IMAGENS/RevistaF2.png");
  nuvem     = loadImage("../RECURSOS/IMAGENS/NuvemF2.png");
  escada    = loadImage("../RECURSOS/IMAGENS/EscadaF.png");
  fogao     = loadImage("../RECURSOS/IMAGENS/FogaoF2.png");
  garfo     = loadImage("../RECURSOS/IMAGENS/GarfoF.png");
  telefone  = loadImage("../RECURSOS/IMAGENS/TelefoneF.png");
  hospital  = loadImage("../RECURSOS/IMAGENS/HospitalF.png");
  isqueiro  = loadImage("../RECURSOS/IMAGENS/IsqueiroF.png");
  ketchup   = loadImage("../RECURSOS/IMAGENS/KetchupF.png");
  livro     = loadImage("../RECURSOS/IMAGENS/LivroF.png");
  ovo       = loadImage("../RECURSOS/IMAGENS/OvoF2.png");
  queijo    = loadImage("../RECURSOS/IMAGENS/QueijoF2.png");
  ziper     = loadImage("../RECURSOS/IMAGENS/ZiperF2.png");
  uva       = loadImage("../RECURSOS/IMAGENS/UvaF2.png");
  porta     = loadImage("../RECURSOS/IMAGENS/PortaF.png");
  flor      = loadImage("../RECURSOS/IMAGENS/FlorF.png");
  escova    = loadImage("../RECURSOS/IMAGENS/EscovaF.png");
  vaso      = loadImage("../RECURSOS/IMAGENS/VasoF.png");
  fogo      = loadImage("../RECURSOS/IMAGENS/FogoF.png");
  bola      = loadImage("../RECURSOS/IMAGENS/BolaF.png");
  barco     = loadImage("../RECURSOS/IMAGENS/BarcoF.png");
  balde     = loadImage("../RECURSOS/IMAGENS/BaldeF.png");

  bkgImg = loadImage("../RECURSOS/IMAGENS/mod2-rec2.png");
  btProxImg = loadImage("../RECURSOS/IMAGENS/seta.png");
  btVoltarImg = loadImage("../RECURSOS/IMAGENS/seta.png");
  btSomImg = loadImage("../RECURSOS/IMAGENS/02.png");

}

function setup() {

  angleMode(DEGREES);
  frameRate(15);
  textAlign(CENTER);
  createCanvas(innerWidth, innerHeight);

  var opcoesPorSilaba = [[casa, mesa, dado, sapato],[vaca, janela, xicara, alicate],[revista, nuvem, barco, bola],[alicate, escada, sapato, fogao],[mesa, garfo, telefone, dado],[nuvem, hospital, flor, isqueiro],[ketchup, fogo, dado, livro],[ovo, barco, queijo, livro],[bola, escada, fogo, garfo],[livro, xicara, ziper, garfo],[ziper, escova, dado, vaca],[mesa, uva, xicara, sapato],[bola, queijo, revista, mesa],[janela, porta, isqueiro, barco],[bola, balde, fogo, revista],[ketchup, fogo, ziper, vaso],[hospital, sapato, escada, queijo],[vaca, bola, barco, isqueiro],[barco, porta, escova, alicate],[uva, balde, garfo, livro]];

  btProxImgVetor = createVector((width / 14.5) * 10.6, (innerHeight / 15) * 3.3);
  btSomImgVetor = createVector((width / 50) * 10.6, (innerHeight / 10) * 2);
  btVoltarImgVetor = createVector((width / 16) * 11,(innerHeight / 11.2 ) * 3.3);

  for(var i = 0; i < numBlocos; i++) {
    blocos[i] = new Bloco(silabas[i], posCerta[i], opcoesPorSilaba[i]);
  }

  somErro = loadSound("../RECURSOS/AUDIOS/erro.mp3");
  somErro.setVolume(0.7);


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

  constructor(silaba, posCertaArray, opcoes) {

    this.silaba = silaba;
    this.posCertaArray = posCertaArray;
    this.opcoes = opcoes;
    this.pos = 25;

    this.p1 = createVector(15*(innerWidth / 80), 40*(innerHeight / 80)); //distancia das figuras!!
    this.p2 = createVector(26*(innerWidth / 80), 40*(innerHeight / 80));
    this.p3 = createVector(40*(innerWidth / 80), 40*(innerHeight / 80));
    this.p4 = createVector(52*(innerWidth / 80), 40*(innerHeight / 80));

    this.tamanho = 120;

    this.posSilaba = createVector(38*(innerWidth / 80), 25*(innerHeight / 80)); //silaba

  }

  mostrar() {

    textSize(90);
    text(this.silaba, this.posSilaba.x, this.posSilaba.y);

    fill(0);

    this.opcoes[0].resize(160, 160);
    this.opcoes[1].resize(160, 160);
    this.opcoes[2].resize(160, 160);
    this.opcoes[3].resize(160, 160);

    image(this.opcoes[0], this.p1.x, this.p1.y);
    image(this.opcoes[1], this.p2.x, this.p2.y);
    image(this.opcoes[2], this.p3.x, this.p3.y);
    image(this.opcoes[3], this.p4.x, this.p4.y);

    fill(255);

  }

  escolher(posicao) {
    console.log(posicao);
    console.log(this.posCertaArray);
    if(posicao-1 == this.posCertaArray) {
      return true;
    } else {
      return false;
    }
  }

  tocarCerto() {
    console.log("certo");
  }

  tocarErrado() {
    console.log("errado");
    somErro.play();

  }
}
