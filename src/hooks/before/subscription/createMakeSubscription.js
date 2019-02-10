const stripe = require(`../../../../config/stripe.js`);
const error = require(`../../../constants/errors`);
// const subscriptionModel = {
//   customer: `cus_tok`, // validate customer,
//   plans: [{
//     plan: "plan_EL7kRn7L2E2v0g"
//   },
//   {
//     plan: "plan_EL7cLi63pq1PSg",
//     quantity: 5
//   }]
// };

const createSubscription = async context => {
  const { data } = context;
  const { customer, plans } = data;
  // if (!customer || !plans || !Array.isArray(plans) || plans.length == 0) throw Error(`${error.INVALID_PARAM}`);
  // const subObj = {
  //   customer,
  //   items: []
  // };
  // for (let i = 0; i < plans.length; i++) {
  //   const planItem = plans[i];
  //   subObj.items.push({ plan: planItem.plan, quantity: planItem.quantity ? planItem.quantity : 1 });
  // }
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

module.exports = { createSubscription };  