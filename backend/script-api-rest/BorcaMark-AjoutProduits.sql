/*********************************************PROCESSEUR***********************************************************/
CREATE PROCEDURE "DBA"."ajouter_processeur"( @procName VARCHAR(20), @procPrix INT, @socket VARCHAR(20))

BEGIN
    INSERT INTO tbProcesseur
        (ProcesseurName, ProcesseurPrix, socket)
    VALUES
        (@procName, @procPrix, @socket)
END

CREATE SERVICE "ajouter_processeur" TYPE 'JSON' USER "DBA" METHODS 'GET' AS call ajouter_processeur
(:procName,:procPrix,:socket);


/**********************************************Carte Mere*********************************************************/
CREATE PROCEDURE "DBA"."ajouter_CM"( @CMName VARCHAR(20), @CMPrix INT, @CMsocket VARCHAR(20))

BEGIN
    INSERT INTO tbCarteMere
        (CarteMereName, CarteMerePrix, socket)
    VALUES
        (@CMName, @CMPrix, @CMsocket)
END

CREATE SERVICE "ajouter_CM" TYPE 'JSON' USER "DBA" METHODS 'GET' AS call ajouter_CM
(:CMName,:CMPrix,:CMsocket);


/***********************************************Memeoire vive***************************************************/
CREATE PROCEDURE "DBA"."ajouter_MV"( @MVName VARCHAR(20), @MVPrix INT, @MVcapacite VARCHAR(20))

BEGIN
    INSERT INTO tbRAM
        (RamName, RamPrix, capacite)
    VALUES
        (@MVName, @MVPrix, @MVcapacite)
END

CREATE SERVICE "ajouter_MV" TYPE 'JSON' USER "DBA" METHODS 'GET' AS call ajouter_MV
(:MVName,:MVPrix,:MVcapacite);


/***********************************************Carte graphique*********************************************************/
CREATE PROCEDURE "DBA"."ajouter_CG"( @CGName VARCHAR(20), @CGPrix INT, @CGMemoire VARCHAR(20))

BEGIN
    INSERT INTO tbCarteGraphique
        (CarteGraphiqueName, CarteGraphiquePrix, memoire)
    VALUES
        (@CGName, @CGPrix, @CGMemoire)
END

CREATE SERVICE "ajouter_CG" TYPE 'JSON' USER "DBA" METHODS 'GET' AS call ajouter_CG
(:CGName,:CGPrix,:CGMemoire);


/**********************************************Disque dur*************************************************************/
CREATE PROCEDURE "DBA"."ajouter_DD"( @DDName VARCHAR(20), @DDPrix INT, @DDCapacite VARCHAR(20))

BEGIN
    INSERT INTO tbDisqueDur
        (DisqueDurName, DisqueDurPrix, capacite)
    VALUES
        (@DDName, @DDPrix, @DDCapacite)
END
CREATE SERVICE "ajouter_DD" TYPE 'JSON' USER "DBA" METHODS 'GET' AS call ajouter_DD
(:DDName,:DDPrix,:DDCapacite);


/**********************************************Boitier*****************************************************************/
CREATE PROCEDURE "DBA"."ajouter_boitier"( @BoitierName VARCHAR(20), @BoitierPrix INT, @BoitierLargeur VARCHAR(20), @BoitierHauteur VARCHAR(20))

BEGIN
    INSERT INTO tbBoitier
        (BoitierName, BoitierPrix, largeur, hauteur)
    VALUES
        (@BoitierName, @BoitierPrix, @BoitierLargeur, @BoitierHauteur)
END
CREATE SERVICE "ajouter_boitier" TYPE 'JSON' USER "DBA" METHODS 'GET' AS call ajouter_boitier
(:BoitierName,:BoitierPrix,:BoitierLargeur,:BoitierHauteur);
