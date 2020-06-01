"use strict"; //DEVASHISH BASNET

//function qui enregistre le pseudo vérifié
//call web service enregistrer_nom @usr qui est le pseudo que l utilisateur entre
function enregistrePseudo(formulaire) {

    let pseudo =  document.getElementById("pseudo").value

    let xhr = new XMLHttpRequest();
    xhr.open('GET','enregistrer_nom?usr=' + pseudo,true);
    xhr.send();
    return false;

}


//verification du pseudo dand la db
//call web service check_pseudo @usr qui est le pseudo que l utilisateur entre 
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

   // console.log(reponse)
    if( reponse == 1 ){
        alert("Ce pseudo existe deja , vous etes bien  : " + pseudo + " Si non trouvé un autre pseudo")

    }

    if( reponse == 0 ){
        enregistrePseudo();
        alert("vous avez bien été enregistré vous pouvez descendre sur la page");
    }
    return false;
}



