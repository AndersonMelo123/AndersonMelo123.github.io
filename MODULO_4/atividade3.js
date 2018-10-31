var palavras = ["FOGÃO", "LEQUE", "ESCADA", "ISQUEIRO", "BALDE", "XICARA", "ALICATE", "ARANHA", "ÔNIBUS", "DINHEIRO"];

var silabas = [["A", "To", "Lha"], ["To", "Pra", "ppp"], ["Co", "Tron", "ppp"], ["Co", "Te", "La", "Cho"], ["Ci", "Cle", "Bi", "Ta"],
  ["Tra", "Sei", "Ves", "Ro"], ["Chor", "Ro", "Ca"], ["Vas", "Sou", "Ra"], ["Nho", "Mi", "Ca"], ["Cha", "La", "Bo"]];

var formasErradas = [[3, 3, 3], [3, 3, 3], [3, 3, 3], [3, 3, 3, 3], [1, 2, 3, 3], [3, 3, 3, 3], [3, 3, 3], [3, 3, 3], [3, 3, 3], [3, 3, 3]];

var formasCertas = [[3, 1, 2], [1, 3], [2, 1], [2, 1, 3, 4], [3, 1, 2, 4], [3, 1, 2, 4], [4, 2, 1], [3, 1, 2], [2, 3, 1], [4, 3, 2]];

var a1, a2, a3, a4, a5, a6, a7, a8, a9, a10;

var sons = [];
var blocoAtual = 0;
var blocos = [];
var numBlocos = 10;
var vetor;

var bkgImg;
var btProxImg;
var btProxImgVetor;
var btSomImg;

var posInput;

var input, button;

var somErro;
var somSucesso;


function preload() {

  a1 = loadImage("../RECURSOS/IMAGENS/FFogao.png");
  a2 = loadImage("../RECURSOS/IMAGENS/leque.png");
  a3 = loadImage("../RECURSOS/IMAGENS/escada.png");
  a4 = loadImage("../RECURSOS/IMAGENS/isqueiro.png");
  a5 = loadImage("../RECURSOS/IMAGENS/balde.png");
  a6 = loadImage("../RECURSOS/IMAGENS/xxicara.png");
  a7 = loadImage("../RECURSOS/IMAGENS/alicate.png");
  a8 = loadImage("../RECURSOS/IMAGENS/aranha.png");
  a9 = loadImage("../RECURSOS/IMAGENS/onibus1.png");
  a10 = loadImage("../RECURSOS/IMAGENS/dinheiro.png");

  bkgImg = loadImage("../RECURSOS/IMAGENS/mod4-rec3.png");
  btProxImg = loadImage("../RECURSOS/IMAGENS/seta.png");
  btVoltarImg = loadImage("../RECURSOS/IMAGENS/seta.png");
  btSomImg = loadImage("../RECURSOS/IMAGENS/02.png");

}

