module.exports = {
  process(_src, filePath) {
    function escapeFileName(str) {
      const parts = `${str.replace('.svg','')}`
      .split(/\W+/);
      return `Svg${parts[parts.length-1]}`
    }
    const name = escapeFileName(filePath);
    return `
    const React = require('react');
    function ${name}(props) {
      return React.createElement(
        'svg', 
        Object.assign({}, props, {'data-file-name': ${name}.name})
      );
    }
    module.exports = ${name};
                `;
  },
};
