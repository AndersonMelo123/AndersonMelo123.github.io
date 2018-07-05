/*

Sketch para nova forma de implementação
usando os novos padrões ECMASCRIPT6.

Uso de classes para criação de bloco de informação.

//DATE(24/02/2018)

*/


//
// ███████╗  ██╗  ██╗      █████╗   ██████╗    █████╗   ███████╗
// ██╔════╝  ██║  ██║     ██╔══██╗  ██╔══██╗  ██╔══██╗  ██╔════╝
// ███████╗  ██║  ██║     ███████║  ██████╔╝  ███████║  ███████╗
// ╚════██║  ██║  ██║     ██╔══██║  ██╔══██╗  ██╔══██║  ╚════██║
// ███████║  ██║  ███████╗██║  ██║  ██████╔╝  ██║  ██║  ███████║
// ╚══════╝  ╚═╝  ╚══════╝╚═╝  ╚═╝  ╚═════╝   ╚═╝  ╚═╝  ╚══════╝
//

var listaSilabasArray = [
"qua", "que", "qui",
"gua", "gue", "gui",
"bra", "bre", "bri", "bro", "bru",
"cra", "cre", "cri", "cro", "cru",
"dra", "dre", "dri", "dro", "dru",
"fra", "fre", "fri", "fro", "fru",
"gra", "gre", "gri", "gro", "gru",
"pra", "pre", "pri", "pro", "pru",
"tra", "tre", "tri", "tro", "tru",
"vra", "vre", "vro",
"bla", "ble", "bli", "blo", "blu",
"cla", "cle", "cli", "clo", "clu",
"fla", "fle", "fli", "flo", "flu",
"gla", "gli", "glo", "glu",
"pla", "ple", "pli", "plo", "plu",
"tla", "tle",
"cha", "che", "chi", "cho", "chu",
"nha", "nhe", "nhi", "nho", "nhu",
"lha","lhe","lhi","lho","lhu",
"an","en","in","on","un", 
"ar","er","ir","or","ur",
"as","es","is","os","us", 
"al","el","il",

];





//
// ██████╗  █████╗ ██╗      █████╗ ██╗   ██╗██████╗  █████╗ ███████╗
// ██╔══██╗██╔══██╗██║     ██╔══██╗██║   ██║██╔══██╗██╔══██╗██╔════╝
// ██████╔╝███████║██║     ███████║██║   ██║██████╔╝███████║███████╗
// ██╔═══╝ ██╔══██║██║     ██╔══██║╚██╗ ██╔╝██╔══██╗██╔══██║╚════██║
// ██║     ██║  ██║███████╗██║  ██║ ╚████╔╝ ██║  ██║██║  ██║███████║
// ╚═╝     ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝  ╚═══╝  ╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝
//




