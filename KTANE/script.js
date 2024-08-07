//BASIC INFO

function goTo(idName) {
  document.getElementById(idName).scrollIntoView({ block: 'center' })

}

function getNbOfBatteries() {
  return document.querySelector('input[name="batteries"]:checked').value;
}

function getCAR() {
  return document.querySelector("#CAR");
}

function getFRK() {
  return document.querySelector("#FRK");
}

function getSerialVowel() {
  return document.querySelector("#serialVowel");
}

function getSerialLastNumber() {
  return document.querySelector("#serialLastNumber");
}

function parallelPort() {
  return document.querySelector("#parallelPort");
}

function getErrorNumber() {
  return document.querySelector('input[name="errors"]:checked').value;
}

// BOUTONS

var hold = " hold <p>blue : compteur 4</p><p>jaune : compteur 5</p><p>autre : compteur 1</p>";

let myButton = {
  mention: "",
  color: "",
};

function mentionChange(a) {
  myButton["mention"] = a.value;
  document.querySelector("#buttonImage").dataset.color = a.value;
  document.querySelector(".button-text").innerHTML = a.value;
  checkForResult();
}

function colorChange(a) {
  myButton["color"] = a.value;
  document.querySelector("#buttonImage").classList = ""
  document.querySelector("#buttonImage").classList.add(a.value)
  document.querySelector("#buttonImage").dataset.input = a.value;
  checkForResult();
}

function checkForResult() {
  if (myButton["mention"] != "" && myButton["color"] != "") {
    resultatBouton();
  }
}

function resultatBouton() {
  var nbBatteries = getNbOfBatteries();
  var CAR = getCAR();
  var FRK = getFRK();
  if (myButton["color"] == "blue" && myButton["mention"] == "abort") {
    document.querySelector(".resultbutton").innerHTML = "gardez appuyé";
    document.querySelector("#hold").classList.remove("d-none");
    console.log("hold");
  } else if (nbBatteries > 1 && myButton["mention"] == "explode") {
    document.querySelector(".resultbutton").innerHTML = "appuyer et relacher";
    document.querySelector("#hold").classList.add("d-none");
    console.log("push");
  } else if (myButton["color"] == "white" && CAR.checked == true) {
    document.querySelector(".resultbutton").innerHTML = "gardez appuyé";
    document.querySelector("#hold").classList.remove("d-none");
    console.log("hold");
  } else if (nbBatteries > 2 && FRK.checked == true) {
    document.querySelector(".resultbutton").innerHTML = "appuyer et relacher";
    document.querySelector("#hold").classList.add("d-none");
    console.log("push");
  } else if (myButton["color"] == "yellow") {
    document.querySelector(".resultbutton").innerHTML = "gardez appuyé";
    document.querySelector("#hold").classList.remove("d-none");
    console.log("hold");
  } else if (myButton["color"] == "red" && myButton["mention"] == "hold") {
    document.querySelector(".resultbutton").innerHTML = "appuyer et relacher";
    document.querySelector("#hold").classList.add("d-none");
    console.log("push ");
  } else {
    document.querySelector("#hold").classList.remove("d-none");
    document.querySelector(".resultbutton").innerHTML = "gardez appuyé";
    console.log("hold");
  }
}

function resetBouton() {
  myButton["mention"] = "";
  myButton["color"] = "white";
  document.querySelector(".resultbutton").innerHTML = '';
  document.querySelector("#hold").classList.add('d-none');
  document.querySelector("#buttonImage").innerHTML = '<p class="button-text"></p>';
  document.querySelector("#buttonImage").dataset.color = "white";
  document.querySelector("#buttonImage").dataset.input = "";
  document.querySelector("#buttonImage").classList = "white"
}

//Simple Wire

function setupWire() {
  document.querySelector(".simpleWires4").classList.remove("hidden");
  document.querySelector(".simpleWires5").classList.remove("hidden");
  document.querySelector(".simpleWires6").classList.remove("hidden");
  x = document.querySelector('input[name="simpleWireNb"]:checked').value;
  if (x < 4) {
    document.querySelector(".simpleWires4").classList.add("hidden");
  }
  if (x < 5) {
    document.querySelector(".simpleWires5").classList.add("hidden");
  }
  if (x < 6) {
    document.querySelector(".simpleWires6").classList.add("hidden");
  }
}

