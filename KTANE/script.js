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

let leBouton = {
  mention: "",
  couleur: "",
};

function changeMention(a) {
  leBouton["mention"] = a.value;
  console.log(leBouton["mention"]);
  checkForResult();
}

function changeCouleur(a) {
  leBouton["couleur"] = a.value;
  console.log(leBouton["couleur"]);
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
    console.log("1maintenir");
  } else if (nbBatteries > 1 && leBouton["mention"] == "exploser") {
    console.log("1appuyer et relacher");
  } else if (leBouton["couleur"] == "blanc" && CAR.checked == true) {
    console.log("2maintenir");
  } else if (nbBatteries > 2 && FRK.checked == true) {
    console.log("2appuyer et relacher");
  } else if (leBouton["couleur"] == "jaune") {
    console.log("3maintenir");
  } else if (leBouton["couleur"] == "rouge" && leBouton["mention"] == "Maintenir") {
    console.log("3appuyer et relacher");
  } else {
    console.log("4maintenir");
  }
}
