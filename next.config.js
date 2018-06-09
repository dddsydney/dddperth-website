const withBundleAnalyzer = require('@zeit/next-bundle-analyzer')
const {
  BundleAnalyzerPlugin
} = require('webpack-bundle-analyzer')
const withTypescript = require('@zeit/next-typescript')
const withSass = require('@zeit/next-sass')

module.exports = withSass(
  withTypescript(
    withBundleAnalyzer({
      analyzeServer: ['server', 'both'].includes(process.env.BUNDLE_ANALYZE),
      analyzeBrowser: ['browser', 'both'].includes(process.env.BUNDLE_ANALYZE),
      webpack: (config, {
        dev
      }) => {
        if (!dev) {
          const originalEntry = config.entry;
          config.entry = async () => {
            const entries = await originalEntry();

            if (entries['main.js']) {
              entries['main.js'].unshift('./static/scripts/es6-shim.js');
            }

            return entries;
          };
        }
        return config;
      },
      exportPathMap: function () {
        return {
          '/': { page: '/' },
          '/about': { page: '/about' },
          '/agenda': { page: '/agenda' },
          '/agenda/2017': { page: '/agenda/2017' },
          '/agenda/2016': { page: '/agenda/2016' },
          '/cfp': { page: '/cfp' },
          '/sponsorship': { page: '/sponsorship' },
          '/venue': { page: '/venue' },
          '/code-of-conduct': { page: '/code-of-conduct' },
          '/contact': { page: '/contact' },
          '/faq': { page: '/faq' },
          '/tickets': { page: '/tickets' },
          '/vote': { page: '/vote' }
        }
      },
      poweredByHeader: false,
      typescriptLoaderOptions: {
        transpileOnly: false
      }
    })
  )
)