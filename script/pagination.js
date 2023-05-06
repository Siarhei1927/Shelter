import data from "./pets.json" assert { type: 'json' };

let newArray = [...data];
let pageNumber = 1;
let petsPerPage = 8;


const shufflePets = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];

        array[i] = array[j];
        array[j] = temp;
    }
    return array;
};

const rightButton = document.querySelector('.right-button');
const doubleRightButton = document.querySelector('.double-right-button');
const leftButton = document.querySelector('.left-button');
const doubleLeftButton = document.querySelector('.double-left-button');

rightButton.addEventListener('click', function () {
    document.getElementById('main-button').innerHTML = pageNumber == 6 ? 6 : ++pageNumber;
    if (pageNumber === 6) {
        rightButton.classList.toggle('disabled'),
            doubleRightButton.classList.toggle('disabled');
    }
    if (pageNumber != 1) {
        leftButton.classList.remove('disabled'),
            doubleLeftButton.classList.remove('disabled');
    }
    renderPets(newArray, pageNumber, petsPerPage);
}
);

leftButton.addEventListener('click', function () {
    document.getElementById('main-button').innerHTML = pageNumber == 1 ? 1 : --pageNumber;
    if (pageNumber != 1) {
        leftButton.classList.remove('disabled'),
            doubleLeftButton.classList.remove('disabled');
    } else {
        leftButton.classList.toggle('disabled'),
            doubleLeftButton.classList.toggle('disabled');
    }
    if (pageNumber != 6) {
        rightButton.classList.remove('disabled'),
            doubleRightButton.classList.remove('disabled');
    }
    renderPets(newArray, pageNumber, petsPerPage);
}
);

doubleRightButton.addEventListener('click', function () {
    document.getElementById('main-button').innerHTML = pageNumber = 6;
    if (pageNumber === 6) {
        rightButton.classList.toggle('disabled'),
            doubleRightButton.classList.toggle('disabled');
    }
    if (pageNumber != 1) {
        leftButton.classList.remove('disabled'),
            doubleLeftButton.classList.remove('disabled');
    }
    renderPets(newArray, pageNumber, petsPerPage);
}
)

doubleLeftButton.addEventListener('click', function () {
    document.getElementById('main-button').innerHTML = pageNumber = 1;
    if (pageNumber != 1) {
        leftButton.classList.remove('disabled'),
            doubleLeftButton.classList.remove('disabled');
    } else {
        leftButton.classList.toggle('disabled'),
            doubleLeftButton.classList.toggle('disabled');
    }
    if (pageNumber = 1) {
        rightButton.classList.remove('disabled'),
            doubleRightButton.classList.remove('disabled');
    }
    renderPets(newArray, pageNumber, petsPerPage);
}
)

function disabledLeftButton() {
    if (pageNumber === 1) {
        leftButton.disabled = true;
        doubleLeftButton.disabled = true;
    }
    else {
        leftButton.disabled = false;
        doubleLeftButton.disabled = false;
    }

}

function disabledRightButton() {
    if (pageNumber === 6) {
        rightButton.disabled = true;
        doubleRightButton.disabled = true;
    }
    else {
        rightButton.disabled = false;
        doubleRightButton.disabled = false;
    }
}

const renderPets = (arr, page, petsPerPage) => {
    shufflePets(newArray);
    console.log(shufflePets(newArray));
    // let slicedArray = arr.slice(petsPerPage * (page - 1), petsPerPage * page);
    document.getElementById("ourFriends-content").innerHTML = '';
    newArray.forEach((item) => {
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
            window.scrollTo(0, parseInt(350));
        }

        disabledLeftButton();
        disabledRightButton()
    })
}

document.getElementById('main-button').innerHTML = pageNumber;

renderPets(newArray, pageNumber, petsPerPage);