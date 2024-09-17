let names = ["Mike", "John", "Olivia", "Sophia", "James", "Emma", "Liam", "Ava", "Mason", "Isabella"];
let currentIndex = 0;
let likedNames = [];
let dislikedNames = [];

const nameField = document.getElementById('baby-name');
const likeButton = document.getElementById('like');
const dislikeButton = document.getElementById('dislike');
const card = document.getElementById('name-card');  // Add a card element to animate

// Set the first name
nameField.textContent = names[currentIndex];

// Handle Like button
likeButton.addEventListener('click', () => {
    likedNames.push(names[currentIndex]);
    animateCard('right');
});

// Handle Dislike button
dislikeButton.addEventListener('click', () => {
    dislikedNames.push(names[currentIndex]);
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
        likedNames.push(names[currentIndex]);
        animateCard('right');
    } else if (deltaX < -100) {
        // Swipe left: Dislike
        dislikedNames.push(names[currentIndex]);
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
    if (currentIndex < names.length) {
        nameField.textContent = names[currentIndex];
    } else {
        nameField.textContent = 'End of names!';
        likeButton.style.display = 'none';
        dislikeButton.style.display = 'none';
    }
}
