homeScore = document.getElementById("home-score")
guestScore = document.getElementById("guest-score")
let home = 0
let guest = 0
let reset = 0

function homeAdd1() {
    home += 1
    homeScore.textContent = home
}

function homeAdd2() {
    home += 2
    homeScore.textContent = home
}

function homeAdd3() {
    home += 3
    homeScore.textContent = home
}

function awayAdd1() {
    guest += 1
    guestScore.textContent = guest
}

function awayAdd2() {
    guest += 2
    guestScore.textContent = guest
}

function awayAdd3() {
    guest += 3
    guestScore.textContent = guest
}

function resetScore() {
    homeScore.textContent = reset
    guestScore.textContent = reset
    home = 0
    guest = 0
}