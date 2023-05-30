class Queen {
    constructor(data) {
        Object.assign(this, data)
    }

    getQueenHtml() {
        const { name, profilePic, season, bio } = this
        const queenHtml = `
            <img src="${profilePic}" alt="${name}">
            <div class="queen-card-text">
                <p class="queen-name">${name}</p>
                <p class="season">${season}</p>
            </div>
            `
        return queenHtml
    }

    getAvatarHtml() {
        const { name, avatar } = this
        const avatarHtml = `<img src="${avatar}" alt="${name}" class="avatar">`
        return avatarHtml
    }

}

export { Queen }