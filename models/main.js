import Animal from "./animal.js";
import Environments from "./environment.js";
import temperment from "./temperment.js";

let alligator = new Animal('Alligator', 4, true, Environments.swamp, temperment.angry)
let baboon = new Animal('Baboon', 2, true, Environments.jungle, temperment.angry)
let cougar = new Animal('Cougar', 4, false, Environments.woodland, temperment.angry)
let dingo = new Animal('Dingo', 4, false, Environments.woodland, temperment.angry)
let elephant = new Animal('Elephant', 4, true, Environments.desert, temperment.happy)
let falcon = new Animal('Falcon', 2, true, Environments.woodland, temperment.happy)
let gecko = new Animal('Gecko', 4, true, Environments.woodland, temperment.happy)
let hyena = new Animal('Hyena', 4, true, Environments.desert, temperment.angry)
let iguana = new Animal('Iguana', 4, true, Environments.swamp, temperment.happy)
let jaguar = new Animal('Jaguar', 4, true, Environments.jungle, temperment.angry)
let kangaroo = new Animal('Kangaroo', 4, true, Environments.desert, temperment.angry)

let animalDict = {
    alligator,
    baboon,
    cougar,
    dingo,
    elephant,
    falcon,
    gecko,
    hyena,
    iguana,
    jaguar,
    kangaroo
}

function getAnimal(animalName) {
    let animal = animalDict[animalName]
    if (animal.tail == true) {
        console.log(`${animal.name} has ${animal.legs} legs and a tail. ${animal.name} lives in the ${animal.environment.place} which is ${animal.environment.qualities}  They are usually ${animal.temperment.mood}.`);


    } else {
        console.log(`${animal.name} has ${animal.legs} legs and does not have a tail. ${animal.name} lives in the ${animal.environment.place} which is ${animal.environment.qualities}  They are usually ${animal.temperment.mood}`);
    }
}

window.getAnimal = getAnimal