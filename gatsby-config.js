/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "UX/UI Portfolo ",
    titleTemplate: "%s • Brandon Langer",
    description:
      "Creating empathic designs through modern UX/UI.",
    url: "https://www.brandonlanger.website", // No trailing slash allowed!
    image: "/images/snape.jpg", // Path to your image you placed in the 'static' folder
    twitterUsername: "@hashtagbrownz",
  },
  plugins: ["gatsby-plugin-sass", "gatsby-plugin-react-helmet"],
}
