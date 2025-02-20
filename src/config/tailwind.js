export const getTailwindConfig = () => `
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})`;

export const getTailwindGlobals = () => `
@import "tailwindcss";
`;
