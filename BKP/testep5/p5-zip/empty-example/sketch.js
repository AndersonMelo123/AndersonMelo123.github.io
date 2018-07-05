/*

Sketch de teste para nova forma de implementação
usando os novos padrões ECMASCRIPT6.

Uso de classes para criação de bloco de informação.

//DATE(31/01/2018)

*/





var imgs = [];

var letras = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S",
 "T", "U", "V", "W", "X", "Y", "Z"];

 var palavras = ["Alicate", "Balde", "Casa", "Dado", "Escada", "Fogão", "Garfo", "Hospital", "Isqueiro", "Janela", "Ketchup", "Livro", "Mesa", "Nuvem", "Ovo", "Porta", "Queijo", "Revista", "Sapato",
  "Telefone", "Uva", "Vaca", "WhatsApp", "Xicara", "Yakult", "Ziper"];

var nomeSons = ["alicate.ogg", "balde.ogg", "casa.ogg", "dado.ogg", "escada.ogg", "fogao.ogg", "garfo.ogg", "hospital.ogg", "isqueiro.ogg", "janela.ogg", "ketchup.ogg", "livro.ogg", "mesa.ogg", "nuvem.ogg", "ovo.ogg", "porta.ogg", "queijo.ogg", "revista.ogg", "sapato.ogg",
 "telefone.ogg", "uva.ogg", "vaca.ogg", "whatsapp.ogg", "xicara.ogg", "yakult.ogg", "ziper.ogg"];

 var sons = [];

var blocoAtual = 0;

var blocos = [];

var fonte;
var bkgImg;
var btProxImg;
var btProxImgVetor;

function preload() {
  bkgImg = loadImage("RECURSOS/IMAGENS/back-mapa2.png");
  btProxImg = loadImage("RECURSOS/IMAGENS/seta.png");
  fonte = loadFont("P052-Italic.otf");

  for(var i = 0; i < 26; i++) {
    imgs[i] = loadImage("RECURSOS/IMAGENS/" + letras[i] + ".png");
  }

  soundFormats('mp3', 'ogg');
  for(var j = 0; j < 26; j++) {
    sons[j] = loadSound("RECURSOS/AUDIOS/" + nomeSons[j]);
  }

}

function setup() {

  frameRate(15);
  createCanvas(innerWidth, innerHeight);
  btProxImgVetor = createVector((width / 12) * 8, (innerHeight / 10) * 2);

  for(var i = 0; i < 26; i++) {
    blocos[i] = new Bloco(imgs[i], palavras[i], sons[i]);
  }

  blocos[0].tocar();


}

function draw() {

  background(bkgImg);
  blocos[blocoAtual].mostrar();
  image(btProxImg, btProxImgVetor.x, btProxImgVetor.y, 50, 50);

}

function mousePressed() {

  var centroImgX =  btProxImgVetor.x + btProxImg.width/4 -20;
  var centroImgY =  btProxImgVetor.y + btProxImg.height/6 -20;
  console.log("mouse:" , mouseX, mouseY);
  console.log("windows" , innerWidth, innerHeight);
  var distancia = dist(mouseX, mouseY, centroImgX, centroImgY);

  if(distancia < 50) {
    blocoAtual++;
    if(blocoAtual > 25) {
      blocoAtual = 0;
    }

    blocos[blocoAtual].tocar();

    // while(true) {
    //   if(!blocos[blocoAtual].audio.isPlaying()){
    //     break;
    //   }
    // }



  }
}



class Bloco {

  constructor(imagem, texto, audio) {
    this.img = imagem;
    this.texto = texto;
    this.audio = audio;
  }

  mostrar() {

    translate(width /2, height /2);
    image(this.img, -this.img.width/2, -this.img.height/2 - 75);
    translate(-width /2, -height /2);
    textFont(fonte);
    textSize(85);
    fill(255);
    text(this.texto, 4*(innerWidth/10), 8*(innerHeight/10));
    fill(0);
  }

  tocar() {
    this.audio.play();
  }
}
