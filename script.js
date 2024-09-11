let hinderArray = ["gul","blå","rød"];
const hinder = document.getElementById("hinder");
console.log(tilfeldigHinder());


function tilfeldigHinder () {
    let random = Math.floor(Math.random() * 3);
    let hinderType = hinderArray[random];

    if (hinderType = ("gul")) {
    hinder.style.backgroundColor = 'yellow'
    }
    if (hinderType = ("rød")) {
    hinder.style.backgroundColor = 'red'
    }
    if (hinderType = ("blå")) {
    hinder.style.backgroundColor = 'blue'
    }
}
