// Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.

function alphabetWar(fight) {
    let leftpoints = 0
    let rightpoints = 0
    const left = {
        'w': 4,
        'p': 3,
        'b': 2,
        's': 1
    }
    const right = {
        'm': 4,
        'q': 3,
        'd': 2,
        'z': 1
    }
    fight.split('').forEach(e => e in left ? leftpoints += left[e] : e in right ? rightpoints += right[e] : 0)
    return rightpoints === leftpoints ? "Let's fight again!" : rightpoints > leftpoints ? 'Right side wins!' : 'Left side wins!'
}