function wireColorNb(color) {
  count = 0;
  for (let i = 0; i < wire.length; i++) {
    if (wire[i] == color) {
      count++;
    }
  }
  return count;
}

function testWires() {
  x = document.querySelector('input[name="simpleWireNb"]:checked').value;
  wire = [];
  for (i = 1; i < 7; i++) {
    wire.push(document.querySelector(`input[name="simpleWireColor${i}"]:checked`).value);
  }
  if (x == 3) {
    wire = wire.slice(0, 3);
    if (wireColorNb("red") == 0) {
      simpleWireResult = "couper le deuxième fil";
    } else if (wire[2] == "white") {
      simpleWireResult = "couper le dernier fil";
    } else if (wireColorNb("blue") > 1) {
      simpleWireResult = "couper le dernier fil bleu";
    } else {
      simpleWireResult = "couper le dernier fil";
    }
  } else if (x == 4) {
    wire = wire.slice(0, 4);
    if (wireColorNb("red") > 1 && !getSerialLastNumber().checked) {
      simpleWireResult = "couper le dernier fil rouge";
    } else if (wire[3] == "yellow" && wireColorNb("red") == 0) {
      simpleWireResult = "couper le premier fil";
    } else if (wireColorNb("blue") == 1) {
      simpleWireResult = "couper le premier fil";
    } else if (wireColorNb("yellow") > 1) {
      simpleWireResult = "couper le dernier fil";
    } else {
      simpleWireResult = "couper le deuxième fil";
    }
  } else if (x == 5) {
    wire = wire.slice(0, 5);
    if (wire[4] == "black" && !getSerialLastNumber().checked) {
      simpleWireResult = "couper le quatrième fil";
    } else if (wireColorNb("red") == 1 && wireColorNb("yellow" > 1)) {
      simpleWireResult = "couper le premier fil";
    } else if (wireColorNb("black") == 0) {
      simpleWireResult = "couper le deuxième fil";
    } else {
      simpleWireResult = "couper le premier fil";
    }
  } else if (x == 6) {
    if (wireColorNb("yellow") == 0 && !getSerialLastNumber().checked) {
      simpleWireResult = "couper le troisième fil";
    } else if (wireColorNb("yellow") == 1 && wireColorNb("white") > 1) {
      simpleWireResult = "couper le quatrième fil";
    } else if (wireColorNb("red") == 0) {
      simpleWireResult = "couper le dernier fil";
    } else {
      simpleWireResult = "couper le quatrième fil";
    }
  }
  document.querySelector(".resultWire").innerHTML = simpleWireResult;
}

//Keypads

let keypads = {
  list1: [28, 13, 30, 12, 7, 9, 23],
  list2: [16, 28, 23, 26, 3, 9, 20],
  list3: [1, 8, 26, 5, 15, 30, 3],
  list4: [11, 21, 31, 7, 5, 20, 4],
  list5: [24, 4, 31, 22, 21, 19, 2],
  list6: [11, 16, 27, 14, 24, 18, 6],
};

let myList = [];
var numberOfKeypad = 0;

function addKeypad(element) {
  if (numberOfKeypad < 4) {
    myList.push(element);
    element.classList.add("clicked");
    numberOfKeypad++;
  }
  if (numberOfKeypad == 4) {
    findKeypadResult();
  }
}

function findKeypadResult() {
  for (x = 1; x <= 6; x++) {
    testList(x);
  }
}

function testList(x) {
  testingList = keypads["list" + x];
  let listResult = [];
  for (i = 0; i < testingList.length; i++) {
    for (y = 0; y < myList.length; y++) {
      if (myList[y].alt == testingList[i]) {
        listResult.push(myList[y]);
      }
    }
  }
  if (listResult.length == 4) {
    document.querySelector(".keyResult1").src = listResult[0].src;
    document.querySelector(".keyResult2").src = listResult[1].src;
    document.querySelector(".keyResult3").src = listResult[2].src;
    document.querySelector(".keyResult4").src = listResult[3].src;
  }
}

function resetKeypad() {
  document.querySelector(".keyResult1").src = "./icons/questionmark.png";
  document.querySelector(".keyResult2").src = "./icons/questionmark.png";
  document.querySelector(".keyResult3").src = "./icons/questionmark.png";
  document.querySelector(".keyResult4").src = "./icons/questionmark.png";
  numberOfKeypad = 0;
  myList.forEach((element) => {
    element.classList.remove("clicked");
  });
  myList = [];
}

