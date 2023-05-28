class Queen {
    constructor(data) {
        Object.assign(this, data)
    }

    getQueenHtml() {
        const { name, profilePic, season, bio } = this
        const queenHtml = `
            <img src="${profilePic}" alt="${name}">
            <div class="queen-card-text">
                <p class="queen-name">${name}, <span class="season">${season}</span></p>
                <p class="queen-bio">Lorem ipsum, queen bio will go here, etc</p>
            </div>
            `
        return queenHtml
    }
}

export { Queen }