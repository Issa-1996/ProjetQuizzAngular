import { Question, Reponse } from './question';

export const QUESTIONS: Question[] = [
    {
        id: 1,
        titre: ' Qui a inventé la machine à vapeur ?',
        type: 'radio',
        point: 20,
        reponse: [
            {
                id: 1,
                titre: 'Isaac Newton',
                valeur: false
            },
            {
                id: 2,
                titre: 'Galileo Galilei.',
                valeur: false
            },
            {
                id: 3,
                titre: 'James Watt.',
                valeur: true
            },
            {
                id: 4,
                titre: 'Christophe Colomb',
                valeur: false
            }
        ]
    },
    {
        id: 2,
        titre: 'Qu’est-ce qu’une molécule ?',
        type: 'radio',
        point: 30,
        reponse: [
            {
                id: 1,
                titre: 'Un assemblage d\'atomes.',
                valeur: true
            },
            {
                id: 2,
                titre: 'Un assemblage de cellules.',
                valeur: false
            },
            {
                id: 3,
                titre: 'Le plus petit des éléments.',
                valeur: false
            },
            {
                id: 4,
                titre: 'Le noyau de l\'atome',
                valeur: false
            }
        ]
    },
    {
        id: 3,
        titre: 'Le volt est l’unité de :',
        type: 'radio',
        point: 25,
        reponse: [
            {
                id: 1,
                titre: 'Courant éléctrique.',
                valeur: false
            },
            {
                id: 2,
                titre: 'Tension éléctrique.',
                valeur: true
            },
            {
                id: 3,
                titre: 'Résistance éléctrique.',
                valeur: false
            },
            {
                id: 4,
                titre: 'Capacité d\'une batterie',
                valeur: false
            }
        ]
    },
    {
        id: 4,
        titre: 'Laquelle des espèces animales suivantes n’appartient pas à la classe des vertébrés ?',
        type: 'radio',
        point: 35,
        reponse: [
            {
                id: 1,
                titre: 'les poissons.',
                valeur: false
            },
            {
                id: 2,
                titre: 'Les oiseaux.',
                valeur: false
            },
            {
                id: 3,
                titre: 'Les crustacés.',
                valeur: true
            },
            {
                id: 4,
                titre: 'Les reptiles',
                valeur: false
            }
        ]
    },
    {
        id: 5,
        titre: 'Quel est la forma factorisé de: (a-b)(a+b)?',
        type: 'radio',
        point: 10,
        reponse: [
            {
                id: 1,
                titre: '(a^2 +b^2)^2.',
                valeur: false
            },
            {
                id: 2,
                titre: '(a-b)^2.',
                valeur: true
            },
            {
                id: 3,
                titre: '(a+b)^2.',
                valeur: false
            },
            {
                id: 4,
                titre: 'a^2 +2ab - b^2.',
                valeur: false
            }
        ]
    },
    {
        id: 6,
        titre: 'Quel groupe sanguin est donneur universel ?',
        type: 'radio',
        point: 30,
        reponse: [
            {
                id: 1,
                titre: 'A-',
                valeur: false
            },
            {
                id: 2,
                titre: 'X',
                valeur: false
            },
            {
                id: 3,
                titre: 'AB+',
                valeur: false
            },
            {
                id: 4,
                titre: 'O-',
                valeur: true
            }
        ]
    },
    {
        id: 7,
        titre: 'Quels sont les unités d\'énergie :',
        type: 'checkbox',
        point: 15,
        reponse: [
            {
                id: 1,
                titre: 'Watt.',
                valeur: false
            },
            {
                id: 2,
                titre: 'Wattheure.',
                valeur: false
            },
            {
                id: 3,
                titre: 'Joule.',
                valeur: true
            },
            {
                id: 4,
                titre: 'Ampère',
                valeur: false
            }
        ]
    },
    {
        id: 8,
        titre: 'Lesquelles de ces énergies ne sont pas renouvelables ?',
        type: 'checkbox',
        point: 20,
        reponse: [
            {
                id: 1,
                titre: 'Le vent.',
                valeur: true
            },
            {
                id: 2,
                titre: 'Le soleil.',
                valeur: false
            },
            {
                id: 3,
                titre: 'Le charbon.',
                valeur: false
            },
            {
                id: 4,
                titre: 'Le pétrole',
                valeur: false
            }
        ]
    },
    {
        id: 9,
        titre: 'Qui a dit "rien ne se perd, rien ne se crée, tout se transforme" ?',
        type: 'radio',
        point: 10,
        reponse: [
            {
                id: 1,
                titre: 'Newton.',
                valeur: false
            },
            {
                id: 2,
                titre: 'Einstein.',
                valeur: false
            },
            {
                id: 3,
                titre: 'Lavoisier.',
                valeur: true
            },
            {
                id: 4,
                titre: 'Pythagore',
                valeur: false
            }
        ]
    },
    {
        id: 10,
        titre: 'Comment appelle-t-on un triangle Aiguille  qui a quatre cotés ?',
        type: 'checkbox',
        point: 30,
        reponse: [
            {
                id: 1,
                titre: 'Triangle équivoque.',
                valeur: false
            },
            {
                id: 2,
                titre: 'Triangle isocèle.',
                valeur: false
            },
            {
                id: 3,
                titre: 'Triangle équilatéral.',
                valeur: false
            },
            {
                id: 4,
                titre: 'Aucune des reponses',
                valeur: true
            }
        ]
    }
]