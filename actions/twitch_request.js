document.addEventListener("keypress", (event) => {
    // if +
    if (event.keyCode === 43) {
        sub_count++;
        // add class colorized to element
        const random = Math.floor(Math.random() * 70);
        setText(sub_count, random);
    }
    // if -
    if (event.keyCode === 45) {
        sub_count--;
        // remove class colorized from element
        setText(sub_count, -1);
    }
});

const getTotalSubCount = async () => {
    const response = await fetch(
        `https://api.twitch.tv/helix/subscriptions?broadcaster_id=${TWITCH_BROADCASTER_ID}&first=1`,
        {
            method: "GET",
            headers: {
                Authorization: `Bearer ${TWITCH_ACCESS_TOKEN}`,
                "Client-Id": TWITCH_CLIENT_ID,
            },
        }
    );
    const json = await response.json();
    return json.total;
};
