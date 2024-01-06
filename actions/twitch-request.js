document.addEventListener("keypress", (event) => {
    // if +
    if (event.keyCode === 43) {
        // add class colorized to element
        const random = Math.floor(Math.random() * 59) + 1;
        queue.push({
            username: "Swordsouler",
            month: random,
        });
        //setText(sub_count, "Swordsouler", random);
    }
    // if -
    if (event.keyCode === 45) {
        sub_count--;
        // change text
        const countElement = document.getElementById("count");
        if (!countElement) return;
        countElement.innerHTML = text;
        document.documentElement.style.setProperty("--text-color", color);

        const textElement = document.getElementById("text");
        if (textElement) {
            textElement.classList.remove("colorized");
            textElement.offsetWidth;
            textElement.classList.add("colorized");
        }
    }
});

const init = {
    method: "GET",
    headers: {
        Authorization: `Bearer ${TWITCH_ACCESS_TOKEN}`,
        "Client-Id": TWITCH_CLIENT_ID,
    },
};

const getTotalSubCount = async () => {
    const response = await fetch(
        `https://api.twitch.tv/helix/subscriptions?broadcaster_id=${TWITCH_BROADCASTER_ID}&first=1`,
        init
    );
    const json = await response.json();
    return json.total;
};
