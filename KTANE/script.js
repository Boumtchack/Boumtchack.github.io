//BASIC INFO

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
  document.querySelector("#buttonImage").classList.add((myButton["mention"] = a.value));
  document.querySelector("#buttonImage").innerHTML = myButton["mention"] = a.value;
  checkForResult();
}

function colorChange(a) {
  myButton["color"] = a.value;
  document.querySelector("#buttonImage").classList.add((myButton["color"] = a.value));
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
    document.querySelector("#buttonResult").innerHTML = hold;
    console.log("1");
  } else if (nbBatteries > 1 && myButton["mention"] == "explode") {
    document.querySelector("#buttonResult").innerHTML = "appuyer et relacher";
    console.log("2");
  } else if (myButton["color"] == "white" && CAR.checked == true) {
    document.querySelector("#buttonResult").innerHTML = hold;
    console.log("3");
  } else if (nbBatteries > 2 && FRK.checked == true) {
    document.querySelector("#buttonResult").innerHTML = "appuyer et relacher";
    console.log("4");
  } else if (myButton["color"] == "yellow") {
    document.querySelector("#buttonResult").innerHTML = hold;
    console.log("5");
  } else if (myButton["color"] == "red" && myButton["mention"] == "hold") {
    console.log("6");
    document.querySelector("#buttonResult").innerHTML = "appuyer et relacher";
  } else {
    document.querySelector("#buttonResult").innerHTML = hold;
    console.log("7");
  }
}

function resetBouton() {
  myButton["mention"] = "";
  myButton["color"] = "";
  document.querySelector("#buttonResult").innerHTML = "";
  document.querySelector("#buttonImage").className = "";
  document.querySelector("#buttonImage").innerHTML = "";
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
  document.querySelector(".keyResult1").src = "";
  document.querySelector(".keyResult2").src = "";
  document.querySelector(".keyResult3").src = "";
  document.querySelector(".keyResult4").src = "";
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
    newSpan.innerText = result[i] + "- - -";
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
  instructions.innerText = "Valeur affiché?";
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
  stages[stages.length - 1].position = p;
  state = "display";
  instructions.innerText = "Valeur affiché?";
}

function handle_value(v) {
  stages[stages.length - 1].value = v;
  state = "display";
  instructions.innerText = "Valeur affiché?";
}

function press_position_ask_value(p) {
  instructions.innerText = `position ${p} ,appuyer sur la valeur`;
  state = "value";
  stages[stages.length - 1].position = p;
}

function press_value_ask_position(v) {
  instructions.innerText = `valeur ${v} appuyer sur la position`;
  state = "position";
  stages[stages.length - 1].value = v;
}

// WIRE SEQUENCE

wiresOrders = {
  red: ["C","B","A","AC","B","AC","ABC","AB","B"],
  blue: ["B","AC","B","A","B","BC","C","AC","A"],
  green: ["ABC","AC","B","AC","B","BC","AB","C","C"]
}

numbOfRed = 0
nmbOfBlue = 0
nmbOfGreen = 0