//Simon Says

const caseResultat = document.getElementById("simonSaysResult");

function addTile(color) {
  newDiv = document.createElement("div");
  newDiv.classList.add("tileResult");
  newDiv.classList.add(getRightColor(color));
  caseResultat.appendChild(newDiv);
}

function getRightColor(color) {
  errors = getErrorNumber();
  if (getSerialVowel().checked) {
    if (errors == 0) {
      if (color == "red") {
        return "blue";
      } else if (color == "blue") {
        return "red";
      } else if (color == "green") {
        return "yellow";
      } else if (color == "yellow") {
        return "green";
      }
    } else if (errors == 1) {
      if (color == "red") {
        return "yellow";
      } else if (color == "blue") {
        return "green";
      } else if (color == "green") {
        return "blue";
      } else if (color == "yellow") {
        return "red";
      }
    } else if (errors == 2) {
      if (color == "red") {
        return "green";
      } else if (color == "blue") {
        return "red";
      } else if (color == "green") {
        return "yellow";
      } else if (color == "yellow") {
        return "blue";
      }
    }
  } else if (!getSerialVowel().checked) {
    if (errors == 0) {
      if (color == "red") {
        return "blue";
      } else if (color == "blue") {
        return "yellow";
      } else if (color == "green") {
        return "green";
      } else if (color == "yellow") {
        return "red";
      }
    } else if (errors == 1) {
      if (color == "red" || color == "blue") {
        return color;
      } else if (color == "green") {
        return "yellow";
      } else if (color == "yellow") {
        return "green";
      }
    } else if (errors == 2) {
      if (color == "red") {
        return "yellow";
      } else if (color == "blue") {
        return "green";
      } else if (color == "green") {
        return "blue";
      } else if (color == "yellow") {
        return "red";
      }
    }
  }
}

function resetSimonSays() {
  caseResultat.innerHTML = "";
}

//WordPlay

firstWordsList = [
  ["...", 5],
  ["attends", 6],
  ["au", 5],
  ["bouge", 4],
  ["c", 2],
  ["c'est", 6],
  ["eau", 5],
  ["haut", 5],
  ["maux", 6],
  ["mot", 3],
  ["mots", 6],
  ["non", 6],
  ["ok", 2],
  ["oui", 3],
  ["premier", 2],
  ["rien", 3],
  ["rouge", 4],
  ["t'es", 6],
  ["tes", 4],
  ["thon", 1],
  ["ton", 4],
  ["tons", 4],
  ["tu es", 6],
  ["ver", 6],
  ["vers", 4],
  ["vert", 3],
  ["verre", 6],
  ["vide", 4],
];

