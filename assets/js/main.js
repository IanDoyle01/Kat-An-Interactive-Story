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
    },
    {
        id: 8, 
        text: "Both of his girls had fallen back to sleep within minutes.  Turning into their estate Mark allowed himself a yawn.  They drove past their neighbours houses, each lit brightly from within. Their warmth leeching out into the cold dark evening.  Theirs was the only house in darkness and as he turned into the driveway he dreaded the fact that it would be cold for Catherine.",
        graphic: "#", 
        options: [
            {
                text: "Continue", 
                nextText: 9
            }
        ]
    },
    {
        id: 9, 
        text: "As the light from the headlamps crept up the driveway they reflected back from two piercing yellow eyes.  He jammed on the breaks.  A thud came from the front of the car, followed by a cats high pitched scream.  A scream even louder than that coming from Catherine in the back of the car.  More daggers from Lisa.",
        graphic: "#", 
        options: [
            {
                text: "Shit, I think I hit a cat Li.", 
                nextText: 10
            }
        ]
    },
    {
        id: 10, 
        text: "Shh honey, its okay,” she cooed as she lifted Catherine from the car seat.",
        graphic: "#", 
        options: [
            {
                text: "Stay here, I’ll go check.", 
                nextText: 11
            }
        ]
    }, 
    {
        id: 11, 
        text: "Okay, will you run in and throw on the heating too babe?",
        graphic: "#", 
        options: [
            {
                text: "Sure, be right back.", 
                nextText: 12
            }
        ]
    }, 
    {
        id: 12, 
        text: "Mark shivered as he got out of the car, his breath misting in the cold damp air.  The garden was dark, lit only by the cars headlights.  Moving to the front of the car he knelt, there was nothing there. He pulled out his phone and flipped on the torch",
        graphic: "#", 
        options: [
            {
                text: "Look under the car.", 
                nextText: 14
            }, 
            {
                text: "Look behind the car.", 
                nextText: 14
            }, 
            {
                text: "Check the bushes.", 
                nextText: 13
            }
        ]
    }, 
    {
        id: 13, 
        text: "You use the torch to quickly scan the rest of the garden.  Yellow eyes shine from the hedge.",
        graphic: "#", 
        options: [
            {
                text: "Lure the cat out", 
                nextText: 15
            }
        ]
    },  
    {
        id: 14, 
        text: "Nothing here.",
        graphic: "#", 
        options: [
            {
                text: "Try somewhere else.", 
                nextText: 12
            }
        ]
    },  
    {
        id: 15, 
        text: "Here kitty, kitty, kitty.” he called softly, reaching towards the hedge.  “Let me see if you’re okay, come here.",
        graphic: "#", 
        options: [
            {
                text: "Continue", 
                nextText: 16
            }
        ]
    },  
    {
        id: 16, 
        text: "Here kitty, kitty, kitty.” he called softly, reaching towards the hedge.  “Let me see if you’re okay, come here.",
        graphic: "#", 
        options: [
            {
                text: "Reach for the cat", 
                nextText: 17
            }, 
            {
                text: "Leave it alone",
                nextText: 18
            }
        ]
    }, 
    {
        id: 17, 
        text: "The eyes stared un-moving.  You edge closer, still pleading softly with the injured cat.  The eyes move back with an angry hiss.  Claws swipe warningly.",
        graphic: "#", 
        options: [
            {
                text: "Continue", 
                nextText: 18
            }
        ]
    }, 
    {
        id: 18, 
        text: "'Babe, the cat’s alive.  Leave it be and grab the stuff from the boot.  We can come back out for it.' Lisa said as she carried Catherine into the house. You followed through the front door and are startled by a black blur streaking past you and up the stairs.",
        graphic: "#", 
        options: [
            {
                text: "Continue", 
                nextText: 19
            }
        ]
    }, 
    {
        id: 19, 
        text: "'What the fu-?' \n'Was that the cat?' Lisa asked as she bundled Catherine into the living room. \n'Go find it babe.' \n'Man that was fast, can’t have hurt it too bad I suppose. Close the living room door Li, it went upstairs. I’ll grab it and toss it out.' \n'Only if it’s not hurt, we can’t toss a poor injured kitty out into the cold.' \n'We are not keeping it Lisa.  We have more than enough to look after now.' \n'Just get the cat babe,' she said leaning up to kiss him on the cheek before slipping back into the living room.",
        graphic: "#", 
        options: [
            {
                text: "Look for the cat", 
                nextText: 20
            }
        ]
    }
]


// Start the game
startGame()