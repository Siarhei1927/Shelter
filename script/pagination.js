const data = [
    {
        "name": "Katrine",
        "img": "assets/pets-katrine.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
        "age": "6 months",
        "inoculations": ["panleukopenia"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Jennifer",
        "img": "assets/pets-jennifer.png",
        "type": "Dog",
        "breed": "Labrador",
        "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
        "age": "2 months",
        "inoculations": ["none"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Woody",
        "img": "assets/pets-woody.png",
        "type": "Dog",
        "breed": "Golden Retriever",
        "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
        "age": "3 years 6 months",
        "inoculations": ["adenovirus", "distemper"],
        "diseases": ["right back leg mobility reduced"],
        "parasites": ["none"]
    },
    {
        "name": "Sophia",
        "img": "assets/pets-sophia.png",
        "type": "Dog",
        "breed": "Shih tzu",
        "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
        "age": "1 month",
        "inoculations": ["parvovirus"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Timmy",
        "img": "assets/pets-timmy.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
        "age": "2 years 3 months",
        "inoculations": ["calicivirus", "viral rhinotracheitis"],
        "diseases": ["kidney stones"],
        "parasites": ["none"]
    },
    {
        "name": "Charly",
        "img": "assets/pets-charly.png",
        "type": "Dog",
        "breed": "Jack Russell Terrier",
        "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
        "age": "8 years",
        "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
        "diseases": ["deafness", "blindness"],
        "parasites": ["lice", "fleas"]
    },
    {
        "name": "Scarlett",
        "img": "assets/pets-scarlet.png",
        "type": "Dog",
        "breed": "Jack Russell Terrier",
        "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
        "age": "3 months",
        "inoculations": ["parainfluenza"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Freddie",
        "img": "assets/pets-freddy.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
        "age": "2 months",
        "inoculations": ["rabies"],
        "diseases": ["none"],
        "parasites": ["none"]
    }
]

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