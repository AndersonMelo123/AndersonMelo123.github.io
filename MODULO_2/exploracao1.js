/*
Sketch para nova forma de implementação
usando os novos padrões ECMASCRIPT6.
Uso de classes para criação de bloco de informação.
//DATE(13/03/2018)


esversion :6
*/

var title;

var listaPalavrasArray = ['Lá', 'Oi', 'Eu', 'Seu', 'Tu', 'Lápis', 'Bola', 'Rosa', 'Carro', 'Bolo',
'Viola', 'Batata', 'Macaco', 'Janela', 'Salada', 'Sabonete', 'Macaxeira', 'Computador', 'Documento', 'Alugado'];

var palavrasQuebradas = [
  'Lá', 'Oi', 'Eu', 'Seu', 'Tu',
  'Lá - pis', 'Bo - la', 'Ro - Sa', 'Car - ro', 'Bo - lo',
  'Vi - o - la', 'Ba - ta - ta', 'Ma - ca - co', 'Ja - ne - la', 'Sa - la - da',
  'Sa - bo - ne - te', 'Ma - ca - xei - ra', 'Com - pu - ta - dor', 'Do - cu - men - to', 'A - lu - ga - do'
];

var tipo = [
  "Exemplo:\nEla vem de lá!", "Exemplo:\nChegamos e dissemos: Oi!", "Exemplo:\nEu vim de São Paulo", "Exemplo:\nEle quer seu dinheiro", "Exemplo:\nTu não virás comigo!",
  "Exemplo:\nVocê quer comprar um lápis?", "Exemplo:\nO rapaz gosta de jogar bola", "Exemplo:\nA mulher recebeu uma rosa", "Exemplo:\nMeu pai comprou um carro", "Exemplo:\nO bolo ficou muito gostoso",
  "Exemplo:\nOs meninos tocam viola", "Exemplo:\nA batata chegou no mercado", "Exemplo:\nO macaco vive na floresta", "Exemplo:\nA janela está aberta", "Exemplo:\nA salada tem alface e tomate",
  "Exemplo:\nO sabonte é de alfazema", "Exemplo:\nA macaxeira está saborosa", "Exemplo:\nO computador possui impressora", "Exemplo:\nO documento deve ser colorido", "Exemplo:\nO carro foi alugado", 
];


var bkgImg;

var btProxImg;

var btProxImgVetor;

var btVoltarImg;

var btVoltarImgVetor;

var btSomImg;

var btSomImgVetor;

var numBlocos = 20;

var blocoAtual = 0;
var blocoAtual2 = 0;

var blocos = [];
var blocos2 = [];

function preload() {
  title = 'Nome';
  bkgImg = loadImage('../RECURSOS/IMAGENS/mod2-exp1.png');
  btProxImg = loadImage('../RECURSOS/IMAGENS/seta.png');
  btVoltarImg = loadImage('../RECURSOS/IMAGENS/seta.png');
}

function setup() {

  angleMode(DEGREES);
  frameRate(15);
  createCanvas(innerWidth, innerHeight);

  btProxImgVetor = createVector((width / 15) * 10.6, (innerHeight / 16) * 3.3);
  btVoltarImgVetor = createVector((width / 15.5) * 10.6, (innerHeight / 11.7) * 3.3);

  for (var i = 0; i < numBlocos; i++) {
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

}

function mousePressed() {

  var centroImgX = btVoltarImgVetor.x + btVoltarImg.width / 4 - 80;
  var centroImgY = btVoltarImgVetor.y + btVoltarImg.height / 6 - 75;
  var distancia = dist(mouseX, mouseY, centroImgX, centroImgY);

  if(distancia < 50) {
    blocoAtual--;
    blocoAtual2--;
    if(blocoAtual < 0) {
      blocoAtual = numBlocos-1;
      blocoAtual2 = numBlocos-1;
    }
    blocos[blocoAtual].tocar();
  }

  centroImgX = btProxImgVetor.x + btProxImg.width / 4 - 20;
  centroImgY = btProxImgVetor.y + btProxImg.height / 6 - 24;
  distancia = dist(mouseX, mouseY, centroImgX, centroImgY);

  if(distancia < 50) {
    blocoAtual++;
    blocoAtual2++;
    if(blocoAtual > numBlocos-1) {
      blocoAtual = 0;
      blocoAtual2 = 0;
    }
    blocos[blocoAtual].tocar();
  }

  if (mouseX > inicioBtSomX &&
    mouseX < fimBtSomX &&
    mouseY > inicioBtSomY &&
    mouseY < fimBtSomY) {
    blocos[blocoAtual].tocar();
  }
}

class Bloco {

  constructor(palavra, palavraQuebrada) {
    this.palavra = palavra;
    this.palavraQuebrada = palavraQuebrada;
  }

  mostrar() {
    textSize(70);
    fill(255);
    var alturaPalavras = 50;
    var scl = 80;
    textAlign(CENTER);
    text(this.palavraQuebrada, 38 * (innerWidth / scl), 38 * (innerHeight / scl)); //palavra de baixo
    textSize(100);
    text(this.palavra, 38 * (innerWidth / scl), 25 * (innerHeight / scl)); //palavra de cima
    fill(0);
  }

  tocar() {
    console.log('tocou');
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
    textAlign(LEFT);
    //var t1 = text(this.palavrasQuebrada, 35 * (innerWidth / scl), alturaPalavras * (innerHeight / scl));
    textSize(50);
    text(this.tipo, 16 * (innerWidth / scl), 50 * (innerHeight / scl));
    fill(0);
  }

  tocar() {
    console.log("tocou");
  }

}