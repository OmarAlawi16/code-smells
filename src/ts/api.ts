export async function getPodcasts() {
    try {
        const response = await fetch('https://api.sr.se/api/v2/programs/index?programcategoryid=133&format=json&pagination=false&indent=true&filter=program.archived&filterValue=false');
        const json = await response.json();
        console.log('API Response:', json); // Log API-answer for
        return json;
    } catch (error) {
        console.error('Something went wrong:', error);
        return null;
    }
}

// Fetch an episode for a specific podcast.
export async function getEpisodes(programId: number) {
    try {
        const response = await fetch(`https://api.sr.se/api/v2/episodes/index?programid=${programId}&format=json&pagination=false`);
        const json = await response.json();
        console.log('Episodes Response:', json); // Log API-answer for episode
        return json;
    } catch (error) {
        console.error('Something went wrong:', error);
        return null;
    }
}

export default { getPodcasts, getEpisodes };