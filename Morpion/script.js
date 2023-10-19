//définition des variables//

casesDuMorpion = document.querySelectorAll("#jeu td");

let tour = 0;

let joueur1={
    nom: "Joueur 1",
    signe : "X",
    score : 0,
}
let joueur2={
    nom : "Joueur 2",
    signe :"O",
    score : 0,
}

initialisationDePartie();
//Fonctions du code

function initialisationDePartie(){
    for(i=0 ; i < casesDuMorpion.length ; i++){
        casesDuMorpion[i].onclick = cliquerCase;
        casesDuMorpion[i].innerText ="";
        casesDuMorpion[i].className ="vide"
    }   
}

function verifierVictoire(){
    let A1 = casesDuMorpion[0].innerText;
    let A2 = casesDuMorpion[1].innerText;
    let A3 = casesDuMorpion[2].innerText;
    let B1 = casesDuMorpion[3].innerText;
    let B2 = casesDuMorpion[4].innerText;
    let B3 = casesDuMorpion[5].innerText;
    let C1 = casesDuMorpion[6].innerText;
    let C2 = casesDuMorpion[7].innerText;
    let C3 = casesDuMorpion[8].innerText;
    if(A1===A2 && A1===A3 && A1!==""
    || B1===B2 && B1===B3 && B1!==""
    || C1===C2 && C1===C3 && C1!==""
    || A1===B1 && A1===C1 && A1!==""
    || A2===B2 && A2===C2 && A2!==""
    || A3===B3 && A3===C3 && A3!==""
    || A1===B2 && A1===C3 && A1!==""
    || A3===B2 && A3===C1 && A3!==""){
        alert(joueurEnCours().nom + " a gagné");
        ajouterScore();
        resetGame();
    }else{
        if (tour==8){
            alert("Match nul");
            resetGame();
        }
        else{
            tour ++;
        }
    }
}


function joueurEnCours(){
    if (tour%2==0){
        return joueur1;
    }else{
        return joueur2;
    }
}

function cliquerCase(){
    this.innerText = joueurEnCours().signe;
    this.className = "rempli";
    this.onclick = ()=> alert("case déjà jouée");
    setTimeout(verifierVictoire,10);
}

function afficherScore(){
    document.getElementById("scoreJoueur1").innerText = joueur1.score;
    document.getElementById("scoreJoueur2").innerText = joueur2.score;
}

function ajouterScore(){
    joueurEnCours().score ++;
    afficherScore();
}

function resetGame(){
    tour = 0;
    initialisationDePartie();
}

function resetScore(){
    joueur1.score = 0;
    joueur2.score = 0;
    afficherScore();
}