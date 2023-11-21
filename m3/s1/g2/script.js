"use strict";
class SonAccount {
    constructor(balanceInit = 0) {
        this.balance = balanceInit;
    }
    oneDeposit(amount) {
        this.balance += amount;
    }
    oneWithDraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
        }
        else {
            console.log("Fondi insufficienti");
        }
    }
    getBalance() {
        return this.balance;
    }
}
class MotherAccount extends SonAccount {
    addInterest() {
        const interest = this.balance * 0.1;
        this.balance += interest;
        console.log("Interesse aggiunto:", interest);
    }
}
//# sourceMappingURL=script.js.map