const keySecret = `sk_test_xdlm5mgI9XwUvUL8dxd8ACmF`;
const stripe = require(`stripe`)(keySecret);

module.exports = stripe;