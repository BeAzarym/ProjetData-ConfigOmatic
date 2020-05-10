ALTER FUNCTION "DBA"."getPath"()

// renvoie le chemin (path) de la racine du site (où est située la base de données)
returns long varchar
deterministic
BEGIN
 declare dbPath long varchar; // chemin de la db
 declare dbName long varchar; // nom de la db
 --
 set dbPath = (select db_property ('file'));        -- path + nom de la db
 set dbName = (select db_property('name')) + '.db'; -- nom de la db
 set dbPath = left(dbPath, length(dbPath)-length(dbName)); -- path seul
 --
 return dbPath; // renvoyer path

END


ALTER PROCEDURE "DBA"."http_getCSS"( in url char(255) )
result(css long varchar)
BEGIN
	call sa_set_http_header( 'Content-Type', 'text/css');
    select xp_read_file(dba.getPath() || 'CSS\' || url);
END


ALTER PROCEDURE "DBA"."http_getIMG"(in url char(255))
result(img long binary)
BEGIN

call sa_set_http_header('Content-Type', 'image/svg+xml'); // header http
select xp_read_file(dba.getPath() || 'IMG\' || url); // renvoyer image

END


ALTER PROCEDURE "DBA"."http_getJS"(in url char(255))
result(js long varchar)
BEGIN

call sa_set_http_header( 'Content-Type', 'text/javascript'); // header

select  xp_read_file(dba.getPath() || 'JS\' || url); // renvoyer js

END


ALTER PROCEDURE "DBA"."http_getPage"( in url CHAR(255) )
/* RESULT( nom_colonne type_colonne, ... ) */
BEGIN
	call sa_set_http_header('Content-Type', 'text/html; charset=utf-8');

    select xp_read_file(dba.getPath() || url || '.html');
    
END


CREATE SERVICE "css" TYPE 'RAW' AUTHORIZATION OFF USER "DBA" URL ON METHODS 'GET' AS call dba.http_getCSS(:url);
CREATE SERVICE "page" TYPE 'RAW' AUTHORIZATION OFF USER "DBA" URL ON METHODS 'GET' AS call dba.http_getPage(:url);
CREATE SERVICE "img" TYPE 'RAW' AUTHORIZATION OFF USER "DBA" URL ON METHODS 'GET' AS call dba.http_getIMG(:url);
CREATE SERVICE "js" TYPE 'RAW' AUTHORIZATION OFF USER "DBA" URL ON METHODS 'GET' AS call dba.http_getJS(:url);
