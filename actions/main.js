const main = async () => {
    sub_count = await getTotalSubCount();
    const countElement = document.getElementById("count");
    if (!countElement) return;
    countElement.innerHTML = sub_count;
    setInterval(() => {
        // most recent sub
        const current = queue.shift();
        if (!current) return;
        setText(++sub_count, current.username, current.month);
    }, 6000);
};

main();
