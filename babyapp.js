import { namesDataset } from './namesDataset.js';

let currentIndex = 0;
let likedNames = [];
let targetVector = [2, 1, 3, 1, 2, 1, 1, 1, 2, 3];  // Initial target vector

const nameField = document.getElementById('currentName');
const previousNameField = document.getElementById('previousName');
const likeBtn = document.getElementById('likeBtn');
const dislikeBtn = document.getElementById('dislikeBtn');
const card = document.getElementById('name-card');

// Display the first name
nameField.textContent = namesDataset[currentIndex].name;

// Handle Like button
likeBtn.addEventListener('click', () => {
    updateTargetVector(namesDataset[currentIndex].vector);
    likedNames.push(namesDataset[currentIndex]);
    previousNameField.textContent = `Previous liked: ${namesDataset[currentIndex].name}`;
    animateCard('right');
});

// Handle Dislike button
dislikeBtn.addEventListener('click', () => {
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
        updateTargetVector(namesDataset[currentIndex].vector);
        likedNames.push(namesDataset[currentIndex]);
        previousNameField.textContent = `Previous liked: ${namesDataset[currentIndex].name}`;
        animateCard('right');
    } else if (deltaX < -100) {
        // Swipe left: Dislike
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
        nameField.textContent = namesDataset[currentIndex].name;
    } else {
        nameField.textContent = 'End of names!';
        likeBtn.style.display = 'none';
        dislikeBtn.style.display = 'none';
    }
}

function updateTargetVector(likedVector) {
    for (let i = 0; i < targetVector.length; i++) {
        targetVector[i] = Math.min(3, Math.round((likedVector[i] + targetVector[i]) / 2));
    }
    document.getElementById('targetVector').textContent = `Target: ${JSON.stringify(targetVector)}`;
}
