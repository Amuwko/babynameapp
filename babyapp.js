import { namesDataset } from './namesDataset.js';

let currentIndex = 0;
let likedNames = [];
let targetVector = [2, 1, 3, 1, 2, 1, 1, 1, 2, 3];  // Initial target vector
let selectedGender = { male: true, female: true };  // Both genders selected by default

const nameField = document.getElementById('currentName');
const previousNameField = document.getElementById('previousName');
const currentVectorField = document.getElementById('currentVector');
const targetVectorField = document.getElementById('targetVector');

// Handle Like button click
document.getElementById('like').addEventListener('click', () => {
    likedNames.push(namesDataset[currentIndex]);
    previousNameField.textContent = `Previous liked: ${namesDataset[currentIndex].name}`;
    updateTargetVector(namesDataset[currentIndex].vector);
    loadNextName();
});

// Handle Dislike button click
document.getElementById('dislike').addEventListener('click', () => {
    loadNextName();
});

// Gender buttons logic
document.getElementById('maleBtn').addEventListener('click', () => {
    selectedGender.male = !selectedGender.male;
    filterNamesByGender();
});

document.getElementById('femaleBtn').addEventListener('click', () => {
    selectedGender.female = !selectedGender.female;
    filterNamesByGender();
});

// Function to load the next name
function loadNextName() {
    currentIndex++;
    if (currentIndex >= namesDataset.length) {
        currentIndex = 0;
    }

    nameField.textContent = namesDataset[currentIndex].name;
    currentVectorField.textContent = `Current: [${namesDataset[currentIndex].vector}]`;
}

// Function to filter names based on selected gender
function filterNamesByGender() {
    const filteredNames = namesDataset.filter((name) => {
        if (selectedGender.male && selectedGender.female) {
            return true;
        }
        if (selectedGender.male && name.vector[5] === 2) {  // Male
            return true;
        }
        if (selectedGender.female && name.vector[5] === 1) {  // Female
            return true;
        }
        return false;
    });

    currentIndex = 0;  // Reset index after filtering
    loadNextName();  // Load the first name from the filtered dataset
}

// Function to update the target vector based on the liked name's vector
function updateTargetVector(likedVector) {
    for (let i = 0; i < targetVector.length; i++) {
        targetVector[i] = Math.round((targetVector[i] + likedVector[i]) / 2);
    }
    targetVectorField.textContent = `Target: [${targetVector}]`;
}

// Initial load
loadNextName();
