import { Question, Reponse } from './question';

export const QUESTIONS: Question[] = [
    {
        id: 1,
        titre: 'Dans laquelle de ces propositions l’invention n\'est-elle pas bien attribuée à son inventeur ?',
        type: 'radio',
        point: 20,
        reponse: [
            {
                id: 1,
                titre: 'La machine à vapeur de James Watt',
                valeur: true
            },
            {
                id: 2,
                titre: 'Le Téléphone d\'Alexander Bell',
                valeur: false
            },
            {
                id: 3,
                titre: 'Le phonographe de Thomas Edison',
                valeur: false
            },
            {
                id: 4,
                titre: 'La montre de Leon Foucault',
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
                valeur: true
            },
            {
                id: 2,
                titre: 'Tension éléctrique.',
                valeur: false
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
        point: 30,
        reponse: [
            {
                id: 1,
                titre: 'Les batraciens.',
                valeur: true
            },
            {
                id: 2,
                titre: 'Les oiseaux.',
                valeur: false
            },
            {
                id: 3,
                titre: 'Les crustacés.',
                valeur: false
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
        titre: 'Le BCG est un vaccin contre :',
        type: 'radio',
        point: 30,
        reponse: [
            {
                id: 1,
                titre: 'Le tétanos.',
                valeur: true
            },
            {
                id: 2,
                titre: 'La grippe.',
                valeur: false
            },
            {
                id: 3,
                titre: 'La rage.',
                valeur: false
            },
            {
                id: 4,
                titre: 'La tuberculose',
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
            },
            {
                id: 5,
                titre: 'AB+',
                valeur: false
            }
        ]
    },
    {
        id: 7,
        titre: 'Quels sont les unités d\'énergie :',
        type: 'checkbox',
        point: 30,
        reponse: [
            {
                id: 1,
                titre: 'Watt.',
                valeur: true
            },
            {
                id: 2,
                titre: 'Wattheure.',
                valeur: false
            },
            {
                id: 3,
                titre: 'Joule.',
                valeur: false
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
        point: 30,
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
        point: 30,
        reponse: [
            {
                id: 1,
                titre: 'Newton.',
                valeur: true
            },
            {
                id: 2,
                titre: 'Einstein.',
                valeur: false
            },
            {
                id: 3,
                titre: 'Lavoisier.',
                valeur: false
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
        titre: 'Comment appelle-t-on l\'énergie liée au mouvement ?',
        type: 'checkbox',
        point: 30,
        reponse: [
            {
                id: 1,
                titre: 'Energie chimique.',
                valeur: true
            },
            {
                id: 2,
                titre: 'Energie thermique.',
                valeur: false
            },
            {
                id: 3,
                titre: 'Energie solaire.',
                valeur: false
            },
            {
                id: 4,
                titre: 'Energie cinétique',
                valeur: false
            }
        ]
    }
]