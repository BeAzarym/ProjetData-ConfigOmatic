/*************************************************************processeur***********************************************************************************************************/

function procBDD() {
  let requestProcesseur = new XMLHttpRequest();
  requestProcesseur.open("get", "processeurs");
  requestProcesseur.onload = function () {
    let dataProcesseur = JSON.parse(requestProcesseur.responseText);
    verificationProc(dataProcesseur);
  };
  requestProcesseur.send();
}

function verificationProc(data) {
  let nom = document.getElementsByName("nomProc")[0].value;

  let verifieNom = new Boolean("false");

  for (let i of data) {
    if (nom == null) {
      alert("Nom du produit est null, réintroduisez le produit!");
      break;
    } else if (nom == "") {
      alert("Nom produit est vide, réintroduisez le produit!");
      break;
    } else {
      if (nom === i.ProcesseurName) {
        alert(
          "Le produit est déjà dans la liste des produits, veuillez rajouter un autre?"
        );
        break;
      } else if (nom !== i.ProcesseurName) {
        verifieNom = true;
      }
    }
    console.log(verifieNom);
    console.log(i.ProcesseurName);
  }

  if (verifieNom === true) {
    enregProcesseur();
    alert("Le produit est ajouté?");
    console.log("totul e in ordine iaci");
  }
}

function enregProcesseur() {
  let nom = document.getElementsByName("nomProc")[0].value;
  let prix = document.getElementsByName("prixProc")[0].value;
  let socket = document.getElementsByName("socketProc")[0].value;

  console.log(nom + prix + socket);
  let ajouterComp = new XMLHttpRequest();
  ajouterComp.open(
    "get",
    "ajouter_processeur?procName=" +
      nom +
      "&procPrix=" +
      prix +
      "&socket=" +
      socket
  );

  ajouterComp.send();
}

/*************************************************************carteMere***********************************************************************************************************/

function carteMereBDD() {
  let requestProcesseur = new XMLHttpRequest();
  requestProcesseur.open("get", "carteMere");
  requestProcesseur.onload = function () {
    let dataProduit = JSON.parse(requestProcesseur.responseText);
    verificationCM(dataProduit);
  };
  requestProcesseur.send();
}

function verificationCM(data) {
  let nom = document.getElementsByName("nomCM")[0].value;

  let verifieNom = new Boolean("false");

  for (let i of data) {
    if (nom == null) {
      alert("Nom du produit est null, réintroduisez le produit!");
      break;
    } else if (nom == "") {
      alert("Nom produit est vide, réintroduisez le produit!");
      break;
    } else {
      if (nom === i.CarteMereName) {
        alert(
          "Le produit est déjà dans la liste des produits, veuillez rajouter un autre?"
        );
        break;
      } else if (nom !== i.CarteMereName) {
        verifieNom = true;
      }
    }
    console.log(verifieNom);
    console.log(i.CarteMereName);
  }

  if (verifieNom === true) {
    enregCM();
    alert("Le produit est ajouté?");
    console.log("totul e in ordine iaci");
  }
}

function enregCM() {
  let nom = document.getElementsByName("nomCM")[0].value;
  let prix = document.getElementsByName("prixCM")[0].value;
  let socket = document.getElementsByName("socketCM")[0].value;

  console.log(nom + prix + socket);
  let ajouterComp = new XMLHttpRequest();
  ajouterComp.open(
    "get",
    "ajouter_CM?CMName=" + nom + "&CMPrix=" + prix + "&CMsocket=" + socket
  );
  ajouterComp.send();
}

/*************************************************************memoireVive***********************************************************************************************************/

function memoireViveBDD() {
  let requestProcesseur = new XMLHttpRequest();
  requestProcesseur.open("get", "ram");
  requestProcesseur.onload = function () {
    let dataProduit = JSON.parse(requestProcesseur.responseText);
    verificationMV(dataProduit);
  };
  requestProcesseur.send();
}

function verificationMV(data) {
  let nom = document.getElementsByName("nomMV")[0].value;

  let verifieNom = new Boolean("false");

  for (let i of data) {
    if (nom == null) {
      alert("Nom du produit est null, réintroduisez le produit!");
      break;
    } else if (nom == "") {
      alert("Nom produit est vide, réintroduisez le produit!");
      break;
    } else {
      if (nom === i.RamName) {
        alert(
          "Le produit est déjà dans la liste des produits, veuillez rajouter un autre?"
        );
        break;
      } else if (nom !== i.RamName) {
        verifieNom = true;
      }
    }
    console.log(verifieNom);
    console.log(i.RamName);
  }

  if (verifieNom === true) {
    enregMV();
    alert("Le produit est ajouté?");
    console.log("totul e in ordine iaci");
  }
}

function enregMV() {
  let nom = document.getElementsByName("nomMV")[0].value;
  let prix = document.getElementsByName("prixMV")[0].value;
  let socket = document.getElementsByName("capaciteMV")[0].value;

  console.log(nom + prix + socket);
  let ajouterComp = new XMLHttpRequest();
  ajouterComp.open(
    "get",
    "ajouter_MV?MVName=" + nom + "&MVPrix=" + prix + "&MVcapacite=" + socket
  );
  ajouterComp.send();
}

/*************************************************************carteGraphique***********************************************************************************************************/

