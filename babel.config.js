module.exports = (api) => {
  api.cache(true)

  return {
    presets: [
      '@babel/preset-env',
      '@babel/preset-react',
      '@babel/preset-typescript',
      ['react-app', { 'flow': false, 'typescript': true, 'absoluteRuntime': false }]
    ],
    plugins: ['@babel/plugin-proposal-object-rest-spread', '@babel/transform-runtime']
  }
}