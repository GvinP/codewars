function areYouPlayingBanjo(name) {
    return (name[0].match(/r/i)) ? name + " plays banjo" : name + " does not play banjo";
}