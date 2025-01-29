import { logMessage, logError } from './helpers';

const toggleLightModeButton = document.querySelector<HTMLButtonElement>('#toggle-btn');

// Helper function to toggle a class on the body
function toggleBodyClass(className: string): boolean {
    return document.body.classList.toggle(className);
}

// Helper function to update the button's text and aria-label
function updateButtonTextAndAria(button: HTMLButtonElement, isLightMode: boolean): void {
    button.innerHTML = isLightMode ? 'Välj mörkt läge' : 'Välj ljust läge';
    button.setAttribute('aria-label', isLightMode ? 'Växla till mörkt läge' : 'Växla till ljust läge');
}

// Main function to toggle the theme
export function toggleLightMode(): void {
    if (!toggleLightModeButton) {
        // Logs an error in production mode if the button is missing
        logError('Toggle button not found!');
        return;
    }

    const isLightMode = toggleBodyClass('lightmode');
    updateButtonTextAndAria(toggleLightModeButton, isLightMode);

    // Logs the theme change in development mode
    logMessage('Theme toggled:', isLightMode ? 'Light Mode' : 'Dark Mode');
}

// Attach event listener if button exists
if (toggleLightModeButton) {
    toggleLightModeButton.addEventListener('click', toggleLightMode);
}

export default toggleLightMode;
