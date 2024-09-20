// babyapp.js

import { namesDataset } from './namesDataset.js';

let currentIndex = 0;
let likedNames = [];
let targetVector = [2, 1, 3, 1, 2, 1, 1, 1, 2, 3];  // Initial target vector

const nameField = document.getElementById('currentName');
const like-Btn = document.getElementById('like');
const dislike-Btn = document.getElementById('dislike');
const card = document.getElementById('name-card'); 

// Set the first name
nameField.textContent = namesDataset[currentIndex];

// Handle Like button
like-Btn.addEventListener('click', () => {
    likedNames.push(namesDataset[currentIndex]);
    updateTargetVector(namesDataset[currentIndex].vector);
    animateCard('right');
});

// Handle Dislike button
dislike-Btn.addEventListener('click', () => {
    dislikedNames.push(namesDataset[currentIndex]);
    animateCard('left');
});

// Swipe event handling
let startX = 0;
card.addEventListener('mousedown', (e) => {
    startX = e.clientX;
});
card.addEventListener('mouseup', (e) => {
    let endX = e.clientX;
    handleSwipe(endX - startX);
});
card.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
});
card.addEventListener('touchend', (e) => {
    let endX = e.changedTouches[0].clientX;
    handleSwipe(endX - startX);
});

function handleSwipe(deltaX) {
    if (deltaX > 100) {
        // Swipe right: Like
        likedNames.push(namesDataset[currentIndex]);
        updateTargetVector(namesDataset[currentIndex].vector);
        animateCard('right');
    } else if (deltaX < -100) {
        // Swipe left: Dislike
        dislikedNames.push(namesDataset[currentIndex]);
        animateCard('left');
    }
}

function animateCard(direction) {
    if (direction === 'right') {
        card.classList.add('swipe-right');
    } else {
        card.classList.add('swipe-left');
    }

    // Wait for the animation to complete
    setTimeout(() => {
        card.classList.remove('swipe-right', 'swipe-left');
        loadNextName();
    }, 500);
}

function loadNextName() {
    currentIndex++;
    if (currentIndex < namesDataset.length) {
        nameField.textContent = namesDataset[currentIndex];
    } else {
        nameField.textContent = 'End of names!';
        like-Btn.style.display = 'none';
        dislike-Btn.style.display = 'none';
    }
}



// Falling animation for name appearance
function nameFallingAnimation() {
    const currentNameDiv = document.getElementById('currentName');
    currentNameDiv.classList.add('falling');
    setTimeout(() => currentNameDiv.classList.remove('falling'), 500);
}

// Initialize the app
function initialize() {
    showName(currentIndex);
    setupSwipe();

    // Attach click event listeners to buttons
    document.querySelector('.like-btn').addEventListener('click', like);
    document.querySelector('.dislike-btn').addEventListener('click', dislike);
}

document.addEventListener('DOMContentLoaded', initialize);

