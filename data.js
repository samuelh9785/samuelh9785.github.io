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
    "biography": "Étudiant en Game Design et Programming à Isart Digital. Passionné dans le code au niveau gameplay, j'aime apprendre de nouveau langage et de nouvelle méthode pour avancer.",
    "projects": [
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
                "Atomania_Menu.jpg",
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
            "link": "https://gamejolt.com/games/atomania/722178",
            "date": "2022-01",
            "duration": "2 mois",
            "video": null,
            "isDisplayedInSlider": true
        }
    ]
};

export default data;