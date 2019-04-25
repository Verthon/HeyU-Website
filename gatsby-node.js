// https://www.gatsbyjs.org/docs/debugging-html-builds/
// Fixing third-party modules


exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /wowjs/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}