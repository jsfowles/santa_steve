module.exports = {
  siteMetadata: {
    title: 'Default Starter',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts`, // eslint-disable-line
      options: {
        fonts: [`Roboto\:300,400,500`, `source sans`, 'Playfair Display:'], // eslint-disable-line
      },
    },
    {
      resolve: `gatsby-plugin-lodash`,
      options: {
        disabledFeatures: [`shorthands`, `cloning`],
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `tomato`,
        // Disable the loading spinner.
        showSpinner: false,
      },
    },
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        hoist: true,
        autoLabel: true,
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-resolve-src',
  ],
};
