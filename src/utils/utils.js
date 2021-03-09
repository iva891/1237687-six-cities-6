const type = (value) => {
  const regex = /^\[object (\S+?)\]$/;
  const matches = Object.prototype.toString.call(value).match(regex) || [];

  return (matches[1] || `undefined`).toLowerCase();
};

const prepareData = (obj) => Object
  .entries(obj)
  .reduce((acc, [key, value]) => {

    if (type(value) === `object`) {
      value = prepareData(value);
    }

    const modifiedKey = key.replace(/_([a-z])/g, (g) => g[1].toUpperCase());
    return ({
      ...acc,
      ...{[modifiedKey]: value},
    });
  }, {});

export {prepareData};
