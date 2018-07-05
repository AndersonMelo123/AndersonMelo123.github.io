/*

Sketch para nova forma de implementação
usando os novos padrões ECMASCRIPT6.

Uso de classes para criação de bloco de informação.

//DATE(13/03/2018)

*/

var listaPalavrasArray = [
  "SOL", "MAR", "CRU", "FÉ", "PÉ", "PÁ", "PÃO", "CÉU", "LÃ",
  "LINDO", "FEIO", "CASA", "LIXO", "MESA", "CHATO", "BRUTO", "FIEL", "FACA", "GATO",
  "BANANA", "MENINO", "LARANJA", "CIDADE", "XÍCARA", "SINCERO", "TÍMIDO", "HONESTO", "DECENTE", "BONDOSO",
  "SABONETE", "TERREIRO", "CAVALETE", "TELEFONE", "GUARDANAPO", "AFETIVO", "ATREVIDO", "CORAJOSO", "EGOÍSTA", "EDUCADO",
];



var palavrasQuebradas = [
  "SOL", "MAR", "CRU", "FÉ", "PÉ", "PÁ", "PÃO", "CÉU", "LÃ",
  "LIN - DO", "FEI - O", "CA - SA", "LI - XO", "ME - SA", "CHA - TO", "BRU - TO", "FI - EL", "FA - CA", "GA - TO",
  "BA - NA - NA", "ME - NI - NO", "LA - RAN - JA", "CI - DA - DE", "XÍ - CA - RA", "SIN - CE - RO", "TÍ - MI - DO", "HO - NES - TO", "DE - CEN - TE", "BON - DO - SO",
  "SA - BO - NE - TE", "TER - REI - RO", "CA - VA - LE - TE", "TE - LE - FO - NE", "GUAR - DA - NA - PO", "A - FE - TI - VO", "A - TRE - VI - DO", "CO - RA - JO - SO", "E - GO - ÍS - TA", "E - DU - CA - DO",
];



//
// ██╗      ██████╗  ██████╗ ██╗ ██████╗ █████╗
// ██║     ██╔═══██╗██╔════╝ ██║██╔════╝██╔══██╗
// ██║     ██║   ██║██║  ███╗██║██║     ███████║
// ██║     ██║   ██║██║   ██║██║██║     ██╔══██║
// ███████╗╚██████╔╝╚██████╔╝██║╚██████╗██║  ██║
// ╚══════╝ ╚═════╝  ╚═════╝ ╚═╝ ╚═════╝╚═╝  ╚═╝
//


var bkgImg;

var btProxImg;

var btProxImgVetor;

var btVoltarImg;

var btVoltarImgVetor;

//var btSomImg;

var btSomImgVetor;

var numBlocos = 39;

var blocoAtual = 0;

var blocos = [];

function preload() {
  bkgImg = loadImage("../RECURSOS/IMAGENS/mod2-exp3.png");
  btProxImg = loadImage("../RECURSOS/IMAGENS/seta.png");
  btVoltarImg = loadImage("../RECURSOS/IMAGENS/seta.png");
  //btSomImg = loadImage("../RECURSOS/IMAGENS/02.png");
}

function setup() {

  angleMode(DEGREES)
  frameRate(15);
  createCanvas(innerWidth, innerHeight);


  btProxImgVetor = createVector((width / 15) * 10.6, (innerHeight / 5) * 3.3);
  //btSomImgVetor = createVector((width / 15) * 10.6, (innerHeight / 9) * 2);
  btVoltarImgVetor = createVector((width / 16) * 10.6,(innerHeight / 4.5) * 3.3);



  for(var i = 0; i < numBlocos; i++) {
    blocos[i] = new Bloco(listaPalavrasArray[i], palavrasQuebradas[i]);
  }

  blocos[0].tocar();
}

function draw() {

  background(bkgImg);
  blocos[blocoAtual].mostrar();
  image(btProxImg, btProxImgVetor.x, btProxImgVetor.y, 50, 50);
  push();
  rotate(180);
  image(btVoltarImg, -btVoltarImgVetor.x, -btVoltarImgVetor.y, 50, 50);
  pop();
  //image(btSomImg, btSomImgVetor.x, btSomImgVetor.y, 50, 50);

}

function mousePressed() {


  var centroImgX =  btVoltarImgVetor.x + btVoltarImg.width/4 -80;
  var centroImgY =  btVoltarImgVetor.y + btVoltarImg.height/6 -75;
  var distancia = dist(mouseX, mouseY, centroImgX, centroImgY);

  if(distancia < 50) {
    blocoAtual--;
    if(blocoAtual < 0) {
      blocoAtual = numBlocos-1;
    }
    blocos[blocoAtual].tocar();
  }

  centroImgX =  btProxImgVetor.x + btProxImg.width/4 -20;
  centroImgY =  btProxImgVetor.y + btProxImg.height/6 -24;
  distancia = dist(mouseX, mouseY, centroImgX, centroImgY);

  if(distancia < 50) {
    blocoAtual++;
    if(blocoAtual > numBlocos-1) {
      blocoAtual = 0;
    }
    blocos[blocoAtual].tocar();
  }

  //var inicioBtSomX = btSomImgVetor.x;
  //var inicioBtSomY = btSomImgVetor.y;

  //var fimBtSomX = btSomImgVetor.x + 50;
  //var fimBtSomY = btSomImgVetor.y + 50;

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
    textSize(85);
    fill(255);
    var alturaPalavras = 50;
    var scl = 80;
    textAlign(CENTER);
    var t1 = text(this.palavrasQuebrada, 35 * (innerWidth / scl), alturaPalavras * (innerHeight / scl));
    textSize(100);
    text(this.palavra, 34 * (innerWidth / scl), 25 * (innerHeight / scl));
    fill(0);
  }

  tocar() {
    console.log("tocou");
  }

}
