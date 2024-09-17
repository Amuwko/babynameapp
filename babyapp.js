let namesDataset = [
    { name: "Mike", vector: [1, 2, 1, 3, 1, 2, 2, 1, 1, 2] },
    { name: "Sophia", vector: [2, 1, 3, 1, 2, 3, 1, 1, 2, 2] },
    { name: "Olivia", vector: [2, 1, 2, 3, 1, 2, 3, 1, 1, 3] },
    { name: "James", vector: [1, 3, 1, 2, 2, 2, 2, 0, 2, 2] },
    { name: "Emma", vector: [2, 1, 2, 3, 3, 2, 1, 1, 3, 3] },
    { name: "Liam", vector: [1, 3, 1, 3, 1, 2, 2, 1, 1, 3] },
    { name: "Ava", vector: [1, 1, 1, 3, 1, 2, 1, 1, 1, 3] },
    { name: "Mason", vector: [2, 2, 2, 2, 2, 2, 2, 1, 2, 2] },
    { name: "Isabella", vector: [3, 1, 2, 1, 1, 1, 2, 1, 1, 3] },
    { name: "Ethan", vector: [1, 3, 2, 3, 1, 2, 2, 1, 1, 3] },
    { name: "Lucas", vector: [2, 2, 1, 3, 2, 2, 2, 1, 2, 2] },
    { name: "Alexander", vector: [3, 2, 3, 1, 2, 1, 2, 0, 2, 1] },
    { name: "Benjamin", vector: [3, 3, 1, 2, 2, 1, 2, 0, 2, 3] },
    { name: "Henry", vector: [2, 3, 2, 1, 2, 2, 2, 0, 2, 1] },
    { name: "Charlotte", vector: [3, 1, 1, 2, 1, 2, 1, 1, 2, 2] },
    { name: "Elijah", vector: [2, 3, 2, 1, 1, 2, 2, 1, 2, 2] },
    { name: "Mia", vector: [1, 1, 1, 3, 1, 2, 1, 1, 1, 3] },
    { name: "Amelia", vector: [2, 1, 3, 3, 2, 2, 1, 1, 2, 3] },
    { name: "Hannah", vector: [2, 1, 2, 2, 1, 2, 1, 0, 1, 2] },
    { name: "Jack", vector: [1, 3, 2, 1, 2, 2, 2, 0, 1, 2] },
    { name: "Noah", vector: [1, 3, 1, 2, 2, 2, 2, 0, 1, 2] },
    { name: "Ella", vector: [1, 1, 1, 3, 1, 1, 1, 1, 1, 2] },
    { name: "Samuel", vector: [2, 2, 2, 1, 2, 2, 2, 0, 2, 2] },
    { name: "William", vector: [2, 2, 2, 1, 2, 2, 2, 0, 2, 3] },
    { name: "Victoria", vector: [3, 1, 1, 3, 1, 2, 1, 1, 2, 2] },
    { name: "Lily", vector: [1, 1, 2, 3, 2, 1, 1, 1, 1, 3] },
    { name: "Scarlett", vector: [2, 1, 3, 2, 1, 2, 1, 1, 2, 3] },
    { name: "Jacob", vector: [2, 3, 1, 2, 2, 2, 2, 0, 2, 1] },
    { name: "Daniel", vector: [2, 3, 2, 1, 2, 2, 2, 0, 2, 2] },
    { name: "Victoria", vector: [3, 1, 1, 3, 1, 2, 1, 1, 2, 2] },
    { name: "Logan", vector: [1, 3, 1, 2, 2, 2, 2, 1, 2, 1] },
    { name: "Aiden", vector: [2, 3, 1, 2, 2, 2, 2, 1, 2, 2] },
    { name: "Grace", vector: [1, 1, 2, 3, 1, 1, 1, 1, 1, 2] },
    { name: "Harper", vector: [2, 1, 1, 2, 1, 2, 1, 1, 1, 2] },
    { name: "Lily", vector: [1, 1, 2, 3, 2, 1, 1, 1, 1, 3] },
    { name: "Gabriel", vector: [2, 3, 1, 1, 2, 2, 2, 0, 2, 1] },
    { name: "Chloe", vector: [1, 1, 2, 3, 1, 1, 1, 1, 1, 2] },
    { name: "Levi", vector: [2, 3, 1, 2, 2, 2, 2, 1, 1, 2] },
    { name: "Hazel", vector: [2, 1, 1, 2, 1, 2, 1, 1, 1, 2] },
    { name: "Sebastian", vector: [3, 3, 1, 1, 2, 1, 2, 0, 3, 3] },
    { name: "Eleanor", vector: [2, 1, 2, 1, 2, 2, 1, 1, 2, 3] },
    { name: "Nathan", vector: [2, 3, 2, 1, 2, 2, 2, 0, 2, 2] },
    { name: "Penelope", vector: [3, 1, 1, 3, 1, 2, 1, 1, 1, 3] },
    { name: "Zoe", vector: [1, 1, 2, 3, 1, 1, 1, 1, 1, 2] },
    { name: "Isaac", vector: [2, 3, 1, 2, 2, 2, 2, 0, 2, 2] },
    { name: "David", vector: [2, 3, 2, 1, 2, 2, 2, 0, 2, 2] },
    { name: "Luna", vector: [1, 1, 1, 3, 1, 2, 1, 1, 1, 2] },
    { name: "Henry", vector: [2, 3, 2, 1, 2, 2, 2, 0, 2, 1] },
    { name: "Emily", vector: [2, 1, 2, 3, 1, 1, 1, 1, 1, 3] },
    { name: "Isaiah", vector: [2, 3, 1, 2, 2, 2, 2, 0, 1, 3] },
    { name: "Stella", vector: [1, 1, 2, 2, 1, 1, 1, 1, 1, 2] },
    { name: "Luke", vector: [1, 3, 1, 1, 2, 2, 2, 0, 2, 1] },
    { name: "Madison", vector: [2, 1, 1, 2, 1, 1, 1, 1, 1, 3] },
    { name: "Wyatt", vector: [2, 3, 1, 1, 2, 2, 2, 0, 2, 1] },
    { name: "Riley", vector: [2, 1, 1, 2, 1, 1, 1, 1, 1, 3] },
    { name: "Ezra", vector: [1, 3, 1, 1, 2, 2, 2, 0, 1, 1] },
    { name: "Aurora", vector: [2, 1, 2, 3, 1, 1, 1, 1, 1, 3] },
    { name: "Jack", vector: [1, 3, 1, 2, 2, 2, 2, 0, 1, 2] },
    { name: "Oliver", vector: [2, 3, 1, 2, 2, 2, 2, 0, 2, 1] },
    { name: "Clara", vector: [1, 1, 2, 3, 1, 2, 1, 1, 1, 2] },
    { name: "Hudson", vector: [2, 3, 1, 2, 2, 2, 2, 1, 2, 1] },
    { name: "Savannah", vector: [2, 1, 2, 3, 1, 1, 1, 1, 2, 3] },
    { name: "Elijah", vector: [2, 3, 1, 2, 2, 2, 2, 0, 2, 2] },
    { name: "Avery", vector: [1, 1, 1, 3, 1, 2, 1, 1, 1, 2] },
    { name: "Victoria", vector: [3, 1, 1, 3, 1, 2, 1, 1, 2, 2] },
    { name: "Maya", vector: [1, 1, 2, 3, 1, 2, 1, 1, 1, 3] },
    { name: "Elias", vector: [2, 3, 2, 1, 2, 2, 2, 0, 2, 3] },
    { name: "Leo", vector: [1, 3, 1, 2, 2, 2, 2, 1, 1, 1] },
    { name: "Nora", vector: [2, 1, 2, 3, 1, 1, 1, 1, 2, 3] },
        // Add remaining 97 names below for testing
];

