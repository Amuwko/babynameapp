//import { namesDataset } from './namesDataset.js';

// Mock list of names for testing
const namesDataset = ['Mike', 'Sophia', 'Liam', 'Emma', 'James', 'Isabella', 'Oliver', 'Ava', 'Elijah', 'Mia'];

let currentIndex = 0;
let previousLikedName = 'None';

// References to DOM elements
const currentNameDiv = document.getElementById('currentName');
const previousNameDiv = document.getElementById('previousName');
const likeBtn = document.getElementById('likeBtn');
const dislikeBtn = document.getElementById('dislikeBtn');

// Function to load the next name
function loadNextName() {
    currentIndex = (currentIndex + 1) % namesDataset.length;
    currentNameDiv.textContent = namesDataset[currentIndex];
}

// Handle Like button click
likeBtn.addEventListener('click', () => {
    previousLikedName = namesDataset[currentIndex];
    previousNameDiv.textContent = 'Previously liked: ' + previousLikedName;
    loadNextName();
});

// Handle Dislike button click
dislikeBtn.addEventListener('click', () => {
    loadNextName();
});

// Initial Setup
currentNameDiv.textContent = namesDataset[currentIndex];

