const stripe = require(`../../../../config/stripe.js`);
const error = require(`../../../constants/errors`);

// const subscriptionModel = {
//   customer: `cus_tok`, // validate customer,
//   plan: 'plan_ETit72Ku9xD8dH'
// };

// draft: nextMonth, nextMonth.daysInMonth() <= attendanceClosingDay; .diff

const createSubscription = async context => {
  const {
    data
  } = context;

  const {
    customer,
    plan,
  } = data;

  if (!customer || !plan) throw Error(`${error.INVALID_PARAM}`);
  const subObj = {
    customer,
    items: [{
      plan
    }]
  };
  subObj.trial_period_days = 3;
  await stripe.subscriptions.create(subObj)
    .then(sub => {
      context.result = sub;
      return context;
    })
    .catch(err => {
      if (err) throw Error(`${err}`);
      throw Error(`Unknow error when create Products`);
    });
};

module.exports = {
  createSubscription
};
