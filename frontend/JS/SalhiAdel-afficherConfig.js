function recuPseudo(){
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

function recupConfig(){
    let pseu = document.getElementById("pseudo");
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'recup_config?pseu=' + "wakez", true);
    xhr.onload = function testConfig(){
        let reponseConfig = this.response;
        recupComposant(reponseConfig);
    }
    xhr.send();

}

function recupComposant(reponseConfig){
    let config = reponseConfig;
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'recup_composant?config=' + config, true);
    xhr.onload = testComposant;

    xhr.send();
}
function testComposant(){
    let reponseComposant = JSON.parse(this.response);
    let tableComposant = '<table>';
    for (let i of reponseComposant){
        tableComposant += '<tr><td>Nom de la config :</td><td>' + document.getElementById("pseudo").value + '</td></tr>'
            +'<tr><td>Boitier :</td><td>' + i.BoitierName + '</td></tr>'
            +'<tr><td>Carte Graphique :</td><td>' + i.CarteGraphiqueName + '</td></tr>'
            +'<tr><td>Carte Mère :</td><td>' + i.CarteMereName + '</td></tr>'
            +'<tr><td>Disque Dur :</td><td>' + i.DisqueDurName + '</td></tr>'
            +'<tr><td>Processeur :</td><td>' + i.ProcesseurName + '</td></tr>'
            +'<tr><td>Ram :</td><td>' + i.RamName + '</td></tr></table>'
    }
    document.getElementById("configAffichage").innerHTML += tableComposant;
}