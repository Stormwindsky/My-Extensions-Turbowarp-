// This extension fetches random quotes from the Breaking Bad Quotes API.
// It sends a user-provided prompt to the API and returns the result.

// Name: Breaking Bad Quotes API
// ID: breakingBadQuotes
// Description: Fetches random quotes from the Breaking Bad Quotes API.
// By: Stormwindsky <https://scratch.mit.edu/users/stormwindsky/>
// License: MIT
// API source code: The original API code is licensed under the MIT License and created by shevabam. Available on GitHub: https://github.com/shevabam/breaking-bad-quotes
// Icon credit: Breaking Bad Quotes logo from https://breakingbadquotes.xyz/img/logo.png

// Define the API endpoint.
const API_URL = "https://api.breakingbadquotes.xyz/v1/quotes";

// Main class for the extension.
class BreakingBadQuotes {
    // This method provides Turbowarp with information about the extension.
    getInfo() {
        return {
            // Unique ID for the extension.
            id: 'breakingBadQuotes',
            // Display name for the extension in the Turbowarp menu.
            name: 'Breaking Bad Quotes',
            // Colors for the extension blocks.
            color1: '#006400', // A dark green color
            color2: '#004d00',
            color3: '#003300',
            // Icon for the extension in the Turbowarp menu.
            menuIconURI: 'https://breakingbadquotes.xyz/img/logo.png',
            // Define the blocks this extension provides.
            blocks: [
                {
                    // The opcode is a unique identifier for this block.
                    opcode: 'getRandomQuote',
                    // This block returns a value, so its type is a 'reporter'.
                    blockType: 'reporter',
                    // The text that appears on the block.
                    text: 'get a random quote',
                    // Icon for the block itself.
                    blockIconURI: 'https://breakingbadquotes.xyz/img/logo.png',
                },
                {
                    // Opcode for getting the character's name.
                    opcode: 'getCharacter',
                    // This block is also a 'reporter'.
                    blockType: 'reporter',
                    // The text on the block.
                    text: 'get character for last quote',
                    // Icon for the block itself.
                    blockIconURI: 'https://breakingbadquotes.xyz/img/logo.png',
                }
            ]
        };
    }

    // Variable to store the last fetched quote.
    lastQuote = { quote: '', author: '' };

    // This method is called when the 'getRandomQuote' block is run.
    async getRandomQuote() {
        try {
            // Make a fetch request to the API.
            const response = await fetch(API_URL);

            // Check if the response was successful.
            if (!response.ok) {
                return `Error: ${response.statusText}`;
            }

            // Parse the JSON response.
            const data = await response.json();
            
            // Store the fetched quote and author.
            this.lastQuote = {
                quote: data[0].quote,
                author: data[0].author
            };

            // Return the quote.
            return this.lastQuote.quote;

        } catch (error) {
            // Catch any network or other errors and return an error message.
            return `Error: ${error.message}`;
        }
    }

    // This method returns the character for the last fetched quote.
    getCharacter() {
        return this.lastQuote.author || 'No quote fetched yet';
    }
}

// Register the extension with Turbowarp.
Scratch.extensions.register(new BreakingBadQuotes());
