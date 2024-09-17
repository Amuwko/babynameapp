// Sample name data with vectors
const names = [
  { name: "Mike", vector: [1, 3, 1] },
  { name: "Cornelius", vector: [3, 1, 2] },
  { name: "Anna", vector: [1, 1, 2] },
  { name: "Zephyr", vector: [2, 2, 3] }
];

let currentIndex = 0;
let likedNames = [];
let dislikedNames = [];

function showName() {
  document.getElementById('nameCard').innerText = names[currentIndex].name;
}

document.getElementById('likeButton').addEventListener('click', () => {
  likedNames.push(names[currentIndex]);
  currentIndex++;
  if (currentIndex < names.length) showName();
  else endSession();
});

document.getElementById('dislikeButton').addEventListener('click', () => {
  dislikedNames.push(names[currentIndex]);
  currentIndex++;
  if (currentIndex < names.length) showName();
  else endSession();
});

function endSession() {
  document.getElementById('nameCard').innerText = "End of names!";
  document.getElementById('buttons').style.display = 'none';
}
  
showName();
