// Function to generate random letters
function getRandomLetter() {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return alphabet[Math.floor(Math.random() * alphabet.length)];
}

// Function to create animated letters
function createRotatingLetters() {
    const background = document.querySelector('.background-animation');
    const lettersCount = 30; // Number of rotating letters

    for (let i = 0; i < lettersCount; i++) {
        const letter = document.createElement('div');
        letter.classList.add('animated-letter');
        letter.innerText = getRandomLetter();

        // Random position and animation duration
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        const rotateSpeed = Math.random() * 20 + 10; // Between 10s and 30s rotation

        letter.style.left = `${x}px`;
        letter.style.top = `${y}px`;
        letter.style.animationDuration = `${rotateSpeed}s`;

        background.appendChild(letter);
    }
}

// Initialize rotating letters
createRotatingLetters();
