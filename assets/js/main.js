// Set const variables for targets in index.html
const sceneGraphic = document.getElementById('graphic')
const storyText = document.getElementById('story-text')
const optionElement = document.getElementById('option-buttons')

// Create a blank state to store actions
state = {}

// Main function to initaite the game
// Resets state each time it's called
function startGame() {
    state = {}
    showTextBlock(1)
}

// Display the text in the story-text div
function showTextBlock(textBlockIndex) {
    const textBlock = textBlocks.find(textBlock => textBlock.id === textBlockIndex)
    storyText.innerText = textBlock.text
}


// Show the correct options for the story-text




// Create the text blocks, options and requirements
const textBlocks = [
    {
        id: 1, 
        text: "The dark October night was broken only by the evenly spaced orange glow of street lights.",
        graphic: "#", 
        options: [
            {
                text: "Drive the car", 
                nextText: 2
            }
        ]
    }
]


// Start the game
startGame()