function setup() {

  angleMode(DEGREES);
  frameRate(15);
  textAlign(CENTER);
  createCanvas(innerWidth, innerHeight);

  var vetor = [[a1], [a2], [a3], [a4], [a5], [a6], [a7], [a8], [a9], [a10]];

  posInput = createVector((innerWidth / 12) * 4.8, (innerHeight / 10.4) * 7); //botao

  input = createInput();
  input.position(posInput.x, posInput.y);

  button = createButton("Responder");
  button.position(input.x + 0.5 * input.width - 99, posInput.y + input.height);
  button.mousePressed(darEntrada);
  input.changed(darEntrada);

  btProxImgVetor = createVector((innerWidth / 15) * 10.6, (innerHeight / 4) * 3.3);
  btSomImgVetor = createVector((innerWidth / 45) * 9.6, (innerHeight / 14.5) * 3.3);
  btVoltarImgVetor = createVector((innerWidth / 16) * 10.6, (innerHeight / 3.7) * 3.3);

  for (var i = 0; i < numBlocos; i++) {
    blocos[i] = new Bloco(vetor[i], silabas[i], formasErradas[i], formasCertas[i], palavras[i]);
  }


  somErro = loadSound("../RECURSOS/AUDIOS/erro.mp3");
  somSucesso = loadSound("../RECURSOS/AUDIOS/sucesso.mp3");

  somErro.setVolume(0.7);
  somSucesso.setVolume(0.7);

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

function darEntrada() {

  let entrada = input.value();

  if (blocos[blocoAtual].escolher(entrada)) {
    input.value("");
    avancarBloco();
  } else {
    input.value("");
  }

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
}

class Bloco {

  constructor(imagem, silabas, erradas, certas, palavra) {

    this.imagem = imagem;
    this.silabas = silabas;
    this.nSilabas = this.silabas.length;
    this.erradas = erradas;
    this.certas = certas;
    this.palavra = palavra;

    this.alturaPecas = 35;

    this.p1 = createVector(32 * (innerWidth / 80), this.alturaPecas * (innerHeight / 80));
    this.p2 = createVector(37 * (innerWidth / 80), this.alturaPecas * (innerHeight / 80)); //bolas pequenas
    this.p3 = createVector(42 * (innerWidth / 80), this.alturaPecas * (innerHeight / 80));
    this.p4 = createVector(47 * (innerWidth / 80), this.alturaPecas * (innerHeight / 80));

    this.posSilaba1 = createVector(23 * (innerWidth / 80), 43 * (innerHeight / 80)); //bolas grandes
    this.posSilaba2 = createVector(33 * (innerWidth / 80), 43 * (innerHeight / 80));
    this.posSilaba3 = createVector(43 * (innerWidth / 80), 43 * (innerHeight / 80));
    this.posSilaba4 = createVector(53 * (innerWidth / 80), 43 * (innerHeight / 80));

    this.posImagem = createVector(33*(innerWidth / 80), 20*(innerHeight / 80)); //imagem

    this.posSilaba = [this.posSilaba1, this.posSilaba2, this.posSilaba3, this.posSilaba4];

    this.posPErrada = [this.p1, this.p2, this.p3, this.p4];

  }

  // TODO: organizar indexes (-1, +1) pra 0

  desenharCerto(tipo, pos) {
    let posP = this.posPErrada[pos - 1];

    switch (tipo) {
      case 1:
        push();
        ellipse(posP.x + 40, posP.y + 40, 60, 40);
        pop();
        break;
      case 2:
        push();
        ellipse(posP.x + 40, posP.y + 40, 55, 60);
        pop();
        break;
      case 3:
        push();
        rect(posP.x, posP.y + 20, 60, 40);
        pop();
        break;
      case 4:
        push();
        arc(posP.x + 40, posP.y + 60, 80, 80, 180, 0);
        pop();
        break;
    }

  }

  desenharErrado(silaba, tipo, pos) {

    let posP = this.posSilaba[pos - 1];

    switch (tipo) {
      case 1:
        push();
        rect(posP.x, posP.y, 100, 60);
        textSize(40);
        text(silaba, posP.x + 40, posP.y + 50);
        pop();
        break;
      case 2:
        push();
        rect(posP.x, posP.y, 100, 60);
        textSize(40);
        text(silaba, posP.x + 40, posP.y + 50);
        pop();
        break;
      case 3:
        push();
        rect(posP.x, posP.y, 100, 60);
        textSize(40);
        text(silaba, posP.x + 55, posP.y + 50);
        pop();
        break;
      case 4:
        push();
        rect(posP.x, posP.y, 100, 60);
        textSize(40);
        text(silaba, posP.x + 40, posP.y + 50);
        pop();
        break;
    }

  }

  mostrar() {

    this.imagem[0].resize(230, 220);

    for (var i = 1; i < this.nSilabas + 1; i++) {
      //this.desenharErrado(this.silabas[i - 1], this.erradas[i - 1], i);
      //this.desenharCerto(this.certas[i - 1], i);
    }

    image(this.imagem[0], this.posImagem.x, this.posImagem.y);

  }

  escolher(entrada) {
    if (entrada.toUpperCase() == this.palavra) {
      console.log("certo");
      somSucesso.play();
      return true;
    } else {
      console.log("errado");
      somErro.play();
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
