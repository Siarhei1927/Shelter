import data from "./pets.json" assert { type: 'json' };

let array = [...data];
let pageNumber = 1;
let petsPerPage = 3;

function numberOfPages() {
    if (window.innerWidth < 768) {
        if (petsPerPage !== 1) {
            pageNumber = 1;
            petsPerPage = 1;
            renderPets(array, pageNumber, petsPerPage);
        }
    } else if (window.innerWidth < 1071) {
        if (petsPerPage !== 2) {
            pageNumber = 1;
            petsPerPage = 2;
            renderPets(array, pageNumber, petsPerPage);
        }
    } else {
        if (petsPerPage !== 3) {
            pageNumber = 1;
            petsPerPage = 3;
            renderPets(array, pageNumber, petsPerPage);
        }
    }
}

window.onload = numberOfPages;
window.onresize = numberOfPages;

const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];

        array[i] = array[j];
        array[j] = temp;
    }
    return array;
};

const renderPets = (arr, page, petsPerPage) => {
    shuffle(array);

    if (arr.length <= petsPerPage) {
        page = 1;
    } else if (page > Math.ceil(arr.length / petsPerPage)) {
        page = 1;
    }

    let startIndex = (page - 1) * petsPerPage;
    let endIndex = startIndex + petsPerPage;
    let slicedArray;

    if (endIndex <= arr.length) {
        slicedArray = arr.slice(startIndex, endIndex);
    } else {
        endIndex = endIndex % arr.length;
        slicedArray = [...arr.slice(startIndex), ...arr.slice(0, endIndex)];
    }

    document.getElementById("ourFriends-content").innerHTML = '';

    slicedArray.forEach((item) => {
        const body = document.querySelector('.body');
        const cardLabel = document.createElement("div");
        const itemLabel = document.createElement("div");
        const imgLabel = document.createElement("img");
        const nameLabel = document.createElement("div");
        const buttonLabel = document.createElement("div");
        const button = document.createElement("button");

        cardLabel.classList.add('ourFriends-card');
        itemLabel.classList.add('ourFriends-item');
        imgLabel.setAttribute('src', item.img);
        nameLabel.innerHTML = item.name;
        nameLabel.classList.add('ourFriends-title');
        buttonLabel.classList.add('ourFriends-item__button');
        buttonLabel.classList.add(item.name);
        buttonLabel.classList.add('open-popup');
        button.classList.add('ourFriends-card__button');
        button.innerHTML = 'Learn more';

        cardLabel.appendChild(itemLabel);
        itemLabel.appendChild(imgLabel);
        cardLabel.appendChild(nameLabel);
        cardLabel.appendChild(buttonLabel);
        buttonLabel.appendChild(button);
        document.getElementById("ourFriends-content").appendChild(cardLabel);

        const popupBG = document.createElement("div");
        const popup = document.createElement("div");
        const popupLabel = document.createElement("img");
        const popupImage = document.createElement("div");
        const popupImgLabel = document.createElement("img");
        const popupContent = document.createElement("div");
        const popupH = document.createElement("h3");
        const type = document.createElement("h4");
        const breed = document.createElement("h4");
        const description = document.createElement("p");
        const age = document.createElement("p");
        const inoculations = document.createElement("p");
        const diseases = document.createElement("p");
        const parasites = document.createElement("p");

        popupBG.classList.add('popup-bg');
        popupBG.classList.add(item.name);
        popup.classList.add('popup');
        popupLabel.classList.add('close-popup');
        popupImage.classList.add('popup-image');
        popupLabel.src = "assets/modal_close_button.png";
        popupImgLabel.setAttribute('src', item.img);
        popupContent.classList.add('popup-content');
        popupH.classList.add('popup-h');
        popupH.innerText = item.name;
        type.classList.add('type');
        type.innerText = `Type: ` + item.type;
        breed.classList.add('breed');
        breed.innerText = `Breed: ` + item.breed;
        description.classList.add('description');
        description.innerText = item.description;
        age.classList.add('age');
        age.innerText = `Age:  ` + item.age;
        inoculations.classList.add('inoculations');
        inoculations.innerText = `Inoculations:  ` + item.inoculations;
        diseases.classList.add('diseases');
        diseases.innerText = `Diseases:  ` + item.diseases;
        parasites.classList.add('parasites');
        parasites.innerText = `Parasites:  ` + item.parasites;

        popupBG.appendChild(popup);
        popup.appendChild(popupLabel);
        popup.appendChild(popupImage);
        popupImage.appendChild(popupImgLabel);
        popup.appendChild(popupContent);
        popupContent.appendChild(popupH);
        popupContent.appendChild(type);
        popupContent.appendChild(breed);
        popupContent.appendChild(description);
        popupContent.appendChild(age);
        popupContent.appendChild(inoculations);
        popupContent.appendChild(diseases);
        popupContent.appendChild(parasites);
        document.querySelector(".body").appendChild(popupBG);

        cardLabel.addEventListener('click', function (el) {
            body.style.position = 'fixed';
            body.style.width = '100%';
            el.preventDefault();
            popup.classList.toggle('active');
            popupBG.classList.toggle('active');
        })
        popupLabel.onclick = () => {
            popup.classList.remove('active');
            popupBG.classList.remove('active');
            body.style.position = 'relative';
            window.scrollTo(0, parseInt(1600));
        }
    })
}

renderPets(array, pageNumber, petsPerPage);

function nextSlide() {
    pageNumber++;
    renderPets(array, pageNumber, petsPerPage);
}

function prevSlide() {
    pageNumber--;
    if (pageNumber < 1) {
        pageNumber = Math.ceil(array.length / petsPerPage);
    }
    renderPets(array, pageNumber, petsPerPage);
}

document.getElementById("rightButton").addEventListener("click", nextSlide);
document.getElementById("leftButton").addEventListener("click", prevSlide);