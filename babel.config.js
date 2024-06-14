module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-native-paper/babel', 
      'react-native-reanimated/plugin',
    ],
    env: {
      production: {
        plugins: [
          'react-native-paper/babel', 
          'react-native-reanimated/plugin',
        ],
      },
      test: {
        presets: [['babel-preset-expo', { targets: { node: 'current' } }]],
      },
    },
  };
};
