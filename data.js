/**
 *? Line breaks must be preceded by <br> tags
 *? data.projects.name can handle a translation if an array is given, otherwise if only a string is given the name will be used for both French & English translations
 *? data.projects.link should be an URL
 *? data.projects.date must be an string containing the date in YYYY-MM format
 *? data.projects.video must be a string containing a Youtube URL, or null if there is no video to be shown
 *? data.projects.theme allows you to override calculated theme colors,
 *?                     If added, it must contain 5 CSS supported colors (hex, rgb() etc.)
 **                        CSS supported colors : @see https://www.w3schools.com/cssref/css_colors_legal.php
 **                        Get a color palette from an image : @see https://lokeshdhakar.com/projects/color-thief/s
 *? data.images allows you to override which picture will be used for engines, languages & platforms
 *?                     By default, the app will look for a picture with the same name than the engine, language or platform with an .svg extension
 *?                     If set to null, no image will be used
 *?                     Pictures must be stored in ./image/icon folder
 **                         E.g. "Ren'py": "renpy.png"  // Will use renpy.png instead of Ren'py.svg
 **                              "Blueprint": null,     // Won't use any image
 * 
 * data {
 *      "biography": {
            "fr": string,
            "en": string,
        },
 *      "projects": [
 *          {
                "name": string,
 ** OR          "name": {
 **                 "fr": string,
 **                 "en": string,
 **             },
                "description": {
                    "fr": string,
                    "en": string,
                },
                "pictures": [string],
                "gameEngine": string,
                "language": string,
                "platforms": [string],
                "role": {
                    "fr": string,
                    "en": string,
                },
                "team": string,
 ** OR          "team": {
 **                 "fr": string,
 **                 "en": string,
 **             },
                "link": string,
                "date": string,
                "duration": {
                    "fr": string,
                    "en": string,
                },
                "video": string|null,
                "isDisplayedInSlider": bool,
                "theme": (optional) [string*5],
            }
 *      ],
 *      "images": (optional) {
 *          string: string|null
 *      },
 *  }
 */

