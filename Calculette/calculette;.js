let chiffre1 = [12];
let chiffre2 = [4];
let operation = 1;
let itération = 1;
let chiffreAffiché = 0;


function cliquer(valeur){
    if (itération=1){
        chiffre1.push(valeur)
        chiffreAffiché = (chiffre1.join(''))
    }
    else{
        chiffre2.push(valeur)
        chiffreAffiché = (chiffre2.join(''))
    }
    return chiffreAffiché   
}

// fonction + (2)
// fonction - (3)
// fonction * (4)
// fonction / (5)
// fonction % (6)


function plus(){
    operation == 2
    itération ++
}

function moins(){
    operation == 3
    itération ++
}

function multiplier(){
    operation == 4
    itération ++
}

function diviser(){
    operation == 5
    itération ++
}

function pourcentage(){
    operation == 6
}

function racine(){
    chiffreAffiché = Math.sqrt(chiffreAffiché)
}

function resultat(){
    if(operation==1){
        return "une seule valeur enregistrée"
    }else if(operation==2){
        chiffreAffiché = chiffre1.join("")
        chiffreAffiché +=chiffre2.join("")
    }else if(operation==3){
        chiffreAffiché = (chiffre1.join("")-chiffre2.join(""))
    }else if(operation==4){
        chiffreAffiché = (chiffre1.join("")*chiffre2.join(""))
    }else if(operation==5){
        chiffreAffiché = (chiffre1.join("")/chiffre2.join(""))
    }
    return chiffreAffiché 
}

function reset(){
    chiffre1 = [];
    chiffre2 = [];  
    operation = [];
    itération = 1;
    chiffreAffiché = 0;

}