const main = async () => {
    const sub_count = await getTotalSubCount();
    console.log(sub_count);
    setText(sub_count);
};

main();
