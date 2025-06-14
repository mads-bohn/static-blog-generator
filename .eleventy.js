module.exports = function (eleventyConfig) {

  // Stop the default behaviour of foo.html being turned into foo/index.html
  eleventyConfig.addGlobalData("permalink", "{{ page.filePathStem }}.html");

  // Copy the assets folder to the output without modifying it at all
  eleventyConfig.addPassthroughCopy("src/assets");

  // Define which file types will be copied
  eleventyConfig.setTemplateFormats(["html", "njk", "txt", "js", "css", "xml", "json"]);

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};