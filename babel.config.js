module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-native-reanimated/plugin', // necessário se usar Reanimated (Moti depende)
    ],
  };
};

//Só alguns detalhes importantes pra garantir que não vai quebrar:

// O plugin do Reanimated sempre deve ser o último da lista de plugins. No seu caso já está certinho.

// Se você adicionar outros plugins futuramente, mantenha 'react-native-reanimated/plugin' no final.

// Se futuramente for usar NativeWind (que o Gluestack depende), você não precisa adicionar plugin extra; o Tailwind funciona só com babel-preset-expo.