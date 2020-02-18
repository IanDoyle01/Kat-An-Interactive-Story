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
    
    // clear the option buttons
    while (optionElement.firstChild) {
        optionElement.removeChild(optionElement.firstChild)
    }

    // Display a button for each approved option
    textBlock.options.forEach(option => {
        if (showOption(option)) {
          const button = document.createElement('button')
          button.innerText = option.text
          button.classList.add('btn')
          button.addEventListener('click', () => selectOption(option))
          optionElement.appendChild(button)
        }
      })
}


// Show the correct options for the story-text
function showOption(option) {
    return option.requiredState == null || option.requiredState(state)
}



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
    }, 
    {
        id: 2, 
        text: "Lisa dozed in the back of the car, exhausted. Despite the odds, your new miracle slept beside her, occasionally burbling in her own language.  You could hardly believe you were a father, kept glancing back to make sure she was really there. That it wasn’t some sick nightmare.",
        graphic: "#", 
        options: [
            {
                text: "Look at the baby", 
                nextText: 3
            }, 
            {
                text: "Focus on the road", 
                nextText: 4
            }
        ]
    }
]


// Start the game
startGame()