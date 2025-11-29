const movies = [
    {
        title: "War of the Worlds(2025)",
        image: "https://upload.wikimedia.org/wikipedia/en/2/29/War_of_the_Worlds_2025_official_poster.jpg",
        description: "A colossal invasion of Earth is coming in this off-kilter take on the legendary novel of the same name, filled with present-day themes of technology, government surveillance, and privacy.",
        reviews: [
            { score: 0, text: "Rooting for the aliens"}, 
            { score: 0, text: "Beyond belief bland and boring"}, 
            { score: 0, text: "Awful"}, 
            { score: 1, text: "Great action packed movie"}, 
            { score: 0, text: "Irritating"}
        ]
    },
    {
        title: "Winnie-the-Pooh: Blood and Honey",
        image: "https://m.media-amazon.com/images/M/MV5BMTA1YjEyNmQtNGNiYi00OWFlLWJlMDQtOWIyZjA5OTZhODVjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        description: "After Christopher Robin abandons them for college, Pooh and Piglet embark on a bloody rampage as they search for a new source of food.",
        reviews: [
            { score: 0, text: "A Big Ol' Pile of Unfinished Pooh!"}, 
            { score: 0, text: "Contender for worst movie of the decade"}, 
            { score: 0, text: "Jaw-droppingly bad"}, 
            { score: 0, text: "Winnie the Pooh:Cringe and Strangely bad"}, 
            { score: 1, text: "A very fun bloody slasher movie"}
        ]
    },
    {
        title: "Cats",
        image: "https://upload.wikimedia.org/wikipedia/en/c/cf/Cats_2019_poster.jpg",
        description: "A tribe of cats called the Jellicles must decide yearly which one will ascend to the Heaviside Layer and come back to a new Jellicle life.",
        reviews: [
            { score: 0, text: "What were they thinking?"}, 
            { score: 0, text: "I have never left a movie halfway through before"}, 
            { score: 0, text: "Worst Movie I Have Ever Seen"}, 
            { score: 0, text: "Awful"}, 
            { score: 1, text: "Ignore the haters"}, 
            { score: 0, text: ""}
        ]
    },
    {
        title: "The Emoji Movie",
        image: "https://upload.wikimedia.org/wikipedia/en/6/63/The_Emoji_Movie_film_poster.jpg",
        description: "Gene, a multi-expressional emoji, sets out on a journey to become a normal emoji.",
        reviews: [
            { score: 1, text: "Best movie ever"}, 
            { score: 0, text: "AWFUL PIECE OF GARBAGE"}, 
            { score: 0, text: "It's really bad"}, 
            { score: 1, text: ""}, 
            { score: 1, text: ""}, 
            { score: 0, text: "Hot Garbage"}, 
            { score: 0, text: ""}, 
            { score: 1, text: ""},
            { score: 0, text: ""},
            { score: 1, text: ""},
            { score: 0, text: "Terrible!!!"}
        ]
    },
    {
        title: "Jurassic World: Rebirth",
        image: "https://m.media-amazon.com/images/M/MV5BMGM3ZmI3NzQtNzU5Yi00ZWI1LTg3YTAtNmNmNWIyMWFjZTBkXkEyXkFqcGc@._V1_.jpg",
        description: "Five years post-Jurassic World: Dominion (2022), an expedition braves isolated equatorial regions to extract DNA from three massive prehistoric creatures for a groundbreaking medical breakthrough.",
        reviews: [
            { score: 0, text: "Probably the worst one."}, 
            { score: 0, text: "Another disappointing sequel"}, 
            { score: 1, text: "Typical Hollywood Dinosaur movie"}, 
            { score: 1, text: "Excellent Movie"},
            { score: 1, text: "Heck, it worked for me!!!"}, 
            { score: 0, text: "Don't waste your time"}
        ]
    },
    {
        title: "Black Phone 2",
        image: "https://upload.wikimedia.org/wikipedia/en/a/a9/Black_Phone_2_poster.jpg",
        description: "As Finn, now 17, struggles with life after his captivity, his sister begins receiving calls in her dreams from the black phone and seeing disturbing visions of three boys being stalked at a winter camp known as Alpine Lake.",
        reviews: [
            { score: 0, text: ""},
            { score: 1, text: ""}, 
            { score: 0, text: "its ok"},  
            { score: 0, text: ""},
            { score: 1, text: "Love so much!"},
            { score: 1, text: ""}
        ]
    },
    {
        title: "Oppenheimer",
        image: "https://m.media-amazon.com/images/M/MV5BMzc3YjhmYmMtODQzOC00MTVlLTg2MmQtOWNkMGZkNzBmYzc0XkEyXkFqcGc@._V1_.jpg",
        description: "A dramatization of the life story of J. Robert Oppenheimer, the physicist who had a large hand in the development of the atomic bombs that brought an end to World War II.",
        reviews: [
            { score: 1, text: "Murphy is exceptional"},
            { score: 1, text: ""}, 
            { score: 0, text: ""}, 
            { score: 1, text: "Everything you need"}, 
            { score: 1, text: "This is a cinema masterpiece."},
            { score: 1, text: ""}, 
            { score: 1, text: ""}, 
            { score: 1, text: ""}, 
            { score: 0, text: "Slow paced and not worth watching"}, 
            { score: 1, text: "A challenging watch to be sure, but a worthwhile one."}
        ]
    },
    {
        title: "The Godfather",
        image: "https://m.media-amazon.com/images/M/MV5BNGEwYjgwOGQtYjg5ZS00Njc1LTk2ZGEtM2QwZWQ2NjdhZTE5XkEyXkFqcGc@._V1_.jpg",
        description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
        reviews: [
            { score: 1, text: "An offer so good, I couldn't refuse"}, 
            { score: 1, text: ""}, 
            { score: 1, text: ""}, 
            { score: 1, text: ""},
            { score: 1, text: ""},
            { score: 1, text: ""}, 
            { score: 1, text: ""}, 
            { score: 1, text: ""}, 
            { score: 0, text: "Utter buls** overhyped movie"}, 
            { score: 1, text: ""}
        ]
    },
    {
        title: "The Shawshank Redemption",
        image: "https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg",
        description: "A banker convicted of uxoricide forms a friendship over a quarter century with a hardened convict, while maintaining his innocence and trying to remain hopeful through simple compassion.",
        reviews: [
            { score: 1, text: ""}, 
            { score: 0, text: ""}, 
            { score: 1, text: ""}, 
            { score: 1, text: ""},
            { score: 1, text: ""},
            { score: 1, text: ""}, 
            { score: 1, text: ""}, 
            { score: 1, text: ""}, 
            { score: 1, text: ""}, 
            { score: 1, text: ""}
        ]
    },
    {
        title: "The Lord of the Rings: The Return of the King",
        image: "https://upload.wikimedia.org/wikipedia/en/4/48/Lord_Rings_Return_King.jpg",
        description: "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
        reviews: [
            { score: 1, text: ""}, 
            { score: 1, text: ""}, 
            { score: 1, text: ""}, 
            { score: 0, text: ""},
            { score: 1, text: ""},
            { score: 1, text: ""}, 
            { score: 1, text: ""}, 
            { score: 1, text: ""}, 
            { score: 1, text: ""}, 
            { score: 1, text: ""}
        ]
    }
];