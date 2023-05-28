import { Queen } from './Queen.js'
import { queenData } from './data.js'

const sunSign = `<i class="fa-solid fa-sun"></i> Sun Sign`
const moonSign = `<i class="fa-solid fa-moon"></i> Moon Sign`
const ascendant = `<i class="fa-solid fa-arrow-up"></i> Ascendant`

const queensArray = ["monet", "katya", "raja", "bob", "trixie", 
    "jinkx", "adore", "kandy", "jaida", "rajah", "shea", "alaska"]

function getNewQueen() {
    let i = Math.floor(Math.random() * queensArray.length)
    const newQueenData = queenData[queensArray[i]]
    return new Queen(newQueenData)
}

document.getElementById('queen-card').innerHTML = getNewQueen().getQueenHtml()

document.getElementById('about-btn').addEventListener('click', () => {
    document.getElementById('about-modal').style.display = 'block'
})

document.getElementById('about-close').addEventListener('click', () => {
    document.getElementById('about-modal').style.display = 'none'
})