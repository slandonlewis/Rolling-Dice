// Put your code here
console.log("Do you believe in magic?");
console.log("------------------------");

const allSpells = [
    {
        name: "Turn enemy into a newt",
        isEvil: true,
        energyRequired: 5.1
    },
    {
        name: "Conjure some gold for a local charity",
        isEvil: false,
        energyRequired: 2.99
    },
    {
        name: "Give a deaf person the ability to heal",
        isEvil: false,
        energyRequired: 12.2
    },
    {
        name: "Make yourself emperor of the universe",
        isEvil: true,
        energyRequired: 100.0
    },
    {
        name: "Convince your relatives your political views are correct",
        isEvil: false,
        energyRequired: 2921.5
    }
]

const getGoodSpells = () => {
    const goodSpells = allSpells.map(spell => spell.isEvil)
    return goodSpells
}

const getEvilSpells = () => {
    const evilSpells = allSpells.map(spell => spell.isEvil)
    return evilSpells
}

console.log(`
Good Book
    ${getGoodSpells()}

Evil Book
    ${getEvilSpells()}
`)