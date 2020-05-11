function enregistrerDonnéeConfiguration () {
    let pseudo = document.getElementById("pseudo").value;
    let Processeur = document.getElementsByName("inputProcesseur")[0].values;
    let Boitier = document.getElementsByName("inputBoitier")[0].values;
    let Ram = document.getElementsByName("inputMV")[0].values;
    let CarteGraphique = document.getElementsByName("inputCG")[0].values;
    let CarteMere = document.getElementsByName("inputCM")[0].values;
    let DisqueDur = document.getElementsByName("inputDD")[0].values;
}

function enregistrerConfiguration () {
    let xhr = new XMLHttpRequest();
    xhr.open('GET','enregistre_config' + "?Processeur="+Processeur+"&Boitier="+Boitier+"&Ram="+Ram+"&CarteGraphique="+CarteGraphique+"&CarteMere="+CarteMere+"&DisqueDur="+DisqueDur+"&pseudo="+pseudo,true);
    xhr.onload =enregistrerDonnéeConfiguration();
    xhr.send();

    return false;

}




