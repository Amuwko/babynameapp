

let currentIndex = 0;
let previousLikedName = "";
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
    { name: "Jaxon", vector: [2, 3, 1, 2, 2, 2, 2, 1, 2, 2] },
    { name: "Ruby", vector: [1, 1, 1, 3, 1, 2, 1, 1, 1, 2] },
    { name: "Michael", vector: [2, 3, 2, 1, 2, 2, 2, 0, 2, 2] },
    { name: "Isabelle", vector: [3, 1, 2, 3, 1, 1, 1, 1, 2, 3] },
    { name: "Caleb", vector: [1, 3, 1, 2, 2, 2, 2, 0, 1, 1] },
    { name: "Naomi", vector: [2, 1, 2, 3, 1, 1, 1, 1, 2, 3] },
    { name: "Isaiah", vector: [2, 3, 1, 1, 2, 2, 2, 0, 2, 2] }
    // Add more names here...
];

function updateDisplay() {
    let name = namesDataset[currentIndex].name;
    let vector = namesDataset[currentIndex].vector;

    document.getElementById('currentName').innerText = name;
    document.getElementById('currentVector').innerText = `Current: [${vector.join(", ")}]`;

    // Sought-for vector (here just an example logic)
    let soughtVector = vector.map((v, idx) => (v + 1) % 4); // Modify the logic as needed
    document.getElementById('soughtVector').innerText = `Sought-for: [${soughtVector.join(", ")}]`;

    // Display previous liked name
    if (previousLikedName) {
        document.getElementById('previousName').innerText = `Previous liked: ${previousLikedName}`;
    }
}

function like() {
    previousLikedName = namesDataset[currentIndex].name;
    currentIndex = (currentIndex + 1) % namesDataset.length;
    updateDisplay();
}

function dislike() {
    currentIndex = (currentIndex + 1) % namesDataset.length;
    updateDisplay();
}

// Initial display update
updateDisplay();
