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
        graphic: '<img src="assets/graphics/RoadandCar.svg" />', 
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
    }, 
    {
        id: 20, 
        text: "Mark hit the switch for the landing light but nothing happened. He made his way slowly up the stairs.  He got to the top and the bulb finally came on. He cursed against the sudden brightness.  Barely caught sight of a black tail slipping into his bedroom.",
        graphic: "#", 
        options: [
            {
                text: "'Here kitty, kitty, kitty,' you call as you move towards the room.", 
                nextText: 21
            }
        ]
    }, 
    {
        id: 21, 
        text: "He reached the doorway to their room and pressed the switch for the light.  The bulb on the landing exploded.  Shards stung his face.  The top floor was plunged into darkness.  Mark swore, flicking the bedroom light switch with no effect.  The cat hissed from somewhere in the darkness.  Startled, Mark stepped back into the light that had climbed the stairs.",
        graphic: "#", 
        options: [
            {
                text: "continue", 
                nextText: 22
            }
        ]
    }, 
    {
        id: 22, 
        text: "'You okay babe?' Lisa called up. \n 'Yeah, yeah, sorry the bulb blew… scared the shit out of me.  Damn cat is hissing up a storm too.' \n 'Awh, need me to come save you from the big bad kitty?' \n 'You’re hilarious, I can manage thanks.' \n 'Go easy on him Kitty,' she called with a giggle before he heard the living room door click shut again. \n He jumped as the bedroom light flickered into life.  The cat’s hiss abruptly silenced.  Mustering his courage and trying to fight the adrenaline coursing through him, Mark strode into the room.  Nothing.",
        graphic: "#", 
        options: [
            {
                text: "'God damn it cat, where the fuck are you now?'", 
                nextText: 23
            }
        ]
    },
    {
        id: 23, 
        text: "He began to search. Looked under the bed.  Lifted the dirty clothes from the floor.  Nothing.  The curtain across the nursery entrance twitched. ",
        graphic: "#", 
        options: [
            {
                text: "'Ah, you better not be in Catherine's crib or so help me God.'", 
                nextText: 24
            }
        ]
    }, 
    {
        id: 24, 
        text: "He rushed to the curtain and yanked it aside.  A hiss, a sharp pain in his hand.  He yanked it back as the cat leapt from the pole and ran from the room with a squeal.  He could hear it tumble as it missed a couple of steps on the stairs.  His hand stung\; there were three long scratches, the middle one slowly oozing a red drop of blood. \n \'Stupid cat.  Hey Li, it\’s run down there watch out.\' \n \'It\'s ok, I have her babe.  She\'s hurt her leg.\'",
        graphic: "#", 
        options: [
            {
                text: "Go down stairs", 
                nextText: 25
            }
        ]
    }, 
    {
        id: 25, 
        text: "Mark came down to the sound of purring and soothing nonsense from Lisa.  Sitting in her lap, one leg held gingerly was a medium sized pitch black cat.  It’s fur was sleek and it’s eyes seemed to glow an eerie yellow.  As he came through the door the cat licked it’s paw slowly, strange eyes fixed on his.",
        graphic: "#", 
        options: [
            {
                text: "continue", 
                nextText: 26
            }
        ]
    }, 
    {
        id: 26, 
        text: "Catherine started awake again, crying with all the might of a baby’s lungs.  Before either of them could move the cat leapt down and sat by her, purring.  Her cries stopped instantly, turning to an excited gurgle instead.  The cat sat staring at her, purring contentedly.  Lisa looked to Mark, looked at him with those big brown eyes.  Lip pouting.\n 'Awh babe, look at that, she loves her.  We have to keep her.'\n 'No way, that thing gives me the creeps and it’s leaving right now.'\n",
        graphic: "#", 
        options: [
            {
                text: "Reache down to grab the cat", 
                nextText: 27
            }
        ]
    }, 
    {
        id: 27, 
        text: "With a screech she leapt into Lisa’s lap, Catherine resuming her cries as soon as it left her side.  Lisa knelt with the cat beside the baby, trying to calm her again.  The cat poked it’s head around her back and bared her teeth at him in a silent hiss.",
        graphic: "#", 
        options: [
            {
                text: "'Baby that thing has to go.'", 
                nextText: 28
            }
        ]
    }, 
    {
        id: 28, 
        text: "'No, I\’m keeping her.  She\’s keeping Catherine quiet and you know I\’ve always wanted a cat.  She\’ll grow on you as soon as she forgives you for hitting her with the car.'",
        graphic: "#", 
        options: [
            {
                text: "Recognising the look on her face Mark knew it was pointless to argue.  It was that \‘this is happening and we both know it is\’ look.", 
                nextText: 29
            }
        ]
    }, 
    {
        id: 29, 
        text: "'Fine, but it’s getting locked in the kitchen tonight.'\n 'Fine. Go clean up your hand babe, and change the bulb on the landing would you?'\n Not waiting for an answer she turned back and started petting the cat with one hand and playing with Catherine\'s tiny hands with the other.  The cat licked it\’s paw again before turning it\’s eyes from his dismissively.",
        graphic: "#", 
        options: [
            {
                text: "Lock the cat in the kitchen", 
                nextText: 30
            }
        ]
    }, 
    {
        id: 30, 
        text: "'Now stay here you little shit, tomorrow you\’re out,' Mark said with great satisfaction as he closed the kitchen door on the hissing cat.  He got to their room just as Lisa had put Catherine down in the crib.  He put his arm around Lisa as they both stood watching her sleep for several long minutes. \n'Can you believe we made something so perfect?' she whispered.\n 'She\’s just like her mother.'  They quickly fell asleep, the long day having caught up to them both.",
        graphic: "#", 
        options: [
            {
                text: "Go to sleep", 
                nextText: 31
            }
        ]
    }, 
    {
        id: 31, 
        text: "",
        graphic: "#", 
        options: [
            {
                text: "continue", 
                nextText: 32
            }
        ]
    }, 
    {
        id: 32, 
        text: "",
        graphic: "#", 
        options: [
            {
                text: "continue", 
                nextText: 33
            }
        ]
    }, 
    {
        id: 33, 
        text: "",
        graphic: "#", 
        options: [
            {
                text: "continue", 
                nextText: 34
            }
        ]
    }, 
    {
        id: 34, 
        text: "",
        graphic: "#", 
        options: [
            {
                text: "continue", 
                nextText: 35
            }
        ]
    }, 
    {
        id: 35, 
        text: "",
        graphic: "#", 
        options: [
            {
                text: "continue", 
                nextText: 36
            }
        ]
    }, 
    {
        id: 36, 
        text: "",
        graphic: "#", 
        options: [
            {
                text: "continue", 
                nextText: 37
            }
        ]
    }, 
    {
        id: 37, 
        text: "",
        graphic: "#", 
        options: [
            {
                text: "continue", 
                nextText: 38
            }
        ]
    }, 
    {
        id: 38, 
        text: "",
        graphic: "#", 
        options: [
            {
                text: "continue", 
                nextText: 39
            }
        ]
    }  
]


// Start the game
startGame()