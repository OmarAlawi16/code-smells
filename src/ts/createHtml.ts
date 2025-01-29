import { getPodcasts, getEpisodes } from './api';
import { logMessage, logError } from './helpers';

// Podcast list container
const podCastContainer = document.querySelector('.section__podlist__list') as HTMLElement;

/**
 * Function to display an error message on the page
 * @param message - The error message to display
 */
function displayErrorMessage(message: string): void {
    const errorContainer = document.createElement('div');
    errorContainer.classList.add('error-message');
    errorContainer.textContent = message;

    if (podCastContainer) {
        // Clear existing content and display the error message
        podCastContainer.innerHTML = '';
        podCastContainer.appendChild(errorContainer);
    }
}

/**
 * Function to fetch podcasts and render them in the DOM
 */
export async function createHtml() {
    try {
        logMessage('Fetching podcasts...');

        const podCasts = await getPodcasts();
        if (!podCasts) {
            logError('Failed to fetch podcasts.');
            displayErrorMessage('Failed to load podcasts. Please try again later.');
            return;
        }

        // Specify inline type for programs
        const programs: {
            programurl: string;
            socialimage: string;
            name: string;
            description: string;
            id: number;
        }[] = podCasts.programs;

        // Iterate through each podcast and create HTML
        programs.forEach((podcast) => {
            const podcastItem = createPodcastItem();

            // Add image
            const imgElement = createPodcastImage(podcast.socialimage, podcast.name);
            podcastItem.appendChild(imgElement);

            // Add content container
            const contentContainer = createContentContainer();
            podcastItem.appendChild(contentContainer);

            // Add title and description
            const title = createPodcastTitle(podcast.name);
            contentContainer.appendChild(title);

            // Add description
            const description = createPodcastDescription(podcast.description);
            contentContainer.appendChild(description);

            podCastContainer.appendChild(podcastItem);

            // Add link
            const link = createPodcastLink(podcast.programurl);
            contentContainer.appendChild(link);

            // Fetch episodes for each podcast and add audio player
            getEpisodes(podcast.id).then((episodes: any) => {
                if (episodes && episodes.episodes.length > 0) {
                    const audioUrl = episodes.episodes[0].listenpodfile.url;
                    const audioPlayer = createPodcastAudioPlayer(audioUrl);
                    contentContainer.appendChild(audioPlayer);
                }
            }).catch((error) => {
                logError(`Error fetching episodes for podcast ${podcast.id}:`, error);
            });
        });
    } catch (error) {
        logError('Error creating podcast HTML:', error);
        displayErrorMessage('An unexpected error occurred. Please refresh the page.');
    }
}

// Create a podcast item
function createPodcastItem(): HTMLElement {
    const item = document.createElement('article');
    item.classList.add('section__podlist__item');
    return item;
}

// Create a podcast image
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

// Create a content container
function createContentContainer(): HTMLDivElement {
    const contentDiv = document.createElement('div');
    contentDiv.classList.add('section__podlist__content');
    return contentDiv;
}

// Create a podcast title
function createPodcastTitle(title: string): HTMLHeadingElement {
    const header = document.createElement('h2');
    header.textContent = title;
    header.classList.add('section__podlist__title');
    return header;
}

// Create a podcast description
function createPodcastDescription(description: string): HTMLParagraphElement {
    const paragraph = document.createElement('p');
    paragraph.textContent = description;
    paragraph.classList.add('section__podlist__description');
    return paragraph;
}

// Create a podcast audio player
function createPodcastAudioPlayer(url: string): HTMLAudioElement {
    const audio = document.createElement('audio');
    audio.setAttribute('controls', 'controls');
    audio.setAttribute('src', url);
    audio.classList.add('section__podlist__audio');
    return audio;
}

// Create a podcast link
function createPodcastLink(url: string): HTMLAnchorElement {
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.classList.add('section__podlist__link');
    link.textContent = 'Podcastsidan';
    return link;
}

export default createHtml;
