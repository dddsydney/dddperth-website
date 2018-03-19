const withBundleAnalyzer = require('@zeit/next-bundle-analyzer')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const withTypescript = require('@zeit/next-typescript')
const withSass = require('@zeit/next-sass')

module.exports = withSass(
  withTypescript(
    withBundleAnalyzer({
      analyzeServer: ['server', 'both'].includes(process.env.BUNDLE_ANALYZE),
      analyzeBrowser: ['browser', 'both'].includes(process.env.BUNDLE_ANALYZE),
      webpack: (config, { dev }) => {
        return config
      },
      exportPathMap: function() {
        return {
          '/': { page: '/' },
          '/about.html': { page: '/about' },
          '/agenda.html': { page: '/agenda' },
          '/agenda/2017.html': { page: '/agenda/2017' },
          '/agenda/2016.html': { page: '/agenda/2016' },
          '/cfp.html': { page: '/cfp' },
          '/sponsorship.html': { page: '/sponsorship' },
          '/venue.html': { page: '/venue' },
          '/code-of-conduct.html': { page: '/code-of-conduct' },
          '/contact.html': { page: '/contact' },
          '/faq.html': { page: '/faq' },
          '/tickets.html': { page: '/tickets' },
          '/vote.html': { page: '/vote' }
        }
      },
      poweredByHeader: false,
      typescriptLoaderOptions: {
        transpileOnly: false
      }
    })
  )
)
