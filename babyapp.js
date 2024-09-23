import { namesDataset } from './namesDataset.js';

let currentIndex = 0;
let likedNames = [];
let targetVector = [2, 1, 3, 1, 2, 1, 1, 1, 2, 3];
let selectedGender = 'male';

// Get DOM elements
const nameField = document.getElementById('currentName');
const likeBtn = document.getElementById('likeBtn');
const dislikeBtn = document.getElementById('dislikeBtn');
const previousNameField = document.getElementById('previousName');
const genderForm = document.getElementById('genderForm');

// Filter names based on gender selection
function filterNamesByGender(gender) {
    return namesDataset.filter(name => name.gender === gender);
}

let filteredNames = filterNamesByGender(selectedGender);

// Gender change event
genderForm.addEventListener('change', (event) => {
    selectedGender = event.target.value;
    currentIndex = 0;
    likedNames = [];
    filteredNames = filterNamesByGender(selectedGender);
    showName();
});

// Show current name
function showName() {
    if (currentIndex < filteredNames.length) {
        nameField.textContent = filteredNames[currentIndex].name;
    } else {
        nameField.textContent = 'End of names!';
        likeBtn.style.display = 'none';
        dislikeBtn.style.display = 'none';
    }
}

// Handle Like button
likeBtn.addEventListener('click', () => {
    likedNames.push(filteredNames[currentIndex]);
    previousNameField.textContent = `Previous liked: ${filteredNames[currentIndex].name}`;
    currentIndex++;
    showName();
});

// Handle Dislike button
dislikeBtn.addEventListener('click', () => {
    currentIndex++;
    showName();
});

// Initialize the app
document.addEventListener('DOMContentLoaded', showName);
