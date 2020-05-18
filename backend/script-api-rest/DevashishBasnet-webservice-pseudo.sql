
ALTER PROCEDURE "DBA"."SaveName"( @usr varchar(30) )

BEGIN
    call sa_set_http_header('Content-Type', 'text/html');
    call sa_set_http_header('Access-Control-Allow-Origin', '*');	

        insert into dba.tbUser (pseudoUser)
        values ( @usr )   
        
END


ALTER PROCEDURE "DBA"."checkPseudo"( in usr VARCHAR(20)  )
/* RESULT( nom_colonne type_colonne, ... ) */
BEGIN

    
    call sa_set_http_header('Content-Type', 'text/html');
    call sa_set_http_header('Access-Control-Allow-Origin', '*');	
    
    SELECT count(*)
    from tbUser 
    where pseudoUser = usr   
    
END



CREATE SERVICE "enregistrer_nom" TYPE 'JSON' AUTHORIZATION OFF USER "DBA" URL ON METHODS 'GET' AS call DBA.SaveName(:usr);

CREATE SERVICE "check_pseudo" TYPE 'JSON' AUTHORIZATION OFF USER "DBA" URL ON METHODS 'GET' AS call checkPseudo(:usr);
