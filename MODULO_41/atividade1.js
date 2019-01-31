
var manchete1, manchete2, manchete3, manchete4, manchete5, manchete6, manchete7, manchete8, manchete9;

var balde, casa, mesa, dado, sapato, vaca, janela, xicara, alicate,
    revista, nuvem, barco, bola, escada, fogao, garfo, telefone, hospital,
    flor, isqueiro, ketchup, fogo, livro, ovo, queijo, ziper, escova, uva, porta, vaso, casa;

var opcoesPorSilaba;
var opcoesPorSilaba2;

var posCerta = [0, 1, 3, 1, 2, 0, 2, 3, 2];

var sons = [];
var blocoAtual = 0;
var blocos = [];
var numBlocos = 9;

var bkgImg;
var btProxImg;
var btProxImgVetor;
var btSomImg;

var somErro;
var somSucesso;

function preload() {

  manchete1    = loadImage("../RECURSOS/IMAGENS/manchete1-1.png");
  manchete2    = loadImage("../RECURSOS/IMAGENS/manchete2-2.png");
  manchete3    = loadImage("../RECURSOS/IMAGENS/manchete3-3.png");
  manchete4    = loadImage("../RECURSOS/IMAGENS/manchete4-4.png");
  manchete5    = loadImage("../RECURSOS/IMAGENS/manchete5-5.png");
  manchete6    = loadImage("../RECURSOS/IMAGENS/manchete6-6.png");
  manchete7    = loadImage("../RECURSOS/IMAGENS/manchete7-7.png");
  manchete8    = loadImage("../RECURSOS/IMAGENS/manchete8-8.png");
  manchete9    = loadImage("../RECURSOS/IMAGENS/manchete9-9.png");
  manchete10   = loadImage("../RECURSOS/IMAGENS/manchete2.png");

  onibus = loadImage("../RECURSOS/IMAGENS/onibus.png");
  
  lixo = loadImage("../RECURSOS/IMAGENS/lixo.png");
  arma = loadImage("../RECURSOS/IMAGENS/arma.png");
  aviao = loadImage("../RECURSOS/IMAGENS/aviao.png");
  moto = loadImage("../RECURSOS/IMAGENS/moto.png");
  igreja  = loadImage("../RECURSOS/IMAGENS/igreja.png");
  dinheiro = loadImage("../RECURSOS/IMAGENS/dinheiro.png");
  vacina      = loadImage("../RECURSOS/IMAGENS/vacina.png");
  mesa      = loadImage("../RECURSOS/IMAGENS/MesaF.png");
  dado      = loadImage("../RECURSOS/IMAGENS/DadoF.png");
  sapato    = loadImage("../RECURSOS/IMAGENS/sapato.png");
  vaca      = loadImage("../RECURSOS/IMAGENS/isqueiro.png");
  janela    = loadImage("../RECURSOS/IMAGENS/janela.png");
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
  casa      = loadImage("../RECURSOS/IMAGENS/CasaF.png");

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

  var opcoesPorSilaba2 = [[manchete1], [manchete2], [manchete3], [manchete4], 
            [manchete5], [manchete6], [manchete7], [manchete8],
             [manchete9], [manchete10]];

  var opcoesPorSilaba = [[vacina, mesa, dado, sapato],[vaca, dinheiro, xicara, alicate],[revista, bola, janela, casa],
                        [alicate, igreja, sapato, fogao],[mesa, garfo, moto, dado],[aviao, hospital, flor, isqueiro],
                        [ketchup, fogo, arma, livro],[ovo, garfo, fogao, lixo],[bola, escada, onibus, garfo]];

  btProxImgVetor = createVector((width / 14.5) * 10.6, (innerHeight / 15) * 3.3);
  btSomImgVetor = createVector((width / 50) * 10.6, (innerHeight / 10) * 2.5);
  btVoltarImgVetor = createVector((width / 16) * 11,(innerHeight / 11.2 ) * 3.3);

  for(var i = 0; i < numBlocos; i++) {
    blocos[i] = new Bloco(opcoesPorSilaba2[i], posCerta[i], opcoesPorSilaba[i]);
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

  var d1 = dist(mouseX, mouseY, 18*(innerWidth / 80) + (60), 58*(innerHeight / 80) + (60));
  var d2 = dist(mouseX, mouseY, 30*(innerWidth / 80) + (60), 58*(innerHeight / 80) + (60));
  var d3 = dist(mouseX, mouseY, 43*(innerWidth / 80) + (60), 58*(innerHeight / 80) + (60));
  var d4 = dist(mouseX, mouseY, 55*(innerWidth / 80) + (60), 58*(innerHeight / 80) + (60));

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

  constructor(imagem, posCertaArray, opcoes) {

    this.imagem = imagem;
    this.posCertaArray = posCertaArray;
    this.opcoes = opcoes;
    
    this.pos = 25;

    this.p1 = createVector(18*(innerWidth / 80), 56*(innerHeight / 80)); //distancia das figuras!!
    this.p2 = createVector(27*(innerWidth / 80), 56*(innerHeight / 80));
    this.p3 = createVector(41*(innerWidth / 80), 56*(innerHeight / 80));
    this.p4 = createVector(53*(innerWidth / 80), 56*(innerHeight / 80));

    this.tamanho = 120;

    this.posImagem = createVector(28*(innerWidth / 80), 14*(innerHeight / 80)); //imagem
    //this.posSilaba = createVector(38*(innerWidth / 80), 25*(innerHeight / 80)); //silaba

  }

  mostrar() {

    textSize(90);
    fill(255);
    //text(this.silaba, this.posSilaba.x, this.posSilaba.y);

    this.imagem[0].resize(370, 360);

    
    this.opcoes[0].resize(120, 120);
    this.opcoes[1].resize(120, 120);
    this.opcoes[2].resize(120, 120);
    this.opcoes[3].resize(120, 120);

    image(this.opcoes[0], this.p1.x, this.p1.y);
    image(this.opcoes[1], this.p2.x, this.p2.y);
    image(this.opcoes[2], this.p3.x, this.p3.y);
    image(this.opcoes[3], this.p4.x, this.p4.y);

    image(this.imagem[0], this.posImagem.x, this.posImagem.y);

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
    somSucesso.play();
  }

  tocarErrado() {
    console.log("errado");
    somErro.play();

  }
}
