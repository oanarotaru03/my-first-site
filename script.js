const button = document.getElementById("motivateBtn");
const message = document.getElementById("message");

const quotes = [
    "You're doing amazing, keep going!",
    "Every expert was once a beginner.",
    "Small steps every day lead to big change.",
    "You debugged real code today. That's a developer's job."
];

function showRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    message.textContent = quotes[randomIndex];
}

button.addEventListener("click", showRandomQuote);