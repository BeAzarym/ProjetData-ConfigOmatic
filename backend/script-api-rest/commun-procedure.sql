CREATE PROCEDURE "DBA"."proc_boitier"()
 RESULT( BoitierId int , BoitierName VARCHAR(50) , BoitierPrix DPrix )
BEGIN   

	call sa_set_http_header('Content-Type', 'text/html');
    call sa_set_http_header('Access-Control-Allow-Origin', '*');

    SELECT BoitierName , BoitierPrix
    from tbBoitier

END;

CREATE PROCEDURE "DBA"."proc_CarteGraphique"()
 RESULT( CarteGraphiqueId int , CarteGraphiqueName LONG VARCHAR, CarteGraphiquePrix DPrix   )
BEGIN   

	call sa_set_http_header('Content-Type', 'text/html');
    call sa_set_http_header('Access-Control-Allow-Origin', '*');

    SELECT CarteGraphiqueId , CarteGraphiqueName , CarteGraphiquePrix
    from tbCarteGraphique

END;

CREATE PROCEDURE "DBA"."proc_CM"()
    result(CarteMereId , CarteMereName VARCHAR(20), CarteMerePrix Dprix )
BEGIN
    call sa_set_http_header('Content-Type', 'text/html');
    call sa_set_http_header('Access-Control-Allow-Origin', '*');

    SELECT DBA.tbCarteMere.CarteMereId ,DBA.tbCarteMere.CarteMereName , DBA.tbCarteMere.CarteMerePrix
    FROM tbCarteMere
    

END;


CREATE PROCEDURE "DBA"."proc_DisqueDur"()
 RESULT( DisqueDurId int ,DisqueDurName LONG VARCHAR, DisqueDurPrix DPrix   )
BEGIN   

	call sa_set_http_header('Content-Type', 'text/html');
    call sa_set_http_header('Access-Control-Allow-Origin', '*');

    SELECT DisqueDurId,DisqueDurName ,DisqueDurPrix
    from tbDisqueDur

END;

CREATE PROCEDURE "DBA"."proc_processeurs"()
 RESULT( ProcesseurId int ,ProcesseurName LONG VARCHAR, ProcesseurPrix DPrix , socket VARCHAR(20)   )
BEGIN   

	call sa_set_http_header('Content-Type', 'text/html');
    call sa_set_http_header('Access-Control-Allow-Origin', '*');

    SELECT ProcesseurId  ,ProcesseurName , ProcesseurPrix  , socket
    from tbProcesseur

END;


CREATE PROCEDURE "DBA"."proc_ram"()
 RESULT( RamId int ,RamName LONG VARCHAR, RamPrix DPrix   )
BEGIN   

	call sa_set_http_header('Content-Type', 'text/html');
    call sa_set_http_header('Access-Control-Allow-Origin', '*');

    SELECT RamId,RamName ,RamPrix
    from tbRAM

END;
COMMENT ON PROCEDURE "DBA"."proc_ram" IS '
';


