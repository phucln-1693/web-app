const { USER } = require(`../../../constants/entities`);
const { BadRequest, Conflict } = require(`@feathersjs/errors`);
const { MISSING_USER_NAME, CONFLIC_USER_NAME } = require(`../../../constants/errors.js`);

const validUser = async context => {
  const { data } = context;
  if (!data.userName) throw new BadRequest(`${MISSING_USER_NAME}`);

  const userData = await context.app.service(`${USER}`).find({
    query: {
      userName: `${data.userName}`
    }
  });

  if (userData.total) throw new Conflict(`${CONFLIC_USER_NAME}`);
  return context;
};

module.exports = { validUser };