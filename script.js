const button = document.getElementById("motivateBtn");
const message = document.getElementById("message");

const quotes = [
    "You're doing amazing, keep going!",
    "Every expert was once a beginner.",
    "Small steps every day lead to big change.",
    "You debugged real code today. That's a developer's job."
];

let lastIndex = -1;

function showRandomQuote() {
    let randomIndex = Math.floor(Math.random() * quotes.length);

    while (randomIndex === lastIndex) {
        randomIndex = Math.floor(Math.random() * quotes.length);
    }

    lastIndex = randomIndex;
    message.textContent = quotes[randomIndex];
}

button.addEventListener("click", showRandomQuote);
const darkModeBtn = document.getElementById("darkModeBtn");

darkModeBtn.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});