var palavras = [
"aquário", "balança", "barco",
"moleque", "besta", "beliscar",
"quintal", "bipolar", "bisnaga",
"guaraná", "bom", "bonito",
"foguete", "burocracia", "bucho",
"preguiça", "caixa", "calabresa",
"braço", "cera", "celular",
"ombreira", "cinico", "ciência",
"abridor", "cobrir", "cobrar",
"ombro", "curso", "curió",
"bruxa", "dar", "danado",
"cravo", "descolar", "desfazer",
"creme", "disse", "disco",
"crime", "dose", "dobrar",
"micróbio", "durante", "dual",
"crueldade", "fazer", "falar",
"dragão", "feliz", "feira",
"comadre", "filho", "final",
"quadrilha", "força", "fora",
"medroso", "fuga", "furia",
"madrugada", "garfo", "gaiato",
"frango", "geral", "genio",
"frente", "giz", "girassol",
"frigideira", "gostar", "gol",
"fronha", "guia", "guerra",
"fruta", "halito", "haste",
"gravata", "hesitar", "herege",
"agreste", "higiene", "histerico",
"agricultor", "hoje", "hospital",
"agropecuária", "humilhar", "humano",
"gruta", "jarra", "janela",
"prato", "jerimum", "jeans",
"preto", "jiló", "jipe",
"primo", "jovem", "jogo",
"próximo", "justo", "julho",
"prudência", "kaiser", "kart",
"trabalho", "kelvin", "keppler",
"trevo", "kilograma", "kilometro",
"tribo", "kurt", "kuririn",
"tronco", "lavrar", "lamento",
"truco", "leso", "leite",
"lavrador", "lindo", "liberdade",
"livre", "lotado", "longe",
"livro", "luz", "lucro",
"nublado", "mastigar", "maçã",
"assembleia", "mês", "melhor",
"bíblia", "ministro", "milho",
"bloco", "morar", "morrer",
"blusa", "murro", "musculo",
"clara", "não", "nascer",
"clero", "negocio", "nenhum",
"clima", "nitido", "nivel",
"folclore", "novo", "normal",
"incluir", "nunca", "nublado",
"flauta", "parir", "partilha",
"flecha", "pera", "peso",
"aflição", "pirê", "piedade",
"flor", "porta", "por",
"flutuar", "pudim", "puxar",
"glaucoma", "quando", "qual",
"glicose", "quero", "queijo",
"glória", "quiser", "quieto",
"glúten", "quotidiano", "quorum",
"placa", "raiz", "rasgo",
"simples", "reprise", "refazer",
"réplica", "riso", "ridiculo",
"diploma", "roer", "rodar",
"pluma", "rural", "ruim",
"atlântico", "sal", "sair",
"atleta", "ser", "sentido",
"chave", "silaba", "saco",
"chefe", "sozinho", "soco",
"chinelo", "surra", "subir",
"choro", "tatu", "talvez",
"chuva", "telefone", "tecidos",
"aranha", "tipico", "tipo",
"dinheiro", "toalha", "toco",
"companhia", "turbo", "turco",
"sonho", "vago", "vaca",
"nenhum", "veloz", "verdade",
"telha", "video", "vila",
"colher", "você", "vontade",
"velhice", "vulgar", "vulneravel",
"velho", "xadrez", "xará",
"orelhudo", "xereta", "xerox",
"anta", "xixi", "xingar",
"acidente", "zarolho", "zangão",
"incentivo", "zezinho", "zeppelin",
"ontem", "zigoto", "zica",
"vagabundo", "zoologico", "zombar",
"arca", "zumbi", "zureta",
"mercado", "zumbi", "zureta",
"irmão", "zumbi", "zureta",
"orca", "zumbi", "zureta",
"turquesa", "zumbi", "zureta",
"asma", "zumbi", "zureta",
"escada", "zumbi", "zureta",
"mistério", "zumbi", "zureta",
"osso", "zumbi", "zureta",
"justo", "zumbi", "zureta",
"alface", "zumbi", "zureta",
"possível", "zumbi", "zureta",
"hostil", "zumbi", "zureta",

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

var btSomImg;

var btSomImgVetor;

var numBlocos = 91;

var blocoAtual = 0;

var blocos = [];

function preload() {
  bkgImg = loadImage("../RECURSOS/IMAGENS/mod3-exp2.png");
  btProxImg = loadImage("../RECURSOS/IMAGENS/seta.png");
  btVoltarImg = loadImage("../RECURSOS/IMAGENS/seta.png");
  //btSomImg = loadImage("../RECURSOS/IMAGENS/02.png");
}

function setup() {

  //console.log(listaSilabasArray.length);

  frameRate(15);
  angleMode(DEGREES);
  createCanvas(innerWidth, innerHeight);

  btProxImgVetor = createVector((width / 11) * 8, (innerHeight / 7.6) * 2);
  //btSomImgVetor = createVector((width / 29) * 7, (innerHeight / 7.6) * 2);
  btVoltarImgVetor = createVector((innerWidth / 16) * 10.6, (innerHeight / 5.9) * 2);

  for(var i = 0; i < numBlocos; i++) {
    blocos[i] = new Bloco(listaSilabasArray[i], palavras[3*i]);
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

/*class Bloco {

  constructor(listaSilabas, palavra1, palavra2, palavra3) {
    this.listaSilabas = listaSilabas;
    this.palavra1 = palavra1;
    this.palavra2 = palavra2;
    this.palavra3 = palavra3;
  }
*/

class Bloco {

  constructor(listaSilabas, palavra1) {
    this.listaSilabas = listaSilabas;
    this.palavra1 = palavra1;
  }
  mostrar() {
    // textFont(fonte);
    textSize(85);
    fill(255);
    var alturaPalavras = 45;
    var scl = 80;
    //text(this.palavra1, 18 * (innerWidth / scl), alturaPalavras * (innerHeight / scl));
    text(this.palavra1, 33 * (innerWidth / scl), (12 + alturaPalavras) * (innerHeight / scl));
    //text(this.palavra3, 32 * (innerWidth / scl), (24 + alturaPalavras) * (innerHeight / scl));
    textSize(100);
    text(this.listaSilabas, 35 * (innerWidth / scl), 30 * (innerHeight / scl));
    fill(0);
  }

  tocar() {
    console.log("tocou");
  }

}
