import { namesDataset } from './namesDataset.js';  // Import dataset

let currentIndex = 0;
let previousLikedName = "";
let targetVector = [2, 1, 3, 1, 2, 1, 1, 1, 2, 3];

function updateDisplay() {
    let name = namesDataset[currentIndex].name;
    let vector = namesDataset[currentIndex].vector;

    document.getElementById('currentName').innerText = name;
    document.getElementById('currentVector').innerText = `Current: [${vector.join(", ")}]`;
    document.getElementById('targetVector').innerText = `Target: [${targetVector.join(", ")}]`;

    if (previousLikedName) {
        document.getElementById('previousName').innerText = `Previous liked: ${previousLikedName}`;
    }
}

function like() {
    previousLikedName = namesDataset[currentIndex].name;
    updateTargetVector(namesDataset[currentIndex].vector);
    currentIndex = (currentIndex + 1) % namesDataset.length;
    updateDisplay();
}

function dislike() {
    currentIndex = (currentIndex + 1) % namesDataset.length;
    updateDisplay();
}

function updateTargetVector(currentVector) {
    for (let i = 0; i < targetVector.length; i++) {
        targetVector[i] = Math.min(3, Math.ceil((targetVector[i] + currentVector[i]) / 2));
    }
}

// Initialize swipe logic
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
            like(); // Swipe right to like
        } else if (diffX < -50) {
            dislike(); // Swipe left to dislike
        }
    });
}

// Initialize display and swipe
updateDisplay();
setupSwipe();
