module.exports = function (eleventyConfig) {

    eleventyConfig.addPassthroughCopy('css');
    eleventyConfig.addPassthroughCopy('assets');
    eleventyConfig.addPassthroughCopy("CNAME");

    eleventyConfig.addWatchTarget("./css/*");

    //Add collection for committees
    eleventyConfig.addCollection('committees', collection => {
        return collection.getFilteredByGlob('_committees/*.md');
    });
    eleventyConfig.addCollection('pages', collection => {
        return collection.getFilteredByGlob('_pages/*.md');
    });

    eleventyConfig.setLiquidOptions({
        dynamicPartials: true,
        root: [
            '_includes',
            '.'
        ]
    });

    let md_it = require("markdown-it");
    var md_attr = require("markdown-it-attrs");
    let options = {
        html:true, 
        breaks: true,
        linkify: true,
    };

    let md_lib = md_it(options).use(md_attr).disable('code');
    eleventyConfig.setLibrary("md", md_lib);

    eleventyConfig.addFilter('jsonify', function (variable) {
        return JSON.stringify(variable);
      });

    return {
        passthroughFileCopy: true,
        pathPrefix: "/",
        dir: {
            input: "./",
            output: "_site",
            includes: "_includes",
            layouts: "_layouts"
        },
        htmlTemplateEngine: "liquid",
        markdownTemplateEngine: "liquid",
        templateFormats: ["md", "html", "njk"]
    }

}