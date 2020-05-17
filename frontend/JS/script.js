"use strict"; 

//body onload chargement
// récup des données des composants et les affiches ds la page
function chargement(){
    appelProc();
    appelCM();
    appelMV();
    appelCG();
    appelDD();
    appelBoitier();
    recupConfig();
}


//function qui enregistre le pseudo vérifié
function enregistrePseudo(formulaire) {

    let pseudo =  document.getElementById("pseudo").value

    let xhr = new XMLHttpRequest();
    xhr.open('GET','enregistrer_nom?usr=' + pseudo,true);
    xhr.send();
    return false;

}


//verification du pseudo dand la db
function traiterPseudo(){

    let pseudo =  document.getElementById("pseudo").value

    let xhr = new XMLHttpRequest();
    xhr.open('GET','check_pseudo?usr=' + pseudo ,true);
    xhr.onload = verifePseudo;
    xhr.send();

    return false;

}

//conditions de la verification du pseudo avec deux possibilités
//enregistre le pseudo ou demande d introduire un autre pseudo et de passer a la suite

function verifePseudo(){

    let pseudo =  document.getElementById("pseudo").value

    let reponse = this.response;

    console.log(reponse)
    if( reponse == 1 ){
        alert("Ce pseudo existe deja , vous etes bien  : " + pseudo + " Si non trouvé un autre pseudo")
        recupConfig();
    }

    if( reponse == 0 ){
        enregistrePseudo();
        alert("vous avez bien été enregistré vous pouvez descendre sur la page");
    }
    return false;
}





/* appel processeur */
function appelProc() {
    let xhr = new XMLHttpRequest();
    xhr.open("get", "processeurs", true);
    xhr.onload = chargementProc;
    xhr.responseType = "json";
    xhr.send();
    return false;
}

function onClickChangeVisibility(id) {
    let getId = document.getElementById(id);

    if (getId.style.display === "none") {
        getId.style.display = "flex";
    }
    else{
        getId.style.display = "none";
    }
}

function chargementProc() {
    let reponse = this.response;

    let procId = "";
    for (let i of reponse) {
        

        procId += '<div class="containerProduits" onclick="displayIdCompProc(' + i.ProcesseurId +')">' +  /* onClock ne functione pas */
            '<div class="intContainerProduits">' +
            '<div class="nomDescriptionProd">' +
            '<div class="monProd">' +
            '<p>' + i.ProcesseurName + '</p > ' +
            '</div>' +
            '<div class="descriptionProd">' +
            '<p> ' +"Socket: "+ i.socket + '</p>' +
            '</div>' +
            '</div>' +
            '<img src="" alt="" /*TODO add ploto name drom database OPTIONAL*/>' +
            '</div>' +
            '<div class="intContainerPrix">' +
            '<p>' + i.ProcesseurPrix + '</p>' +
            '</div>' +
            '</div>';
    };
    document.getElementById("processeur").insertAdjacentHTML('beforeend', procId);

}
function displayIdCompProc(x) {
    console.log(x);
    addInRecap(x, "Id du processeur :");
    let getInput = document.getElementsByName("inputProcesseur")[0];
    getInput.value = "";
    getInput.value = x;
    console.log(getInput.value);
}

function addInRecap() {
    let inputWith = '<div id="composantRecap">'+arguments[1] + " " + arguments[0] +'</div>';
    
    document.getElementById("contRecap").insertAdjacentHTML('beforeend', inputWith);
}
/***************************************************************************************************************appel carte mere */

function appelCM() {
    let xhr = new XMLHttpRequest();
    xhr.open("get", "carteMere", true);
    xhr.onload = chargementCM;
    xhr.responseType = "json";
    xhr.send();
    return false;
}


function chargementCM() {
    let reponse = this.response;

    let cmId = "";
    for (let i of reponse) {
        

        cmId += '<div class="containerProduits" onclick="displayIdCompCM(' + i.CarteMereId +')">' +
            '<div class="intContainerProduits">' +
            '<div class="nomDescriptionProd">' +
            '<div class="monProd">' +
            '<p>' + i.CarteMereName + '</p > ' +
            '</div>' +
            '<div class="descriptionProd">' +
            '<p> ' + "Socket: " + i.socket + '</p>' +
            '</div>' +
            '</div>' +
            '<img src="" alt="" /*TODO add ploto name drom database OPTIONAL*/>' +
            '</div>' +
            '<div class="intContainerPrix">' +
            '<p>' + i.CarteMerePrix + '</p>' +
            '</div>' +
            '</div>';
    };
    document.getElementById("carteMere").insertAdjacentHTML('beforeend', cmId);

}
function displayIdCompCM(y) {
    console.log(y);
    addInRecap(y, "Id du carte mere :");
    let getInput = document.getElementsByName("inputCM")[0];
    getInput.value = "";
    getInput.value = y;
    console.log(getInput.value);
}
/********************************************************************************************************************appel memoire vive */

function appelMV() {
    let xhr = new XMLHttpRequest();
    xhr.open("get", "ram", true);
    xhr.onload = chargementMV;
    xhr.responseType = "json";
    xhr.send();
    return false;
}


