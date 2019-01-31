var palavras = ["Qual o título da canção?",
                "Quem é o autor da música?",
                "Qual o mês da primavera?",
                "A letra remete a um ambiente de:",
                "Qual a mensagem da letra da música?",
                "Encontre sinônimos para a palavra 'brotar'",
                "A quem a letra da música faz referência?",
                "Quais nomes indígenas aparecem na música?",
                "Qual outro nome era dado ao Brasil?",
                "Quem foram os homens que chegaram às\nterras brasileiras no início da colonização?",
                "Os índios são exemplos de?"
                ];

var opcoesPorPalavra = [
  ["A\nSol de inverno", "B\nSol de primavera", "C\nSol de verão"],
  ["A\nBeto Guedes", "B\nRobson Santos", "C\nAndré Morais"],
  ["A\nMarço", "B\nJunho", "C\nSetembro"],
  ["A\nPrédios", "B\nNatureza", "C\nAmbientes fechados"],
  ["A\nGuerra", "B\nEsperança", "C\nSolidão"],
  ["A\nSurgir", "B\nPlantar", "C\nCavar"],
  ["A\nÍndios da Bolívia", "B\nÍndios do Faroeste", "C\nÍndios do Brasil"],
  ["A\nTupinambá\nCaetés", "B\nTupi\nGuaraná", "C\nCurumin\nCunhatã"],
  ["A\nTerra Brasilis", "B\nTerra Marinas", "C\nTerra do Sol"],
  ["A\nJaponeses e\nSoviéticos", "B\nPortugueses e\nEspanhois", "C\nChineses e\nAmericanos"],
  ["A\nPoluir os rios\ne os mares", "B\nMaltratar\nos animais", "C\nEquilibrio\nEcológico"]
];

var a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15;

var posCerta = [2, 1, 3, 2, 2, 1, 3, 3, 1, 2, 3];

var sons = [];
var blocoAtual = 0;
var blocos = [];
var numBlocos = 11;

var bkgImg;
var btProxImg;
var btProxImgVetor;
var btSomImg;

var tamanhoCirculo = 50;

var somErro;
var somSucesso;



function preload() {

  a1 = loadImage("../RECURSOS/IMAGENS/pic.PNG");
  a2 = loadImage("../RECURSOS/IMAGENS/pic.PNG");
  a3 = loadImage("../RECURSOS/IMAGENS/pic.PNG");
  a4 = loadImage("../RECURSOS/IMAGENS/pic.PNG");
  a5 = loadImage("../RECURSOS/IMAGENS/pic.PNG");
  a6 = loadImage("../RECURSOS/IMAGENS/pic.PNG");
  a7 = loadImage("../RECURSOS/IMAGENS/pic2.PNG");
  a8 = loadImage("../RECURSOS/IMAGENS/pic2.PNG");
  a9 = loadImage("../RECURSOS/IMAGENS/pic2.PNG");
  a10 = loadImage("../RECURSOS/IMAGENS/pic2.PNG");
  a11 = loadImage("../RECURSOS/IMAGENS/pic2.PNG");

  bkgImg = loadImage("../RECURSOS/IMAGENS/mod5-atv1.png");
  btProxImg = loadImage("../RECURSOS/IMAGENS/seta.png");
  btVoltarImg = loadImage("../RECURSOS/IMAGENS/seta.png");
  btSomImg = loadImage("../RECURSOS/IMAGENS/02.png");

}

function setup() {

  angleMode(DEGREES);
  frameRate(15);
  textAlign(CENTER);
  createCanvas(innerWidth, innerHeight);

  var vetor = [[a1], [a2], [a3], [a4], [a5], [a6], [a7], [a8], [a9], [a10], [a11]];

  btProxImgVetor = createVector((width / 15) * 13.6, (innerHeight / 18) * 5);     //setas
  btSomImgVetor = createVector((width / 44) * 29.5, (innerHeight / 8) * 2);
  btVoltarImgVetor = createVector((width / 16) * 7.4, (innerHeight / 12.5) * 4.4);

  for (var i = 0; i < numBlocos; i++) {
    blocos[i] = new Bloco(vetor[i], palavras[i], posCerta[i], opcoesPorPalavra[i]);
  }

  somErro = loadSound("../RECURSOS/AUDIOS/erro.mp3");
  somSucesso = loadSound("../RECURSOS/AUDIOS/sucesso.mp3");

  somErro.setVolume(0.8);
  somSucesso.setVolume(0.8);

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

  var d1 = dist(mouseX, mouseY, 38 * (innerWidth / 80), 55 * (innerHeight / 80)); //posição clicavel
  var d2 = dist(mouseX, mouseY, 55 * (innerWidth / 80), 55 * (innerHeight / 80));
  var d3 = dist(mouseX, mouseY, 70 * (innerWidth / 80), 55 * (innerHeight / 80));
  //var d4 = dist(mouseX, mouseY, 67 * (innerWidth / 80), 55 * (innerHeight / 80));

  if (d1 < tamanhoCirculo) {

    if (blocos[blocoAtual].escolher(1)) {
      blocos[blocoAtual].tocarCerto();
      avancarBloco();
    } else {
      blocos[blocoAtual].tocarErrado();
    }

  } else if (d2 < tamanhoCirculo) {

    if (blocos[blocoAtual].escolher(2)) {
      blocos[blocoAtual].tocarCerto();
      avancarBloco();
    } else {
      blocos[blocoAtual].tocarErrado();
    }

  } else if (d3 < tamanhoCirculo) {

    if (blocos[blocoAtual].escolher(3)) {
      blocos[blocoAtual].tocarCerto();
      avancarBloco();
    } else {
      blocos[blocoAtual].tocarErrado();
    }

  } 

  /*else if (d4 < tamanhoCirculo) {

    if (blocos[blocoAtual].escolher(4)) {
      blocos[blocoAtual].tocarCerto();
      avancarBloco();
    } else {
      blocos[blocoAtual].tocarErrado();
    }
  }*/
}

class Bloco {

  constructor(imagem, palavraCompleta, posCertaArray, opcoes) {

    this.imagem = imagem;
    this.palavraCompleta = palavraCompleta;
    this.posCertaArray = posCertaArray;
    this.opcoes = opcoes;
    this.pos = 25;

    this.posImagem = createVector(0.5*(innerWidth / 80), 8*(innerHeight / 80)); //imagem

  }

  mostrar() {

    textSize(36);
    text(this.palavraCompleta, 55 * (innerWidth / 80), 40 * (innerHeight / 80)); //pergunta

    this.imagem[0].resize(520, 520); // tamanho da imagem

    textSize(28);
    var a = 0;
    for (var i = 0; i < 30; i += 10) {
      fill(0);
      ellipse((this.pos + (i+a)) * (innerWidth / 52), 54 * (innerHeight / 80), tamanhoCirculo); // esferas
      fill(255);
      text(this.opcoes[i / 10], (this.pos + (i+a)) * (innerWidth / 52), 55.5 * (innerHeight / 80)); // respostas
      a = a;
    }

    image(this.imagem[0], this.posImagem.x, this.posImagem.y);


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
    somSucesso.play();
  }

  tocarErrado() {
    console.log("errado");
    somErro.play();
  }
}
