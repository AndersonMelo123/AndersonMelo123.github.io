var palavras = [
  "TOALHA",
  "PRATO",
  "TRONCO",
  "CHOCOLATE",
  "BICICLETA",
  "TRAVESSEIRO",
  "CACHORRO",
  "VASSOURA",
  "MINHOCA",
  "BOLACHA"
];

var silabas = [
  ["A", "To", "Lha"],
  ["To", "Pra"],
  ["Co", "Tron"],
  ["Co", "Te", "La", "Cho"],
  ["Ci", "Cle", "Bi", "Ta"],
  ["Tra", "Sei", "Ves", "Ro"],
  ["Chor", "Ro", "Ca"],
  ["Vas", "Sou", "Ra"],
  ["Nho", "Mi", "Ca"],
  ["Cha", "La", "Bo"]
];

var formasErradas = [
  [1, 3, 2],
  [3, 1],
  [1, 2],
  [1, 4, 3, 2],
  [1, 2, 3, 4],
  [3, 2, 1, 4],
  [2, 1, 4],
  [3, 1, 2],
  [3, 2, 1],
  [2, 3, 4]
];

var formasCertas = [
  [3, 1, 2],
  [1, 3],
  [2, 1],
  [2, 1, 3, 4],
  [3, 1, 2, 4],
  [3, 1, 2, 4],
  [4, 2, 1],
  [3, 1, 2],
  [2, 3, 1],
  [4, 3, 2]
];

var sons = [];
var blocoAtual = 0;
var blocos = [];
var numBlocos = 10;

var bkgImg;
var btProxImg;
var btProxImgVetor;
var btSomImg;

var posInput;

var input, button;

var somErro;


function preload() {
  bkgImg = loadImage("../RECURSOS/IMAGENS/mod3-rec4.png");
  btProxImg = loadImage("../RECURSOS/IMAGENS/seta.png");
  btVoltarImg = loadImage("../RECURSOS/IMAGENS/seta.png");
  btSomImg = loadImage("../RECURSOS/IMAGENS/02.png");

}

function setup() {

  angleMode(DEGREES);
  frameRate(15);
  textAlign(CENTER);
  createCanvas(innerWidth, innerHeight);

  posInput = createVector((innerWidth / 12) * 4.5, (innerHeight / 11) * 7); //botao

  input = createInput();
  input.position(posInput.x, posInput.y);

  button = createButton("OK");
  button.position(input.x + 0.5 * input.width - 99, posInput.y + input.height);
  button.mousePressed(darEntrada);
  input.changed(darEntrada);

  btProxImgVetor = createVector((innerWidth / 15) * 10.6, (innerHeight / 4.5) * 3.3);
  btSomImgVetor = createVector((innerWidth / 45) * 10.6, (innerHeight / 4.5) * 3.3);
  btVoltarImgVetor = createVector((innerWidth / 16) * 10.6, (innerHeight / 4.1) * 3.3);

  for (var i = 0; i < numBlocos; i++) {
    blocos[i] = new Bloco(silabas[i], formasErradas[i], formasCertas[i], palavras[i]);
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

  constructor(silabas, erradas, certas, palavra) {

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

    this.posSilaba1 = createVector(23 * (innerWidth / 80), 20 * (innerHeight / 80)); //bolas grandes
    this.posSilaba2 = createVector(33 * (innerWidth / 80), 20 * (innerHeight / 80));
    this.posSilaba3 = createVector(43 * (innerWidth / 80), 20 * (innerHeight / 80));
    this.posSilaba4 = createVector(53 * (innerWidth / 80), 20 * (innerHeight / 80));

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
        ellipse(posP.x + 40, posP.y + 40, 120, 80);
        textSize(40);
        text(silaba, posP.x + 40, posP.y + 50);
        pop();
        break;
      case 2:
        push();
        ellipse(posP.x + 40, posP.y + 40, 110, 120);
        textSize(40);
        text(silaba, posP.x + 40, posP.y + 50);
        pop();
        break;
      case 3:
        push();
        rect(posP.x, posP.y, 120, 80);
        textSize(40);
        text(silaba, posP.x + 55, posP.y + 50);
        pop();
        break;
      case 4:
        push();
        arc(posP.x + 40, posP.y + 80, 160, 160, 180, 0);
        textSize(40);
        text(silaba, posP.x + 40, posP.y + 50);
        pop();
        break;
    }

  }

  mostrar() {

    for (var i = 1; i < this.nSilabas + 1; i++) {
      this.desenharErrado(this.silabas[i - 1], this.erradas[i - 1], i);
      this.desenharCerto(this.certas[i - 1], i);
    }

  }

  escolher(entrada) {
    if (entrada.toUpperCase() == this.palavra) {
      console.log("certo");
      return true;
    } else {
      console.log("errado");
      somErro.play();
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
