var nbBatteries = document.querySelector(".nbBatteries").value;
var CAR = document.querySelector(".CAR");
var FRK = document.querySelector(".FRK");
var serialNumber = document.querySelector(".serial").value;

function serialVowel() {
  serialNumber = document.querySelector(".serial").value;
  const result = /[aeuioy]/.test(serialNumber);
}

function serialLastEven() {
  serialNumber = document.querySelector(".serial").value;
  return serialNumber[serialNumber.length - 1] % 2 == 0;
}

// BOUTONS

var maintenir = " Maintenir <p>bleu : compteur 4</p><p>jaune : compteur 5</p><p>autre : compteur 1</p>";

let leBouton = {
  mention: "",
  couleur: "",
};

function changeMention(a) {
  leBouton["mention"] = a.value;
  document.querySelector("#imageBouton").classList.add((leBouton["mention"] = a.value));
  document.querySelector("#imageBouton").innerHTML = leBouton["mention"] = a.value;
  checkForResult();
}

function changeCouleur(a) {
  leBouton["couleur"] = a.value;
  document.querySelector("#imageBouton").classList.add((leBouton["couleur"] = a.value));
  checkForResult();
}

function checkForResult() {
  if (leBouton["mention"] != "" && leBouton["couleur"] != "") {
    resultatBouton();
  }
}

function resultatBouton() {
  var nbBatteries = document.querySelector(".nbBatteries").value;
  var CAR = document.querySelector(".CAR");
  var FRK = document.querySelector(".FRK");
  if (leBouton["couleur"] == "bleu" && leBouton["mention"] == "annuler") {
    document.querySelector("#resultat").innerHTML = maintenir;
    console.log("1");
  } else if (nbBatteries > 1 && leBouton["mention"] == "exploser") {
    document.querySelector("#resultat").innerHTML = "appuyer et relacher";
    console.log("2");
  } else if (leBouton["couleur"] == "blanc" && CAR.checked == true) {
    document.querySelector("#resultat").innerHTML = maintenir;
    console.log("3");
  } else if (nbBatteries > 2 && FRK.checked == true) {
    document.querySelector("#resultat").innerHTML = "appuyer et relacher";
    console.log("4");
  } else if (leBouton["couleur"] == "jaune") {
    document.querySelector("#resultat").innerHTML = maintenir;
    console.log("5");
  } else if (leBouton["couleur"] == "rouge" && leBouton["mention"] == "maintenir") {
    console.log("6");
    document.querySelector("#resultat").innerHTML = "appuyer et relacher";
  } else {
    document.querySelector("#resultat").innerHTML = maintenir;
    console.log("7");
  }
}

function resetBouton() {
  leBouton["mention"] = "";
  leBouton["couleur"] = "";
  document.querySelector("#resultat").innerHTML = "";
  document.querySelector("#imageBouton").className = "";
  document.querySelector("#imageBouton").innerHTML = "";
}

//Fils horizontaux

function setupWire() {
  x = document.querySelector('input[name="nbfil"]:checked').value;
  document.getElementById("couleurFil4").disabled = x < 4;
  document.getElementById("couleurFil5").disabled = x < 5;
  document.getElementById("couleurFil6").disabled = x < 6;
}

function nombreDeFils(couleur) {
  count = 0;
  for (let i = 0; i < fils.length; i++) {
    if (fils[i] == couleur) {
      count++;
    }
  }
  return count;
}

function testWires() {
  x = document.querySelector('input[name="nbfil"]:checked').value;
  fils = [];
  for (i = 1; i < 7; i++) {
    fils.push(document.getElementById("couleurFil" + i).value);
  }
  if (x == 3) {
    fils = fils.slice(0, 3);
    if (nombreDeFils("rouge") == 0) {
      resultat = "couper le deuxième fil";
    } else if (fils[2] == "blanc") {
      resultat = "couper le dernier fil";
    } else if (nombreDeFils("bleu") > 1) {
      resultat = "couper le dernier fil bleu";
    } else {
      resultat = "couper le dernier fil";
    }
  } else if (x == 4) {
    fils = fils.slice(0, 4);
    if (nombreDeFils("rouge") > 1 && !serialLastEven()) {
      resultat = "couper le dernier fil rouge";
    } else if (fils[3] == "jaune" && nombreDeFils("rouge") == 0) {
      resultat = "couper le premier fil";
    } else if (nombreDeFils("bleu") == 1) {
      resultat = "couper le premier fil";
    } else if (nombreDeFils("jaune") > 1) {
      resultat = "couper le dernier fil";
    } else {
      resutat = "couper le deuxième fil";
    }
  } else if (x == 5) {
    fils = fils.slice(0, 5);
    if (fils[4] == "noir" && !serialLastEven()) {
      resultat = "couper le quatrième fil";
    } else if (nombreDeFils("rouge") == 1 && nombreDeFils("jaune" > 1)) {
      resultat = "couper le premier fil";
    } else if (nombreDeFils("noir") == 0) {
      resultat = "couper le deuxième fil";
    } else {
      resultat = "couper le premier fil";
    }
  } else if (x == 6) {
    if (nombreDeFils("jaune") == 0 && !serialLastEven()) {
      resultat = "couper le troisième fil";
    } else if (nombreDeFils("jaune") == 1 && nombreDeFils("blanc") > 1) {
      resultat = "couper le quatrième fil";
    } else if (nombreDeFils("rouge") == 0) {
      resultat = "couper le dernier fil";
    } else {
      resultat = "couper le quantrième fil";
    }
  }
  document.querySelector(".resultWire").innerHTML = resultat;
}
