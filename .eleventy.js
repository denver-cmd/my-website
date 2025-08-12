module.exports = function(eleventyConfig) {
  // Pass through the css folder to the output
  eleventyConfig.addPassthroughCopy("css");

  // Pass through the fonts folder to the output
  eleventyConfig.addPassthroughCopy("fonts");

  return {
    dir: {
      input: ".",
      output: "_site"
    }
  };
};

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("fonts");
  eleventyConfig.addPassthroughCopy("music"); // Add this
  eleventyConfig.addPassthroughCopy("js");    // and this
  return {
    dir: {
      input: ".",
      output: "_site"
    }
  };
};