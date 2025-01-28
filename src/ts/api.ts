const PROGRAMS_API = import.meta.env.VITE_APP_PROGRAMS_API;
const EPISODES_API = import.meta.env.VITE_APP_EPISODES_API;

export async function getPodcasts() {
    try {
        const response = await fetch(`${PROGRAMS_API}?programcategoryid=133&format=json&pagination=false&indent=true&filter=program.archived&filterValue=false`);
        const json = await response.json();
        console.log('API Response:', json);
        return json;
    } catch (error) {
        console.error('Something went wrong:', error);
        return null;
    }
}

export async function getEpisodes(programId: number) {
    try {
        const response = await fetch(`${EPISODES_API}?programid=${programId}&format=json&pagination=false`);
        const json = await response.json();
        console.log('Episodes Response:', json);
        return json;
    } catch (error) {
        console.error('Something went wrong:', error);
        return null;
    }
}

export default { getPodcasts, getEpisodes };
