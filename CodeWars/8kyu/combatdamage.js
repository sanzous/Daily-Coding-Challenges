function combat(health, damage) {
    return health < damage ? 0 : health - damage
}