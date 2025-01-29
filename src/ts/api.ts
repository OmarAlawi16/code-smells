import { logMessage, logError } from './helpers';

const PROGRAMS_API = import.meta.env.VITE_APP_PROGRAMS_API;
const EPISODES_API = import.meta.env.VITE_APP_EPISODES_API;

export async function getPodcasts() {
    try {
        // Logs API request in DEV mode
        logMessage('Fetching podcasts from API...');

        const response = await fetch(`${PROGRAMS_API}?programcategoryid=133&format=json&pagination=false&indent=true&filter=program.archived&filterValue=false`);
        const json = await response.json();

        // Logs API response in DEV mode
        logMessage('API Response:', json);
        return json;
    } catch (error) {
        // Logs error in PROD mode
        logError('Something went wrong while fetching podcasts:', error);
        return null;
    }
}

export async function getEpisodes(programId: number) {
    try {
        // Logs API request in DEV mode
        logMessage(`Fetching episodes for podcast ID: ${programId}...`);

        const response = await fetch(`${EPISODES_API}?programid=${programId}&format=json&pagination=false`);
        const json = await response.json();

        // Logs API response in DEV mode
        logMessage('Episodes Response:', json);
        return json;
    } catch (error) {
        // Logs error in PROD mode
        logError(`Something went wrong while fetching episodes for podcast ID: ${programId}`, error);
        return null;
    }
}

export default { getPodcasts, getEpisodes };
