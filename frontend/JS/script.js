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
}


https://github.com/BeAzarym/ProjetData-ConfigOmatic/blob/master/frontend/JS/script.js



/* appel processeur */
function appelProc() {
    let xhr = new XMLHttpRequest();
    xhr.open("get", "processeurs", true);
    xhr.onload = chargementProc;
    xhr.responseType = "json";
    xhr.send();
    return false;
}

function chargementProc() {
    let reponse = this.response;

    let procId = "";
    for (let i of reponse) {
        let giveId = "processeurId" + i.ProcesseurId;

        procId += '<div class="containerProduits" id="' + giveId + '" onclick="choisirComposant()">' +  /* onClock ne functione pas */
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

    let procId = "";
    for (let i of reponse) {
        let giveId = "carteMereId" + i.CarteMereId;

        procId += '<div class="containerProduits" id="' + giveId + '" onclick="choisirComposant()">' +  /* onClock ne functione pas */
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
    document.getElementById("carteMere").insertAdjacentHTML('beforeend', procId);

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

    let procId = "";
    for (let i of reponse) {
        let giveId = "ramId" + i.RamId;

        procId += '<div class="containerProduits" id="' + giveId + '" onclick="">' +  /* onClock ne functione pas */
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
    document.getElementById("memoireVive").insertAdjacentHTML('beforeend', procId);

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

    let procId = "";
    for (let i of reponse) {
        let giveId = "carteGraphiqueId" + i.CarteGraphiqueId;

        procId += '<div class="containerProduits" id="' + giveId + '" onclick="choisirComposant()">' +  /* onClock ne functione pas */
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
    document.getElementById("carteGraphique").insertAdjacentHTML('beforeend', procId);

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

    let procId = "";
    for (let i of reponse) {
        let giveId = "disqueDurId" + i.DisqueDurId;

        procId += '<div class="containerProduits" id="' + giveId + '" onclick="">' +  /* onClick ne functione pas */
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
    document.getElementById("disqueDur").insertAdjacentHTML('beforeend', procId);

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

    let procId = "";
    for (let i of reponse){
        let giveId = "boitierId" + i.BoitierId;

        procId += '<div class="containerProduits" id="' + giveId + '" onclick="choisirComposant()">' +  /* onClock ne functione pas */
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
    document.getElementById("boitier").insertAdjacentHTML('beforeend', procId);
}
