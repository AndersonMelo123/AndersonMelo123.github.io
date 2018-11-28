/*

Sketch para nova forma de implementação
usando os novos padrões ECMASCRIPT6.

Uso de classes para criação de bloco de informação.

//DATE(13/03/2018)

*/

var listaPalavrasArray = [
  "Eu 	Tu", "Dar 	Ler", "Bom   Vil", "Pai   Pão",
  "Eles   Este", "Cantar   Comer", "Feliz   Bela", "Vaso   Pincel",
  "Escrever   Repetir", "Bonito  Escuro", "Cortina  Cigarro", "Primeiro  Último", 
  "Quadragéssimo  Milésimo", "Reconhcer   Desconstruir", "Deslumbrante   Colorido", "Casamento   Apostila",
];

var tipo = [
  "Monossílabas\n\nPronomes:", "Monossílabas\n\nVerbos:", "Monossílabas\n\nAdjetivos:", "Monossílabas\n\nSubstantivos:",
  "Dissílabas\n\nPronomes:", "Dissílabas\n\nVerbos:", "Dissílabas\n\nAdjetivos:", "Dissílabas\n\nSubstantivos:",
  "Trissílabas\n\nVerbos:", "Trissílabas\n\nAdjetivos:", "Trissílabas\n\nSubstantivos:", "Trissílabas\n\nNumerais:",
  "Polissílabas\n\nNumerais:", "Polissílabas\n\nVerbos:", "Polissílabas\n\nAdjetivos:", "Polissílabas\n\nSubstantivos:",
];


var palavrasQuebradas = [
  "Nós	Vós", "Rir 	Por", "Mau   Cru", "Mãe   Pé",
  "Minha   Cada", "Unir  Compor", "Frio   Puro", "Creme   Chave",
  "Contratar   Trabalhar", "Madura  Magrelo", "Garrafa  Bombeiro", "Setenta  Dezena",
  "Penúltimo   Centésimo", "Contraponho", "Brasileiro  Nordestino", "Guardanapo   Documento",
];


var bkgImg;

var btProxImg;

var btProxImgVetor;

var btVoltarImg;

var btVoltarImgVetor;

//var btSomImg;

var btSomImgVetor;

var numBlocos = 16;

var blocoAtual = 0;
var blocoAtual2 = 0;

var blocos = [];
var blocos2 = [];

function preload() {
  bkgImg = loadImage("../RECURSOS/IMAGENS/mod2-exp2.png");
  btProxImg = loadImage("../RECURSOS/IMAGENS/seta.png");
  btVoltarImg = loadImage("../RECURSOS/IMAGENS/seta.png");
  //btSomImg = loadImage("../RECURSOS/IMAGENS/02.png");
}

function setup() {

  angleMode(DEGREES);
  frameRate(15);
  createCanvas(innerWidth, innerHeight);

  btProxImgVetor = createVector((width / 15) * 10.6, (innerHeight / 15) * 3.3);
  //btSomImgVetor = createVector((width / 15) * 10.6, (innerHeight / 9) * 2);
  btVoltarImgVetor = createVector((width / 16) * 10.6,(innerHeight / 11) * 3.3);



  for(var i = 0; i < numBlocos; i++) {
    blocos[i] = new Bloco(listaPalavrasArray[i], palavrasQuebradas[i]);
    blocos2[i] = new Bloco2(tipo[i]);
  }

  blocos[0].tocar();
}

function draw() {

  background(bkgImg);
  image(btProxImg, btProxImgVetor.x, btProxImgVetor.y, 50, 50);
  push();
  rotate(180);
  image(btVoltarImg, -btVoltarImgVetor.x, -btVoltarImgVetor.y, 50, 50);
  pop();
  textAlign(CENTER);
  blocos[blocoAtual].mostrar();
  blocos2[blocoAtual2].mostrar();
  //image(btSomImg, btSomImgVetor.x, btSomImgVetor.y, 50, 50);

}

function mousePressed() {


  var centroImgX =  btVoltarImgVetor.x + btVoltarImg.width/4 -80;
  var centroImgY =  btVoltarImgVetor.y + btVoltarImg.height/6 -75;
  var distancia = dist(mouseX, mouseY, centroImgX, centroImgY);

  if(distancia < 50) {
    blocoAtual--;
    blocoAtual2--;
    if(blocoAtual < 0) {
      blocoAtual = numBlocos-1;
      blocoAtual2 = numBlocos-1;
    }
    blocos[blocoAtual].tocar();
    //blocos[blocoAtual2].tocar();
  }

  centroImgX =  btProxImgVetor.x + btProxImg.width/4 -20;
  centroImgY =  btProxImgVetor.y + btProxImg.height/6 -24;
  distancia = dist(mouseX, mouseY, centroImgX, centroImgY);

  if(distancia < 50) {
    blocoAtual++;
    blocoAtual2++;
    if(blocoAtual > numBlocos-1) {
      blocoAtual = 0;
      blocoAtual2 = 0;
    }
    blocos[blocoAtual].tocar();
    //blocos[blocoAtual2].tocar();
  }

  if(mouseX > inicioBtSomX
    && mouseX < fimBtSomX
    && mouseY > inicioBtSomY
    && mouseY < fimBtSomY) {
    blocos[blocoAtual].tocar();
  }
}

class Bloco {

  constructor(palavra, palavrasQuebrada) {
    this.palavra = palavra;
    this.palavrasQuebrada = palavrasQuebrada;
  }

  mostrar() {
    textSize(72);
    fill(255);
    var alturaPalavras = 62;
    var scl = 80;
    textAlign(CENTER);
    var t1 = text(this.palavrasQuebrada, 36 * (innerWidth / scl), alturaPalavras * (innerHeight / scl));
    textSize(72);
    text(this.palavra, 36 * (innerWidth / scl), 46 * (innerHeight / scl));
    fill(0);
  }

  tocar() {
    console.log("tocou");
  }

}

class Bloco2 {

  constructor(tipo) {
    this.tipo = tipo;
    //this.palavrasQuebrada = palavrasQuebrada;
  }


  mostrar() {
    textSize(85);
    fill(255);
    var alturaPalavras = 50;
    var scl = 80;
    
    //var t1 = text(this.palavrasQuebrada, 35 * (innerWidth / scl), alturaPalavras * (innerHeight / scl));
    textSize(38);
    text(this.tipo, 19 * (innerWidth / scl), 20 * (innerHeight / scl));
    fill(0);
  }

  tocar() {
    console.log("tocou");
  }

}
