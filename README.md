# Random Quote Generator Project

This project is a web application that generates random quotes using JavaScript. It is inspired by the coding examples and tutorials from Coding Nepal.

## Project Overview

The Random Quote Generator project aims to provide users with an inspirational quote each time they click the "New Quote" button. The application fetches a random quote from the "quotable.io" API and displays it on the web page. Users can also perform additional actions such as listening to the quote being read aloud, copying the quote to the clipboard, or sharing it on Twitter.

## Features

The project includes the following features:

- Random Quote Generation: When the "New Quote" button is clicked, the application fetches a random quote from the "quotable.io" API and displays it on the webpage.

- Speech Synthesis: By clicking the "Speech" button, users can listen to the quote being read aloud using the SpeechSynthesis API.

- Copy to Clipboard: Clicking the "Copy" button allows users to copy the quote to their clipboard using the Clipboard API.

- Share on Twitter: The "Twitter" button enables users to share the quote on Twitter by opening a new browser tab with a pre-filled tweet using the quote.

## Code Explanation

The JavaScript code provided in this project performs the following functionalities:

- Event Listeners: Event listeners are added to various buttons such as the "Speech," "Copy," "Twitter," and "New Quote" buttons to trigger specific actions when clicked.

- Random Quote Generation: The `randomQuote()` function fetches a random quote from the "quotable.io" API and updates the quote text and author name on the webpage.

- Speech Synthesis: The `speechBtn` click event triggers the creation of a SpeechSynthesisUtterance object with the quote and author text. It uses the SpeechSynthesis API to speak the quote aloud. An interval is set to check if the speech synthesis is speaking, and the "active" class is added or removed from the speechBtn accordingly.

- Copy to Clipboard: The `copyBtn` click event uses the Clipboard API to write the quote text to the user's clipboard.

- Share on Twitter: The `twitterBtn` click event creates a tweet URL with the quote text and opens it in a new browser tab using the `window.open()` method.

## Usage

To use the Random Quote Generator project, follow these steps:

1. Clone the project repository to your local machine.
2. Open the project directory in your preferred code editor.
3. Run the index.html file in a web browser.
4. Click the "New Quote" button to generate a random quote.
5. Explore the additional features such as speech synthesis, copying the quote, or sharing it on Twitter.

Feel free to customize the project according to your needs and enhance it with additional features or design improvements.

## Credits

This project is inspired by Coding Nepal and utilizes the "quotable.io" API for generating random quotes. Special thanks to the contributors and maintainers of these resources.

## License

The Random Quote Generator project is licensed under the [MIT License](https://opensource.org/licenses/MIT). Feel free to modify and distribute the code as per the license terms.
