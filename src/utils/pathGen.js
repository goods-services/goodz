const path = require('path');

module.exports = basePath => filePath => {
  const dir = path.join(process.cwd(), basePath);
  return `${dir}/${filePath}`;
};
