const TWITCH_ACCESS_TOKEN = "<ENTER_YOUR_TWITCH_ACCESS_TOKEN>";
const TWITCH_CLIENT_ID = "<ENTER_YOUR_TWITCH_CLIENT_ID>";
const TWITCH_BROADCASTER_ID = "<ENTER_YOUR_TWITCH_BROADCASTER_ID>";

let sub_count = 3000; // initialized with twitch api
const sub_goal = 3100;

const datas = [
    {
        month: 60,
        image: "./images/challenger.png",
        color: "gold",
    },
    {
        month: 48,
        image: "./images/grandmaster.png",
        color: "#7d4083",
    },
    {
        month: 36,
        image: "./images/master.png",
        color: "#c5232b",
    },
    {
        month: 24,
        image: "./images/diamond.png",
        color: "#2937d5",
    },
    {
        month: 12,
        image: "./images/platinum.gif",
        color: "#42c9c0",
    },
    {
        month: 6,
        image: "./images/gold.gif",
        color: "#ffff9f",
    },
    {
        month: 3,
        image: "./images/silver.gif",
        color: "#3f73be",
    },
    {
        month: 1,
        image: "./images/bronze.gif",
        color: "#89623b",
    },
];
