/*

Sketch para nova forma de implementação
usando os novos padrões ECMASCRIPT6.

Uso de classes para criação de bloco de informação.

//DATE(12/02/2018)

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
"Ba", "Be", "Bi", "Bo", "Bu",
"Ca", "Ce", "Ci", "Co", "Cu",
"Da", "De", "Di", "Do", "Du",
"Fa", "Fe", "Fi", "Fo", "Fu",
"Ga", "Ge", "Gi", "Go", "Gu",
"Ha", "He", "Hi", "Ho", "Hu",
"Ja", "Je", "Ji", "Jo", "Ju",
"ka", "Ke", "Ki", "Ku",
"La", "Le", "Li", "Lo", "Lu",
"Ma", "Me", "Mi", "Mo", "Mu",
"Na", "Ne", "Ni", "No", "Nu",
"Pa", "Pe", "Pi", "Po", "Pu",
"Qa", "Qe", "Qi", "Qo",
"Ra", "Re", "Ri", "Ro", "Ru",
"Sa", "Se", "Si", "So", "Su",
"Ta", "Te", "Ti", "To", "Tu",
"Va", "Ve", "Vi", "Vo", "Vu",
"Xa", "Xe", "Xi",
"Za", "Ze", "Zi", "Zo", "Zu"
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
  "Balde", "Balança", "Barco",
  "Beleza", "Besta", "Beliscar",
  "Biscoito", "Bipolar", "Bisnaga",
  "Bolo", "Bom", "Bonito",
  "Buraco", "Burocracia", "Bucho",
  "Casa", "Caixa", "Calabresa",
  "Céu", "Cera", "Celular",
  "Cirurgia", "Cínico", "Ciência",
  "Colar", "Cobrir", "Cobrar",
  "Cuscuz", "Curso", "Curió",
  "Dado", "Dar", "Danado",
  "Dedo", "Descolar", "Desfazer",
  "Discar", "Disse", "Disco",
  "Dor", "Dose", "Dobrar",
  "Duro", "Durante", "Dual",
  "Faca", "Fazer", "Falar",
  "Fedor", "Feliz", "Feira",
  "Ficar", "Filho", "Final",
  "Folha", "Força", "Fora",
  "Furar", "Fuga", "Fúria",
  "Galho", "Garfo", "Gaiato",
  "Gelo", "Geral", "Gênio",
  "Girar", "Giz", "Girassol",
  "Goiaba", "Gostar", "Gol",
  "Gustavo", "Guia", "Guerra",
  "Hábito", "Hálito", "Haste",
  "Hélio", "Hesitar", "Herege",
  "História", "Higiene", "Histérico",
  "Houve", "Hoje", "Hospital",
  "Hugo", "Humilhar", "Humano",
  "Jato", "Jarra", "Janela",
  "Jeito", "Jerimum", "Jeans",
  "Jiboia", "Jiló", "Jipe",
  "Joia", "Jovem", "Jogo",
  "Julgar", "Justo", "Julho",
  "Karatê", "Kaiser", "Kart",
  "Ketchup", "Kelvin", "Kennedy",
  "King", "Kiss", "Kit",
  "Kung fu", "Kurt", "Kubitschek",
  "Lápis", "Lavrar", "Lamento",
  "Lepra", "Leso", "Leite",
  "Livro", "Lindo", "Liberdade",
  "Loja", "Lotado", "Longe",
  "Lugar", "Luz", "Lucro",
  "Mar", "Mastigar", "Maçã",
  "Mesa", "Mês", "Melhor",
  "Mito", "Ministro", "Milho",
  "Mosca", "Morar", "Morrer",
  "Muro", "Murro", "Músculo",
  "Nariz", "Não", "Nascer",
  "Neve", "Negócio", "Nenhum",
  "Ninho", "Nítido", "Nível",
  "Novela", "Novo", "Normal",
  "Nuvem", "Nunca", "Nublado",
  "Pato", "Parir", "Partilha",
  "Peito", "Pera", "Peso",
  "Pistola", "Pilha", "Piedade",
  "Pote", "Porta", "Por",
  "Puro", "Pudim", "Puxar",
  "Quanto", "Quando", "Qual",
  "Quente", "Quero", "Queijo",
  "Quitar", "Quiser", "Quieto",
  "Quota", "Quotidiano", "Quorum",
  "Rato", "Raiz", "Rasgo",
  "Reta", "Reprise", "Refazer",
  "Rico", "Riso", "Ridículo",
  "Rosto", "Roer", "Rodar",
  "Rua", "Rural", "Ruim",
  "Sapato", "Sal", "Sair",
  "Sempre", "Ser", "Sentido",
  "Sino", "Sílaba", "Saco",
  "Soro", "Sozinho", "Soco",
  "Suco", "Surra", "Subir",
  "Tapioca", "Tatu", "Talvez",
  "Telha", "Telefone", "Tecidos",
  "Tímido", "Tirar", "Tipo",
  "Tomate", "Toalha", "Tocar",
  "Tutela", "Turbo", "Turco",
  "Vazio", "Vago", "Vaca",
  "Velho", "Veloz", "Verdade",
  "Vida", "Vídeo", "Vila",
  "Vó", "Você", "Vontade",
  "Vulto", "Vulgar", "Vulnerável",
  "Xale", "Xadrez", "Xará",
  "Xerife", "Xereta", "Xerox",
  "Xícara", "Xixi", "Xingar",
  "Zangado", "Zarolho", "Zangão",
  "Zero", "Zezinho", "Zeppelin",
  "Ziper", "Zigoto", "Zica",
  "Zorro", "Zoológico", "Zombar",
  "Zumba", "Zumbi", "Azul"
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
  bkgImg = loadImage("../RECURSOS/IMAGENS/mod3-exp1.png");
  btProxImg = loadImage("../RECURSOS/IMAGENS/seta.png");
  btVoltarImg = loadImage("../RECURSOS/IMAGENS/seta.png");
  //btSomImg = loadImage("../RECURSOS/IMAGENS/02.png");
}

function setup() {

  // console.log(listaSilabasArray.length);

  frameRate(15);
  angleMode(DEGREES);
  createCanvas(innerWidth, innerHeight);

  btProxImgVetor = createVector((width / 11) * 8, (innerHeight / 7.6) * 2);
  //btSomImgVetor = createVector((width / 29) * 7, (innerHeight / 7.6) * 2);
  btVoltarImgVetor = createVector((innerWidth / 16) * 10.6, (innerHeight / 5.9) * 2);

  for(var i = 0; i < numBlocos; i++) {
    blocos[i] = new Bloco(listaSilabasArray[i], palavras[3*i], palavras[3*i+1], palavras[3*i+2]);
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

  constructor(listaSilabas, palavra1, palavra2, palavra3) {
    this.listaSilabas = listaSilabas;
    this.palavra1 = palavra1;
    this.palavra2 = palavra2;
    this.palavra3 = palavra3;
  }

  mostrar() {
    // textFont(fonte);
    textSize(85);
    fill(255);
    var alturaPalavras = 45;
    var scl = 80;
    var t1 = text(this.palavra1, 18 * (innerWidth / scl), alturaPalavras * (innerHeight / scl)); //palavras escada
    text(this.palavra2, 23 * (innerWidth / scl), (12 + alturaPalavras) * (innerHeight / scl));
    text(this.palavra3, 32 * (innerWidth / scl), (24 + alturaPalavras) * (innerHeight / scl));
    textSize(100);
    // console.log(t1.pos.x);
    text(this.listaSilabas, 35 * (innerWidth / scl), 30 * (innerHeight / scl)); // silaba de cima
    fill(0);
  }

  tocar() {
    console.log("tocou");
  }

}
