import { Utils } from "../utils/Utils"

export type Artwork = {
    title: string
    description?: string
    image: string
    date?: string
    tags: string[]
}

export const artworks: Artwork[] = [
    {
        title: "Thank You",
        description: "Artwork of my song, 'Thank You'.",
        image: Utils.getArtworkImage("Thank_You--11-09-2023.png"),
        date: "11-09-2023",
        tags: ["corecat", "full-artwork", "music"],
    },
    {
        title: "ByteWolf Redesign",
        description: "How Byte's design should look like, based off his FNF Design.",
        image: Utils.getArtworkImage("ByteWolf--26-05-2024.png"),
        date: "26-05-2024",
        tags: ['bytewolf', 'full-artwork']
    },
    {
        title: "CoreCat's Test Design",
        description: "Experimenting with lighting and Core's design a bit.",
        image: Utils.getArtworkImage("CoreCat--17-06-2024.png"),
        date: "17-06-2024",
        tags: ['corecat', 'full-artwork']
    },
    {
        title: "Desktop Pet",
        description: "Core if he's a desktop pet, inspired by Alan Becker's AVA Animations.",
        image: Utils.getArtworkImage("Desktop_Pet--27-08-2024.png"),
        date: "27-08-2024",
        tags: ['corecat', 'full-artwork']
    },
    {
        title: "Afternoon Walk",
        description: "How Byte's design should look like, based off his FNF Design.",
        image: Utils.getArtworkImage("Afternoon_Walk--15-09-2024.png"),
        date: "15-09-2024",
        tags: ['corecat', 'full-artwork']
    },
    {
        title: "Farewell",
        description: "Artwork of my song, 'Farewell'.",
        image: Utils.getArtworkImage("Farewell--05-04-2025.png"),
        date: "05-04-2025",
        tags: ['corecat', 'bytewolf', 'full-artwork', 'music']
    },
    {
        title: "Butcher Vanity but Byte",
        description: "Inspired by Flavor Foley's song, 'Butcher Vanity'",
        image: Utils.getArtworkImage("Butcher_Vanity_but_Byte--24-06-2025.png"),
        date: "24-06-2025",
        tags: ['bytewolf', 'full-artwork']
    },
    {
        title: "Me",
        description: "Made this because I needed a new profile picture.",
        image: Utils.getArtworkImage("Me--25-06-2025.png"),
        date: "25-06-2025",
        tags: ['corecat', 'full-artwork']
    },
    {
        title: "Warm Wolf",
        description: "It's winter, and Byte's outside. A cup of coffee is enough to make him warm.",
        image: Utils.getArtworkImage("Warm_Wolf--03-07-2025.png"),
        date: "03-07-2025",
        tags: ['bytewolf', 'full-artwork']
    },
    {
        title: "Ryushirou Fanart",
        description: "Fanart of @ryushirou_wof (Instagram). I did a mistake there on writing his name, my bad.",
        image: Utils.getArtworkImage("Ryushirou--27-07-2025.png"),
        date: "27-07-2025",
        tags: ['fanart', 'full-artwork']
    },
    {
        title: "Kevin Fanart",
        description: "Fanart of Kevin by nyanwolf. Don't touch his pizza!",
        image: Utils.getArtworkImage("Kevin--03-06-2025.png"),
        date: "03-06-2025",
        tags: ['fanart', 'full-artwork']
    },
    {
        title: "Astra Maid Fanart",
        description: "Fanart of mang_astra1 (Instagram). Met him in an event wearing maid outfit, so I drew him in it.",
        image: Utils.getArtworkImage("Astra_Maid--19-10-2025.png"),
        date: "19-10-2025",
        tags: ['fanart', 'full-artwork']
    },
    {
        title: "World War AU Byte.",
        description: "Alternate Universe version of Byte where a world war occurs.",
        image: Utils.getArtworkImage("World_War_AU_Byte--26-10-2025.png"),
        date: "26-10-2025",
        tags: ['bytewolf', 'full-artwork']
    },
    {
        title: "Astra War Fanart",
        description: "Fanart of mang_astra1 (Instagram). Drawn upon request.",
        image: Utils.getArtworkImage("Astra_War--31-10-2025.png"),
        date: "31-10-2025",
        tags: ['fanart', 'full-artwork']
    },
    {
        title: "Package Delivery",
        description: "Byte brought you a package! Wonder what it is.",
        image: Utils.getArtworkImage("Package_Delivery--24-12-2025.png"),
        date: "24-12-2025",
        tags: ['bytewolf', 'full-artwork']
    },
    {
        title: "New Year",
        description: "Happy new year! Let's celebrate it with roasted corn.",
        image: Utils.getArtworkImage("New_Year--01-01-2026.png"),
        date: "01-01-2026",
        tags: ['corecat', 'bytewolf', 'full-artwork']
    },
    {
        title: "Kean",
        description: "Introducing my golden retriever OC, Kean. He likes to skate.",
        image: Utils.getArtworkImage("Kean--03-03-2026.png"),
        date: "03-03-2026",
        tags: ['kean', 'full-artwork']
    },
    {
        title: "Butcher Vanity but Core",
        description: "Inspired by Flavor Foley's song, 'Butcher Vanity'.",
        image: Utils.getArtworkImage("Butcher_Vanity_but_Core--15-03-2026.png"),
        date: "15-03-2026",
        tags: ['corecat', 'full-artwork']
    },
    {
        title: "Eid Mubarak",
        description: "Everyone is here!",
        image: Utils.getArtworkImage("Eid_Mubarak--23-03-2026.png"),
        date: "23-03-2026",
        tags: ['corecat', 'bytewolf', 'kean', 'chip', 'full-artwork']
    },
    {
        title: "Zhi Fanart",
        description: "Fanart of Zhi by @ryushirou_wof (Instagram). He looks... different!",
        image: Utils.getArtworkImage("Zhi--23-03-2026.png"),
        date: "23-03-2026",
        tags: ['fanart', 'full-artwork']
    },
    {
        title: "Candra Fanart",
        description: "Fanart of @candramaw_tuxcat (Instagram). Candra is brought by Core to his universe.",
        image: Utils.getArtworkImage("Candra--09-04-2026.png"),
        date: "09-04-2026",
        tags: ['fanart', 'full-artwork']
    },
    {
        title: "Hymn to the Decadent Life",
        description: "Inspired by Hymn to the Decadent Life by Ro2noki.",
        image: Utils.getArtworkImage("Hymn_to_the_decadent_life--14-04-2026.png"),
        date: "14-04-2026",
        tags: ['corecat', 'full-artwork']
    },
    {
        title: "Fish and Stars",
        description: "Drawn this random cat character, she likes eating Fish and Stargazing.",
        image: Utils.getArtworkImage("Fish_and_Stars--08-05-2026.png"),
        date: "08-05-2026",
        tags: ['unknown-character', 'full-artwork']
    },
    {
        title: "Ruined Portal",
        description: "Might contain useful loots.",
        image: Utils.getArtworkImage("Ruined_Portal--20-05-2026.png"),
        date: "20-05-2026",
        tags: ['corecat', 'full-artwork']
    },
    {
        title: "After Skate Break",
        description: "Kean just finished his skating session, time for a break.",
        image: Utils.getArtworkImage("After_Skate_Break--27-05-2026.png"),
        date: "27-05-2026",
        tags: ['kean', 'full-artwork']
    },
    {
        title: "Chip is ACTIVE",
        description: "get(\"\\x43\\x68\\x69\\x70\").state = ACTIVE;",
        image: Utils.getArtworkImage("Chip--08-06-2026.png"),
        date: "08-06-2026",
        tags: ['chip', 'full-artwork']
    },
    {
        title: "Evening Walk",
        description: "Walking around the city with Byte.",
        image: Utils.getArtworkImage("Evening_Walk--16-08-2026.png"),
        date: "16-08-2026",
        tags: ['bytewolf', 'full-artwork']
    },
    {
        title: "Francis Fanart",
        description: "Fanart for @francisssssssss.gay (Bluesky). Cool fox guy.",
        image: Utils.getArtworkImage("Francis--26-08-2026.png"),
        date: "26-08-2026",
        tags: ['fanart', 'full-artwork']
    },
]
//