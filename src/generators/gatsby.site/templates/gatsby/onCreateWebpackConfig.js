const path = require('path')

module.exports = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, '../src/components/'),
        '@atoms': path.resolve(__dirname, '../src/components/atoms/'),
        '@molecules': path.resolve(__dirname, '../src/components/molecules/'),
        '@organisms': path.resolve(__dirname, '../src/components/organisms/'),
        '@styles': path.resolve(__dirname, '../src/styles/'),
        '@utils': path.resolve(__dirname, '../src/utils/'),
        '@hooks': path.resolve(__dirname, '../src/hooks'),
        "@pages": path.resolve(__dirname, '../src/pages'),
        "@images": path.resolve(__dirname, '../src/images')
      },
      extensions: ['.js', '.json',],
    },
  })
}
