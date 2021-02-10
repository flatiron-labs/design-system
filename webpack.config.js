const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin')

module.exports = {
    resolve: { plugins: [new TsconfigPathsPlugin({ extensions: config.resolve.extensions })] }
}