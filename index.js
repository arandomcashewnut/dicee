let randomNumber1 = Math.ceil(Math.random() * 6)
document.querySelector('.img1').setAttribute('src', `images\\dice${randomNumber1}.png`)
setInterval(111)
let randomNumber2 = Math.ceil(Math.random() * 6)
document.querySelector('.img2').setAttribute('src', `images\\dice${randomNumber2}.png`)
if (randomNumber1 > randomNumber2) {
    document.querySelector('h1').innerHTML = "🚩 Player 1 wins"
} else if (randomNumber1 < randomNumber2) {
    document.querySelector('h1').innerHTML = "Player 2 wins 🚩"
} else {
    document.querySelector('h1').innerHTML = "It's a Draw"
}