secondWordsList = {
  1: ["APPUIE", "DROITE", "MILIEU", "OUI", "PRÊT", "APPUIE"],
  2: ["ATTENDS", "EUHHH", "NON", "VIDE", "E", "OUI", "GAUCHE", "PREMIER", "APPUIE", "EUX", "ATTENDS"],
  3: ["AVANT", "AVANT"],
  4: ["COMME", "TONS", "SUIVANT", "TES", "T'ES", "MAINTIENS", "FAIT", "QUOI", "QUOI ?", "AVANT", "TOI", "COMME"],
  5: ["DROITE", "OUI", "RIEN", "PRÊT", "APPUIE", "NON", "ATTENDS", "EUX", "DROITE"],
  6: ["E", "MILIEU", "NON", "PREMIER", "OUI", "EUHHH", "RIEN", "ATTENDS", "E"],
  7: ["EUHHH", "PRÊT", "RIEN", "GAUCHE", "EUX", "E", "OUI", "DROITE", "NON", "APPUIE", "VIDE", "EUHHH"],
  8: ["EUX", "EUHHH", "EUX"],
  9: ["FAIT", "OK", "AVANT", "SUIVANT", "QUOI ?", "TON", "T'ES", "TONS", "MAINTIENS", "COMME", "TOI", "TES", "THON", "QUOI", "FAIT"],
  10: ["GAUCHE", "DROITE", "GAUCHE"],
  11: ["MAINTIENS", "THON", "TES", "FAIT", "QUOI", "TOI", "T'ES", "OK", "QUOI ?", "TONS", "SUIVANT", "MAINTIENS"],
  12: ["MILIEU", "VIDE", "PRÊT", "E", "EUX", "RIEN", "APPUIE", "NON", "ATTENDS", "GAUCHE", "MILIEU"],
  13: ["NON", "VIDE", "EUHHH", "ATTENDS", "PREMIER", "EUX", "PRÊT", "DROITE", "OUI", "RIEN", "GAUCHE", "APPUIE", "E", "NON"],
  14: ["OK", "THON", "FAIT", "COMME", "TONS", "TOI", "MAINTIENS", "AVANT", "T'ES", "OK"],
  15: ["OUI", "E", "DROITE", "EUHHH", "MILIEU", "PREMIER", "EUX", "APPUIE", "PRÊT", "RIEN", "OUI", "GAUCHE", "VIDE", "NON", "ATTENDS"],
  16: ["PREMIER", "GAUCHE", "E", "OUI", "MILIEU", "NON", "DROITE", "RIEN", "EUHHH", "ATTENDS", "PRÊT", "VIDE", "EUX", "APPUIE", "PREMIER"],
  17: ["PRÊT", "OUI", "E", "EUX", "MILIEU", "GAUCHE", "APPUIE", "DROITE", "VIDE", "PRÊT"],
  18: ["QUOI ?", "TOI", "MAINTIENS", "TONS", "TON", "TES", "FAIT", "QUOI", "COMME", "THON", "AVANT", "T'ES", "SUIVANT", "QUOI ?"],
  19: ["QUOI", "T'ES", "TES", "THON", "TONS", "SUIVANT", "QUOI"],
  20: ["RIEN", "EUHHH", "DROITE", "E", "MILIEU", "OUI", "VIDE", "NON", "APPUIE", "GAUCHE", "EUX", "ATTENDS", "PREMIER", "RIEN"],
  21: ["SUIVANT", "QUOI ?", "AVANT", "QUOI", "TON", "MAINTIENS", "OK", "SUIVANT"],
  22: ["T'ES", "FAIT", "TES", "T'ES"],
  23: ["TES", "AVANT", "OK", "SUIVANT", "QUOI ?", "TONS", "T'ES", "QUOI", "FAIT", "TES"],
  24: ["THON", "TON", "SUIVANT", "COMME", "AVANT", "QUOI ?", "FAIT", "QUOI", "MAINTIENS", "TOI", "TES", "TONS", "OK", "T'ES", "THON"],
  25: ["TOI", "OK", "THON", "TON", "TONS", "SUIVANT", "AVANT", "T'ES", "MAINTIENS", "QUOI ?", "TOI"],
  26: ["TON", "QUOI", "THON", "AVANT", "TON"],
  27: ["TONS", "TOI", "TONS"],
  28: ["VIDE", "ATTENDS", "DROITE", "E", "MILIEU", "VIDE"],
};

const firstWords = document.getElementById("firstWords");
const secondWords = document.getElementById("secondWords");
const secondWordsResult = document.getElementById("secondWordsResult");

function createFirstWordsDisplay() {
  for (i = 0; i < 28; i++) {
    newDiv = document.createElement("div");
    newDiv.innerText = firstWordsList[i][0];
    newDiv.classList.add("watch" + firstWordsList[i][1]);
    firstWords.appendChild(newDiv);
    newDiv.onclick = findFirstWordsResult;
  }
}

function findFirstWordsResult(event) {
  if (event.currentTarget.classList == "watch1") {
    document.getElementById("firstWordsResult").innerText = "regarder en haut à gauche";
  }
  if (event.currentTarget.classList == "watch2") {
    document.getElementById("firstWordsResult").innerText = "regarder en haut à droite";
  }
  if (event.currentTarget.classList == "watch3") {
    document.getElementById("firstWordsResult").innerText = "regarder au milieu à gauche";
  }
  if (event.currentTarget.classList == "watch4") {
    document.getElementById("firstWordsResult").innerText = "regarder au milieu à droite";
  }
  if (event.currentTarget.classList == "watch5") {
    document.getElementById("firstWordsResult").innerText = "regarder en bas à gauche";
  }
  if (event.currentTarget.classList == "watch6") {
    document.getElementById("firstWordsResult").innerText = "regarder en bas à droite";
  }
}

function createSecondWordsDisplay() {
  for (i = 1; i < 29; i++) {
    newDiv = document.createElement("div");
    newDiv.innerText = secondWordsList[i][0];
    newDiv.value = i;
    secondWords.appendChild(newDiv);
    newDiv.onclick = showSecondWordsResult;
  }
}

