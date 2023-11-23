class Prodotto {
  constructor(
    public id: number,
    public codprod: number,
    public collezione: string,
    public capo: string,
    public modello: number,
    public quantita: number,
    public colore: string,
    public prezzoivaesclusa: number,
    public prezzoivainclusa: number,
    public disponibile: string,
    public saldo: number
  ) {
    this.mostraPrezzo();
  }

  mostraPrezzo(): void {
    console.log(' PRODOTTO');
    console.log("NOME: " + this.capo);
    console.log("Prezzo con IVA: " + this.prezzoivainclusa + "$");

    let prezzoScontato = this.prezzoivainclusa;
    for (let i = 0; i < this.saldo; i++) {
      prezzoScontato -= this.prezzoivainclusa / 100;
    }
    console.log("SCONTO: " + this.saldo + "%");
    console.log("Prezzo scontato: " + prezzoScontato + "$");
  }
}

let prodottiArray: Prodotto[] = [];

async function fetchData(): Promise<void> {
  try {
    const res = await fetch("starter/Abbigliamento.json");
    if (!res.ok) {
      throw new Error("ERRORE NEL CARICAMENTO DELLA FETCH");
    }
    const prodotti = await res.json();
    prodotti.forEach((element: { id: number; codprod: number; collezione: string; capo: string; modello: number; quantita: number; colore: string; prezzoivaesclusa: number; prezzoivainclusa: number; disponibile: string; saldo: number; }) => {
      const newProdotto = new Prodotto(
        element.id,
        element.codprod,
        element.collezione,
        element.capo,
        element.modello,
        element.quantita,
        element.colore,
        element.prezzoivaesclusa,
        element.prezzoivainclusa,
        element.disponibile,
        element.saldo
      );
      prodottiArray.push(newProdotto);
    });

    console.log(prodottiArray);
  } catch (err) {
    console.error(err);
  }
}

fetchData();