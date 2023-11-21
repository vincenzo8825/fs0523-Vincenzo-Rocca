class SonAccount {
    protected balance: number;

    constructor(balanceInit: number = 0) {
        this.balance = balanceInit;
    }

    oneDeposit(amount: number): void {
        this.balance += amount;
    }

    oneWithDraw(amount: number): void {
        if (amount <= this.balance) {
            this.balance -= amount;
        } else {
            console.log("Fondi insufficienti");
        }
    }

    getBalance(): number {
        return this.balance;
    }
}

class MotherAccount extends SonAccount {
    addInterest(): void {
        const interest: number = this.balance * 0.1;
        this.balance += interest;
        console.log("Interesse aggiunto:", interest);
    }
}


