CREATE DATABASE Lottery;
USE Lottery;
CREATE TABLE [Cards] (
	id int identity(1, 1) primary key,
	[name] varchar(16) not null
); 

CREATE TABLE [Tables] (
	id int identity(1, 1) primary key,
	card1 varchar(16) not null,
	card2 varchar(16) not null,
	card3 varchar(16) not null,
	card4 varchar(16) not null,
	card5 varchar(16) not null,
	card6 varchar(16) not null,
	card7 varchar(16) not null,
	card8 varchar(16) not null,
	card9 varchar(16) not null,
	card10 varchar(16) not null,
	card11 varchar(16) not null,
	card12 varchar(16) not null,
	card13 varchar(16) not null,
	card14 varchar(16) not null,
	card15 varchar(16) not null,
	card16 varchar(16) not null
);

INSERT INTO [Cards] (name) VALUES ('EL GALLO');
INSERT INTO [Cards] (name) VALUES ('EL DIABLITO');
INSERT INTO [Cards] (name) VALUES ('LA DAMA');
INSERT INTO [Cards] (name) VALUES ('EL CATRIN');
INSERT INTO [Cards] (name) VALUES ('EL PARAGUAS');
INSERT INTO [Cards] (name) VALUES ('LA SIRENA');
INSERT INTO [Cards] (name) VALUES ('LA ESCALERA');
INSERT INTO [Cards] (name) VALUES ('LA BOTELLA');
INSERT INTO [Cards] (name) VALUES ('EL BARRIL');
INSERT INTO [Cards] (name) VALUES ('EL ARBOL');
INSERT INTO [Cards] (name) VALUES ('EL MELON');
INSERT INTO [Cards] (name) VALUES ('EL VALIENTE');
INSERT INTO [Cards] (name) VALUES ('EL GORRITO');
INSERT INTO [Cards] (name) VALUES ('LA MUERTE');
INSERT INTO [Cards] (name) VALUES ('LA PERA');
INSERT INTO [Cards] (name) VALUES ('LA BANDERA');
INSERT INTO [Cards] (name) VALUES ('EL BANDOLON');
INSERT INTO [Cards] (name) VALUES ('EL VIOLONCELLO');
INSERT INTO [Cards] (name) VALUES ('LA GARZA');
INSERT INTO [Cards] (name) VALUES ('EL PAJARO');
INSERT INTO [Cards] (name) VALUES ('LA MANO');
INSERT INTO [Cards] (name) VALUES ('LA BOTA');
INSERT INTO [Cards] (name) VALUES ('LA LUNA');
INSERT INTO [Cards] (name) VALUES ('EL COTORRO');
INSERT INTO [Cards] (name) VALUES ('EL BORRACHO');
INSERT INTO [Cards] (name) VALUES ('EL NEGRITO');
INSERT INTO [Cards] (name) VALUES ('EL CORAZON');
INSERT INTO [Cards] (name) VALUES ('LA SANDIA');
INSERT INTO [Cards] (name) VALUES ('EL TAMBOR');
INSERT INTO [Cards] (name) VALUES ('EL CAMARON');
INSERT INTO [Cards] (name) VALUES ('LAS JARAS');
INSERT INTO [Cards] (name) VALUES ('EL MUSICO');
INSERT INTO [Cards] (name) VALUES ('LA ARAÑA');
INSERT INTO [Cards] (name) VALUES ('EL SOLDADO');
INSERT INTO [Cards] (name) VALUES ('LA ESTRELLA');
INSERT INTO [Cards] (name) VALUES ('EL CAZO');
INSERT INTO [Cards] (name) VALUES ('EL MUNDO');
INSERT INTO [Cards] (name) VALUES ('EL APACHE');
INSERT INTO [Cards] (name) VALUES ('EL NOPAL');
INSERT INTO [Cards] (name) VALUES ('EL ALACRAN');
INSERT INTO [Cards] (name) VALUES ('LA ROSA');
INSERT INTO [Cards] (name) VALUES ('LA CALAVERA');
INSERT INTO [Cards] (name) VALUES ('LA CAMPANA');
INSERT INTO [Cards] (name) VALUES ('EL CANTARITO');
INSERT INTO [Cards] (name) VALUES ('EL VENADO');
INSERT INTO [Cards] (name) VALUES ('EL SOL');
INSERT INTO [Cards] (name) VALUES ('LA CORONA');
INSERT INTO [Cards] (name) VALUES ('LA CHALUPA');
INSERT INTO [Cards] (name) VALUES ('EL PINO');
INSERT INTO [Cards] (name) VALUES ('EL PESCADO');
INSERT INTO [Cards] (name) VALUES ('LA PALMA');
INSERT INTO [Cards] (name) VALUES ('LA MACETA');
INSERT INTO [Cards] (name) VALUES ('EL ARPA');
INSERT INTO [Cards] (name) VALUES ('LA RANA');