import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        include: ['**/tests/specs/**/*.test.tsx'],
        globals: true,
        environment: 'jsdom',
        setupFiles: 'src/tests/config/vitest.setup.ts',
    },
});
