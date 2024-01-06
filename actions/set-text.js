let containerID = 0;

const setText = (text, username, month) => {
    // no animation if month is not defined
    if (!month) return;
    // modify color for animation
    let { color, image } = getMonthData(month);

    // add image container
    const newImageContainer = document.createElement("div");
    const id = "image-container-" + containerID++;
    newImageContainer.setAttribute("id", id);
    newImageContainer.classList.add("image-container");
    //append to body
    document.body.appendChild(newImageContainer);

    //add class image-animation
    newImageContainer.classList.add("image-animation");

    // add image
    const newImageElement = document.createElement("img");
    newImageElement.setAttribute("id", "image");
    newImageElement.setAttribute("src", image + "?v=" + new Date().getTime());
    newImageElement.setAttribute("alt", "rank");
    //add class image-animation
    newImageElement.classList.add("image-animation");
    document.getElementById(id).appendChild(newImageElement);
    //add text
    const newMessageElement = document.createElement("span");
    newMessageElement.setAttribute("id", "image-message");
    newMessageElement.innerHTML = `${username}`;
    //add class image-animation
    newMessageElement.classList.add("image-animation");
    document.getElementById(id).appendChild(newMessageElement);

    // make text animation
    setTimeout(() => {
        newImageElement.style.animation = "none";
        // remove image container
        const imageContainer = document.getElementById(id);
        if (imageContainer) {
            imageContainer.remove();
        }

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
    }, 5700);
};

// get the color depending of the month amount
const getMonthData = (month) => {
    if (!month || month <= 0) return "red";
    else {
        for (let i = 0; i < datas.length; i++) {
            if (month >= datas[i].month) {
                return datas[i];
            }
        }
    }
};
