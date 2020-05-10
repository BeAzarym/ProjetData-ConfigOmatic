
/* auteur : CHABEAU CALVIN HE221842*/

CREATE FUNCTION "DBA"."RecupConfigId"( in @pseudo varchar(50)  )
RETURNS INTEGER
NOT DETERMINISTIC
BEGIN
	DECLARE configIdRecup INTEGER;
	--
    set configIdRecup = (select ConfigId from tbConfig where DBA.tbConfig.pseudo = @pseudo);
	--
    
    RETURN configIdRecup;
END
**************************************
CREATE PROCEDURE "DBA"."UpdateConfigId"( @pseudo varchar(50) )
BEGIN
     UPDATE tbUser
     set DBA.tbUser.ConfigId = (select RecupConfigId(@pseudo))
     where pseudo = @pseudo   
END
**************************************
CREATE PROCEDURE "DBA"."enregistrer_config"(@pseudo varchar(50),@Processeur int , @Boitier INT, @Ram int , @CarteGraphique int , @CarteMere int, @DisqueDur int )
 
BEGIN
   
   insert into DBA.tbConfig
    (ProcesseurId , BoitierId , RamId  , CarteGraphiqueId  , CarteMereId , DisqueDurId,pseudo)
    values
    (@Processeur , @Boitier , @Ram  , @CarteGraphique , @CarteMere, @DisqueDur, @pseudo);     

    call UpdateConfigId(@pseudo)
END
***************************************

CREATE SERVICE "enregistre_config" TYPE 'RAW' AUTHORIZATION OFF USER "DBA" URL ON METHODS 'GET' AS call enregistrer_Config(:Processeur,:Boitier,:Ram,:CarteGraphique,:CarteMere,:DisqueDur);

