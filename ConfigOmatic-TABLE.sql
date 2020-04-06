CREATE DOMAIN DPrix decimal(8,2) check(@col > 0.0);

CREATE TABLE tbUser(
    "UserId" INTEGER NOT NULL DEFAULT AUTOINCREMENT,
    "Password" varchar(50) NOT NULL ,
    
    CONSTRAINT "pkUser" PRIMARY KEY ("UserId" ASC)
)

CREATE TABLE tbConfigSave(
    "UserId" INTEGER NOT NULL DEFAULT AUTOINCREMENT, 
    "ConfigId" INTEGER NOT NULL DEFAULT AUTOINCREMENT,
    
    CONSTRAINT "pkConfigSave" PRIMARY KEY ("UserId" ASC)
    CONSTRAINT "fk__tbConfigSave__tbUser" FOREIGN KEY (UserId) REFERENCES tbUser (UserId)
)

CREATE TABLE tbConfig(
    "ConfigId" INTEGER NOT NULL DEFAULT AUTOINCREMENT,
    "ProcesseurId" INTEGER NOT NULL DEFAULT AUTOINCREMENT,
    "CarteMereId" INTEGER NOT NULL DEFAULT AUTOINCREMENT,
    "DisqueDurId" INTEGER NOT NULL DEFAULT AUTOINCREMENT,
    "CarteGraphiqueId" INTEGER NOT NULL DEFAULT AUTOINCREMENT,
    "BoitierId" INTEGER NOT NULL DEFAULT AUTOINCREMENT,
    "RamId" INTEGER NOT NULL DEFAULT AUTOINCREMENT,

    CONSTRAINT "pkConfig" PRIMARY KEY ("ConfigId" ASC)
    CONSTRAINT "fk__tbConfig__tbConfigSave" FOREIGN KEY (ConfigId) REFERENCES tbConfigSave (UserId)
)

CREATE TABLE tbCarteMere(
    "CarteMereId" INTEGER NOT NULL DEFAULT AUTOINCREMENT,
    "CarteMereName" long varchar NOT NULL,
    "CarteMerePrix" DPrix,

    CONSTRAINT "pkCarteMere" PRIMARY KEY ("CarteMereId" ASC)
    CONSTRAINT "fk__tbCarteMere__tbConfig" FOREIGN KEY (CarteMereId) REFERENCES tbConfig (CarteMereId)
    
)

CREATE TABLE tbCarteGraphique(
    "CarteGraphiqueId" INTEGER NOT NULL DEFAULT AUTOINCREMENT,
    "CarteGraphiqueName" long varchar NOT NULL,
    "CarteGraphiquePrix" DPrix,

    CONSTRAINT "pkCarteGraphique" PRIMARY KEY ("CartegraphiqueId" ASC)
    CONSTRAINT "fk__tbCarteGraphique__tbConfig" FOREIGN KEY (CarteGraphiqueId) REFERENCES tbConfig (CarteGraphiqueId)
)

CREATE TABLE tbProcesseur(
    "ProcesseurId" INTEGER NOT NULL DEFAULT AUTOINCREMENT,
    "ProcesseurName" long varchar NOT NULL,
    "ProcesseurPrix" DPrix,
    
    CONSTRAINT "pkProcesseur" PRIMARY KEY ("ProcesseurId" ASC)
    CONSTRAINT "fk__tbProcesseur__tbConfig" FOREIGN KEY (ProcesseurId) REFERENCES tbConfig (ProcesseurId)
)

CREATE TABLE tbBoitier(
    "BoitierId" INTEGER NOT NULL DEFAULT AUTOINCREMENT,
    "BoitierName" long varchar NOT NULL,
    "BoitierPrix" DPrix,

    CONSTRAINT "pkBoitier" PRIMARY KEY ("BoitierId" ASC)
    CONSTRAINT "fk__tbBoitier__tbConfig" FOREIGN KEY (BoitierId) REFERENCES tbConfig (BoitierId)
)

CREATE TABLE tbRAM(
    "RamId" INTEGER NOT NULL DEFAULT AUTOINCREMENT,
    "RamName" long varchar NOT NULL,
    "RamPrix" DPrix,
    
    CONSTRAINT "pkRAM" PRIMARY KEY ("RamId" ASC)
    CONSTRAINT "fk__tbRAM__tbConfig" FOREIGN KEY (RamId) REFERENCES tbConfig (RamId)
)

CREATE TABLE tbDisqueDur(
    "DisqueDurId" INTEGER NOT NULL DEFAULT AUTOINCREMENT,
    "DisqueDurName" long varchar NOT NULL,
    "DisqueDurPrix" DPrix,

    CONSTRAINT "pkDisqueDur" PRIMARY KEY ("DisqueDurId" ASC)
    CONSTRAINT "fk__tbDisqueDur__tbConfig" FOREIGN KEY (DisqueDurId) REFERENCES tbConfig (DisqueDurId)
)

