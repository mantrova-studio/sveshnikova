module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy({ "admin": "admin" });

  // Collections for section materials (Markdown files)
  const sections = ["parents", "teachers", "method", "childhood", "kids", "misc", "achievements"];
  sections.forEach((s) => {
    eleventyConfig.addCollection(s, (api) =>
      api.getFilteredByGlob(`src/content/${s}/*.md`).sort((a, b) => (b.date || 0) - (a.date || 0))
    );
  });

  return {
    dir: {
      input: "src",
      output: "dist"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk"
  };
};
