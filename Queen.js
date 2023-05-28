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
                <p class="queen-bio">${bio}</p>
            </div>
            `
        return queenHtml
    }

    getQueenAvatarHtml() {
        const { name, avatar } = this
        const avatarHtml = `<img src="${avatar}" alt="${name}">`
        return avatarHtml
    }
}

export { Queen }