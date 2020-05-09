"user strict";


function enregistrePseudo(formulaire) {

  let pseudo =  document.getElementById("pseudo").value

  let xhr = new XMLHttpRequest();
  xhr.open('GET','enregistrer_nom?usr=' + pseudo,true);
  xhr.send();
  return false;

}


function traiterPseudo(){

  let pseudo =  document.getElementById("pseudo").value

  let xhr = new XMLHttpRequest();
  xhr.open('GET','check_pseudo?usr=' + pseudo ,true);
  xhr.onload = verifePseudo;
  xhr.send();

  return false;

}

function verifePseudo(){

  let pseudo =  document.getElementById("pseudo").value

  let reponse = this.response;

  console.log(reponse)
    if( reponse == 1 ){
      alert("Ce pseudo existe deja , vous etes bien  : " + pseudo + " Si non trouvé un autre pseudo")

    }

    if( reponse == 0 ){
      enregistrePseudo();
      alert("vous avez bien été enregistré vous pouvez passer à la page suivante");
    }
  return false;
}


