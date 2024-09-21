import { namesDataset } from './namesDataset.js';

let currentIndex = 0;
let likedNames = [];
let targetVector = [2, 1, 3, 1, 2, 1, 1, 1, 2, 3];

const nameField = document.getElementById('currentName');
const previousNameField = document.getElementById('previousName');
const likeButton = document.getElementById('like');
const dislikeButton = document.getElementById('dislike');

// Set the first name
nameField.textContent = namesDataset[currentIndex].name;

// Handle Like button click
likeButton.addEventListener('click', () => {
    // Update previous liked name
    const previousName = namesDataset[currentIndex].name;
    previousNameField.textContent = `Previous liked: ${previousName}`;

    // Update target vector with current name vector
    updateTargetVector(namesDataset[currentIndex].vector);

    // Load the next name
    loadNextName();
});

// Handle Dislike button click
dislikeButton.addEventListener('click', () => {
    loadNextName();
});

// Load the next name
function loadNextName() {
    currentIndex++;
    if (currentIndex < namesDataset.length) {
        nameField.textContent = namesDataset[currentIndex].name;
    } else {
        nameField.textContent = 'End of names!';
        likeButton.style.display = 'none';
        dislikeButton.style.display = 'none';
    }
}

// Function to update the target vector based on the liked name
function updateTargetVector(currentVector) {
    for (let i = 0; i < targetVector.length; i++) {
        targetVector[i] = Math.min(3, Math.round((currentVector[i] + targetVector[i]) / 2));
    }
    document.getElementById('targetVector').textContent = `Target: [${targetVector.join(', ')}]`;
}

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    loadNextName();
});
