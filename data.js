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
            "name": "Jeu 1",
            "description": "Cupcake ipsum dolor sit amet chupa chups macaroon cheesecake apple pie. Topping brownie dragée tootsie roll cake jelly sweet roll. Pastry liquorice sweet roll tart halvah sugar plum jujubes tootsie roll I love. Cake chupa chups tiramisu dragée danish.<br>Chocolate cake macaroon danish cupcake candy sweet roll. Topping cotton candy apple pie candy candy canes sweet roll jelly chupa chups bonbon. Gummies sesame snaps tiramisu powder bonbon. Lemon drops croissant soufflé pastry lollipop.<br>Bonbon halvah I love jujubes candy canes. Cupcake halvah liquorice sweet roll cotton candy gummi bears I love donut jelly-o. Gummi bears cake sweet roll toffee croissant powder gingerbread.",
            "pictures": [
                "10548680-3cse6cav-v4.webp",
                "10548681-cnivxapp-v4.webp",
            ],
            "gameEngine": "UE4",
            "language": "C#",
            "platform": "patate",
            "role": "Lead developer",
            "team": "4 Game Designers & Programmers, 3 Game Artistes, 1 Sound Designers",
            "link": "https://gamejolt.com/games/mountain_rush/678427",
            "date": "2021-12",
            "duration": "1 mois",
            "video": null,
            "isDisplayedInSlider": true
        }
    ]
};

export default data;