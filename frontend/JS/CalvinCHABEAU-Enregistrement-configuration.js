function enregistrerConfiguration () {
    let pseudoEnregDonne = document.getElementById("pseudo").value;
    let processeur = document.getElementsByName("inputProcesseur")[0].value;
    let boitier = document.getElementsByName("inputBoitier")[0].value;
    let ram = document.getElementsByName("inputMV")[0].value;
    let carteGraphique = document.getElementsByName("inputCG")[0].value;
    let carteMere = document.getElementsByName("inputCM")[0].value;
    let disqueDur = document.getElementsByName("inputDD")[0].value;

    let xhr = new XMLHttpRequest();
    xhr.open('GET','enregistre_config?Processeur='+processeur+"&Boitier="+boitier+"&Ram="+ram+"&CarteGraphique="+carteGraphique+"&CarteMere="+carteMere+"&DisqueDur="+disqueDur+"&pseudo="+pseudoEnregDonne,true);
    xhr.send();

    return false;

}

