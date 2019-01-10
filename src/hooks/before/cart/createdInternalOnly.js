const { REST } = require(`../../../constants/entities.js`);
const { PERMISSION_DENIED } = require(`../../../constants/errors.js`);

const internalOnly = async context => {
  if (context.params.provider === `${REST}`) throw new Error(`${PERMISSION_DENIED}`);
  return context;
};

module.exports = { internalOnly };