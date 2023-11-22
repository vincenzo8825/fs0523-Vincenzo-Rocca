"use strict";
class LavoratoreAutonomo {
    constructor(codredd, redditoannuolordo, tasseinps, tasseirpef) {
        this.codredd = codredd;
        this.redditoannuolordo = redditoannuolordo;
        this.tasseinps = tasseinps;
        this.tasseirpef = tasseirpef;
    }
}
class LavoratoreAutonomoTipo1 extends LavoratoreAutonomo {
    constructor(redditoannuolordo, tasseinps, tasseirpef) {
        super(1, redditoannuolordo, tasseinps, tasseirpef);
    }
    getUtileTasse() {
        return this.redditoannuolordo - this.tasseinps - this.tasseirpef;
    }
    getTasselnps() {
        return this.tasseinps;
    }
    getTasselrpef() {
        return this.tasseirpef;
    }
    getRedditoAnnuoNetto() {
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
