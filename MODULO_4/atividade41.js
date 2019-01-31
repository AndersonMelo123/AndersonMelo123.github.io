var palavras = ["Qual é o nome da revista?",
                "Qual é o título da revista?",
                "Na expressão 'Quem são eles?' a\nquem se refere o pronome ELES?",
                "De acordo com o subtítulo quem paralisou as\n principais cidades brasileiras?",
                "O que o rapaz da foto\ntransmite com seu gesto?",
                "Qual o nome do jornal?",
                "Qual a manchete principal?",
                "Qual a data de publicação do jornal?",
                "Quantos anos tem a revista?",
                "Quantos anos o brasileiro trabalha\npara pagar impostos?",
                "O panfleto é sobre o que?",
                "Em qual Estado se encontra o estabelecimento?",
                "Qual o horário de atendimento?",
                "O que a empresa aluga?",
                "Que tipo de cartão a empresa aceita?",
                ];

var opcoesPorPalavra = [
  ["A\nVeja", "B\nÉpoca", "C\nCapricho"],
  ["A\nQuem são eles?", "B\nViva a diferença", "C\nEntrevista"],
  ["A\nLutadores", "B\nSoldados do exército", "C\nManifestantes"],
  ["A\nAs mídias", "B\nManifestantes de rua", "C\nBombeiros"],
  ["A\nMedo e felicidade", "B\nDeterminação e luta", "C\nAlegria e vergonha"],
  ["A\nO Globo", "B\nA Gazeta", "C\nVeja"],
  ["A\nSEDU divulga\nlista de aprovados\nem concurso", "B\nPesquisa: maioria\nquer mais um\nmandato para Lula", "C\nBrasileiro trabalha\n30 anos para\npagar impostos"],
  ["A\nsegunda-feira\n11/08/2018", "B\nquinta-feira\n14/07/2013", "C\nterça-feria\n29/04/2008"],
  ["A\n80 anos", "B\n8 anos", "C\n14 anos"],
  ["A\n3 anos", "B\n30 anos", "C\n35 anos"],
  ["A\nMateriais de\nescritório", "B\nMateriais de\nconstrução", "C\nMateriais para\nfestas e eventos"],
  ["A\nPE", "B\nAL", "C\nBA"],
  ["A\nTarde e noite", "B\nManhã e tarde", "C\nManhã, tarde e noite"],
  ["A\nMesas e cadeiras", "B\nCerveja e refrigerante", "C\nGelo e carvão"],
  ["A\nCartões de crédito", "B\nCartões de Natal", "C\nCartões de visita"]
];

var a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15;

var posCerta = [2, 1, 3, 2, 2, 2, 3, 3, 1, 2, 3, 3, 2, 1, 1];

var sons = [];
var blocoAtual = 0;
var blocos = [];
var numBlocos = 15;

var bkgImg;
var btProxImg;
var btProxImgVetor;
var btSomImg;

var tamanhoCirculo = 50;

var somErro;
var somSucesso;



function preload() {

  a1 = loadImage("../RECURSOS/IMAGENS/revista_epoca.jpg");
  a2 = loadImage("../RECURSOS/IMAGENS/revista_epoca.jpg");
  a3 = loadImage("../RECURSOS/IMAGENS/revista_epoca.jpg");
  a4 = loadImage("../RECURSOS/IMAGENS/revista_epoca.jpg");
  a5 = loadImage("../RECURSOS/IMAGENS/revista_epoca.jpg");
  a6 = loadImage("../RECURSOS/IMAGENS/revista_gazeta.jpg");
  a7 = loadImage("../RECURSOS/IMAGENS/revista_gazeta.jpg");
  a8 = loadImage("../RECURSOS/IMAGENS/revista_gazeta.jpg");
  a9 = loadImage("../RECURSOS/IMAGENS/revista_gazeta.jpg");
  a10 = loadImage("../RECURSOS/IMAGENS/revista_gazeta.jpg");
  a11 = loadImage("../RECURSOS/IMAGENS/panfleto_cerveja.jpg");
  a12 = loadImage("../RECURSOS/IMAGENS/panfleto_cerveja.jpg");
  a13 = loadImage("../RECURSOS/IMAGENS/panfleto_cerveja.jpg");
  a14 = loadImage("../RECURSOS/IMAGENS/panfleto_cerveja.jpg");
  a15 = loadImage("../RECURSOS/IMAGENS/panfleto_cerveja.jpg");

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

  var vetor = [[a1], [a2], [a3], [a4], [a5], [a6], [a7], [a8], [a9], [a10], [a11], [a12], [a13], [a14], [a15]];

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
