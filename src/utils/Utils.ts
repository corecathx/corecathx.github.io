const _baseGithubURL: string = 'https://github.com/corecathx';
const _baseArtworkPath: string = '/images/artworks';

export const Utils = {
    getArtworkImage(name: string) {
        return `${_baseArtworkPath}/${name}`
    },
    getGithubRepo(name: string) {
        return `${_baseGithubURL}/${name}`
    },
    async getGithubStars(name: string) {
        const response = await fetch(
            `https://api.github.com/repos/corecathx/${name}`
        )

        if (!response.ok){
            console.error(
                `failed to fetch GitHub stars for ${name}: ${response.status}`
            )
            return 0
        }

        const data = await response.json()

        return data.stargazers_count ?? 0

    }
}