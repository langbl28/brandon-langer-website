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
    }
  ],
}
