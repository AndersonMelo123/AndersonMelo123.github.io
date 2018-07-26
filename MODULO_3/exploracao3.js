

var silabas = ["Aquário", "Foguete", "Braço", "Cravo", "Dragão", "Frutas", "Gravata", "Prato", "Trator", "Livro",
                "Blusa", "Clara", "Flecha", "Globo", "Placa", "Atleta", "Chá", "Aranha",
                "Ilha", "Anta", "Orca", "Escada", "Alface", "Nuvens", "Amendoim"];


var sil = ["qua", "gue", "bra", "cra", "dra", "fru", "gra", "pra", "tra", "vro",
                "blu", "cla", "fle", "glo", "pla", "tle", "cha", "nha",
                "lha", "an", "or", "es", "al", "vens", "im"];


var palavras = [
"qua", "que", "qui", "   ", "   ",
"gua", "gue", "gui", "   ", "   ",
"bra", "bre", "bri", "bro", "bru",
"cra", "cre", "cri", "cro", "cru",
"dra", "dre", "dri", "dro", "dru",
"fra", "fre", "fri", "fro", "fru",
"gra", "gre", "gri", "gro", "gru",
"pra", "pre", "pri", "pro", "pru",
"tra", "tre", "tri", "tro", "tru",
"vra", "vre", "vro", "   ", "   ",
"bla", "ble", "bli", "blo", "blu",
"cla", "cle", "cli", "clo", "clu",
"fla", "fle", "fli", "flo", "flu",
"gla", "gli", "glo", "glu", "   ",
"pla", "ple", "pli", "plo", "plu",
"tla", "tle", "   ", "   ", "   ",
"cha", "che", "chi", "cho", "chu",
"nha", "nhe", "nhi", "nho", "nhu",
"lha","lhe","lhi","lho","lhu",
"an","en","in","on","un",
"ar","er","ir","or","ur",
"as","es","is","os","us", 
"al","el","il", "   ", "   ",
"as","es","is", "   ", "   ",
"al","el","il", "   ", "   ",

];

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
var blocoAtual2 = 0;

var blocos = [];
var blocos2 = [];

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
    blocos[i] = new Bloco(silabas[i], opcoesPorSilaba[i], palavras[5*i], palavras[5*i+1], palavras[5*i+2], palavras[5*i+3], palavras[5*i+4]);
    blocos2[i] = new Bloco2(sil[i]); 
  }

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
  blocos2[blocoAtual2].mostrar();

}

function avancarBloco() {
  blocoAtual++;
  blocoAtual2++;
  if(blocoAtual > numBlocos-1) {
    blocoAtual = 0;
  }
  if(blocoAtual2 > numBlocos-1) {
    blocoAtual2= 0;
  }
}

function voltarBloco() {
  blocoAtual--;
  blocoAtual2--;
  if(blocoAtual < 0) {
    blocoAtual = numBlocos-1;
  }
  if(blocoAtual2 < 0) {
    blocoAtual2 = numBlocos-1;
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

  constructor(silaba, opcoes, palavra1, palavra2, palavra3, palavra4, palavra5) {

    this.silaba = silaba;
    //this.posCertaArray = posCertaArray;
    this.opcoes = opcoes;
    this.palavra1 = palavra1;
    this.palavra2 = palavra2;
    this.palavra3 = palavra3;
    this.palavra4 = palavra4;
    this.palavra5 = palavra5;
    this.pos = 25;

    this.p1 = createVector(36*(innerWidth / 80), 33*(innerHeight / 80));

    this.tamanho = 120;

    this.posSilaba = createVector(40*(innerWidth / 80), 26*(innerHeight / 80));

  }

  mostrar() {

    textSize(80);
    fill(255);
    text(this.silaba, this.posSilaba.x, this.posSilaba.y);

    this.opcoes[0].resize(170, 160);

    var alturaPalavras = 32;
    var scl = 80;
    var t1 = 
    text(this.palavra1, 23 * (innerWidth / scl), (-3 + alturaPalavras) * (innerHeight / scl)); //palavras do lado
    text(this.palavra2, 23 * (innerWidth / scl), (6 + alturaPalavras) * (innerHeight / scl));
    text(this.palavra3, 23 * (innerWidth / scl), (15 + alturaPalavras) * (innerHeight / scl));
    text(this.palavra4, 23 * (innerWidth / scl), (24 + alturaPalavras) * (innerHeight / scl));
    text(this.palavra5, 23 * (innerWidth / scl), (33 + alturaPalavras) * (innerHeight / scl));

    image(this.opcoes[0], this.p1.x, this.p1.y);
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

class Bloco2 {

  constructor(silaba) {

    this.silaba = silaba;
    this.pos = 25;

    this.p1 = createVector(36*(innerWidth / 80), 40*(innerHeight / 80));
    this.tamanho = 120;

    this.posSilaba = createVector(40*(innerWidth / 80), 64*(innerHeight / 80));

  }

  mostrar() {

    textSize(85);
    text(this.silaba, this.posSilaba.x, this.posSilaba.y);

    fill(0);

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
