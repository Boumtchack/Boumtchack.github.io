var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var tailleToile = document.getElementById("tailleToile").value;
const tailleCarre = 10;
var nbPixel = tailleCarre * tailleToile;
var nbSeed = 50;
var vitesse = 500;
let commencer = 0;
let toile = [];
let nouvelleToile = [];

ctx.canvas.width = nbPixel;
ctx.canvas.height = nbPixel;

function resize() {
  tailleToile = document.getElementById("tailleToile").value;
  nbPixel = tailleCarre * tailleToile;
  ctx.canvas.width = nbPixel;
  ctx.canvas.height = nbPixel;
  restart();
}

function definirToiles() {
  for (i = 0; i < tailleToile; i++) {
    let ligneToile = [];
    let ligneNouvelleToile = [];
    for (j = 0; j < tailleToile; j++) {
      let a = Math.random() * 100;
      if (a > nbSeed) {
        ligneToile.push(1);
      } else {
        ligneToile.push(0);
      }
      ligneNouvelleToile.push(0);
    }
    nouvelleToile.push(ligneNouvelleToile);
    toile.push(ligneToile);
  }
}

function dessinerToile() {
  ctx.clearRect(0, 0, nbPixel, nbPixel);
  for (i = 0; i < tailleToile; i++) {
    for (j = 0; j < tailleToile; j++) {
      if (toile[i][j]) {
        drawSquare(i, j);
      }
    }
  }
}

function verification(x, y) {
  let nbVoisins = calculVoisin(x, y);
  if (toile[x][y] == 1) {
    if (nbVoisins < 2) {
      nouvelleToile[x][y] = 0;
    } else if (nbVoisins == 2 || nbVoisins == 3) {
      nouvelleToile[x][y] = 1;
    } else if (nbVoisins > 3) {
      nouvelleToile[x][y] = 0;
    }
  } else if (toile[x][y] == 0) {
    if (nbVoisins == 3) {
      nouvelleToile[x][y] = 1;
    }
  }
}

function calculVoisin(x, y) {
  let nbVoisins = 0;
  if (0 < x && 0 < y && toile[x - 1][y - 1]) {
    nbVoisins++;
  }
  if (0 < y && toile[x][y - 1]) {
    nbVoisins++;
  }
  if (x < tailleToile - 1 && 0 < y && toile[x + 1][y - 1]) {
    nbVoisins++;
  }
  if (0 < x && toile[x - 1][y]) {
    nbVoisins++;
  }
  if (x < tailleToile - 1 && toile[x + 1][y]) {
    nbVoisins++;
  }
  if (0 < x && y < tailleToile - 1 && toile[x - 1][y + 1]) {
    nbVoisins++;
  }
  if (y < tailleToile - 1 && toile[x][y + 1]) {
    nbVoisins++;
  }
  if (x < tailleToile - 1 && y < tailleToile - 1 && toile[x + 1][y + 1]) {
    nbVoisins++;
  }

  return nbVoisins;
}

function drawSquare(x, y) {
  a = x * tailleCarre;
  b = y * tailleCarre;
  ctx.fillRect(b, a, tailleCarre, tailleCarre);
}

function glider() {
  for (i = 0; i < tailleToile; i++) {
    for (j = 0; j < tailleToile; j++) {
      toile[i][j] = 0;
    }
  }
  toile[0][1] = 1;
  toile[1][1] = 1;
  toile[2][1] = 1;
  dessinerToile();
}

function deLaVie() {
  for (i = 0; i < tailleToile; i++) {
    for (j = 0; j < tailleToile; j++) {
      verification(i, j);
    }
  }
}

function start() {
  if (commencer) {
    clearInterval(commencer);
  }
  commencer = setInterval(function () {
    deLaVie();
    for (i = 0; i < tailleToile; i++) {
      for (j = 0; j < tailleToile; j++) {
        toile[i][j] = nouvelleToile[i][j];
      }
    }
    dessinerToile();
  }, vitesse);

  deLaVie();
  for (i = 0; i < tailleToile; i++) {
    for (j = 0; j < tailleToile; j++) {
      toile[i][j] = nouvelleToile[i][j];
    }
  }
  dessinerToile();
}

function stop() {
  clearInterval(commencer);
}

function moitié() {
  vitesse = 1000;
  start();
}

function vnormale() {
  vitesse = 500;
  start();
}

function x2() {
  vitesse = 250;
  start();
}
function x10() {
  vitesse = 50;
  start();
}

function restart() {
  vitesse = 500;
  clearInterval(commencer);
  toile = [];
  nouvelleToile = [];
  definirToiles();
  dessinerToile();
}

definirToiles();
dessinerToile();
