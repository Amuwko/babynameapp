import { namesDataset } from './namesDataset.js';

let currentIndex = 0;
let likedNames = [];
let currentGenderFilter = { male: false, female: false };

const nameField = document.getElementById('currentName');
const previousNameField = document.getElementById('previousName');
const maleBtn = document.getElementById('maleBtn');
const femaleBtn = document.getElementById('femaleBtn');
const likeBtn = document.getElementById('likeBtn');
const dislikeBtn = document.getElementById('dislikeBtn');

// Event listeners for gender buttons
maleBtn.addEventListener('click', () => toggleGender('male'));
femaleBtn.addEventListener('click', () => toggleGender('female'));

function toggleGender(gender) {
    if (gender === 'male') {
        currentGenderFilter.male = !currentGenderFilter.male;
        maleBtn.classList.toggle('active');
    } else if (gender === 'female') {
        currentGenderFilter.female = !currentGenderFilter.female;
        femaleBtn.classList.toggle('active');
    }
    loadNextName();
}

function loadNextName() {
    let filteredNames = namesDataset.filter(name => {
        if (currentGenderFilter.male && name.vector[5] === 2) return true;
        if (currentGenderFilter.female && name.vector[5] === 1) return true;
        if (!currentGenderFilter.male && !currentGenderFilter.female) return true;
        return false;
    });

    if (filteredNames.length === 0) {
        nameField.textContent = 'No names available';
    } else {
        currentIndex = Math.floor(Math.random() * filteredNames.length);
        nameField.textContent = filteredNames[currentIndex].name;
    }
}

// Initialize the app
loadNextName();

likeBtn.addEventListener('click', () => {
    // Like logic here
    likedNames.push(namesDataset[currentIndex]);
    previousNameField.textContent = `Previous liked: ${namesDataset[currentIndex].name}`;
    loadNextName();
});

dislikeBtn.addEventListener('click', () => {
    // Dislike logic here
    loadNextName();
});
