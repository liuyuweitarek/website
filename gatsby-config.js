module.exports = {
  siteMetadata: {
    title: `Paweł Kosiec, Full-stack Developer`,
    author: "Paweł Kosiec",
    copyright: "Paweł Kosiec - 2012-2019",
    description: `I am software developer interested in technology and gadgets. Cloud-native and open-source enthusiast.`,
    socialMedia: [
      { name: 'LinkedIn', url: 'https://www.linkedin.com/in/pkosiec' },
      { name: 'GitHub', url: 'https://github.com/pkosiec' },
      { name: 'Twitter', url: 'https://twitter.com/pkosiec' },
      { name: 'Medium', url: 'https://medium.com/@pkosiec' },
      { name: 'Instagram', url: 'https://www.instagram.com/pkosiec' },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Paweł Kosiec`,
        short_name: `pkosiec`,
        start_url: `/`,
        background_color: `#2b2200`,
        theme_color: `#ffcc00`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
