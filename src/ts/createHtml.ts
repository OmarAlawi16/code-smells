import { getPodcasts, getEpisodes } from './api';

// Podcast list container
const podCastContainer = document.querySelector('.section__podlist-pods') as HTMLElement;

export async function createHtml() {
    try {
        // Fetch all podcasts
        const podCasts = await getPodcasts();
        if (!podCasts) {
            console.error('Failed to fetch podcasts.');
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
            const innerArticle = createInnerArticle();

            // Add image
            const imgElement = createImg(podcast.socialimage, podcast.name);
            innerArticle.appendChild(imgElement);

            const textDiv = createTextDiv();
            innerArticle.appendChild(textDiv);

            // Add title and description
            const header = createHeader(podcast.name);
            textDiv.appendChild(header);

            const description = createDescription(podcast.description);
            textDiv.appendChild(description);

            podCastContainer.appendChild(innerArticle);

            // Add link
            const link = createLink(podcast.programurl);
            textDiv.appendChild(link);

            // Fetch episodes for each podcast and add audio player
            getEpisodes(podcast.id).then((episodes: any) => {
                if (episodes && episodes.episodes.length > 0) {
                    const audioUrl = episodes.episodes[0].listenpodfile.url;
                    const audioPlayer = createAudioPlayer(audioUrl);
                    textDiv.appendChild(audioPlayer);
                }
            }).catch((error) => {
                console.error(`Error fetching episodes for podcast ${podcast.id}:`, error);
            });

        });
    } catch (error) {
        console.error('Error creating podcast HTML:', error);
    }
}

// Create an article for the podcast
function createInnerArticle(): HTMLElement {
    const innerArticle = document.createElement('article');
    innerArticle.setAttribute('class', 'section__article-innerarticle');
    innerArticle.setAttribute('tabindex', '1');
    return innerArticle;
}

// Create an image for the podcast
function createImg(src: string, alt: string): HTMLImageElement {
    const img = document.createElement('img');
    img.setAttribute('src', src);
    img.setAttribute('alt', alt);
    img.setAttribute('loading', 'lazy');
    img.setAttribute('min-width', '100');
    img.setAttribute('height', '100');
    return img;
}

// Create a div for text
function createTextDiv(): HTMLDivElement {
    const textDiv = document.createElement('div');
    textDiv.setAttribute('class', 'section__article-div');
    return textDiv;
}

// Create a header
function createHeader(name: string): HTMLHeadingElement {
    const header = document.createElement('h2');
    header.textContent = name;
    return header;
}

// Create a description
function createDescription(description: string): HTMLParagraphElement {
    const paragraph = document.createElement('p');
    paragraph.textContent = description;
    return paragraph;
}

// Create an audio player
function createAudioPlayer(url: string): HTMLAudioElement {
    const audio = document.createElement('audio');
    audio.setAttribute('controls', 'controls');
    audio.setAttribute('src', url);
    return audio;
}

// Create a link to the podcast page
function createLink(url: string): HTMLAnchorElement {
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('tabindex', '1');
    link.textContent = 'Podcastsidan';
    return link;
}

export default createHtml;
