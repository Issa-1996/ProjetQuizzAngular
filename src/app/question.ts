export interface Question {
    id: number;
    titre: string,
    type: string, //['checkbox', 'radio', 'text'],
    reponse: Reponse[]
}

export interface Reponse {
    titre: string,
    valeur: boolean,
}
