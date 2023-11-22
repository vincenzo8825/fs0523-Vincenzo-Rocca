
abstract class LavoratoreAutonomo {
    codredd: number;
    redditoannuolordo: number;
    tasseinps: number;
    tasseirpef: number;
  
    constructor(codredd: number, redditoannuolordo: number, tasseinps: number, tasseirpef: number) {
      this.codredd = codredd;
      this.redditoannuolordo = redditoannuolordo;
      this.tasseinps = tasseinps;
      this.tasseirpef = tasseirpef;
    }
  
    
    abstract getUtileTasse(): number;
 
    abstract getTasselnps(): number;
  
   
    abstract getTasselrpef(): number;
  

    abstract getRedditoAnnuoNetto(): number;
  }
  
  class LavoratoreAutonomoTipo1 extends LavoratoreAutonomo {
    constructor(redditoannuolordo: number, tasseinps: number, tasseirpef: number) {
      super(1, redditoannuolordo, tasseinps, tasseirpef);
    }
  
    getUtileTasse(): number {
      return this.redditoannuolordo - this.tasseinps - this.tasseirpef;
    }
  
    getTasselnps(): number {
      return this.tasseinps;
    }
  
    
    getTasselrpef(): number {
      return this.tasseirpef;
    }
  
    getRedditoAnnuoNetto(): number {
      return this.redditoannuolordo - this.tasseinps - this.tasseirpef;
    }
  }
  
  
  const lavoratore1 = new LavoratoreAutonomoTipo1(30000, 5000, 10000);
  console.log("Codice Redditività:", lavoratore1.codredd);
  console.log("Reddito Annuo Lordo:", lavoratore1.redditoannuolordo);
  console.log("Tasse INPS:", lavoratore1.getTasselnps());
  console.log("Tasse IRPEF:", lavoratore1.getTasselrpef());
  console.log("Reddito Annuo Netto:", lavoratore1.getRedditoAnnuoNetto());
  console.log("Utile Tasse:", lavoratore1.getUtileTasse());