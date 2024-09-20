// babyapp.js

import { namesDataset } from './namesDataset.js';

let currentIndex = 0;
let likedNames = [];
let targetVector = [2, 1, 3, 1, 2, 1, 1, 1, 2, 3];  // Initial target vector

// Show current and previously liked name
function showName(nameIndex) {
    const currentNameDiv = document.getElementById('currentName');
    const previousNameDiv = document.getElementById('previousName');
    
    // Update current name
    currentNameDiv.textContent = namesDataset[nameIndex].name;

    // Update previous liked name
    if (likedNames.length > 0) {
        previousNameDiv.textContent = `Previous liked: ${likedNames[likedNames.length - 1].name}`;
    } else {
        previousNameDiv.textContent = 'Previous liked: None';
    }

    // Update current vector and target vector display
    document.getElementById('currentVector').textContent = `Current: ${namesDataset[nameIndex].vector}`;
    document.getElementById('targetVector').textContent = `Target: ${targetVector}`;
}

// Update target vector based on the liked name
function updateTargetVector(likedVector) {
    targetVector = targetVector.map((t, i) => Math.min(3, Math.round((t + likedVector[i]) / 2)));
    document.getElementById('targetVector').textContent = `Target: ${targetVector}`;
}

// Find the next closest name to the target vector
function findNextName() {
    let closestIndex = -1;
    let closestDistance = Infinity;

    namesDataset.forEach((item, index) => {
        if (!likedNames.includes(item) && index !== currentIndex) {  // Avoid repeats
            const distance = calculateVectorDistance(item.vector, targetVector);
            if (distance < closestDistance) {
                closestDistance = distance;
                closestIndex = index;
            }
        }
    });

    return closestIndex;
}

// Calculate Euclidean distance between two vectors
function calculateVectorDistance(vec1, vec2) {
    return Math.sqrt(vec1.reduce((sum, v, i) => sum + Math.pow(v - vec2[i], 2), 0));
}

// Like functionality
function like() {
    likedNames.push(namesDataset[currentIndex]);
    updateTargetVector(namesDataset[currentIndex].vector);
    showNextName();
}

// Dislike functionality
function dislike() {
    showNextName();
}

// Show the next name
function showNextName() {
    const nextNameIndex = findNextName();
    if (nextNameIndex !== -1) {
        currentIndex = nextNameIndex;
        showName(nextNameIndex);
        nameFallingAnimation();
    } else {
        alert("No more names to display!");
    }
}

// Set up swipe gestures and falling animation
function setupSwipe() {
    const currentNameDiv = document.getElementById('currentName');
    
    let startX;

    currentNameDiv.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
    });

    currentNameDiv.addEventListener('touchmove', (e) => {
        const moveX = e.touches[0].clientX;
        const diffX = moveX - startX;

        if (diffX > 50) {
            like();  // Swipe right to like
        } else if (diffX < -50) {
            dislike();  // Swipe left to dislike
        }
    });
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
    document.querySelector('.like-button').addEventListener('click', like);
    document.querySelector('.dislike-button').addEventListener('click', dislike);
}

document.addEventListener('DOMContentLoaded', initialize);
