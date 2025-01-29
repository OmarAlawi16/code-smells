import { getPodcasts, getEpisodes } from './api';
import { logMessage, logError } from './helpers';

// Podcast list container
const podCastContainer = document.querySelector('.section__podlist__list') as HTMLElement;

export async function createHtml() {
    try {
        // Logs when podcast fetching starts in DEV mode
        logMessage('Fetching podcasts...');

        // Fetch all podcasts
        const podCasts = await getPodcasts();
        if (!podCasts) {
            // Logs an error if podcast fetching fails
            logError('Failed to fetch podcasts.');
            return;
        }

        // Define the structure for podcast data
        const programs: {
            programurl: string;
            socialimage: string;
            name: string;
            description: string;
            id: number;
        }[] = podCasts.programs;

        // Iterate through each podcast and create HTML elements
        programs.forEach((podcast) => {
            const podcastItem = createPodcastItem();

            // Add podcast image
            const imgElement = createPodcastImage(podcast.socialimage, podcast.name);
            podcastItem.appendChild(imgElement);

            // Add content container
            const contentContainer = createContentContainer();
            podcastItem.appendChild(contentContainer);

            // Add podcast title
            const title = createPodcastTitle(podcast.name);
            contentContainer.appendChild(title);

            // Add description
            const description = createPodcastDescription(podcast.description);
            contentContainer.appendChild(description);

            podCastContainer.appendChild(podcastItem);

            // Add podcast link
            const link = createPodcastLink(podcast.programurl);
            contentContainer.appendChild(link);

            // Fetch episodes and add an audio player
            getEpisodes(podcast.id).then((episodes: any) => {
                if (episodes && episodes.episodes.length > 0) {
                    const audioUrl = episodes.episodes[0].listenpodfile.url;
                    const audioPlayer = createPodcastAudioPlayer(audioUrl);
                    contentContainer.appendChild(audioPlayer);
                }
            }).catch((error) => {
                // Logs an error if episode fetching fails
                logError(`Error fetching episodes for podcast ${podcast.id}:`, error);
            });
        });

        // Logs when all podcast items have been added in DEV mode
        logMessage('Podcast list successfully generated.');
    } catch (error) {
        // Logs an error if something goes wrong in the HTML creation process
        logError('Error creating podcast HTML:', error);
    }
}

// Create a podcast item container
function createPodcastItem(): HTMLElement {
    const item = document.createElement('article');
    item.classList.add('section__podlist__item');
    return item;
}

// Creates an image element for the podcast
function createPodcastImage(src: string, alt: string): HTMLImageElement {
    const img = document.createElement('img');
    img.setAttribute('src', src);
    img.setAttribute('alt', alt);
    img.setAttribute('loading', 'lazy');
    img.setAttribute('width', '200');
    img.setAttribute('height', '200');
    img.classList.add('section__podlist__image');
    return img;
}

// Creates a content container for podcast details
function createContentContainer(): HTMLDivElement {
    const contentDiv = document.createElement('div');
    contentDiv.classList.add('section__podlist__content');
    return contentDiv;
}

// Creates a podcast title element
function createPodcastTitle(title: string): HTMLHeadingElement {
    const header = document.createElement('h2');
    header.textContent = title;
    header.classList.add('section__podlist__title');
    return header;
}

// Creates a podcast description paragraph
function createPodcastDescription(description: string): HTMLParagraphElement {
    const paragraph = document.createElement('p');
    paragraph.textContent = description;
    paragraph.classList.add('section__podlist__description');
    return paragraph;
}

// Creates an audio player for the podcast
function createPodcastAudioPlayer(url: string): HTMLAudioElement {
    const audio = document.createElement('audio');
    audio.setAttribute('controls', 'controls');
    audio.setAttribute('src', url);
    audio.classList.add('section__podlist__audio');
    return audio;
}

// Creates a link to the podcast's official page
function createPodcastLink(url: string): HTMLAnchorElement {
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.classList.add('section__podlist__link');
    link.textContent = 'Podcastsidan';
    return link;
}

export default createHtml;
