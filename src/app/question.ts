export interface Question {
    id: number;
    titre: string,
    type: string, //['checkbox', 'radio', 'text'],
    point: number,
    reponse: Reponse[]
}

export interface Reponse {
    id: number,
    titre: string,
    valeur: boolean,
}
