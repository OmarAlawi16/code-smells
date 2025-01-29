// Logs messages only in development mode
export function logMessage(...messages: unknown[]): void {
    // Checks if the environment is in DEV mode
    const isDev = import.meta.env.MODE === 'development';

    if (isDev) {
        // Logs messages with a "DEV LOG" prefix
        console.log('[DEV LOG]:', ...messages);
    }
}

// Logs errors only in production mode
export function logError(...errors: unknown[]): void {
    // Checks if the environment is in PROD mode
    const isProd = import.meta.env.MODE === 'production';

    if (isProd) {
        // Logs errors with a "PROD ERROR" prefix
        console.error('[PROD ERROR]:', ...errors);
    }
}