function chargementMV() {
    let reponse = this.response;

    let mvId = "";
    for (let i of reponse) {
        let giveId = "ramId" + i.RamId;

        mvId += '<div class="containerProduits" onclick="displayIdCompMV(' + i.RamId +')">' +  /* onClock ne functione pas */
            '<div class="intContainerProduits">' +
            '<div class="nomDescriptionProd">' +
            '<div class="monProd">' +
            '<p>' + i.RamName + '</p > ' +
            '</div>' +
            '<div class="descriptionProd">' +
            '<p> ' +"Capacité: " + i.capacite + "Go" + '</p>' +
            '</div>' +
            '</div>' +
            '<img src="" alt="" /*TODO add ploto name drom database OPTIONAL*/>' +
            '</div>' +
            '<div class="intContainerPrix">' +
            '<p>' + i.RamPrix + '</p>' +
            '</div>' +
            '</div>';
    };
    document.getElementById("memoireVive").insertAdjacentHTML('beforeend', mvId);

}
function displayIdCompMV(z) {
    console.log(z);
    addInRecap(z, "Id du ram :");
    let getInput = document.getElementsByName("inputMV")[0];
    getInput.value = "";
    getInput.value = z;
    console.log(getInput.value);
}
/*******************************************************************************************************appel carte graphique */

function appelCG() {
    let xhr = new XMLHttpRequest();
    xhr.open("get", "carteGraphique", true);
    xhr.onload = chargementCG;
    xhr.responseType = "json";
    xhr.send();
    return false;
}


function chargementCG() {
    let reponse = this.response;

    let cgId = "";
    for (let i of reponse) {
        

        cgId += '<div class="containerProduits" " onclick="displayIdCompCG(' + i.CarteGraphiqueId +')">' +  
            '<div class="intContainerProduits">' +
            '<div class="nomDescriptionProd">' +
            '<div class="monProd">' +
            '<p>' + i.CarteGraphiqueName + '</p > ' +
            '</div>' +
            '<div class="descriptionProd">' +
            '<p> ' +"Capacité: "+  i.memoire +"Go" + '</p>' +
            '</div>' +
            '</div>' +
            '<img src="" alt="" /*TODO add ploto name drom database OPTIONAL*/>' +
            '</div>' +
            '<div class="intContainerPrix">' +
            '<p>' + i.CarteGraphiquePrix + '</p>' +
            '</div>' +
            '</div>';
    };
    document.getElementById("carteGraphique").insertAdjacentHTML('beforeend', cgId);

}
function displayIdCompCG(z) {
    console.log(z);
    addInRecap(z, "Id du carte graphique :");
    let getInput = document.getElementsByName("inputCG")[0];
    getInput.value = "";
    getInput.value = z;
    console.log(getInput.value);
}
/*****************************************************************************************************************appel disque dur */

function appelDD() {
    let xhr = new XMLHttpRequest();
    xhr.open("get", "disqueDur", true);
    xhr.onload = chargementDD;
    xhr.responseType = "json";
    xhr.send();
    return false;
}


function chargementDD() {
    let reponse = this.response;

    let ddId = "";
    for (let i of reponse) {
        

        ddId += '<div class="containerProduits" onclick="displayIdCompDD(' + i.DisqueDurId +')">' +  
            '<div class="intContainerProduits">' +
            '<div class="nomDescriptionProd">' +
            '<div class="monProd">' +
            '<p>' + i.DisqueDurName + '</p > ' +
            '</div>' +
            '<div class="descriptionProd">' +
            '<p> ' + "Capacité: " + i.capacite +"To" + '</p>' +
            '</div>' +
            '</div>' +
            '<img src="" alt="" /*TODO add ploto name drom database OPTIONAL*/>' +
            '</div>' +
            '<div class="intContainerPrix">' +
            '<p>' + i.DisqueDurPrix + '</p>' +
            '</div>' +
            '</div>';
    };
    document.getElementById("disqueDur").insertAdjacentHTML('beforeend', ddId);

}

function displayIdCompDD(z) {
    console.log(z);
    addInRecap(z, "Id du disque dur :");
    let getInput = document.getElementsByName("inputDD")[0];
    getInput.value = "";
    getInput.value = z;
    console.log(getInput.value);
}
/***************************************************************************************************************appel boitier */

function appelBoitier() {

    let xhr = new XMLHttpRequest();
    xhr.open("get", "boitier", true);
    xhr.onload = chargementBoitier;
    xhr.responseType = "json";
    xhr.send();
    return false;
}


function chargementBoitier() {

    let reponse = this.response;

    let boitierId = "";
    for (let i of reponse){
        

        boitierId += '<div class="containerProduits" onclick="displayIdCompBoitier(' + i.BoitierId +')">' +  
            '<div class="intContainerProduits">' +
            '<div class="nomDescriptionProd">' +
            '<div class="monProd">' +
            '<p>' + i.BoitierName + '</p > ' +
            '</div>' +
            '<div class="descriptionProd">' +
            '<p> ' + 'Largeur: ' + i.largeur + "</br>" +  'Hauteur: ' + i.hauteur + '</p>' +
            '</div>' +
            '</div>' +
            '<img src="" alt="" /TODO add ploto name drom database OPTIONAL*/>' +
        '</div>' +
        '<div class="intContainerPrix">' +
        '<p>' + i.BoitierPrix + '</p>' +
        '</div>' +
        '</div>';
    };
    document.getElementById("boitier").insertAdjacentHTML('beforeend', boitierId);
}
function displayIdCompBoitier(z) {
    console.log(z);
    addInRecap(z, "Id du boitier :");
    let getInput = document.getElementsByName("inputBoitier")[0];
    getInput.value = "";
    getInput.value = z;
    console.log(getInput.value);
}
