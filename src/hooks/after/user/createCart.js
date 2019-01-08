const { BadRequest, Conflict } = require(`@feathersjs/errors`);


const createCart = async context => {
  const { result } = context;
  const userId = result._id.id.toString(`hex`);
  if (!userId) throw new BadRequest(`userId must exist`);

  await context.app.service(`cart`).create({
    _id: userId,
    goods: []
  });

  return context;
}

module.exports = { createCart };