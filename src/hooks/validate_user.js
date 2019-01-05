const { BadRequest, Conflict } = require(`@feathersjs/errors`);


const validateUser = async context => {
  const { data } = context;
  if (!data.user_name) throw new BadRequest(`user_name must exist`);

  const dataUser = await context.app.service(`user`).find({
    query: {
      user_name: `${data.user_name}`
    }
  });

  if (dataUser.total) throw new Conflict(`user already exist`);
  return context;
}

module.exports = { validateUser };