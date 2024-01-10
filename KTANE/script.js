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
      resutat = "couper le deuxième fil";
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
    findResult();
  }
}

function findResult() {
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
  if (getSerialVowel) {
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
  } else if (!getSerialVowel) {
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
