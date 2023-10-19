let tableau = {
  HTML: document.getElementById("tableau"),
  taille: 10,
};

let pionChoisit = undefined;

function creerTableau() {
  tableau.HTML.innerHTML = "";
  let numCouleur = 0;

  for (i = 0; i < tableau.taille; i++) {
    let nouvelleLigne = tableau.HTML.insertRow(-1);

    for (j = 0; j < tableau.taille; j++) {
      let nouvelleCase = nouvelleLigne.insertCell(j);
      nouvelleCase.dataset.ligne = i + 1;
      nouvelleCase.dataset.colonne = j + 1;

      if (numCouleur % 2 == 0) {
        nouvelleCase.className = "caseBlanche";
      } else {
        nouvelleCase.className = "caseNoire";
        let nouveauPion = document.createElement("span");
        nouveauPion.className = "pion";
        nouveauPion.dataset.coordonnee = [j, i];
        nouveauPion.dataset.type = "pionPassif";
        nouveauPion.dataset.dame = "non";
        nouvelleCase.appendChild(nouveauPion);
        nouveauPion.onclick = actionDuPion;
        if (i < 4) {
          nouveauPion.dataset.couleur = "pionNoir";
        } else if (i > 5) {
          nouveauPion.dataset.couleur = "pionBlanc";
        } else {
          nouveauPion.dataset.type = "pasPion";
        }
      }
      numCouleur++;
    }
    numCouleur++;
  }
}

function actionDuPion() {
  if (this.dataset.type != "pasPion") {
    selectionnerLePion(this);
  } else if (pionChoisit == undefined) {
    return;
  } else {
    caseDuPion = document.querySelector(
      '[data-coordonnee="' + pionChoisit.dataset.coordonnee + '"]'
    );
    resultat = verifierDeplacement(caseDuPion, this);
    if (resultat[0] == "manger") {
      deplacerLePion(this);
      supprimerLePion(resultat[1]);
      supprimerLePion(caseDuPion);
      pionChoisit = this;
    } else if (resultat[0] == "deplacerLePion") {
      deplacerLePion(this);
      supprimerLePion(caseDuPion);
      pionChoisit = this;
    }
  }
}

function selectionnerLePion(lePion) {
  if (lePion.dataset.type == "pasPion") {
    return;
  } else if (pionChoisit == undefined) {
    lePion.dataset.type = "pionActif";
    pionChoisit = lePion;
  } else if (pionChoisit == lePion) {
    lePion.dataset.type = "pionPassif";
    pionChoisit = undefined;
  } else {
    pionChoisit.dataset.type = "pionPassif";
    lePion.dataset.type = "pionActif";
    pionChoisit = lePion;
  }
}

function verifierDeplacement(case1, case2) {
  let x1 = Number(case1.dataset.coordonnee[0]);
  let y1 = Number(case1.dataset.coordonnee[2]);
  let x2 = Number(case2.dataset.coordonnee[0]);
  let y2 = Number(case2.dataset.coordonnee[2]);
  let x3 = x2 - x1;
  let y3 = y2 - y1;
  absx3 = Math.abs(x3);
  absy3 = Math.abs(y3);
  pionMange = undefined;
  if (case2.dataset.type != "pasPion") {
    return ["non"];
  }
  if (absx3 != absy3) {
    return ["non"];
  }
  if (case1.dataset.dame === "dame") {
    let nPion = 0;
    let xstep = x3 / absx3;
    let ystep = y3 / absy3;
    xp = x1 + xstep;
    yp = y1 + ystep;
    for (i = 1; i < absx3; i++) {
      caseEnVerification = document.querySelector(
        `[data-coordonnee="${xp},${yp}"`
      );
      if (caseEnVerification.dataset.type != "pasPion") {
        pionMange = caseEnVerification;
        nPion++;
      }
      console.log(caseEnVerification.dataset.type);
      console.log(xp);
      xp += xstep;
      yp += ystep;
    }
    if (nPion == 0) {
      return ["deplacerLePion"];
    }
    if (nPion == 1 && pionMange.dataset.couleur != case1.dataset.couleur) {
      return ["manger", pionMange];
    } else {
      return ["non"];
    }
  } else if (absx3 == 2) {
    pionMange = document.querySelector(
      `[data-coordonnee="${x1 + x3 / 2},${y1 + y3 / 2}"`
    );
    if (
      pionMange.dataset.type != "pasPion" &&
      pionMange.dataset.couleur != case1.dataset.couleur
    ) {
      return ["manger", pionMange];
    }
  } else if (absx3 == 1) {
    if (case1.dataset.couleur == "pionNoir" && y3 > 0) {
      return ["deplacerLePion"];
    } else if (case1.dataset.couleur == "pionBlanc" && y3 < 0) {
      return ["deplacerLePion"];
    } else {
      return ["non"];
    }
  }
  return ["non"];
}

function verifierDame(lePion) {
  if (
    (lePion.dataset.couleur == "pionNoir" &&
      lePion.dataset.coordonnee[2] == "9") ||
    (lePion.dataset.couleur == "pionBlanc" &&
      lePion.dataset.coordonnee[2] == "0")
  ) {
    lePion.dataset.dame = "dame";
    lePion.innerHTML = "👑";
  } else return;
}

function deplacerLePion(lePion) {
  lePion.dataset.type = pionChoisit.dataset.type;
  lePion.dataset.couleur = pionChoisit.dataset.couleur;
  lePion.dataset.dame = pionChoisit.dataset.dame;
  lePion.innerHTML = pionChoisit.innerHTML;
  verifierDame(lePion);
}
function supprimerLePion(lePion) {
  lePion.dataset.type = "pasPion";
  lePion.dataset.couleur = "vide";
  lePion.dataset.dame = "non";
  lePion.innerHTML = "";
}

function verifierManger() {}

creerTableau();
