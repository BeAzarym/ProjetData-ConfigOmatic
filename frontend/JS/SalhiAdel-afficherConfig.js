//1er fonction créer afin de recuperer le pseudo, mais inutile au final
/*function recuPseudo(){
    let pseudo = document.getElementById("pseudo").value;
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'recup_pseudo', true);
    xhr.onload = function comparerPseudo(){
        let reponse = this.response;
        for (let i in reponse){
            if (pseudo = i.pseudo){
                recupConfig;
            }
        }
    }
    xhr.send();
}
*/
//fonction permettant de recuperer la config en fonction du pseudo présent sur la page
function recupConfig(){
    let nom = document.getElementById("pseudo").value;
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'recup_config?pseu=' + nom, true);
    xhr.onload = function testConfig(){
        let reponseConfig = this.response;
        recupComposant(reponseConfig);
    }
    xhr.send();

}

//fonction permettant de récuperer les composant lié à l'id de la config
function recupComposant(reponseConfig){
    let config = reponseConfig;
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'recup_composant?config=' + config, true);
    xhr.onload = afficherComposant;

    xhr.send();
}

//affichage de la config sur la page
function afficherComposant(){
    document.getElementById("configAffichage").innerHTML = '';
    let reponseComposant = JSON.parse(this.response);
    let tableComposant = '<table>';
    for (let composant of reponseComposant){
        tableComposant += '<tr><td>Nom de la config :</td><td>' + document.getElementById("pseudo").value + '</td></tr>'
            +'<tr><td>Boitier :</td><td>' + composant.BoitierName + '</td></tr>'
            +'<tr><td>Carte Graphique :</td><td>' + composant.CarteGraphiqueName + '</td></tr>'
            +'<tr><td>Carte Mère :</td><td>' + composant.CarteMereName + '</td></tr>'
            +'<tr><td>Disque Dur :</td><td>' + composant.DisqueDurName + '</td></tr>'
            +'<tr><td>Processeur :</td><td>' + composant.ProcesseurName + '</td></tr>'
            +'<tr><td>Ram :</td><td>' + composant.RamName + '</td></tr></table>'
    }
    document.getElementById("configAffichage").innerHTML += tableComposant;
}

