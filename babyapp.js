import { namesDataset } from './namesDataset.js';

let currentIndex = 0;
let likedNames = [];
let targetVector = [2, 1, 3, 1, 2, 1, 1, 1, 2, 3]; // Initial target vector

const nameField = document.getElementById('currentName');
const previousNameField = document.getElementById('previousName');
const currentVectorField = document.getElementById('currentVector');
const targetVectorField = document.getElementById('targetVector');
const card = document.getElementById('name-card');

// Set the first name and vectors
function initialize() {
    updateName(currentIndex);
    setupButtons();
    setupSwipe();
}

// Update the displayed name, previous liked name, and vectors
function updateName(index) {
    nameField.textContent = namesDataset[index].name;
    currentVectorField.textContent = `Current: ${namesDataset[index].vector}`;
    targetVectorField.textContent = `Target: ${targetVector}`;

    if (likedNames.length > 0) {
        previousNameField.textContent = `Previous liked: ${likedNames[likedNames.length - 1].name}`;
    }
}

// Handle like button and swipe right
function like() {
    likedNames.push(namesDataset[currentIndex]);
    updateTargetVector(namesDataset[currentIndex].vector);
    animateCard('right');
}

// Handle dislike button and swipe left
function dislike() {
    animateCard('left');
}

// Update target vector
function updateTargetVector(likedVector) {
    targetVector = targetVector.map((t, i) => Math.min(3, Math.round((t + likedVector[i]) / 2)));
    targetVectorField.textContent = `Target: ${targetVector}`;
}

// Swipe handling
function setupSwipe() {
    let startX = 0;

    card.addEventListener('mousedown', (e) => startX = e.clientX);
    card.addEventListener('mouseup', (e) => handleSwipe(e.clientX - startX));
    card.addEventListener('touchstart', (e) => startX = e.touches[0].clientX);
    card.addEventListener('touchend', (e) => handleSwipe(e.changedTouches[0].clientX - startX));
}

function handleSwipe(deltaX) {
    if (deltaX > 100) like();
    else if (deltaX < -100) dislike();
}

// Animate card movement
function animateCard(direction) {
    card.classList.add(direction === 'right' ? 'swipe-right' : 'swipe-left');
    setTimeout(() => {
        card.classList.remove('swipe-right', 'swipe-left');
        loadNextName();
    }, 500);
}

// Load the next name
function loadNextName() {
    currentIndex++;
    if (currentIndex < namesDataset.length) {
        updateName(currentIndex);
    } else {
        nameField.textContent = 'End of names!';
    }
}

// Attach button listeners
function setupButtons() {
    document.getElementById('like').addEventListener('click', like);
    document.getElementById('dislike').addEventListener('click', dislike);
}

document.addEventListener('DOMContentLoaded', initialize);
