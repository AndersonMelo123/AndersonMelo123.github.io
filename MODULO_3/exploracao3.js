

var silabas = ["qua", "gue", "bra", "cra", "dra", "fru", "gra", "pra", "tra", "vro",
                "blu", "cla", "fle", "glo", "pla", "tle", "cha", "nha",
                "lha", "an", "or", "es", "al", "vens", "im"];


var aquario, livro, gravata, prato,
    foguete, braço, fruta,
    flor, dragao, prato2,
    trator, blusa, clara, flecha, globo,
    placa, atleta, chicara, aranha, ilha,
    anta, orca, escada, alface, nuvens, amendoim;

var opcoesPorSilaba;

var posCerta = [1, 1, 1, 1, 1,
                1, 1, 1, 1, 1,
                1, 1, 1, 1, 1,
                1, 1, 1, 1, 1,
                1, 1, 1, 1, 1];

var sons = [];
var blocoAtual = 0;
var blocos = [];
var numBlocos = 25;

var bkgImg;
var btProxImg;
var btProxImgVetor;
var btSomImg;

var somErro;


function preload() {

  aquario     = loadImage("../RECURSOS/IMAGENS/aquario.png");
  livro     = loadImage("../RECURSOS/IMAGENS/LivroF.png");
  gravata    = loadImage("../RECURSOS/IMAGENS/gravata.png");
  foguete   = loadImage("../RECURSOS/IMAGENS/foguete.png");
  braço    = loadImage("../RECURSOS/IMAGENS/braco.png");
  fruta      = loadImage("../RECURSOS/IMAGENS/frutas.png");
  flor    = loadImage("../RECURSOS/IMAGENS/flor.png");
  dragao     = loadImage("../RECURSOS/IMAGENS/dragao.png");
  prato2  = loadImage("../RECURSOS/IMAGENS/prato.png");
  trator = loadImage("../RECURSOS/IMAGENS/trator.png");
  blusa    = loadImage("../RECURSOS/IMAGENS/camisa.png");
  clara    = loadImage("../RECURSOS/IMAGENS/clara.png");
  flecha   = loadImage("../RECURSOS/IMAGENS/flecha.png");
  globo    = loadImage("../RECURSOS/IMAGENS/globo.png");
  placa    = loadImage("../RECURSOS/IMAGENS/placa.png");
  atleta   = loadImage("../RECURSOS/IMAGENS/atleta.png");
  chicara  = loadImage("../RECURSOS/IMAGENS/xicara.png");
  aranha   = loadImage("../RECURSOS/IMAGENS/aranha.png");
  ilha     = loadImage("../RECURSOS/IMAGENS/ilha.png");
  anta     = loadImage("../RECURSOS/IMAGENS/anta.png");
  orca     = loadImage("../RECURSOS/IMAGENS/orca.png");
  escada   = loadImage("../RECURSOS/IMAGENS/escada.png");
  alface   = loadImage("../RECURSOS/IMAGENS/alface.png");
  nuvens   = loadImage("../RECURSOS/IMAGENS/nuvens.png");
  amendoim = loadImage("../RECURSOS/IMAGENS/amendoin.png");

  bkgImg = loadImage("../RECURSOS/IMAGENS/mod3-exp3.png");
  btProxImg = loadImage("../RECURSOS/IMAGENS/seta.png");
  btVoltarImg = loadImage("../RECURSOS/IMAGENS/seta.png");
  //btSomImg = loadImage("../RECURSOS/IMAGENS/02.png");

}

function setup() {

  angleMode(DEGREES);
  frameRate(15);
  textAlign(CENTER);
  createCanvas(innerWidth, innerHeight);

  var opcoesPorSilaba = [[aquario], [foguete], [braço], [flor], [dragao], [fruta], [gravata], [prato2], [trator], [livro],
                         [blusa], [clara], [flecha], [globo], [placa], [atleta], [chicara], [aranha], [ilha],
                         [anta], [orca], [escada], [alface], [nuvens], [amendoim],];

  btProxImgVetor = createVector((width / 15) * 10.6, (innerHeight / 13) * 3.3);
  //btSomImgVetor = createVector((width / 43) * 10.6, (innerHeight / 9) * 2);
  btVoltarImgVetor = createVector((width / 16) * 11,(innerHeight / 9.9) * 3.3);

  for(var i = 0; i < numBlocos; i++) {
    blocos[i] = new Bloco(silabas[i], opcoesPorSilaba[i]);
  }

  //somErro = loadSound("../RECURSOS/AUDIOS/erro.mp3");

  //somErro.setVolume(0.7);

  // blocos[0].tocar();

}

function draw() {

  background(bkgImg);
  image(btProxImg, btProxImgVetor.x, btProxImgVetor.y, 50, 50);
  push();
  rotate(180);
  image(btVoltarImg, -btVoltarImgVetor.x, -btVoltarImgVetor.y, 50, 50);
  pop();
  //image(btSomImg, btSomImgVetor.x, btSomImgVetor.y, 50, 50);
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

  //var inicioBtSomX = btSomImgVetor.x;
  //var inicioBtSomY = btSomImgVetor.y;

  //var fimBtSomX = btSomImgVetor.x + 50;
  //var fimBtSomY = btSomImgVetor.y + 50;

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
    //this.posCertaArray = posCertaArray;
    this.opcoes = opcoes;
    this.pos = 25;

    this.p1 = createVector(36*(innerWidth / 80), 40*(innerHeight / 80));
    //this.p2 = createVector(30*(innerWidth / 80), 40*(innerHeight / 80)); //figuras
    //this.p3 = createVector(40*(innerWidth / 80), 40*(innerHeight / 80));
    //this.p4 = createVector(50*(innerWidth / 80), 40*(innerHeight / 80));

    this.tamanho = 120;

    this.posSilaba = createVector(40*(innerWidth / 80), 30*(innerHeight / 80));

  }

  mostrar() {

    textSize(90);
    text(this.silaba, this.posSilaba.x, this.posSilaba.y);

    fill(0);

    this.opcoes[0].resize(170, 160);
    //this.opcoes[1].resize(120, 120);
    //this.opcoes[2].resize(120, 120);
    //this.opcoes[3].resize(120, 120);

    image(this.opcoes[0], this.p1.x, this.p1.y);
    //image(this.opcoes[1], this.p2.x, this.p2.y);
    //image(this.opcoes[2], this.p3.x, this.p3.y);
    //image(this.opcoes[3], this.p4.x, this.p4.y);

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
  }

  tocarErrado() {
    console.log("errado");
    somErro.play();
  }
}
