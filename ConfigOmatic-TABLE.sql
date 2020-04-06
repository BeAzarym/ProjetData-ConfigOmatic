CREATE DOMAIN DPrix decimal(8,2) check(@col > 0.0);

CREATE TABLE tbUser(
    "UserId" INTEGER NOT NULL DEFAULT AUTOINCREMENT,
    "Password" varchar(50) NOT NULL ,
    
    CONSTRAINT "pkUser" PRIMARY KEY ("UserId" ASC)
)

CREATE TABLE tbConfigSave(
    "UserId" INTEGER NOT NULL DEFAULT AUTOINCREMENT, 
    "ConfigId" INTEGER NOT NULL DEFAULT AUTOINCREMENT,
    
    CONSTRAINT "pkConfigSave" PRIMARY KEY ("ConfigId" ASC),
    CONSTRAINT "fk__tbConfigSave__tbUser" FOREIGN KEY (UserId) REFERENCES tbUser (UserId)
)

CREATE TABLE tbCarteMere(
    "CarteMereId" INTEGER NOT NULL DEFAULT AUTOINCREMENT,
    "CarteMereName" long varchar NOT NULL,
    "CarteMerePrix" DPrix,

    CONSTRAINT "pkCarteMere" PRIMARY KEY ("CarteMereId" ASC),
)

CREATE TABLE tbCarteGraphique(
    "CarteGraphiqueId" INTEGER NOT NULL DEFAULT AUTOINCREMENT,
    "CarteGraphiqueName" long varchar NOT NULL,
    "CarteGraphiquePrix" DPrix,

    CONSTRAINT "pkCarteGraphique" PRIMARY KEY ("CartegraphiqueId" ASC),
)

CREATE TABLE tbProcesseur(
    "ProcesseurId" INTEGER NOT NULL DEFAULT AUTOINCREMENT,
    "ProcesseurName" long varchar NOT NULL,
    "ProcesseurPrix" DPrix,
    
    CONSTRAINT "pkProcesseur" PRIMARY KEY ("ProcesseurId" ASC),
)

CREATE TABLE tbBoitier(
    "BoitierId" INTEGER NOT NULL DEFAULT AUTOINCREMENT,
    "BoitierName" long varchar NOT NULL,
    "BoitierPrix" DPrix,

    CONSTRAINT "pkBoitier" PRIMARY KEY ("BoitierId" ASC),
)

CREATE TABLE tbRAM(
    "RamId" INTEGER NOT NULL DEFAULT AUTOINCREMENT,
    "RamName" long varchar NOT NULL,
    "RamPrix" DPrix,
    
    CONSTRAINT "pkRAM" PRIMARY KEY ("RamId" ASC),

)

CREATE TABLE tbDisqueDur(
    "DisqueDurId" INTEGER NOT NULL DEFAULT AUTOINCREMENT,
    "DisqueDurName" long varchar NOT NULL,
    "DisqueDurPrix" DPrix,

    CONSTRAINT "pkDisqueDur" PRIMARY KEY ("DisqueDurId" ASC),
)

CREATE TABLE tbConfig(
    "ConfigId" INTEGER NOT NULL DEFAULT AUTOINCREMENT,
    "ProcesseurId" INTEGER NOT NULL DEFAULT AUTOINCREMENT,
    "CarteMereId" INTEGER NOT NULL DEFAULT AUTOINCREMENT,
    "DisqueDurId" INTEGER NOT NULL DEFAULT AUTOINCREMENT,
    "CarteGraphiqueId" INTEGER NOT NULL DEFAULT AUTOINCREMENT,
    "BoitierId" INTEGER NOT NULL DEFAULT AUTOINCREMENT,
    "RamId" INTEGER NOT NULL DEFAULT AUTOINCREMENT,

  
    CONSTRAINT "pkConfig" PRIMARY KEY ("ConfigId" ASC),
    CONSTRAINT "fk__tbConfig__tbConfigSave" FOREIGN KEY (ConfigId) REFERENCES tbConfigSave (ConfigId),
    CONSTRAINT "fk__tbConfig__tbProcesseur" FOREIGN KEY (ProcesseurId) REFERENCES tbProcesseur (ProcesseurId),
    CONSTRAINT "fk__tbConfig__tbCarteMere" FOREIGN KEY (CarteMereId) REFERENCES tbCarteMere (CarteMereId),
    CONSTRAINT "fk__tbConfig__tbDisqueDur" FOREIGN KEY (DisqueDurId) REFERENCES tbDisqueDur (DisqueDurId), 
    CONSTRAINT "fk__tbConfig__tbCarteGraphique" FOREIGN KEY (CarteGraphiqueId) REFERENCES tbCarteGraphique (CarteGraphiqueId),
    CONSTRAINT "fk__tbConfig__tbBoitier" FOREIGN KEY (BoitierId) REFERENCES tbBoitier (BoitierId), 
    CONSTRAINT "fk__tbConfig__tbRAM" FOREIGN KEY (RamId) REFERENCES tbRAM (RamId)
)