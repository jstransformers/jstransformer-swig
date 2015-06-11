module.exports = {
  "filters": {
    "replaceMs": function(input) {
      return input.replace(/m/g, "f");
    },
    "customFilter": "./test/filters/customfilter.js"
  }
};
