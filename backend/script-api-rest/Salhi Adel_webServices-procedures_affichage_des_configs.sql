ALTER PROCEDURE "DBA"."recup_pseudo"()
/* RESULT( nom_colonne type_colonne, ... ) */
BEGIN
	/* Saisissez ici les instructions de la procédure */
select UserId, pseudo
from tbUser
END
-------------------------------------------------------------------------------------------------------------------------------------------
ALTER PROCEDURE "DBA"."recup_config"(IN pseu VARCHAR(20) )
/* RESULT( nom_colonne type_colonne, ... ) */
RESULT(ConfigId INTEGER)
BEGIN
	/* Saisissez ici les instructions de la procédure */
select tbUser.ConfigId
FROM tbUser join tbConfig
where pseudo = pseu
END
-------------------------------------------------------------------------------------------------------------------------------------------
ALTER PROCEDURE "DBA"."recup_composant"(IN config INTEGER)
/* RESULT( nom_colonne type_colonne, ... ) */
BEGIN
	/* Saisissez ici les instructions de la procédure */
select DBA.tbBoitier.BoitierName, DBA.tbCarteGraphique.CarteGraphiqueName,  DBA.tbCarteMere.CarteMereName, DBA.tbDisqueDur.DisqueDurName, DBA.tbProcesseur.ProcesseurName, DBA.tbRAM.RamName
FROM tbConfig NATURAL JOIN tbBoitier, tbConfig NATURAL JOIN tbCarteGraphique, tbConfig NATURAL JOIN tbCarteMere, tbConfig NATURAL JOIN tbDisqueDur, tbConfig NATURAL JOIN tbProcesseur, tbConfig NATURAL JOIN tbRAM                                                    
WHERE ConfigId = config
END
-------------------------------------------------------------------------------------------------------------------------------------------
CREATE SERVICE "recup_pseudo" TYPE 'JSON' AUTHORIZATION OFF USER "DBA" URL ON METHODS 'GET' AS call recup_pseudo();
CREATE SERVICE "recup_config" TYPE 'RAW' AUTHORIZATION OFF USER "DBA" URL ON METHODS 'GET' AS call recup_config(:pseu);
CREATE SERVICE "recup_composant" TYPE 'JSON' AUTHORIZATION OFF USER "DBA" URL ON METHODS 'GET' AS call recup_composant(:config);
