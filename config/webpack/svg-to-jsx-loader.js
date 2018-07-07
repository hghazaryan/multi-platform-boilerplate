// A modified version of
// https://github.com/frenzzy/svg-to-jsx-loader/releases/tag/v2.0.1

const path = require('path');
const svgToJsx = require('svg-to-jsx');

function toUpperCamelCase(string) {
  return string.split(/[^a-zA-Z]+/).map(word =>
    word && word[0].toUpperCase() + word.slice(1)
  ).join('');
}

module.exports = function loader(content) {
  this.cacheable();

  const options = this.query;
  // console.log('platform', options.platform);
  const callback = this.async();
  const fileName = path.basename(this.resourcePath, '.svg');
  const componentName = toUpperCamelCase(fileName) || 'Svg';

  // const jsx = content.toString();

  // console.log('content', jsx);

  svgToJsx(content, (err, jsx) => {
    if (err) {
      callback(err);
      return;
    }

    // console.log('jsx', jsx);
    // let source = content.toString();
    let source = jsx;
    let viewBoxMatches = source.match(/viewBox=("|')([^"']+)("|')/i);
    let viewBoxSource = '';

    if (viewBoxMatches !== null && viewBoxMatches.length > 1) {
        const viewBox = viewBoxMatches[2];
        viewBoxSource = `
            const viewBox = [${viewBox.replace(/ /g, ',')}];

            if (props.width && !props.height) {
                attributes.height = Math.ceil(props.width * viewBox[3] / viewBox[2]);
            }
            else if (!props.width && props.height) {
                attributes.width = Math.ceil(props.height * viewBox[2] / viewBox[3]);
            }
        `;
    }


    let svgSource = `${source.replace(/(<svg[^>]*)(>)/i, '$1 {...attributes} {...props}$2{props.children}')}`;
    let svgImport = '';

    if (options.platform === 'sketch') {
        svgImport = `import { Svg } from 'react-sketchapp';`;

        svgSource = svgSource.replace('<svg', '<Svg');
        svgSource = svgSource.replace('</svg', '</Svg');
        svgSource = svgSource.replace(/<(\/?)([a-z])/g, function(m, closingSlash, firstLetter, p) {
            return '<' + closingSlash + 'Svg.' + firstLetter.toUpperCase();
        });
    }

    // console.log('viewBoxSource', viewBoxSource);
    // console.log('svgSource', svgSource);

    let svgModule = `import React from 'react';
    ${svgImport}

    function ${componentName}(props) {
        const attributes = {};
        ${viewBoxSource}
        return (${svgSource});
    }

    export default ${componentName};`;

    // console.log("\n\n"+svgModule+"\n\n");

    callback(null, svgModule);
  });
};

module.exports.raw = true;