function showSecondWordsResult(event) {
  secondWordsResult.innerHTML = "";
  let result = secondWordsList[event.currentTarget.value].slice(1);
  for (i = 0; i < result.length; i++) {
    newSpan = document.createElement("span");
    newSpan.innerText = " → " + result[i];
    secondWordsResult.appendChild(newSpan);
  }
}

createFirstWordsDisplay();
createSecondWordsDisplay();

//COMPLEX WIRES

complexWireResult = [];

function complexWireSelector(button) {
  if (button.dataset.click == "no") {
    button.dataset.click = "yes";
    complexWireResult.push(button.classList.value);
  } else {
    index = complexWireResult.indexOf(button.classList.value);
    complexWireResult.splice(index, index + 1);
    button.dataset.click = "no";
  }
  complexWireResolve()
}

function complexWireResolve() {
  if (
    (!complexWireResult.includes("blue") && !complexWireResult.includes("red") && !complexWireResult.includes("star") && !complexWireResult.includes("led")) ||
    (!complexWireResult.includes("blue") && !complexWireResult.includes("red") && complexWireResult.includes("star") && !complexWireResult.includes("led")) ||
    (!complexWireResult.includes("blue") && complexWireResult.includes("red") && complexWireResult.includes("star") && !complexWireResult.includes("led"))
  ) {
    result = "couper";
  } else if (
    (complexWireResult.includes("blue") && !complexWireResult.includes("red") && !complexWireResult.includes("star") && !complexWireResult.includes("led")) ||
    (!complexWireResult.includes("blue") && complexWireResult.includes("red") && !complexWireResult.includes("star") && !complexWireResult.includes("led")) ||
    (complexWireResult.includes("blue") && complexWireResult.includes("red") && !complexWireResult.includes("star") && !complexWireResult.includes("led")) ||
    (complexWireResult.includes("blue") && complexWireResult.includes("red") && !complexWireResult.includes("star") && complexWireResult.includes("led"))
  ) {
    if (getSerialLastNumber().checked) {
      result = "couper";
    } else {
      result = "ne pas couper";
    }
  } else if (
    (complexWireResult.includes("blue") && !complexWireResult.includes("red") && complexWireResult.includes("star") && !complexWireResult.includes("led")) ||
    (!complexWireResult.includes("blue") && !complexWireResult.includes("red") && !complexWireResult.includes("star") && complexWireResult.includes("led")) ||
    (complexWireResult.includes("blue") && complexWireResult.includes("red") && complexWireResult.includes("star") && complexWireResult.includes("led"))
  ) {
    result = "ne pas couper";
  } else if (
    (complexWireResult.includes("blue") && !complexWireResult.includes("red") && !complexWireResult.includes("star") && complexWireResult.includes("led")) ||
    (complexWireResult.includes("blue") && complexWireResult.includes("red") && complexWireResult.includes("star") && !complexWireResult.includes("led")) ||
    (complexWireResult.includes("blue") && !complexWireResult.includes("red") && complexWireResult.includes("star") && complexWireResult.includes("led"))
  ) {
    if (parallelPort().checked) {
      result = "couper";
    } else {
      result = "ne pas couper";
    }
  } else {
    (!complexWireResult.includes("blue") && !complexWireResult.includes("red") && complexWireResult.includes("star") && complexWireResult.includes("led")) ||
      (!complexWireResult.includes("blue") && complexWireResult.includes("red") && complexWireResult.includes("star") && complexWireResult.includes("led")) ||
      (!complexWireResult.includes("blue") && complexWireResult.includes("red") && !complexWireResult.includes("star") && complexWireResult.includes("led"));

    if (nbBatteries > 1) {
      result = "couper";
    } else {
      result = "ne pas couper";
    }
  }
  document.getElementById("complexWireResult").innerText = "";

  document.getElementById("complexWireResult").innerText = result;
}

//MEMORY

let stages = [];
let state = "display";

function reset() {
  stages = [];
  state = "display";
  instructions.innerText = "Numéro affiché sur l'écran";
  document.querySelector(".stage-memory").innerText = 0
}
reset();

function clicked(v) {
  switch (state) {
    case "display":
      return handle_display(v);
    case "value":
      return handle_value(v);
    case "position":
      return handle_position(v);
  }
}

