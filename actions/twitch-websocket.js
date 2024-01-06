const config = {
    identity: {
        id: TWITCH_CLIENT_ID,
        accessToken: TWITCH_ACCESS_TOKEN,
    },
    listener: {
        type: "websocket",
        websocketURL: "ws://127.0.0.1:8080/ws",
    },
};

// make a 1 second delay before connecting to the websocket
// to prevent 429 error (we wait the previous socket from the reload to be closed)
setTimeout(() => {
    const tes = new TES(config);

    /*
    // this is trigger when a user start a subscription (no streak)
    tes.on("channel.subscribe", (event) => {
        //twitch event trigger subscribe --transport=websocket --from-user=107968854 --to-user=107968853 --gift-user=107968855
        console.log(event);
    });
    // this is trigger when a user subscription end
    tes.on("channel.subscription.end", (event) => {
        console.log(event);
    });
    tes.on("channel.subscription.gift", (event) => {
        //twitch event trigger channel-gift --transport=websocket --from-user=107968854 --to-user=107968853 --gift-user=107968855
        console.log(event);
    });*/
    // this is trigger when a user start a subscription (with streak)
    tes.on("channel.subscription.message", (event) => {
        //twitch event trigger subscribe-message --transport=websocket --from-user=107968854 --to-user=107968853 --gift-user=107968855
        console.log(event);
        queue.push({
            username: event["user_name"],
            month: event["cumulative_months"],
        });
    });

    /* subscribe to event */
    const createSubscription = (
        subscription,
        condition = {
            broadcaster_user_id: TWITCH_BROADCASTER_ID,
        },
        version = 1
    ) => {
        tes.subscribe(subscription, condition, version)
            .then(() => console.log("Subscription successful: " + subscription))
            .catch((err) => {
                //if error 400
                if (err.toString().includes("Error: 400 Bad Request")) {
                    return;
                }
                console.log(err);
                //if it fails, try again in 2 seconds
                setTimeout(() => {
                    createSubscription(subscription, condition, version);
                }, 5000);
            });
    };

    /*createSubscription("channel.subscribe");
    createSubscription("channel.subscription.end");
    createSubscription("channel.subscription.gift");*/
    createSubscription("channel.subscription.message");
}, 1000);
