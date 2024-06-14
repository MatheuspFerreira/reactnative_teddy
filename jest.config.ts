module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: [
    '@testing-library/jest-native/extend-expect',
    '<rootDir>/jest/setup.js'
  ],
  testPathIgnorePatterns: ['/node_modules/', '/android/', '/ios/'],
  transformIgnorePatterns: [
    'node_modules/(?!(react-native' +
      '|@react-native' +
      '|@react-native-community' +
      '|@expo' +
      '|expo' +
      '|expo-asset' +
      '|expo-font' +
      '|expo-constants' +
      '|expo-modules-core' +
      '|expo-file-system' +
      '|react-native-vector-icons' +
      '|react-native-paper' +
      '|react-native-reanimated' +
      '|react-native-toast-message' +
      '|@react-native/js-polyfills' +
      '|react-native-keyboard-aware-scroll-view' +
      ')/)',
  ],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '\\.ttf$': '<rootDir>/jest/__mocks__/fileMock.js',
  },
};
