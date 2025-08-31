// This extension allows you to generate text using the Pollinations.ai API.
// It sends a user-provided prompt to the API and returns the result.

// Name: Pollinations.ai Text API
// ID: pollinationsTextAPI
// Description: Generate text using the Pollinations.ai API.
// By: Stormwindsky <https://scratch.mit.edu/users/stormwindsky/>
// License: MIT
// Icon credit: Robot icon in the Public Domain, available on Wikimedia Commons: https://commons.wikimedia.org/wiki/File:Robot_icon.svg
// API source code credit: Pollinations.ai API source code is licensed under the MIT License, available on GitHub: https://github.com/pollinations/pollinations

// Define the API endpoint and the headers.
const API_URL = "https://text.pollinations.ai/";

// Main class for the extension.
class PollinationsTextAPI {
    // This method provides Turbowarp with information about the extension.
    getInfo() {
        return {
            // Unique ID for the extension.
            id: 'pollinationsTextAPI',
            // Display name for the extension in the Turbowarp menu.
            name: 'Pollinations.ai Text',
            // Colors for the extension blocks.
            color1: '#a9a1b9',
            color2: '#9a92a5',
            color3: '#8c8491',
            // Icon for the extension in the Turbowarp menu.
            menuIconURI: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Robot_icon.svg',
            // Define the blocks this extension provides.
            blocks: [
                {
                    // The opcode is a unique identifier for this block.
                    // It must match the name of the method below that handles the block's logic.
                    opcode: 'generateText',
                    // This block returns a value, so its type is a 'reporter'.
                    blockType: 'reporter',
                    // The text that appears on the block, with a placeholder for the user's input.
                    text: 'generate text from prompt [PROMPT]',
                    // Icon for the block itself.
                    blockIconURI: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Robot_icon.svg',
                    // Define the arguments for the block's text input.
                    arguments: {
                        PROMPT: {
                            // The type of the input (in this case, text/string).
                            type: 'string',
                            // The default value for the input field.
                            defaultValue: 'a beautiful sunset'
                        }
                    }
                }
            ]
        };
    }

    // This method is called when the 'generateText' block is run.
    // The name of the method must match the 'opcode' defined above.
    // The arguments from the block (PROMPT) are passed in the 'args' object.
    async generateText(args) {
        // Construct the full URL for the API call with the user's prompt.
        const url = `${API_URL}${encodeURIComponent(args.PROMPT)}`;

        try {
            // Make a fetch request to the API.
            const response = await fetch(url);

            // Check if the response was successful.
            if (!response.ok) {
                // If not, return an error message.
                return `Error: ${response.statusText}`;
            }

            // Get the text from the API response.
            const text = await response.text();
            
            // Return the generated text.
            return text;

        } catch (error) {
            // Catch any network or other errors and return an error message.
            return `Error: ${error.message}`;
        }
    }
}

// Register the extension with Turbowarp.
// This makes the blocks available in the Scratch editor.
Scratch.extensions.register(new PollinationsTextAPI());
