const buyClay = () => {
    return clayObj = {}
}

const makePottery = (clayObj) => {
    clayObj.shape = "Bowl"

    return clayObj
}

const bisqueFire = (clayObj) => {
    clayObj.readyForGlazing = true

    return clayObj
}

const glazedPottery = (clayObj) => {
    if (clayObj.readyForGlazing === true) {
        clayObj.glazing = "Midnight Blue"
    } else {
        console.log("Make sure you bisque fire the pottery before you glaze it.")
    }

    return clayObj
}

const finalFiring = (clayObj, temperature) => {
    if (temperature > 1200) {
        clayObj.cracked = true
    } else {
        clayObj.cracked = false
    }

    return clayObj
}

// const firedPottery1400 = finalFiring(glazedPottery, 1400)
// console.log(firedPottery1400)

// const firedPottery1200 = finalFiring(glazedPottery, 1200)
// console.log(firedPottery1200)

let clay = buyClay()

makePottery(clay)
bisqueFire(clay)
glazedPottery(clay)
finalFiring(clay,1250)

console.log(clay)