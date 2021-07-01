import { Question, Reponse } from './question';

export const QUESTIONS: Question[] = [
    {
        id: 1,
        titre: 'La capitale du Sénégal ?',
        type: 'radio',
        reponse: [
            {
                titre: 'Dakar',
                valeur: true
            },
            {
                titre: 'Guinée',
                valeur: false
            }
        ]
    }
]