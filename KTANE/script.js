var nbBatteries = document.querySelector(".nbBatteries").value;
var CAR = document.querySelector(".CAR");
var FRK = document.querySelector(".FRK");

function serialVowel() {
  var serialNumber = document.querySelector(".serial").value;
  const result = /[aeuioy]/.test(serialNumber);
  console.log(result);
}

function serialNumber() {
  var serialNumber = document.querySelector(".serial").value;
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

function wires() {
  nbfils = document.querySelector("input[name='nbfil']:checked").value;
  for (i = 0; i < nbfils; i++) {
    document.querySelector(".wiresOverlay").innerHTML =
      '<select id="couleurFils"><option value="rouge">rouge</option><option value="bleu">bleu</option><option value="blanc">blanc</option><option value="jaune">jaune</option><option value="noir">noir</option></select>';
    i++;
  }
}
