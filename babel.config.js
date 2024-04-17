module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    ["module-resolver", {
      root: ["."],
      extensions: [
        '.ts',
        '.tex',
        '.jsx',
        '.js',
        '.json',
        '.svg',
        '.jpg',
        '.png'
      ],
      alias: {
        '@icons2': './assets/images/icons',
        '@components': './src/components'
      }
    }]
  ]
};
