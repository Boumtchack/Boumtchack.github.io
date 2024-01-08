var nbBatteries = document.querySelector(".nbBatteries").value;
var CAR = document.querySelector(".CAR");
var FRK = document.querySelector(".FRK");

function serialVowel() {
  var serialNumber = document.querySelector(".serial").value;
  const result = /[aeuioy]/.test(serialNumber);
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

function setupWire() {
  x = document.querySelector('input[name="nbfil"]:checked').value;
  if (x == 3) {
    document.getElementById("couleurFil4").disabled = true;
    document.getElementById("couleurFil5").disabled = true;
    document.getElementById("couleurFil6").disabled = true;
  } else if (x == 4) {
    document.getElementById("couleurFil4").disabled = false;
    document.getElementById("couleurFil5").disabled = true;
    document.getElementById("couleurFil6").disabled = true;
  } else if (x == 5) {
    document.getElementById("couleurFil4").disabled = false;
    document.getElementById("couleurFil5").disabled = false;
    document.getElementById("couleurFil6").disabled = true;
  } else if (x == 6) {
    document.getElementById("couleurFil4").disabled = false;
    document.getElementById("couleurFil5").disabled = false;
    document.getElementById("couleurFil6").disabled = false;
  }
}

function nombreDeFils(ar, couleur){

}

function testWires() {
  x = document.querySelector('input[name="nbfil"]:checked').value;
  fils = [];
  fils.push(document.getElementById("couleurFil1").value);
  fils.push(document.getElementById("couleurFil2").value);
  fils.push(document.getElementById("couleurFil3").value);
  fils.push(document.getElementById("couleurFil4").value);
  fils.push(document.getElementById("couleurFil5").value);
  fils.push(document.getElementById("couleurFil6").value);
  if (x == 3) {
    fils3 = fils.slice(0, 2);
    for()
  } else if (x == 4) {
    fils4 = fils.slice(0, 3);
  } else if (x == 5) {
    fils5 = fils.slice(0, 4);
  } else if (x == 6) {
    fils6 = fils.slice(0, 5);
  }
}
