module.exports = {
  siteMetadata: {
    title: "HopShop",
    author: "HopSupTim",
    description: "Hopshop by hopsup comedy team."
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#0A0A0A',
        theme_color: '#0A0A0A',
        display: 'minimal-ui',
        icon: 'src/images/logo_black_white.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GA_TRACKING_ID,
        head: true,
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
