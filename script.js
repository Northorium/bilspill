let hinderArray = ["gul","blå","rød"];
console.log(tilfeldigHinder());


function tilfeldigHinder () {
    let random = Math.floor(Math.random() * 3);
    let hinderType = hinderArray[random];

    if (hinderType = ("gul")) {
    document.getElementById("hinder").style.backgroundColor = 'yellow'
    }
    if (hinderType = ("rød")) {
    document.getElementById("hinder").style.backgroundColor = 'red'
    }
    if (hinderType = ("blå")) {
    document.getElementById("hinder").style.backgroundColor = 'blue'
    }
}
