const setText = (text, month) => {
    // change text
    const countElement = document.getElementById("count");
    if (!countElement) return;
    countElement.innerHTML = text;

    // no animation if month is not defined
    if (!month) return;

    // modify color for animation
    let color = getColor(month);
    document.documentElement.style.setProperty("--text-color", color);

    // make text animation
    const textElement = document.getElementById("text");
    if (!textElement) return;
    textElement.classList.remove("colorized");
    textElement.offsetWidth;
    textElement.classList.add("colorized");
};

const element = document.getElementById("goal");
if (element) {
    element.innerHTML = sub_goal.toString();
}

// get the color depending of the month amount
const getColor = (month) => {
    if (!month || month <= 0) return "red";
    else {
        for (let i = 0; i < datas.length; i++) {
            if (month >= datas[i].month) {
                return datas[i].color;
            }
        }
    }
};
