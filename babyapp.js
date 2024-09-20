import { namesDataset } from './namesDataset.js';

let currentIndex = 0;
let likedNames = [];
let targetVector = [2, 1, 3, 1, 2, 1, 1, 1, 2, 3]; // Initial target vector

const nameField = document.getElementById('currentName');
const previousNameField = document.getElementById('previousName');
const currentVectorField = document.getElementById('currentVector');
const targetVectorField = document.getElementById('targetVector');
const card = document.getElementById('name-card');

// Initialize the app
function initialize() {
    updateName(currentIndex);
    setupButtons();
    setupSwipe();
}

// Update the displayed name and vectors
function updateName(index) {
    nameField.textContent = namesDataset[index].name;
    currentVectorField.textContent = `Current: ${namesDataset[index].vector}`;
    targetVectorField.textContent = `Target: ${targetVector}`;

    if (likedNames.length > 0) {
        previousNameField.textContent = `Previous liked: ${likedNames[likedNames.length - 1].name}`;
    }
}

// Handle "Like" action
function like() {
    likedNames.push(namesDataset[currentIndex]);
    updateTargetVector(namesDataset[currentIndex].vector);
    animateCard('right');
}

// Handle "Dislike" action
function dislike() {
    animateCard('left');
}

// Update target vector
function updateTargetVector(likedVector) {
    targetVector = targetVector.map((t, i) => Math.min(3, Math.round((t + likedVector[i]) / 2)));
    targetVectorField.textContent = `Target: ${targetVector}`;
}

// Handle swiping logic
function setupSwipe() {
    let startX = 0;
    let isSwiping = false;

    card.addEventListener('mousedown', (e) => {
        startX = e.clientX;
        isSwiping = true;
    });

    card.addEventListener('mouseup', (e) => {
        if (isSwiping) {
            const endX = e.clientX;
            handleSwipe(endX - startX);
            isSwiping = false;
        }
    });

    card.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        isSwiping = true;
    });

    card.addEventListener('touchend', (e) => {
        if (isSwiping) {
            const endX = e.changedTouches[0].clientX;
            handleSwipe(endX - startX);
            isSwiping = false;
        }
    });
}

// Determine swipe direction and trigger the appropriate action
function handleSwipe(deltaX) {
    if (deltaX > 100) {
        like();  // Swipe right
    } else if (deltaX < -100) {
        dislike();  // Swipe left
    }
}

// Animate card based on swipe direction and load the next name
function animateCard(direction) {
    card.classList.add(direction === 'right' ? 'swipe-right' : 'swipe-left');

    setTimeout(() => {
        card.classList.remove('swipe-right', 'swipe-left');
        loadNextName();
    }, 500);
}

// Load the next name in the dataset
function loadNextName() {
    currentIndex++;
    if (currentIndex < namesDataset.length) {
        updateName(currentIndex);
    } else {
        nameField.textContent = 'End of names!';
        document.getElementById('like').style.display = 'none';
        document.getElementById('dislike').style.display = 'none';
    }
}

// Attach click listeners to buttons
function setupButtons() {
    document.getElementById('like').addEventListener('click', like);
    document.getElementById('dislike').addEventListener('click', dislike);
}

document.addEventListener('DOMContentLoaded', initialize);
