const path = require('path');

module.exports = function loader(content) {
  this.cacheable();

  const callback = this.async();
  const fileName = path.basename(this.resourcePath, '.json');
  const locale = fileName || 'en_US';
  const dictionary = JSON.parse(content) || {};

  callback(null,
    `const locale = '${locale}';\n` +
    `const dictionary = ${JSON.stringify(dictionary, null, '\t')};` +

    `export { locale, dictionary };`
  );
};

module.exports.raw = true;