function handle_display(v) {
  stages.push({ displayed: v });
  switch (stages.length) {
    case 1:
      switch (v) {
        case 1:
          press_position_ask_value(2);
          break;
        case 2:
          press_position_ask_value(2);
          break;
        case 3:
          press_position_ask_value(3);
          break;
        case 4:
          press_position_ask_value(4);
          break;
      }
      break;
    case 2:
      switch (v) {
        case 1:
          press_value_ask_position(4);
          break;
        case 2:
          press_position_ask_value(stages[0].position);
          break;
        case 3:
          press_position_ask_value(1);
          break;
        case 4:
          press_position_ask_value(stages[0].position);
          break;
      }
      break;
    case 3:
      switch (v) {
        case 1:
          press_value_ask_position(stages[1].value);
          break;
        case 2:
          press_value_ask_position(stages[0].value);
          break;
        case 3:
          press_position_ask_value(3);
          break;
        case 4:
          press_value_ask_position(4);
          break;
      }
      break;
    case 4:
      switch (v) {
        case 1:
          press_position_ask_value(stages[0].position);
          break;
        case 2:
          press_position_ask_value(1);
          break;
        case 3:
          press_position_ask_value(stages[1].position);
          break;
        case 4:
          press_position_ask_value(stages[1].position);
          break;
      }
      break;
    case 5:
      switch (v) {
        case 1:
          press_value_ask_position(stages[0].value);
          break;
        case 2:
          press_value_ask_position(stages[1].value);
          break;
        case 3:
          press_value_ask_position(stages[3].value);
          break;
        case 4:
          press_value_ask_position(stages[2].value);
          break;
      }
      break;
  }
}

function handle_position(p) {
  document.querySelector(".stage-memory").innerText = String(stages.length)
  stages[stages.length - 1].position = p;
  state = "display";
  instructions.innerText = "Numéro affiché sur l'écran";
}

function handle_value(v) {
  document.querySelector(".stage-memory").innerText = String(stages.length)
  stages[stages.length - 1].value = v;
  state = "display";
  instructions.innerText = "Numéro affiché sur l'écran";
}

function press_position_ask_value(p) {
  instructions.innerText = `regarder position ${p}, appuyer sur la valeur`;
  state = "value";
  stages[stages.length - 1].position = p;
}

function press_value_ask_position(v) {
  instructions.innerText = `numéro ${v}, appuyer sur la position`;
  state = "position";
  stages[stages.length - 1].value = v;
}

// WIRE SEQUENCE

wiresOrders = {
  red: ["C", "B", "A", "AC", "B", "AC", "ABC", "AB", "B"],
  blue: ["B", "AC", "B", "A", "B", "BC", "C", "AC", "A"],
  black: ["ABC", "AC", "B", "AC", "B", "BC", "AB", "C", "C"]
}

nmbOfRed = 0
nmbOfBlue = 0
nmbOfBlack = 0

NumberOfWires()

function NumberOfWires() {
  document.getElementById("nmbOfRedWires").innerText = nmbOfRed + 1
  document.getElementById("nmbOfBlueWires").innerText = nmbOfBlue + 1
  document.getElementById("nmbOfBlackWires").innerText = nmbOfBlack + 1
}

function addOneWire(color) {
  switch (color) {
    case "red":
      if (nmbOfRed < 8) {
        nmbOfRed += 1
        changeWireSequence()
      }
      break;

    case "blue":
      if (nmbOfBlue < 8) {
        nmbOfBlue += 1
        changeWireSequence()
      }
      break;

    case "black":
      if (nmbOfBlack < 8) {
        nmbOfBlack += 1
        changeWireSequence()
      }
      break;
  }
  NumberOfWires()
}

function changeWireSequence() {
  wireSequenceRed.textContent = wiresOrders.red[nmbOfRed]
  wireSequenceBlue.textContent = wiresOrders.blue[nmbOfBlue]
  wireSequenceBlack.textContent = wiresOrders.black[nmbOfBlack]
}

function resetWireSequence() {
  nmbOfRed = 0
  nmbOfBlue = 0
  nmbOfBlack = 0
  changeWireSequence()
  NumberOfWires()
}


// MAZE

