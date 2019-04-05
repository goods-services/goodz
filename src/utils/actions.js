module.exports = {
  add(dest, src, rest) {
    return {
      type: 'add',
      path: src,
      templateFile: dest,
      ...rest
    }
  }
};
