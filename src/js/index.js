const API_URL = "https://forza-api.tk";

const imageContent = document.getElementById("image");
const btnReload = document.getElementById("btn-reload");

let waitingResponse = false;

const loadAPI = () => {

    if (waitingResponse) {
        return;
    }

    waitingResponse = true;

    fetch(API_URL)
        .then(response => response.json())
        .then(loadCar);
};

const loadCar = (json) => {

    waitingResponse = false;

    imageContent.style.background = `url(${json.image}) no-repeat`;
    imageContent.style.backgroundSize = "cover";
};

window.onload = () => {

    loadAPI();

    btnReload.addEventListener("click", loadAPI);
};