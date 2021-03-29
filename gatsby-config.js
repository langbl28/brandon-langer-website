/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "UX/UI Portfolo ",
    titleTemplate: "%s • Brandon Langer",
    description: "Creating empathic designs through modern UX/UI.",
    url: "https://www.brandonlanger.website", // No trailing slash allowed!
    siteUrl: "https://www.brandonlanger.website",
    image: "/images/snape.jpg", // Path to your image you placed in the 'static' folder
    twitterUsername: "@hashtagbrownz",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sass",
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://brandonlanger.website",
        sitemap: "https://brandonlanger.website/sitemap.xml",
        policy: [{ userAgent: "*", disallow: "/" }],
      },
    },
    { 
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true, // Print removed selectors and processed file names
        develop: false, // Enable while using `gatsby develop`
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `UX/UI Portfolio of Brandon Langer`,
        short_name: `UX/UI Brandon Langer`,
        start_url: `/`,
        description: `Creating empathic designs through modern UX/UI.`,
        lang: `en`,
        display: `standalone`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/images/icon.svg`, // This path is relative to the root of the site.
      },
    },
  ],
}
