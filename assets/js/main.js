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