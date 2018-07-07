const path = require('path');

module.exports = function loader(content) {
  this.cacheable();

  const callback = this.async();
  // const fileName = path.basename(this.resourcePath, '.styled');

  var styledComponents = content.toString();

  // styled tags``
  styledComponents = styledComponents.replace(/^([a-z0-9\-_]+)#([a-zA-Z0-9\-_]+)(\.[a-zA-Z0-9\-_\.]+)? {$/mg, 'export const $2 = styled.$1`');

  // @keyframes
  styledComponents = styledComponents.replace(/^@keyframes ([a-zA-Z0-9\-_]+) {$/mg, 'export const $1 = keyframes`');

  // Closing curly braces
  styledComponents = styledComponents.replace(/^}$/mg, '`;');

  // Remove spaces (comments should be taken care of)
  // styledComponents = styledComponents.replace(/\t/g, '');
  // styledComponents = styledComponents.replace(/\n/g, '');
  // styledComponents = styledComponents.replace(/  +/g, '');
  // styledComponents = styledComponents.replace(/export const/g, '\nexport const');

  console.log('styledContent', `import styled, { keyframes } from 'styled-components';

  ${styledComponents}
  `);

  // We want styledComponents to look like this
  // export const Icon = (params) => (``);

  callback(null,
      `import styled, { keyframes } from 'styled-components';

      ${styledComponents}
      `);
};

module.exports.raw = true;