maze = document.getElementById("maze-result")
function showMaze(num) {
  switch (num) {
    case 1:
      maze.classList = "maze-1"
      break;
    case 2:
      maze.classList = "maze-2"
      break;
    case 3:
      maze.classList = "maze-3"
      break;
    case 4:
      maze.classList = "maze-4"
      break;
    case 5:
      maze.classList = "maze-5"
      break;
    case 6:
      maze.classList = "maze-6"
      break;
    case 7:
      maze.classList = "maze-7"
      break;
    case 8:
      maze.classList = "maze-8"
      break;
    case 9:
      maze.classList = "maze-9"
      break;
  }
}

// PASSWORD

words = [
  "ABATS", "ABIME", "ABOIS", "ADIEU", "DELTA",
  "DENSE", "DEVIN", "DIVIN", "DRAME", "DROIT",
  "ENVOL", "ENVIE", "ENVOI", "ERRES", "ESSAI",
  "FLEUR", "FINIT", "FIOLE", "KILOS", "LITRE",
  "LIVRE", "MASSE", "MATCH", "MATIN", "MAUVE",
  "POSER", "PORTS", "POULE", "SALIR", "TAIRE",
  "TARIF", "TASSE", "VALVE", "VANNE", "VENTE"
];

letters = {
  1: [],
  2: [],
  3: [],
  4: [],
  5: []
}

function addFirstLetter(div) {
  toggleLetter(div, 1)
}

function addSecondLetter(div) {
  toggleLetter(div, 2)
}

function addThirdLetter(div) {
  toggleLetter(div, 3)
}

function addFourthLetter(div) {
  toggleLetter(div, 4)
}

function addFifthLetter(div) {
  toggleLetter(div, 5)
}

function toggleLetter(div, num) {
  if (div.dataset.click == 'false'){
    div.dataset.click = 'true'
    letters[num].push(div.innerText)
  }else if(div.dataset.click == 'true'){
    div.dataset.click = 'false'
    i = letters[num].indexOf(div.innerText)
    letters[num].splice(i, 1)
  }
  tryWords()
}

function tryWords() {
  found = false
  words.forEach(function(word) {
    test = word.split('');
    if (letters[1].includes(test[0])
    && letters[2].includes(test[1])
    && letters[3].includes(test[2])
    && letters[4].includes(test[3])
    && letters[5].includes(test[4])) {
      document.querySelector(".password-result").innerText = `le mot est ${word}`
      found = true
    }
  })
  if (found == false){
    document.querySelector(".password-result").innerText = 'no result'
  }
}

function resetPassword() {
  letters = {
    1: [],
    2: [],
    3: [],
    4: [],
    5: []
  }
  clicked = document.querySelectorAll('[data-click="true"]')
  clicked.forEach(function(letter) {
    letter.dataset.click = 'false'
  })
  document.querySelector(".password-result").innerText = 'no result'
}

// NEEDY

myNeedy = [0,0,0,0,0,0,0,0,0,0,0,0]

result = "pas trouvé"

solution = {
  up: [[0,0,1,0,1,1,1,1,1,1,0,1,1], [1,0,1,0,1,0,0,1,1,0,1,1]],
  down: [[0,1,1,0,0,1,1,1,1,1,0,1,1], [1,0,1,0,1,0,0,1,0,0,0,1]],
  left: [[0,0,0,0,1,0,1,0,0,0,1,1,1], [0,0,0,0,1,0,0,0,0,1,1,0]],
  right: [[1,0,1,1,1,1,1,1,1,0,1,0], [1,0,1,1,0,0,1,1,1,0,1,0]],
}

function toggleNeedy(div, i){
  if (div.dataset.click == 'false'){
    div.dataset.click = 'true'
    myNeedy[i] = 1
    console.log(myNeedy);
  }else if(div.dataset.click == 'true'){
    div.dataset.click = 'false'
    myNeedy[i] = 0
    console.log(myNeedy);
  }
  tryNeedy()
}

function tryNeedy(){
  test = myNeedy.join('')
  if (test === solution.up[0].join('') ||
      test === solution.up[1].join('')){
        result = 'haut'
  }else if (test === solution.down[0].join('') ||
    test === solution.down[1].join('')){
      result = 'bas'
  }else if (test === solution.left[0].join('') ||
    test === solution.left[1].join('')){
      result = 'gauche'
  }else if (test === solution.right[0].join('') ||
    test === solution.right[1].join('')){
      result = 'droite'
  }else{
    result = "aucune"
  }
  document.querySelector('.needy-result').innerText = result
}
