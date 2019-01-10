const { BadRequest } = require(`@feathersjs/errors`);
const { CART, HEX } = require(`../../../constants/entities.js`);
const { MISSING_USER_ID } = require(`../../../constants/errors.js`);


const createCart = async context => {
  const { result } = context;
  const userId = result._id.id.toString(`${HEX}`);
  if (!userId) throw new BadRequest(`${MISSING_USER_ID}`);

  await context.app.service(`${CART}`).create({
    _id: userId,
    goods: []
  });

  return context;
};

module.exports = { createCart };