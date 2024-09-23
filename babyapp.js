import { namesDataset } from './namesDataset.js';

let currentIndex = 0;
let likedNames = [];
let targetVector = [2, 1, 3, 1, 2, 1, 1, 1, 2, 3];  // Initial target vector
let currentVector = namesDataset[currentIndex].vector;

const nameField = document.getElementById('currentName');
const previousNameField = document.getElementById('previousName');
const currentVectorField = document.getElementById('currentVector');
const targetVectorField = document.getElementById('targetVector');

// Initial setup
updateUI();

// Like button event
document.getElementById('likeBtn').addEventListener('click', () => {
    likedNames.push(namesDataset[currentIndex]);
    updateTargetVector(namesDataset[currentIndex].vector);
    loadNextName();
});

// Dislike button event
document.getElementById('dislikeBtn').addEventListener('click', () => {
    loadNextName();
});

// Function to calculate the Euclidean distance between two vectors
function calculateDistance(vector1, vector2) {
    return Math.sqrt(vector1.reduce((sum, val, idx) => sum + Math.pow(val - vector2[idx], 2), 0));
}

// Function to update the target vector based on liked name's vector
function updateTargetVector(likedVector) {
    targetVector = targetVector.map((val, idx) => Math.round((val + likedVector[idx]) / 2));
    updateUI();
}

// Function to load the next name based on proximity to the target vector
function loadNextName() {
    // Find the closest name to the current target vector
    let closestNameIndex = currentIndex;
    let minDistance = Infinity;
    
    namesDataset.forEach((nameObj, idx) => {
        if (!likedNames.includes(nameObj) && idx !== currentIndex) {
            let distance = calculateDistance(targetVector, nameObj.vector);
            if (distance < minDistance) {
                minDistance = distance;
                closestNameIndex = idx;
            }
        }
    });
    
    // Update the current index and show the new name
    currentIndex = closestNameIndex;
    currentVector = namesDataset[currentIndex].vector;
    updateUI();
}

// Function to update the UI elements
function updateUI() {
    nameField.textContent = namesDataset[currentIndex].name;
    currentVectorField.textContent = `Current: ${currentVector}`;
    targetVectorField.textContent = `Target: ${targetVector}`;
    
    if (likedNames.length > 0) {
        previousNameField.textContent = `Previous liked: ${likedNames[likedNames.length - 1].name}`;
    } else {
        previousNameField.textContent = 'Previous liked: None';
    }
}