const data = {
    "biography": {
        "fr": "Je m'appelle Samuel HOARAU et je suis un étudiant en Game Design & Programming. Passionné par les jeux vidéo et la programmation, j'adore mettre mes compétences en pratique pour créer des expériences de jeu uniques et divertissantes. Mon expertise est principalement axée sur la programmation gameplay, UI et serveur, et j'aime explorer de nouvelles technologies et domaines de la programmation en dehors de mes études. Je suis enthousiaste à l'idée de poursuivre ma carrière dans l'industrie du jeu vidéo et de travailler sur de nouveaux projets passionnants.",
        "en": "My name is Samuel HOARAU, and I am a student in Game Design & Programming. Passionate about video games and programming, I love to put my skills into practice to create unique and entertaining gaming experiences. My expertise is primarily focused on gameplay, UI, and server programming, and I enjoy exploring new technologies and programming domains outside of my studies. I am enthusiastic about pursuing my career in the video game industry and working on exciting new projects.",
    },
    "projects": [
        {
            "name": "GumGum Cup",
            "description": {
                "fr": "Laissez libre cours à votre folie et à votre créativité dans les affrontements féroces de la GumGum Cup ! Lancez, étirez et soufflez votre bubble-gum avec l'aide de votre compagnon en gomme pour éjecter, piéger et capturer vos ennemis et prendre le contrôle de l'arène ! Mais attention. L'inattendu a une grande place dans la compétition ! Saurez-vous prédire la prochaine attaque ?",
                "en": "Let your craziness and creativity overflow in the fierce confrontations of the GumGum Cup! Throw, stretch and blow your bubble-gum with the help of your gummy companion to eject, trap and capture your enemies and take control of the arena! But, be careful. The unexpected has a big place in the competition! Will you be able to predict the next attack?",
            },
            "pictures": [
                "GumGumCup_Splashart.png",
                "GumGumCup_Gameplay1.png",
                "GumGumCup_Gameplay2.png",
                "GumGumCup_Gameplay3.png",
            ],
            "gameEngine": "Unreal",
            "language": "Blueprint",
            "platforms": ["PC"],
            "role": {
                "fr": "Je me suis occupé de l'interfacte utilisateur du jeu, le mode multijoueur local,  certaines features du jeu, plusieurs briques de gameplay, le système de boucle de jeu ainsi que la juiciness et le gamefeel.",
                "en": "I took care of the game's user interface, the local multiplayer mode, some of the game's features, several gameplay bricks, the game loop system, as well as juiciness and gamefeel.",
            },
            "team": {
                "fr": "3 Game Designers & Programmers, 3 Game Designers, 5 Artists, 2 Game Programmers, 2 Producers, 1 Sound Designer",
                "en": "",
            },
            "link": "https://isart-digital.itch.io/gumgumcup",
            "date": "2024-09",
            "duration": {
                "fr": "9 mois",
                "en": "9 months",
            },
            "video": "https://www.youtube.com/watch?v=X-hn8qAKvSU",
            "isDisplayedInSlider": true
        },
        {
            "name": "Tahiti Trouble",
            "description": {
                "fr": "Plongez dans l'aventure palpitante sur l'île de Papeete qui est chamboulé ! Préparez-vous à affronter les Beebots, abeilles mécaniques redoutables. Oserez-vous relever le défi et sauver cette île de l'emprise des Beebots ? Préparez-vous à une aventure inoubliable où chaque bataille compte !",
                "en": "Dive into the thrilling adventure on the island of Papeete, which is disrupted! Get ready to confront the formidable mechanical bees, the Beebots. Will you dare to take on the challenge and save this island from the grip of the Beebots? Prepare for an unforgettable adventure where every battle matters!",
            },
            "pictures": [
                "TahitiTrouble_Splashart.png",
                "TahitiTrouble_Plage.png",
                "TahitiTrouble_Market.png",
                "TahitiTrouble_Hive.png",
                "TahitiTrouble_Fight.png",
            ],
            "gameEngine": "Unreal",
            "language": "Blueprint",
            "platforms": ["PC"],
            "role": {
                "fr": "Je me suis occupé de l'interface utilisateur, le système de mission, la juiciness, tout ce qui concerne l'interaction entre le joueur et le monde, boucle victoire/défaite, le système d'expérience ainsi que l'intégration des assets",
                "en": "I took care of the user interface, mission system, juiciness, everything related to player-world interaction, win/lose loop, the experience system, as well as asset integration.",
            },
            "team": "4 Game Designers & Programmers, 5 Game Designers, 9 Artists, 3 Game Programmers",
            "link": "https://gamejolt.com/games/TahitiTrouble/809424",
            "date": "2023-03",
            "duration": {
                "fr": "3 mois",
                "en": "3 months",
            },
            "video": null,
            "isDisplayedInSlider": true
        },
        {
            "name": "The Spirit's Eye",
            "description": {
                "fr": "Un jeune garçon se perd dans une grande forêt après s'être disputé avec son ami... Aidez le à quitter la forêt et à découvrir ses secrets dans ce sokoban-like en 3D avec beaucoup de rebondissements !",
                "en": "A young boy gets lost in a vast forest after having an argument with his friend... Help him escape the forest and uncover its secrets in this 3D sokoban-like game with plenty of twists!",
            },
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
            "platforms": ["PC"],
            "role": {
                "fr": "Je me suis occupé principalement de la juiciness, du système de sauvegarde ainsi que du blocking des niveaux",
                "en": "I primarily handled the juiciness, the save system, and level blocking.",
            },
            "team": "5 Game Designers & Programmers",
            "link": "https://gamejolt.com/games/thespiritseyes/785724",
            "date": "2022-12",
            "duration": {
                "fr": "2 mois",
                "en": "2 months",
            },
            "video": null,
            "isDisplayedInSlider": true
        },
        {
            "name": "Kancel Kultur",
            "description": {
                "fr": "Vous en avez marre des célébrités qui polluent en utilisant des jets privés ? Vous êtes au bon endroit ! Donner leur une leçon après leur sortie de l'avion dans ce jeu de tape taupe !",
                "en": "Are you tired of celebrities polluting with their private jets? You're in the right place! Teach them a lesson after they disembark from the plane in this whack-a-mole game!",
            },
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
            "platforms": ["PC", "Mobile"],
            "role": {
                "fr": "Je me suis occupé de l'aléatoire controlé pour l'apparition des célébrités ainsi que l'intégration de la juiciness.",
                "en": "I handled controlled randomness for the appearance of celebrities and the integration of juiciness.",
            },
            "team": "2 Game Designers & Programmers, 4 Game Artistes, 1 Sound Designers",
            "link": "https://gamejolt.com/games/kancelkultur/749717",
            "date": "2022-09",
            "duration": {
                "fr": "1 semaine",
                "en": "1 week",
            },
            "video": "https://www.youtube.com/watch?v=wnupwnw4SUI",
            "isDisplayedInSlider": true,
            // "theme": [
            //     '#f0f',
            //     '#f0f',
            //     '#f0f',
            //     '#f0f',
            //     '#f0f',
            // ],
        },
        {
            "name": "Atomania",
            "description": {
                "fr": "Atomania est un runner roguelike sur mobile où tu contrôle un atome qui doit traverser différent monde.  Avec tes armes, avance en te frayant un chemin à travers les obstacles que tu rencontreras. Améliore tes armes pour avancer toujours plus loin !",
                "en": "Atomania is a mobile roguelike runner where you control an atom that must traverse different worlds. With your weapons, advance by making your way through the obstacles you encounter. Upgrade your weapons to progress even further!",
            },
            "pictures": [
                "Atomania_TitleScreen.jpg",
                "Atomania_Menu.jpg",
                "Atomania_Gameplay.jpg",
            ],
            "gameEngine": "Unity",
            "language": "C#",
            "platforms": ["Mobile"],
            "role": {
                "fr": "Je me suis principalement occupé de toute l'aspect UI, ainsi que le serveur (sauvergarde, chargement des données)",
                "en": "I primarily took care of the entire UI aspect, as well as the server (saving and loading data)",
            },
            "team": "3 Game Designers & Programmers, 4 Game Designers",
            "link": "https://gamejolt.com/games/atomania/722178",
            "date": "2022-04",
            "duration": {
                "fr": "2 mois",
                "en": "2 months",
            },
            "video": null,
            "isDisplayedInSlider": true
        },
        {
            "name": "Frogulous",
            "description": {
                "fr": "Vous incarnerez une grande diva en route vers LE bal. Malheureusement, parfois, les choses ne se passent pas comme on le voudrait : sur la route, elle se retrouve sans voix... En un rien de temps, elle se rend chez la fée des bois pour obtenir de l'aide ! Mais la fée paresseuse ne se soucie pas de choses comme ça. Je vous laisse voir ce qui se passera ensuite.",
                "en": "You will embody a grand diva on her way to THE ball. Unfortunately, sometimes things don't go as planned: on the way, she loses her voice... In no time, she heads to the fairy of the woods for help! But the lazy fairy doesn't care about things like that. I'll let you see what happens next.",
            },
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
            "platforms": ["Mobile"],
            "role": {
                "fr": "Je me suis occupé de la gestion de la caméra (angle de vue, zoom, dezoom, ...), ainsi que des specials features du jeu qui était la langue liane et le stomps",
                "en": "I was responsible for camera management (view angle, zoom, zoom out, etc.), as well as the game's special features, which included the liana language and the stomps.",
            },
            "team": "4 Game Designers & Programmers, 8 Game Artistes, 2 Sound Designers",
            "link": "https://gamejolt.com/games/Frogulous/702052",
            "date": "2022-01",
            "duration": {
                "fr": "2 mois",
                "en": "2 months",
            },
            "video": null,
            "isDisplayedInSlider": true
        },
        {
            "name": "Mountain Rush",
            "description": {
                "fr": "Basé sur le jeu RUSH, Mountain Rush est un jeu de réflexion où vous devez amener les blocs de minerais à leur destination.",
                "en": "Based on the game RUSH, Mountain Rush is a puzzle game where you must guide the ore blocks to their destination.",
            },
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
            "platforms": ["PC"],
            "role": {
                "fr": "Dans ce projet, j'ai mis l'accent sur la gestion de la caméra ainsi que la juiciness de l'environnement.",
                "en": "In this project, I focused on camera management as well as enhancing the environment's juiciness.",
            },
            "team": {
                "fr": "Individuel",
                "en": "Alone",
            },
            "link": "https://gamejolt.com/games/mountain_rush/678427",
            "date": "2021-11",
            "duration": {
                "fr": "1 mois",
                "en": "1 month",
            },
            "video": null,
            "isDisplayedInSlider": true
        },
        {
            "name": "Kill Them All",
            "description": {
                "fr": "Un héros comme les autres parcourt le monde, affronte des ennemis, escalade des montagnes, sans relâche jusqu'à ce qu'il meure dignement.",
                "en": "A hero like any other travels the world, faces enemies, climbs mountains, relentlessly, until he dies honorably.",
            },
            "pictures": [
                "KillThemAll_Gameplay1.png",
                "KillThemAll_TitleCard.png",
                "KillThemAll_Gameplay2.png",
                "KillThemAll_Gameplay3.png",
            ],
            "gameEngine": "Animate",
            "language": "Haxe",
            "platforms": ["Mobile"],
            "role": {
                "fr": "Dans ce projet, je me suis concentré sur la génération procédural des différentes plateforme et ennemis, ainsi que la juiciness du personnage avec ses animations",
                "en": "In this project, I focused on the procedural generation of various platforms and enemies, as well as enhancing the character's juiciness with its animations.",
            },
            "team": {
                "fr": "Individuel",
                "en": "Alone",
            },
            "link": "https://gamejolt.com/games/kill_them_all/610657",
            "date": "2021-04",
            "duration": {
                "fr": "1 mois",
                "en": "1 month",
            },
            "video": null,
            "isDisplayedInSlider": false
        },
        {
            "name": "Switch It",
            "description": {
                "fr": "Après plusieurs années, un scientifique réussit à créer la téléportation !<br>Enfin presque, le téléporteur ne fait pas ce qu'il veut, ce qui l'a démotivé. Il doit maintenant ranger son laboratoire et les portails qu'il a créés rendent les choses plus compliquées ",
                "en": "After several years, a scientist manages to create teleportation!<br>Well, almost; the teleporter doesn't do what he wants, which has demotivated him. Now he has to tidy up his laboratory, and the portals he created make things more complicated.",
            },
            "pictures": [
                "SwitchIt_TitleCard.png",
                "SwitchIt_Gameplay1.png",
                "SwitchIt_Gameplay2.png",
                "SwitchIt_Gameplay3.png",
                "SwitchIt_Gameplay4.png",
            ],
            "gameEngine": "Animate",
            "language": "Haxe",
            "platforms": ["PC"],
            "role": {
                "fr": "Dans ce projet, je me suis occupé de la feature principale : la téléportation des blocs quand on passe au travers ou quand on pousse un bloc à travers un portail",
                "en": "In this project, I took care of the main feature: teleporting blocks when passing through or pushing a block through a portal.",
            },
            "team": "4 Game Designers & Programmers",
            "link": "https://gamejolt.com/games/switch_it/610614",
            "date": "2021-01",
            "duration": {
                "fr": "2 mois",
                "en": "2 months",
            },
            "video": null,
            "isDisplayedInSlider": false
        },
        {
            "name": "Sweet Decay",
            "description": {
                "fr": "Bienvenue dans le monde des bonbons ! A bord de votre navire en forme de dent, mangez tous vos ennemis en utilisant la puissance de la téléportation de votre navire.",
                "en": "Welcome to the world of candies! Aboard your tooth-shaped ship, devour all your enemies using the teleportation power of your ship.",
            },
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
            "platforms": ["PC"],
            "role": {
                "fr": "Dans ce projet, j'ai mis l'accent sur la spécial feature et sur le level design.",
                "en": "In this project, I emphasized the special feature and the level design.",
            },
            "team": {
                "fr": "Individuel",
                "en": "Alone",
            },
            "link": "https://gamejolt.com/games/sweet_decay/610610",
            "date": "2020-11",
            "duration": {
                "fr": "2 mois",
                "en": "2 month",
            },
            "video": null,
            "isDisplayedInSlider": false
        },
        {
            "name": "Eye Love Rats",
            "description": {
                "fr": "2 rats magiciens cherchent à s'échapper d'un laboratoire magique après que des mages aient expérimenté un sort de battle de regard sur eux. Malgré le fait qu’il ne peuvent pas s'empêcher de se regarder, il vont devoir braver les obstacles en lançant leur laser de l’amitié. ",
                "en": "2 magical rats are trying to escape from a magical laboratory after mages cast a stare-down spell on them. Despite being unable to stop looking at each other, they will have to overcome obstacles by firing their friendship laser.",
            },
            "pictures": [
                "EyeLoveRats_TitleCard.png",
                "EyeLoveRats_Gameplay1.png",
            ],
            "gameEngine": "Unity",
            "language": "C#",
            "platforms": ["PC"],
            "role": {
                "fr": "Dans ce projet, je me suis occupé de la feature du laser qui permet de repousser l'autre joueur ou de se connecter si ils entrent en collision.",
                "en": "In this project, I took care of the laser feature that allows pushing the other player away or connecting if they collide.",
            },
            "team": "2 Game Designers & Programmers, 2 Game Artistes, 1 Sound Designers",
            "link": "https://gamejolt.com/games/eyeloverats/723382",
            "date": "2022-06",
            "duration": {
                "fr": "3 jours",
                "en": "3 days",
            },
            "video": null,
            "isDisplayedInSlider": false
        },
        {
            "name": "Lost Memories",
            "description": {
                "fr": "C'est l'histoire d'un homme qui a perdu la mémoire. Au travers de ses actions, il va rencontrer les développeurs de ce jeu pour tenter de retrouver la mémoire.",
                "en": "It's the story of a man who has lost his memory. Through his actions, he will meet the developers of this game in an attempt to regain his memory.",
            },
            "pictures": [
                "LostMemories_TitleCard.png",
            ],
            "gameEngine": "Ren'py",
            "language": "Python",
            "platforms": ["PC"],
            "role": {
                "fr": "Dans ce projet, je me suis occupé d'une partie du texte pour un des personnage et de la transitions entre chaque scène.",
                "en": "In this project, I handled a portion of the text for one of the characters and the transitions between each scene.",
            },
            "team": "2 Game Designers & Programmers, 1 Game Artistes, 1 Producer, 1 Game Designers",
            "link": "https://gamejolt.com/games/lost_memories/617270",
            "date": "2021-05",
            "duration": {
                "fr": "3 jours",
                "en": "3 days",
            },
            "video": null,
            "isDisplayedInSlider": false
        }
    ],
    "images": {
        "Ren'py": "renpy.png",
        "C#": "Csharp.svg",
        "Blueprint": null,
        "AS3": null,
    },
};

export default data;