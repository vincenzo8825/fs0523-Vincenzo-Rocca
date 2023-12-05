
export interface Utente {
  nome: string;
  cognome: string;
  password: string;
  confermaPassword: string;
  genere: string;
  immagineProfilo?: File;
  biografia?: string;
  username: string;
}
