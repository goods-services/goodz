module.exports = [
  {
    name: 'eq',
    fn(arg1, arg2, options) {
      return (arg1 === arg2) ? options.fn(this) : options.inverse(this);
    }
  },
  {
    name: 'neq',
    fn(arg1, arg2, options) {
      return (arg1 !== arg2) ? options.fn(this) : options.inverse(this);
    }
  },
  {
    name: 'ifIn',
    fn(elem, list, options) {
      if (list.indexOf(elem) > -1) {
        return options.fn(this);
      }
      return options.inverse(this);
    }
  }
];