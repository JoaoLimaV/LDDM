module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    ["module-resolver", {
      root: ["."],
      extensions: [
        '.ts',
        '.tsx',
        '.jsx',
        '.js',
        '.json',
        '.svg',
        '.jpg',
        '.png'
      ],
      alias: {
        '@icons': './assets/images/icons',
        '@images': './assets/images',
        '@components': './src/components',
        '@screens': './src/screens',
        '@styles': './src/styles',
      }
    }]
  ]
};
