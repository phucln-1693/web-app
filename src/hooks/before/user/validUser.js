const { BadRequest, Conflict } = require(`@feathersjs/errors`);


const validUser = async context => {
  const { data } = context;
  if (!data.user_name) throw new BadRequest(`user_name must exist`);

  const userData = await context.app.service(`user`).find({
    query: {
      user_name: `${data.user_name}`
    }
  });

  if (userData.total) throw new Conflict(`user already exist`);
  return context;
}

module.exports = { validUser };