ALTER PROCEDURE "DBA"."enregistrer_config"( UserId int , Processeur int , Boitier INT, Ram int , CarteGraphique int , CarteMere int, DisqueDur int )
 
BEGIN
    
   insert into DBA.tbConfig
    (ProcesseurId , BoitierId , RamId  , CarteGraphiqueId  , CarteMereId , DisqueDurId)
    values
    (Processeur , Boitier , Ram  , CarteGraphique , CarteMere, DisqueDur)     

END



ALTER PROCEDURE "DBA"."SaveName"( @usr varchar(30) )

BEGIN
    call sa_set_http_header('Content-Type', 'text/html');
    call sa_set_http_header('Access-Control-Allow-Origin', '*');	

        insert into dba.tbUser (pseudo)
        values ( @usr )   
        
END


ALTER PROCEDURE "DBA"."checkPseudo"( in usr VARCHAR(20)  )
/* RESULT( nom_colonne type_colonne, ... ) */
BEGIN

    
    call sa_set_http_header('Content-Type', 'text/html');
    call sa_set_http_header('Access-Control-Allow-Origin', '*');	
    
    SELECT count(*)
    from tbUser 
    where pseudo = usr   
    
END



CREATE SERVICE "enregistrer_nom" TYPE 'RAW' AUTHORIZATION OFF USER "DBA" URL ON METHODS 'GET' AS call DBA.SaveName(:usr);

CREATE SERVICE "check_pseudo" TYPE 'RAW' AUTHORIZATION OFF USER "DBA" URL ON METHODS 'GET' AS call checkPseudo(:usr);
