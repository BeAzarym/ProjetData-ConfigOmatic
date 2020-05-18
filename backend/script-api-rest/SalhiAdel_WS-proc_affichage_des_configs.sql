
ALTER PROCEDURE "DBA"."recup_config"(IN nom VARCHAR(20) )
/* RESULT( nom_colonne type_colonne, ... ) */
RESULT(ConfigId INTEGER)
BEGIN
	/* Saisissez ici les instructions de la procédure */
select tbUser.ConfigId
FROM tbUser 
where pseudoUser = nom
END
-------------------------------------------------------------------------------------------------------------------------------------------
ALTER PROCEDURE "DBA"."recup_composant"(IN config INTEGER)
/* RESULT( nom_colonne type_colonne, ... ) */
BEGIN
	/* Saisissez ici les instructions de la procédure */
select DBA.tbBoitier.BoitierName, DBA.tbCarteGraphique.CarteGraphiqueName,  DBA.tbCarteMere.CarteMereName, DBA.tbDisqueDur.DisqueDurName, DBA.tbProcesseur.ProcesseurName, DBA.tbRAM.RamName
FROM tbConfig JOIN tbBoitier, tbConfig JOIN tbCarteGraphique, tbConfig JOIN tbCarteMere, tbConfig JOIN tbDisqueDur, tbConfig JOIN tbProcesseur, tbConfig JOIN tbRAM                                                    
WHERE ConfigId = config
END
-------------------------------------------------------------------------------------------------------------------------------------------
CREATE SERVICE "recup_pseudo" TYPE 'JSON' AUTHORIZATION OFF USER "DBA" URL ON METHODS 'GET' AS call recup_pseudo();
CREATE SERVICE "recup_config" TYPE 'JSON' AUTHORIZATION OFF USER "DBA" URL ON METHODS 'GET' AS call recup_config(:nom);
CREATE SERVICE "recup_composant" TYPE 'JSON' AUTHORIZATION OFF USER "DBA" URL ON METHODS 'GET' AS call recup_composant(:config);
