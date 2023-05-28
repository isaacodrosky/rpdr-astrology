import { Queen } from './Queen.js'
import { queenData } from './data.js'

const queensArray = ["monet", "katya", "raja", "bob", "trixie", 
    "jinkx", "adore", "kandy", "jaida", "rajah", "shea", "alaska"]

// init empty array, this will hold queens that are saved to user's big three with [0] = sun sign, [1] = moon, [2] = asc
let bigThree = []
let currQueenData
render()

function getNewQueen() {
    let i = Math.floor(Math.random() * queensArray.length)
    currQueenData = queenData[queensArray[i]]
    return new Queen(currQueenData)
}

function getControlsHtml() {
    const controlsHtml = `
        <p class="current-placement blue-bg" id="current-placement"> 
        </p>
        <div class="button-container">
            <button id="reject-btn" class="blue-bg reject-btn">
            <i class="fa-solid fa-xmark"></i>
            </button>
            <button id="accept-btn" class="blue-bg accept-btn">
            <i class="fa-solid fa-check"></i>
            </button>
        </div>
    `
    return controlsHtml
}

function getPlacementHtml() {
    let currPlacementHtml = !bigThree.length ? 
        `<i class="fa-solid fa-sun"></i> Sun Sign` 
        : bigThree.length === 1 ?
        `<i class="fa-solid fa-moon"></i> Moon Sign`
        : `<i class="fa-solid fa-arrow-up"></i> Ascendant`
    return currPlacementHtml
}

function render() {
    document.getElementById('queen-card').innerHTML = getNewQueen().getQueenHtml()
    document.getElementById('current-placement-container').innerHTML = getControlsHtml()
    document.getElementById('current-placement').innerHTML = getPlacementHtml()
}

document.getElementById('reject-btn').addEventListener('click', () => document.getElementById('queen-card').innerHTML = getNewQueen().getQueenHtml())

document.getElementById('accept-btn').addEventListener('click', () => handleAcceptClick())

function handleAcceptClick() {
    bigThree.push(currQueenData)
    document.getElementById('queen-card').innerHTML = getNewQueen().getQueenHtml()
}

//   repeat process until 3 queens in arr
//   when all 3 placements done, display "your big three" component
//      (but 1st) set display: none on queen-card and 
//      current-placement-container


// OPEN + CLOSE ABOUT MODAL
document.getElementById('about-btn').addEventListener('click', () => {
    document.getElementById('about-modal').style.display = 'block'
})

document.getElementById('about-close').addEventListener('click', () => {
    document.getElementById('about-modal').style.display = 'none'
})