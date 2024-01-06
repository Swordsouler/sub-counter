const TWITCH_ACCESS_TOKEN = "cdrgweu4jm1m0qezz241rf6v0nbs6s"; //"<ENTER_YOUR_TWITCH_ACCESS_TOKEN>";
const TWITCH_CLIENT_ID = "gp762nuuoqcoxypju8c569th9wz7q5"; //"<ENTER_YOUR_TWITCH_CLIENT_ID>";
const TWITCH_BROADCASTER_ID = "107968853";

let sub_count = 3000; // initialized with twitch api
let queue = [];

const datas = [
    {
        month: 60,
        image: "images/webp/challenger.webp",
        color: "gold",
    },
    {
        month: 48,
        image: "images/webp/grandmaster.webp",
        color: "#bd2129",
    },
    {
        month: 36,
        image: "images/webp/master.webp",
        color: "#9c529c",
    },
    {
        month: 24,
        image: "images/webp/diamond.webp",
        color: "#3973bd",
    },
    {
        month: 12,
        image: "images/webp/platinum.webp",
        color: "#4a9c9d",
    },
    {
        month: 6,
        image: "images/webp/gold.webp",
        color: "#e2c75c",
    },
    {
        month: 3,
        image: "images/webp/silver.webp",
        color: "#315294",
    },
    {
        month: 1,
        image: "images/webp/bronze.webp",
        color: "#9c734a",
    },
];