let currentIndex = 0;
let userPrefVector = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2];  // Initial average preference vector
let seenNames = new Set();

const nameField = document.getElementById('baby-name');
const likeButton = document.getElementById('like');
const dislikeButton = document.getElementById('dislike');
const card = document.getElementById('name-card'); 

// Set the first name
nameField.textContent = namesDataset[currentIndex].name;

// Handle Like button
likeButton.addEventListener('click', () => {
    adjustPreferenceVector(namesDataset[currentIndex].vector, true);
    animateCard('right');
});

// Handle Dislike button
dislikeButton.addEventListener('click', () => {
    adjustPreferenceVector(namesDataset[currentIndex].vector, false);
    animateCard('left');
});

// Swipe logic (drag detection)
card.addEventListener('mousedown', (e) => startSwipe(e.clientX));
card.addEventListener('mouseup', (e) => endSwipe(e.clientX));
card.addEventListener('touchstart', (e) => startSwipe(e.touches[0].clientX));
card.addEventListener('touchend', (e) => endSwipe(e.changedTouches[0].clientX));

function startSwipe(startX) {
    this.startX = startX;
}

function endSwipe(endX) {
    let deltaX = endX - this.startX;
    if (deltaX > 100) {
        adjustPreferenceVector(namesDataset[currentIndex].vector, true);
        animateCard('right');
    } else if (deltaX < -100) {
        adjustPreferenceVector(namesDataset[currentIndex].vector, false);
        animateCard('left');
    }
}

// Adjust user preference vector based on interaction
function adjustPreferenceVector(nameVector, liked) {
    for (let i = 0; i < userPrefVector.length; i++) {
        if (liked) {
            userPrefVector[i] = (userPrefVector[i] + nameVector[i]) / 2;
        } else {
            userPrefVector[i] = (userPrefVector[i] * 0.9);
        }
    }
}

// Find the next name based on user preferences
function getNextName() {
    let minDistance = Infinity;
    let bestMatch = null;

    for (let i = 0; i < namesDataset.length; i++) {
        if (!seenNames.has(namesDataset[i].name)) {
            let distance = euclideanDistance(userPrefVector, namesDataset[i].vector);
            if (distance < minDistance) {
                minDistance = distance;
                bestMatch = namesDataset[i];
            }
        }
    }

    if (bestMatch) {
        seenNames.add(bestMatch.name);
        return bestMatch.name;
    } else {
        return "No more names!";
    }
}

// Calculate Euclidean distance between two vectors
function euclideanDistance(v1, v2) {
    return Math.sqrt(v1.reduce((sum, val, i) => sum + Math.pow(val - v2[i], 2), 0));
}

// Animation logic for swipe
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

// Load the next name
function loadNextName() {
    let nextName = getNextName();
    nameField.textContent = nextName;
    
    if (nextName === "No more names!") {
        likeButton.style.display = 'none';
        dislikeButton.style.display = 'none';
    }
}
