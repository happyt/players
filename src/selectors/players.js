export default (players, {text}) => {
    return players.filter((player) => {
        const textMatch = player.surname.toLowerCase().includes(text.toLowerCase())
        return textMatch
    })
}
