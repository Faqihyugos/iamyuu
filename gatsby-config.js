const config = require('./site-config');

module.exports = {
  // @see {@link https://github.com/LekoArts/gatsby-themes/tree/master/themes/gatsby-theme-minimal-blog#additional-configuration}
  siteMetadata: {
    siteTitle: config.siteTitle,
    siteTitleAlt: config.siteTitle,
    siteHeadline: config.siteTitle,
    siteUrl: config.siteUrl,
    siteDescription: config.siteDescription,
    siteLanguage: config.siteLanguage,
    siteImage: `/avatar.jpeg`,
    author: config.author,
    externalLinks: []
  },
  plugins: [
    {
      resolve: '@lekoarts/gatsby-theme-minimal-blog',
      options: {
        navigation: [
          {
            title: 'Blog',
            slug: '/blog'
          },
          {
            title: 'About',
            slug: '/about'
          }
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: config.googleAnalyticsID,
        head: false
      }
    },
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: config.siteTitle,
        description: config.siteDescription,
        start_url: config.basePath,
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: 'standalone',
        icons: [
          {
            src: '/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-netlify',
    'gatsby-plugin-netlify-cache'
  ]
};
