/**
 *? Line breaks must be preceded by <br> tags
 *? data.projects.link should be an URL
 *? data.projects.date must be an string containing the date in YYYY-MM format
 *? data.projects.video must be a string containing a Youtube URL, or null if there is no video to be shown
 * 
 * data {
 *      "biography": string
 *      "projects": [
 *          "name": string,
            "description": string,
            "pictures": [string],
            "gameEngine": string,
            "language": string,
            "platform": string,
            "role": string,
            "team": string,
            "link": string,
            "date": string,
            "duration": string,
            "video": string|null,
            "isDisplayedInSlider": bool
 *      ]
 *  }
 */

const data = {
    "biography": "Je m'appelle Samuel HOARAU et je suis un étudiant en Game Design & Programming. Passionné par les jeux vidéo et la programmation, j'adore mettre mes compétences en pratique pour créer des expériences de jeu uniques et divertissantes. Mon expertise est principalement axée sur la programmation gameplay, UI et serveur, et j'aime explorer de nouvelles technologies et domaines de la programmation en dehors de mes études. Je suis enthousiaste à l'idée de poursuivre ma carrière dans l'industrie du jeu vidéo et de travailler sur de nouveaux projets passionnants.",
    "projects": [
        {
            "name": "The Spirit's Eye",
            "description": "Un jeune garçon se perd dans une grande forêt après s'être disputé avec son ami... Aidez le à quitter la forêt et à découvrir ses secrets dans ce sokoban-like en 3D avec beaucoup de rebondissements !",
            "pictures": [
                "SpiritsEyes_House1.png",
                "SpiritsEyes_House2.png",
                "SpiritsEyes_Gameplay1.png",
                "SpiritsEyes_Gameplay2.png",
                "SpiritsEyes_Gameplay3.png",
                "SpiritsEyes_Gameplay4.png",
                "SpiritsEyes_End.png",
            ],
            "gameEngine": "Unreal",
            "language": "Blueprint",
            "platform": "PC",
            "role": "Je me suis occupé principalement de la juiciness, du système de sauvegarde ainsi que du blocking des niveaux",
            "team": "5 Game Designers & Programmers",
            "link": "https://gamejolt.com/games/thespiritseyes/785724",
            "date": "2022-12",
            "duration": "2 mois",
            "video": null,
            "isDisplayedInSlider": true
        },
        {
            "name": "Kancel Kultur",
            "description": "Vous en avez marre des célébrités qui polluent en utilisant des jets privés ? Vous êtes au bon endroit ! Donner leur une leçon après leur sortie de l'avion dans ce jeu de tape taupe !",
            "pictures": [
                "KancelKultur_SplashScreen.png",
                "KancelKultur_TitleCard.png",
                "KancelKultur_VIPCard.png",
                "KancelKultur_Gameplay1.png",
                "KancelKultur_Gameplay2.png",
                "KancelKultur_Win.png",
            ],
            "gameEngine": "Unity",
            "language": "C#",
            "platform": "Mobile",
            "role": "Je me suis occupé de l'aléatoire controlé pour l'apparition des célébrités ainsi que l'intégration de la juiciness.",
            "team": "2 Game Designers & Programmers, 4 Game Artistes, 1 Sound Designers",
            "link": "https://gamejolt.com/games/kancelkultur/749717",
            "date": "2022-09",
            "duration": "1 semaine",
            "video": "https://www.youtube.com/watch?v=wnupwnw4SUI",
            "isDisplayedInSlider": true
        },
        {
            "name": "Atomania",
            "description": "Atomania est un runner roguelike sur mobile où tu contrôle un atome qui doit traverser différent monde.  Avec tes armes, avance en te frayant un chemin à travers les obstacles que tu rencontreras. Améliore tes armes pour avancer toujours plus loin !",
            "pictures": [
                "Atomania_TitleScreen.jpg",
                "Atomania_Menu.jpg",
                "Atomania_Gameplay.jpg",
            ],
            "gameEngine": "Unity",
            "language": "C#",
            "platform": "Mobile",
            "role": "Je me suis principalement occupé de toute l'aspect UI, ainsi que le serveur (sauvergarde, chargement des données)",
            "team": "3 Game Designers & Programmers, 4 Game Designers",
            "link": "https://gamejolt.com/games/atomania/722178",
            "date": "2022-04",
            "duration": "2 mois",
            "video": null,
            "isDisplayedInSlider": true
        },
        {
            "name": "Frogulous",
            "description": "Vous incarnerez une grande diva en route vers LE bal. Malheureusement, parfois, les choses ne se passent pas comme on le voudrait : sur la route, elle se retrouve sans voix... En un rien de temps, elle se rend chez la fée des bois pour obtenir de l'aide ! Mais la fée paresseuse ne se soucie pas de choses comme ça. Je vous laisse voir ce qui se passera ensuite. :)",
            "pictures": [
                "Frogulous_TitleScreen.png",
                "Frogulous_Gameplay1.png",
                "Frogulous_Gameplay2.png",
                "Frogulous_Gameplay3.png",
                "Frogulous_Gameplay4.png",
                "Frogulous_Gameplay5.png",
            ],
            "gameEngine": "Unity",
            "language": "C#",
            "platform": "Mobile",
            "role": "Je me suis occupé de la gestion de la caméra (angle de vue, zoom, dezoom, ...), ainsi que des specials features du jeu qui était la langue liane et le stomps",
            "team": "4 Game Designers & Programmers, 8 Game Artistes, 2 Sound Designers",
            "link": "https://gamejolt.com/games/Frogulous/702052",
            "date": "2022-01",
            "duration": "2 mois",
            "video": null,
            "isDisplayedInSlider": true
        },
        {
            "name": "Mountain Rush",
            "description": "Basé sur le jeu RUSH, Mountain Rush est un jeu de réflexion où vous devez amener les blocs de minerais à leur destination.",
            "pictures": [
                "MountainRush_TitleCard.png",
                "MountainRush_AllOverThePlace.png",
                "MountainRush_Cascade.png",
                "MountainRush_Casque.png",
                "MountainRush_Rail.png",
                "MountainRush_Stadium.png",
            ],
            "gameEngine": "Unity",
            "language": "C#",
            "platform": "PC",
            "role": "Dans ce projet, j'ai mis l'accent sur la gestion de la caméra ainsi que la juiciness de l'environnement.",
            "team": "Individuel",
            "link": "https://gamejolt.com/games/mountain_rush/678427",
            "date": "2021-11",
            "duration": "1 mois",
            "video": null,
            "isDisplayedInSlider": true
        },
        {
            "name": "Kill Them All",
            "description": "Un héros comme les autres parcourt le monde, affronte des ennemis, escalade des montagnes, sans relâche jusqu'à ce qu'il meure dignement.",
            "pictures": [
                "KillThemAll_Gameplay1.png",
                "KillThemAll_TitleCard.png",
                "KillThemAll_Gameplay2.png",
                "KillThemAll_Gameplay3.png",
            ],
            "gameEngine": "Animate",
            "language": "Haxe",
            "platform": "Mobile",
            "role": "Dans ce projet, je me suis concentré sur la génération procédural des différentes plateforme et ennemis, ainsi que la juiciness du personnage avec ses animations",
            "team": "Individuel",
            "link": "https://gamejolt.com/games/kill_them_all/610657",
            "date": "2021-04",
            "duration": "1 mois",
            "video": null,
            "isDisplayedInSlider": false
        },
        {
            "name": "Switch It",
            "description": "Après plusieurs années, un scientifique réussit à créer la téléportation !<br>Enfin presque, le téléporteur ne fait pas ce qu'il veut, ce qui l'a démotivé. Il doit maintenant ranger son laboratoire et les portails qu'il a créés rendent les choses plus compliquées ",
            "pictures": [
                "SwitchIt_TitleCard.png",
                "SwitchIt_Gameplay1.png",
                "SwitchIt_Gameplay2.png",
                "SwitchIt_Gameplay3.png",
                "SwitchIt_Gameplay4.png",
            ],
            "gameEngine": "Animate",
            "language": "Haxe",
            "platform": "PC",
            "role": "Dans ce projet, je me suis occupé de la feature principale : la téléportation des blocs quand on passe au travers ou quand on pousse un bloc à travers un portail",
            "team": "4 Game Designers & Programmers",
            "link": "https://gamejolt.com/games/switch_it/610614",
            "date": "2021-01",
            "duration": "2 mois",
            "video": null,
            "isDisplayedInSlider": false
        },
        {
            "name": "Sweet Decay",
            "description": "Bienvenue dans le monde des bonbons ! A bord de votre navire en forme de dent, mangez tous vos ennemis en utilisant la puissance de la téléportation de votre navire.",
            "pictures": [
                "SweetDecay_TitleCard.png",
                "SweetDecay_Gameplay1.png",
                "SweetDecay_Gameplay2.png",
                "SweetDecay_Gameplay3.png",
                "SweetDecay_Win.png",
                "SweetDecay_GameOver.png",
            ],
            "gameEngine": "Animate",
            "language": "AS3",
            "platform": "PC",
            "role": "Dans ce projet, j'ai mis l'accent sur la spécial feature et sur le level design.",
            "team": "Individuel",
            "link": "https://gamejolt.com/games/sweet_decay/610610",
            "date": "2020-11",
            "duration": "2 mois",
            "video": null,
            "isDisplayedInSlider": false
        },
        {
            "name": "Eye Love Rats",
            "description": "2 rats magiciens cherchent à s'échapper d'un laboratoire magique après que des mages aient expérimenté un sort de battle de regard sur eux. Malgré le fait qu’il ne peuvent pas s'empêcher de se regarder, il vont devoir braver les obstacles en lançant leur laser de l’amitié. ",
            "pictures": [
                "EyeLoveRats_TitleCard.png",
                "EyeLoveRats_Gameplay1.png",
            ],
            "gameEngine": "Unity",
            "language": "C#",
            "platform": "PC",
            "role": "Dans ce projet, je me suis occupé de la feature du laser qui permet de repousser l'autre joueur ou de se connecter si ils entrent en collision.",
            "team": "2 Game Designers & Programmers, 2 Game Artistes, 1 Sound Designers",
            "link": "https://gamejolt.com/games/eyeloverats/723382",
            "date": "2022-06",
            "duration": "3 jours",
            "video": null,
            "isDisplayedInSlider": false
        },
        {
            "name": "Lost Memories",
            "description": "C'est l'histoire d'un homme qui a perdu la mémoire. Au travers de ses actions, il va rencontrer les développeurs de ce jeu pour tenter de retrouver la mémoire.",
            "pictures": [
                "LostMemories_TitleCard.png",
            ],
            "gameEngine": "Ren'py",
            "language": "Python",
            "platform": "PC",
            "role": "Dans ce projet, je me suis occupé d'une partie du texte pour un des personnage et de la transitions entre chaque scène.",
            "team": "2 Game Designers & Programmers, 1 Game Artistes, 1 Producer, 1 Game Designers",
            "link": "https://gamejolt.com/games/lost_memories/617270",
            "date": "2021-05",
            "duration": "3 jours",
            "video": null,
            "isDisplayedInSlider": false
        }
    ]
};

export default data;