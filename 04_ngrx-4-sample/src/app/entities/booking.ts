export interface Buchung {
    flugID: number;
    passagierID: number;
    flug: Flug;
    passagier: Passagier;
    buchungsStatus: number;
}
export interface Flug {
    id: number;
    von: string;
    nach: string;
    abflugort: string;
    zielort: string;
    datum: Date;
    plaetze: number;
    freiePlaetze: number;
}

export interface Passagier {
    passagierStatus: string;
    id: number;
    vorname: string;
    name: string;
    geburtsdatum: Date;
}
