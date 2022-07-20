function areYouPlayingBanjo(name) {
    return name.split('')[0].toUpperCase() == 'R' ? `${name} plays banjo` : `${name} does not play banjo`
}