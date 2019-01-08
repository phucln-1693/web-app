const rejectExternal = async context => {

  if (context.params.provider === `rest`) throw new Error(`Permission denied`);
  return context;
}

module.exports = { rejectExternal };