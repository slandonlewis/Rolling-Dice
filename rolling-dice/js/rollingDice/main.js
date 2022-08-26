// Put your code here
console.log("Let's roll some dice, baby!");
console.log("---------------------------");

// Roll die
const rollDie = () => {
    let dieValue = Math.floor(Math.random() * 6) + 1
    return dieValue
}

for (let i = 0; i < 10; i++) {
    let die1 = rollDie()
    let die2 = rollDie()
    let die1String
    let die2String
    let total = die1 + die2

    // two switch blocks for die1 and die2
    switch (die1) {
        case 1:
            die1String = "one";
            break;
        case 2:
            die1String = "two";
            break;
        case 3:
            die1String = "three";
            break;
        case 4:
            die1String = "four";
            break;
        case 5:
            die1String = "five";
            break;
        case 6:
            die1String = "six";
            break;
    }

    switch (die2) {
        case 1:
            die2String = "one";
            break;
        case 2:
            die2String = "two";
            break;
        case 3:
            die2String = "three";
            break;
        case 4:
            die2String = "four";
            break;
        case 5:
            die2String = "five";
            break;
        case 6:
            die2String = "six";
            break;
    }

    let message = `${i + 1}. ${die1String} + ${die2String} == ${total}`
    // log "DOUBLES" if both dice have the same value
    if (die1 == die2) {
        message += " DOUBLES!";
    }

    console.log(message)
}