function carteGraphiqueBDD() {
  let requestProcesseur = new XMLHttpRequest();
  requestProcesseur.open("get", "CarteGraphique");
  requestProcesseur.onload = function () {
    let dataProduit = JSON.parse(requestProcesseur.responseText);
    verificationCG(dataProduit);
  };
  requestProcesseur.send();
}

function verificationCG(data) {
  let nom = document.getElementsByName("nomCG")[0].value;

  let verifieNom = new Boolean("false");

  for (let i of data) {
    if (nom == null) {
      alert("Nom du produit est null, réintroduisez le produit!");
      break;
    } else if (nom == "") {
      alert("Nom produit est vide, réintroduisez le produit!");
      break;
    } else {
      if (nom === i.RamName) {
        alert(
          "Le produit est déjà dans la liste des produits, veuillez rajouter un autre?"
        );
        break;
      } else if (nom !== i.RamName) {
        verifieNom = true;
      }
    }
    console.log(verifieNom);
    console.log(i.RamName);
  }

  if (verifieNom === true) {
    enregCG();
    alert("Le produit est ajouté?");
    console.log("totul e in ordine iaci");
  }
}

function enregCG() {
  let nom = document.getElementsByName("nomCG")[0].value;
  let prix = document.getElementsByName("prixCG")[0].value;
  let memoire = document.getElementsByName("capaciteCG")[0].value;

  console.log(nom + prix + memoire);
  let ajouterComp = new XMLHttpRequest();
  ajouterComp.open(
    "get",
    "ajouter_CG?CGName=" + nom + "&CGPrix=" + prix + "&CGMemoire=" + memoire
  );
  ajouterComp.send();
}

/*************************************************************disqueDur***********************************************************************************************************/

function disqueDurBDD() {
  let requestProcesseur = new XMLHttpRequest();
  requestProcesseur.open("get", "disqueDur");
  requestProcesseur.onload = function () {
    let dataProduit = JSON.parse(requestProcesseur.responseText);
    verificationDD(dataProduit);
  };
  requestProcesseur.send();
}

function verificationDD(data) {
  let nom = document.getElementsByName("nomDD")[0].value;

  let verifieNom = new Boolean("false");

  for (let i of data) {
    if (nom == null) {
      alert("Nom du produit est null, réintroduisez le produit!");
      break;
    } else if (nom == "") {
      alert("Nom produit est vide, réintroduisez le produit!");
      break;
    } else {
      if (nom === i.RamName) {
        alert(
          "Le produit est déjà dans la liste des produits, veuillez rajouter un autre?"
        );
        break;
      } else if (nom !== i.RamName) {
        verifieNom = true;
      }
    }
    console.log(verifieNom);
    console.log(i.RamName);
  }

  if (verifieNom === true) {
    enregDD();
    alert("Le produit est ajouté?");
    console.log("totul e in ordine iaci");
  }
}

function enregDD() {
  let nom = document.getElementsByName("nomDD")[0].value;
  let prix = document.getElementsByName("prixDD")[0].value;
  let memoire = document.getElementsByName("capaciteDD")[0].value;

  console.log(nom + prix + memoire);
  let ajouterComp = new XMLHttpRequest();
  ajouterComp.open(
    "get",
    "ajouter_DD?DDName=" + nom + "&DDPrix=" + prix + "&DDCapacite=" + memoire
  );
  ajouterComp.send();
}

/*************************************************************boitier***********************************************************************************************************/

function boitierBDD() {
  let requestProcesseur = new XMLHttpRequest();
  requestProcesseur.open("get", "boitier");
  requestProcesseur.onload = function () {
    let dataProduit = JSON.parse(requestProcesseur.responseText);
    verificationBoitier(dataProduit);
  };
  requestProcesseur.send();
}

function verificationBoitier(data) {
  let nom = document.getElementsByName("nomBoitier")[0].value;

  let verifieNom = new Boolean("false");

  for (let i of data) {
    if (nom == null) {
      alert("Nom du produit est null, réintroduisez le produit!");
      break;
    } else if (nom == "") {
      alert("Nom produit est vide, réintroduisez le produit!");
      break;
    } else {
      if (nom === i.BoitierName) {
        alert(
          "Le produit est déjà dans la liste des produits, veuillez rajouter un autre?"
        );
        break;
      } else if (nom !== i.BoitierName) {
        verifieNom = true;
      }
    }
    console.log(verifieNom);
    console.log(i.BoitierName);
  }

  if (verifieNom === true) {
    enregBoitier();
    alert("Le produit est ajouté?");
    console.log("totul e in ordine iaci");
  }
}

function enregBoitier() {
  let nom = document.getElementsByName("nomBoitier")[0].value;
  let prix = document.getElementsByName("prixBoitier")[0].value;
  let largeurBoitier = document.getElementsByName("largeurBoitier")[0].value;
  let hauteurBoitier = document.getElementsByName("hauteurBoitier")[0].value;

  console.log(nom + prix + largeurBoitier);
  let ajouterComp = new XMLHttpRequest();
  ajouterComp.open(
    "get",
    "ajouter_boitier?BoitierName=" +
      nom +
      "&BoitierPrix=" +
      prix +
      "&BoitierLargeur=" +
      largeurBoitier +
      "&BoitierHauteur=" +
      hauteurBoitier
  );
  ajouterComp.send();
}
