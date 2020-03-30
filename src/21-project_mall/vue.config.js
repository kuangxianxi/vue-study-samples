module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'api': '@api',
        'assets': '@/assets',
        'components': '@/components',
        'common': 'components/common',
        'context': 'components/context',
        'views': '@/views'
      }
    }
  }
};
