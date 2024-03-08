let innovation = 0

function pitta() {
    innovation = innovation + 1
    document.getElementById("Write").innerHTML = innovation
}

function unpitta() {
    innovation = innovation - 1
    document.getElementById("Write").innerHTML = innovation
}

function Pitta() {
    let Pittab = Math.floor(Math.random() * 15)
    if (Pittab > 10) {
        document.getElementById("Write2").innerHTML = "Pittab is about to blow"
    } else {
        document.getElementById("Write2").innerHTML = "Don't worry"
    }
}
