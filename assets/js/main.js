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

// Display the text and graphic in the story-text div
function showTextBlock(textBlockIndex) {
    const textBlock = textBlocks.find(textBlock => textBlock.id === textBlockIndex)
    // Display text 
    storyText.innerText = textBlock.text
    // Display Graphic
    sceneGraphic.innerHTML = textBlock.graphic
    
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


// Select the option and move to next text block
function selectOption(option) {
    const nextTextId = option.nextText
    
    // restarts game on endings
    // endings are textBlocks with nextText values less than 0
    if (nextTextId <= 0) {
        return startGame()
    }
    
    state = Object.assign(state, option.setState)
    showTextBlock(nextTextId)
}


// Create the text blocks, options and requirements
const textBlocks = [
    {
        id: 1, 
        text: "Kat",
        graphic: '<img src="assets/graphics/kat-eyes.svg" />', 
        options: [
            {
                text: "Begin", 
                nextText: 2
            }
        ]
    },
    {
        id: 2, 
        text: "The dark October night was broken only by the evenly spaced orange glow of street lights.",
        graphic: "#", 
        options: [
            {
                text: "Drive the car", 
                nextText: 3
            }
        ]
    }, 
    {
        id: 3, 
        text: "Lisa dozed in the back of the car, exhausted. Despite the odds, your new miracle slept beside her, occasionally burbling in her own language.  You could hardly believe you were a father, kept glancing back to make sure she was really there. That it wasn’t some sick nightmare.",
        graphic: "#", 
        options: [
            {
                text: "Look at the baby", 
                nextText: 4
            }, 
            {
                text: "Focus on the road", 
                nextText: 5
            }
        ]
    }, 
    {
        id: 4, 
        text: "You tilt the mirror and look at the perfect bundle of joy tucked safely into the back seat. They’d been trying to have a child for two years before Lisa announced she was pregnant.  Not trusting fate this time they’d undergone all the tests available, until they were sure it wasn’t a cruel joke. Nine months later, there she was.  Little Catherine with all her fingers, toes and bright blue eyes. The sound of tyres rolling over leaves snaps you out of your reverie.",
        graphic: "#", 
        options: [
            {
                text: "Turn the wheel and get the car on track", 
                nextText: 5
            }, 
            {
                text: "You don't react quickly enough", 
                nextText: 6
            }
        ]
    }, 
    {
        id: 5, 
        text: "You jerk the wheel hard to steady the car. Catherine starts a high pitched cry that instantly roused Lisa into alert action.  Throwing you a look she sets about calming the baby.",
        graphic: "#", 
        options: [
            {
                text: "Apologise and keep driving", 
                nextText: 8
            }
        ]
    }, 
    {
        id: 6, 
        text: "You don’t react fast enough and the car veres off the road and into the trees. You don’t have time to scream before the car explodes in a ball of fire!",
        graphic: "#", 
        options: [
            {
                text: "Next", 
                nextText: 7
            }
        ]
    }, 
    {
        id: 7, 
        text: "You have reached one ending of the story. Over before it even began.",
        graphic: "#", 
        options: [
            {
                text: "Try Again?", 
                nextText: -1
            }
        ]
    }
]


// Start the game
startGame()