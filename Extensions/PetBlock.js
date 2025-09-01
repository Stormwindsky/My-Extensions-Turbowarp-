// This extension is a simple joke block for Turbowarp.
// It is inspired by the "Pet Rock".

// Name: PetBlock
// ID: PetBlock
// Description: ''really... usefull... ''
// By: Stormwindsky <https://scratch.mit.edu/users/stormwindsky/>
// License: MIT
// Icon credit for the extension category: Gabbro rock image by NASA/JPL/U.S. Geological Survey, in the Public Domain, available on Wikimedia Commons: https://commons.wikimedia.org/wiki/File:1gabbro.jpg

class PetBlock {
    // This method provides Turbowarp with information about the extension.
    getInfo() {
        return {
            // Unique ID for the extension.
            id: 'PetBlock',
            // Display name for the extension in the Turbowarp menu.
            name: 'PetBlock',
            // Colors for the extension blocks.
            color1: '#8c8c8c',
            color2: '#7d7d7d',
            color3: '#6e6e6e',
            // Icon for the extension in the Turbowarp menu.
            menuIconURI: 'https://upload.wikimedia.org/wikipedia/commons/9/90/1gabbro.jpg',
            // Define the blocks this extension provides.
            blocks: [
                {
                    // The opcode is a unique identifier for this block.
                    // It must match the name of the method below that handles the block's logic.
                    opcode: 'petBlock',
                    // This block returns a value, so its type is a 'reporter'.
                    blockType: 'reporter',
                    // The text that appears on the block.
                    text: '(◕‿◕)'
                }
            ]
        };
    }

    // This method is called when the 'petBlock' block is run.
    // It returns the fixed value.
    petBlock() {
        return 'WAZZZZAAAAAAAAAAAAAAAA!!!!!!!!!!!!!!!!';
    }
}

// Register the extension with Turbowarp.
// This makes the blocks available in the Scratch editor.
Scratch.extensions.register(new PetBlock());