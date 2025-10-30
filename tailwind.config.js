/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // rotas do expo-router
    './src/**/*.{js,ts,jsx,tsx}', // componentes
    './node_modules/@gluestack-ui/themed/**/*.{js,ts,jsx,tsx}', // caso Gluestack use classes Tailwind
  ],
  theme: {
    extend: {
      colors: {
        // apenas suas cores extras
        primary: '#1E40AF',
        secondary: '#9333EA',
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
      },
      // outras extensões que você precisar (fontSize, borderRadius, etc)
    },
  },
  plugins: [
    require('nativewind/plugin'), // obrigatório para o Gluestack funcionar corretamente
  ],
};
