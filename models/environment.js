class Environment {
    constructor(place, qualities) {
        this.place = place
        this.qualities = qualities
    }

}

let woodland = new Environment('woodland', 'full of trees!')
let swamp = new Environment('swamp', 'so mushy!')
let plains = new Environment('plains', 'just alot of grass!')
let desert = new Environment('outback', 'so hot!')
let jungle = new Environment('jungle', 'like a forest and a swamp put together!')

export default {
    woodland,
    swamp,
    plains,
    desert,
    jungle
}