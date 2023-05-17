// Select the element with the class "quote" and assign it to the variable quoteText
const quoteText = document.querySelector(".quote");
// Select the button element and assign it to the variable quoteBtn
const quoteBtn = document.querySelector("button");
// Select the element with the class "name" and assign it to the variable authorName
const authorName = document.querySelector(".name");
// Select the element with the class "speech" and assign it to the variable speechBtn
const speechBtn = document.querySelector(".speech");
// Select the element with the class "copy" and assign it to the variable copyBtn
const copyBtn = document.querySelector(".copy");
// Select the element with the class "twitter" and assign it to the variable twitterBtn
const twitterBtn = document.querySelector(".twitter");
// Assign the SpeechSynthesis interface to the variable synth
const synth = speechSynthesis;
// Define a function named randomQuote
function randomQuote() {
    // Add the class "loading" to the quoteBtn element
    quoteBtn.classList.add("loading");
    // Set the text content of quoteBtn to "Loading Quote..."
    quoteBtn.innerText = "Loading Quote...";
    // Fetch a random quote from the "http://api.quotable.io/random" API
    fetch("http://api.quotable.io/random")
        .then(response => response.json()) // Convert the response to JSON
        .then(result => {
            // Set the text content of quoteText to the quote content received from the API
            quoteText.innerText = result.content;
            // Set the text content of authorName to the quote author received from the API
            authorName.innerText = result.author;
            // Remove the class "loading" from the quoteBtn element
            quoteBtn.classList.remove("loading");
            // Set the text content of quoteBtn to "New Quote"
            quoteBtn.innerText = "New Quote";
        });
}

// Add an event listener to the speechBtn element for the "click" event
speechBtn.addEventListener("click", function() {
    // Check if quoteBtn does not have the class "loading"
    if (!quoteBtn.classList.contains("loading")) {
        // Create a new SpeechSynthesisUtterance with the quote and author text
        let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}`);

        // Use the synth SpeechSynthesis interface to speak the utterance
        synth.speak(utterance);
        // Set an interval to check if the speech synthesis is speaking
        setInterval(function() {
            // If synth is not speaking, remove the "active" class from speechBtn, else add the "active" class
            !synth.speaking ? speechBtn.classList.remove("active") : speechBtn.classList.add("active");
        }, 10);
    }
});
// Add an event listener to the copyBtn element for the "click" event
copyBtn.addEventListener("click", function() {
    // Use the Clipboard API to write the text content of quoteText to the clipboard
    navigator.clipboard.writeText(quoteText.innerText);
});
// Add an event listener to the twitterBtn element for the "click" event
twitterBtn.addEventListener("click", function() {
    // Create the tweet URL with the quote text
    let tweetUrl = `https://twitter.com/intent/tweet?url=${quoteText.innerText}`;
    // Open the tweet URL in a new browser tab or window
    window.open(tweetUrl, "_blank");
});
// Add an event listener to the quoteBtn element for the "click" event, calling the randomQuote function
quoteBtn.addEventListener("click", randomQuote);


