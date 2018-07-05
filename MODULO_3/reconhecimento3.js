/*jshint esversion: 6 */

var palavras = [
  'PRATO',
  'COBRA',
  'VIDRO',
  'CALHA',
  'ABRAÇO',
  'VELHO',
  'BRASIL',
  'ATLETA',
  'PRATELEIRA',
  'TELHADO',
  'AQUELE',
  'LIMPO',
  'QUEIJO',
  'GARFO',
  'CARRO',
  'CHAVE',
  'POESIA',
  'RECEOSO',
  'ENXAGUOU',
  'GLICOSE',
];

var silabas = [
  ['PRA', 'TO'],
  ['CO', 'BRA'],
  ['VI', 'DRO'],
  ['CA', 'LHA'],
  ['A', 'BRA', 'ÇO'],
  ['VE', 'LHO'],
  ['BRA', 'SIL'],
  ['A', 'TLE', 'TA'],
  ['PRA', 'TE', 'LEI', 'RA'],
  ['TE', 'LHA', 'DO'],
  ['A', 'QUE', 'LE'],
  ['LIM', 'PO'],
  ['QUEI', 'JO'],
  ['GAR', 'FO'],
  ['CAR', 'RO'],
  ['CHA', 'VE'],
  ['PO', 'E', 'SI', 'A'],
  ['RE', 'CE', 'O', 'SO'],
  ['EN', 'XA', 'GUOU'],
  ['GLI', 'CO', 'SE'],
];

var sons = [];
var blocoAtual = 0;
var blocos = [];
var numBlocos = 20;

var bkgImg;
var btProxImg;
var btProxImgVetor;
var btSomImg;

var posInput;

var input1;
var input2;
var input3;
var input4;

var button;

var somErro;


function preload() {
  bkgImg = loadImage('../RECURSOS/IMAGENS/mod3-rec3.png');
  btProxImg = loadImage('../RECURSOS/IMAGENS/seta.png');
  btVoltarImg = loadImage('../RECURSOS/IMAGENS/seta.png');
  btSomImg = loadImage('../RECURSOS/IMAGENS/02.png');

}

function setup() {

  angleMode(DEGREES);
  frameRate(15);
  textAlign(CENTER);
  createCanvas(innerWidth, innerHeight);

  posInput = createVector((innerWidth / 12) * 2.5, (innerHeight / 12) * 7);

  input1 = createInput();
  input2 = createInput();
  input3 = createInput();
  input4 = createInput();

  button = createButton('OK');
  button.mousePressed(darEntrada);

  btProxImgVetor = createVector((innerWidth / 13) * 10.6, (innerHeight / 13) * 3.3);
  btSomImgVetor = createVector((innerWidth / 70) * 10.6, (innerHeight / 8) * 2);
  btVoltarImgVetor = createVector((innerWidth / 14) * 11, (innerHeight / 9.9) * 3.3);

  for (var i = 0; i < numBlocos; i++) {
    blocos[i] = new Bloco(silabas[i], palavras[i]);
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

  if (blocos[blocoAtual].nSilabas == 3) {
    input1.position(posInput.x, posInput.y);
    input2.position(input1.x + input1.width + 5, posInput.y);
    input3.position(input2.x + input2.width + 5, posInput.y);
    button.position(input2.x + 0.5 * input1.width - 99, posInput.y + input2.height + 5);
  } else {
    input1.position(posInput.x + 120, posInput.y);
    input2.position(input1.x + input1.width + 5, posInput.y);
    input3.position(-200, -200);
    button.position(input1.x + 0.5 * input1.width + 35, posInput.y + input2.height + 5);
  }

  if (blocos[blocoAtual].nSilabas == 4) {
    input1.position(posInput.x - 150, posInput.y);
    input2.position(input1.x + input1.width + 5, posInput.y);
    input3.position(input2.x + input2.width + 5, posInput.y);
    input4.position(input3.x + input3.width + 5, posInput.y);
    button.position(input2.x + 0.5 * input1.width + 35, posInput.y + input2.height + 5);
  } else {
    input4.position(-200, -200);
  }

  blocos[blocoAtual].mostrar();

}

function darEntrada() {

  var entrada1 = input1.value();
  var entrada2 = input2.value();
  var entrada3 = input3.value();
  var entrada4 = input4.value();

  if (blocos[blocoAtual].escolher(entrada1, entrada2, entrada3, entrada4)) {
    input1.value('');
    input2.value('');
    input3.value('');
    input4.value('');
    avancarBloco();
  } else {
    input1.value('');
    input2.value('');
    input3.value('');
    input4.value('');
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

    // blocos[blocoAtual].tocar();
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
    console.log('som');
  }
}

class Bloco {

  constructor(silabas, palavra) {

    this.silabas = silabas;
    this.palavra = palavra;
    this.nSilabas = this.silabas.length;

    this.pos = 25;

    this.p1 = createVector(15 * (innerWidth / 80), 40 * (innerHeight / 80));
    this.p2 = createVector(30 * (innerWidth / 80), 40 * (innerHeight / 80));
    this.p3 = createVector(45 * (innerWidth / 80), 40 * (innerHeight / 80));
    this.p4 = createVector(60 * (innerWidth / 80), 40 * (innerHeight / 80));

    this.tamanho = 120;

    this.posSilaba = createVector(40 * (innerWidth / 80), 38 * (innerHeight / 80));

  }

  mostrar() {

    textSize(90);
    text(this.palavra, this.posSilaba.x, this.posSilaba.y);
    fill(255);

  }

  escolher(entrada1, entrada2, entrada3, entrada4) {
    console.log(this.silabas);

    if (this.nSilabas == 2) {

      if (entrada1.toUpperCase() == this.silabas[0] &&
          entrada2.toUpperCase() == this.silabas[1]) {
        console.log('certo');
        return true;
      } else {
        console.log('errado');
        somErro.play();
        return false;
      }

    } else if (this.nSilabas == 3) {

      if (entrada1.toUpperCase() == this.silabas[0] &&
          entrada2.toUpperCase() == this.silabas[1] &&
          entrada3.toUpperCase() == this.silabas[2]) {
        console.log('certo');
        return true;
      } else {
        console.log('errado');
        somErro.play();
        return false;
      }

    } else {

      if (entrada1.toUpperCase() == this.silabas[0] &&
          entrada2.toUpperCase() == this.silabas[1] &&
          entrada3.toUpperCase() == this.silabas[2] &&
          entrada4.toUpperCase() == this.silabas[3]) {

        console.log('certo');
        return true;
      } else {
        console.log('errado');
        somErro.play();
        return false;
      }

    }

    if (entrada1.toUpperCase() == this.silabas[0] &&
        entrada2.toUpperCase() == this.silabas[1] &&
        entrada3.toUpperCase() == this.silabas[2] &&
        entrada4.toUpperCase() == this.silabas[3]) {

      console.log('certo');
      return true;
    } else {
      console.log('errado');
      somErro.play();
      return false;
    }
  }

  tocarCerto() {
    console.log('certo');
  }

  tocarErrado() {
    console.log('errado');
    somErro.play();
  }
}
