import { defineConfig } from 'vite';

export default defineConfig({
    base: '/fed24d-arbetsmetodik-inl-1-OmarAlawi16/',
    define: {
        'import.meta.env.VITE_APP_PROGRAMS_API': `"${process.env.VITE_APP_PROGRAMS_API}"`,
        'import.meta.env.VITE_APP_EPISODES_API': `"${process.env.VITE_APP_EPISODES_API}"`,
    },
});