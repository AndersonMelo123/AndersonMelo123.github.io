var palavras = [
  "Ca__do",
  "Mesa__",
  "__vore",
  "Sapa__",
  "Ja__la",
  "Pare__",
  "Ro__do",
  "__vista",
  "Bo__to",
  "_licate",
  "Tele__ne",
  "Igre__",
  "__cada",
  "Xa__pe",
  "__dido",
  "Pita__",
  "Es__la",
  "Hos__tal",
  "__cife",
  "Zabum__"
];

var opcoesPorPalavra = [
  ["sa", "na", "de", "me"],
  ["ca", "di", "da", "le"],
  ["me", "ar", "si", "ru"],
  ["se", "xo", "to", "ze"],
  ["ge", "ne", "vu", "bi"],
  ["ce", "fu", "ho", "de"],
  ["de", "sa", "pi", "ro"],
  ["tu", "da", "re", "vi"],
  ["to", "be", "zi", "ni"],
  ["a", "co", "xo", "vi"],
  ["be", "nu", "fo", "ma"],
  ["se", "du", "fi", "ja"],
  ["ga", "es", "he", "ju"],
  ["ki", "lu", "ro", "re"],
  ["pe", "tu", "ci", "ga"],
  ["ke", "vi", "bi", "da"],
  ["fu", "za", "co", "ru"],
  ["lo", "pi", "ge", "nu"],
  ["re", "ji", "pa", "du"],
  ["xo", "zi", "ba", "fe"]
];

var posCerta = [1, 3, 2, 3, 2, 4, 2, 3, 4, 1, 3, 4, 2, 3, 1, 4, 3, 2, 1, 3];

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

  bkgImg = loadImage("../RECURSOS/IMAGENS/mod2-rec5.png");
  btProxImg = loadImage("../RECURSOS/IMAGENS/seta.png");
  btVoltarImg = loadImage("../RECURSOS/IMAGENS/seta.png");
  btSomImg = loadImage("../RECURSOS/IMAGENS/02.png");

}

function setup() {

  angleMode(DEGREES);
  frameRate(15);
  textAlign(CENTER);
  createCanvas(innerWidth, innerHeight);

  btProxImgVetor = createVector((width / 14.8) * 10.6, (innerHeight / 12) * 3.3);
  btSomImgVetor = createVector((width / 48) * 10.6, (innerHeight / 12) * 3.3);
  btVoltarImgVetor = createVector((width / 16) * 11, (innerHeight / 9.5) * 3.3);

  for (var i = 0; i < numBlocos; i++) {
    blocos[i] = new Bloco("listaPalavrasArray", palavras[i], posCerta[i], opcoesPorPalavra[i]);
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

  if (d1 < 120) {

    if (blocos[blocoAtual].escolher(1)) {
      blocos[blocoAtual].tocarCerto();
      avancarBloco();
    } else {
      blocos[blocoAtual].tocarErrado();
    }

  } else if (d2 < 120) {

    if (blocos[blocoAtual].escolher(2)) {
      blocos[blocoAtual].tocarCerto();
      avancarBloco();
    } else {
      blocos[blocoAtual].tocarErrado();
    }

  } else if (d3 < 120) {

    if (blocos[blocoAtual].escolher(3)) {
      blocos[blocoAtual].tocarCerto();
      avancarBloco();
    } else {
      blocos[blocoAtual].tocarErrado();
    }

  } else if (d4 < 120) {

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

  }

  mostrar() {

    textSize(90);
    text(this.palavraCompleta, 40 * (innerWidth / 80), 35 * (innerHeight / 80));

    textSize(70);
    for (var i = 0; i < 40; i += 10) {
      fill(0);
      ellipse((this.pos + i) * (innerWidth / 80), 55 * (innerHeight / 80), 120);
      fill(255);
      text(this.opcoes[i / 10], (this.pos + i) * (innerWidth / 80), 58 * (innerHeight / 80));
    }

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
  }

  tocarErrado() {
    console.log("errado");
    somErro.play();
  }
}
