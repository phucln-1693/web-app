# web-app

> my first demo with stripe api

## How do you run this repo local

1. Install your dependencies

    ```
        cd path/to/web-app; npm install
    ```

2. Change link mongodb to you local
    ```
        cd path/to/web-app/config/default.json
    ```
change this value:
    ```
        "mongodb": "mongodb://heroku01:heroku01@ds151292.mlab.com:51292/web_app"
    ```
to this value:
    ```
        "mongodb": "mongodb://localhost:27017/web_app"
    ```

3. Start your app

    ```
        npm start
    ```

## A demo available at:

    https://boiling-badlands-29297.herokuapp.com/ | https://git.heroku.com/boiling-badlands-29297.git

## Note:
```
    The first time you call post-man or curl will be a few second because Heroku's idle. The others should be quickly.

    Basic knowledge about feathers and stripe's api are required.
```

## Definition:
1. <a  name="user"> USER </a>
```
    The user's object, which you will login to system.
    The authentication/authorization is coming soon.
```

2. <a name="product"> PRODUCT </a>
```
    The product object may be is goods or service, that you provide.
    Current you can use only one prod with prodId: prod_ELSeKVtAIdZoSl
```

3. <a name="plan"> PLAN </a>
```
    If product is goods, for example. You can sell them( per_unit with quantity).
    If product is service, for example. It can be for rent. And plan define how long it can be rent
```
4. <a name="token"> TOKEN </a>
```
    Token is infomation about your card number. It doesn't store your card number in tokenId or token's object.
    With token, you can create a customer.
    Tokens can be use only once.
```
5. <a name="customer"> CUSTOMER </a>
```
    A customer created by a token.
    Used to subcription a plan
```
6. <a name="subsciption"> SUBSCRIPTION </a>
```
    Imagine that you are customer. And we provide a service: prod_ELSeKVtAIdZoSl. And plan: plan_EL7kRn7L2E2v0g is rent prod_ELSeKVtAIdZoSl with 500$/month.
    With subscription you can rent this prod_ELSeKVtAIdZoSl.
    Subscription need customer, plan. 
    With subscription your can rent in Day, Week, Month, Year( 1 day, 3 day, 1 week, 3 week...), quantity = 1, 3...
```

## Flow:

1. First of all. You should create  [user](#user). At this time, User in this demo do nothing.
2. Create [product](#product). At this time, you can use: `prod_ELSeKVtAIdZoSl`. Don't need create new.
3. Create [plan](#plan). Plan let us know you want rent by: day, week, month or year ( interval=day). And when this will payment ( each 3 day, 1 week, 2 week, 3 month).
4. Create [token](#token). With card's information. You will create a token ( used only once).
5. Create [customer](#customer). With token create above. You will create a customer.
6. Last step create [subscription](#subscription). Subscription let us know quantity ( if plan's billing_schema is per_unit) you want pay for. Done this, you'll finished flow, rented a servce or goods. :tada:

## The rest is about post-man and curl for Flow above

### POST MAN:
1. USER
    * GET-ALL
    ```
        https://boiling-badlands-29297.herokuapp.com/user    
    ```
    * GET
    ```
        https://boiling-badlands-29297.herokuapp.com/user/5c3570d0fb99d348c61b6226
    ```
    * POST
    ```
        https://boiling-badlands-29297.herokuapp.com/user
    ```

    with header: `application/json` and body as below
    ```json
        {
            "userName": "your_user_name"
        }
    ```
    userName must be unique

2. PRODUCT
    * POST
    ```
        https://boiling-badlands-29297.herokuapp.com/products
    ```
    with header: `aplication/json` and body as below:
    ```json
        {
            "name": "prod001",
            "type": "service"
        }
    ```
    * GET
    ```
        https://boiling-badlands-29297.herokuapp.com/products/prod_ELTWjf2qWFyMSr
    ```
    * GET-ALL
    ```
        https://boiling-badlands-29297.herokuapp.com/products
    ```
3. PLAN
    * POST
    ```
        https://boiling-badlands-29297.herokuapp.com/plans
    ```
    with hearder: `application/json` and body as below:
    ```json
        {
            "amount": "5475000",
            "interval": "year",
            "product": "prod_ELSeKVtAIdZoSl",
            "currency": "usd",
            "nickname": "For test yearly",
            "interval_count": 1
        }
    ```
    Note: 
        daily: plan_ELTgHnuFtX11a8
        weekly: plan_ELTipEAGZnzXme
        monthly: plan_ELTj14pCPBoLX5
        yearly: plan_ELTmSXujyJgBjb
    * GET
    ```
        https://boiling-badlands-29297.herokuapp.com/plans/plan_ELTmSXujyJgBjb
    ```

    * GET-ALL plan: should I disable this api?
    ```
        https://boiling-badlands-29297.herokuapp.com/plans
    ```
4. TOKEN
    * POST
    ```
        https://boiling-badlands-29297.herokuapp.com/tokens
    ```
    with header: `application/json` and body as below:
    ```json
        {
        "number": "4242424242424242",
        "exp_month": 12,
        "exp_year": 2020,
        "cvc": "123"
        }
    ```
    At this time token api is support card only( stripe's support so many other method, see their docs to see detail: [tokens](https://stripe.com/docs/api/tokens)).
    Remember tokens use only once.

    * GET
    ```
        https://boiling-badlands-29297.herokuapp.com/tokens/tok_1DsmzHHpJ69RA3WHGoxEM9EV
    ```
    * GET-ALL: I disallowed this api.
    ```
    ```
5. CUSTOMER
    * POST
    ```
        https://boiling-badlands-29297.herokuapp.com/customers
    ```
    with header `application/json` and body as below:
    ```json
        {
        "source": "tok_1DsmzHHpJ69RA3WHGoxEM9EV"
        }
    ```
    * GET
    ```
        https://boiling-badlands-29297.herokuapp.com/customers/cus_ELU1pqi6gp5lQe
    ```
    * GET-ALL
    ```
        https://boiling-badlands-29297.herokuapp.com/customers
    ```
6. SUBSCRIPTION
    * POST 
    ```
        https://boiling-badlands-29297.herokuapp.com/subscriptions
    ```
    with header: `application/json` and body as below:
    ```json
        {
            "customer": "cus_ELU1pqi6gp5lQe",
            "plans": [{"plan": "plan_ELTgHnuFtX11a8"}]
        }
    ```
    * GET
    ```
        https://boiling-badlands-29297.herokuapp.com/subscriptions/sub_ELUDE8Utqxb2x4
    ```
    * GET-ALL
    ```
        https://boiling-badlands-29297.herokuapp.com/subscriptions
    ```

### CURL
If you want view json format add this at end of each curl command: 
```
    | json_pp
```
Paste those command on terminal to execute
1. USER
    * GET-ALL
    ```
        curl -X GET https://boiling-badlands-29297.herokuapp.com/user   
    ```
    * GET
    ```
        curl -X GET  https://boiling-badlands-29297.herokuapp.com/user/5c3570d0fb99d348c61b6226
    ```
    * POST
    ```
        curl -X POST  https://boiling-badlands-29297.herokuapp.com/user  -H 'Content-Type: application/json' -d '{ "userName": "your_user_name" }'
    ```
    userName must be unique

2. PRODUCT
    * POST
    ```
        curl -X POST https://boiling-badlands-29297.herokuapp.com/products -H 'Content-Type: application/json' -d '{"name": "curlProd001","type": "service"}'
    ```
    * GET
    ```
        curl -X GET https://boiling-badlands-29297.herokuapp.com/products/prod_ELTWjf2qWFyMSr
    ```
    * GET-ALL
    ```
        curl -X GET https://boiling-badlands-29297.herokuapp.com/products
    ```
3. PLAN
    * POST
    ```
        curl -X POST https://boiling-badlands-29297.herokuapp.com/plans -H 'Content-Type: application/json' -d '{ "amount": "5475000", "interval": "year", "product": "prod_ELSeKVtAIdZoSl", "currency": "usd", "nickname": "For test yearly", "interval_count": 1 }'
    ```
    * GET
    ```
        curl -X GET https://boiling-badlands-29297.herokuapp.com/plans/plan_ELURlXKG7xc8ix
    ```
    * GET-ALL
    ```
        curl -X GET https://boiling-badlands-29297.herokuapp.com/plans
    ```
4. TOKEN
    * POST
    ```
        curl -X POST https://boiling-badlands-29297.herokuapp.com/tokens -H 'Content-Type: application/json' -d '{ "number": "4242424242424242", "exp_month": 12, "exp_year": 2020, "cvc": "123" }'
    ```
    * GET
    ```
        curl -X GET https://boiling-badlands-29297.herokuapp.com/tokens/tok_1DsnVlHpJ69RA3WHgTUjRHU3
    ```
    * GET-ALL | Now I disallowed this api
    ```
        curl -X GET https://boiling-badlands-29297.herokuapp.com/tokens
    ```
5. CUSTOMER
    * POST
    ```
       curl -X POST https://boiling-badlands-29297.herokuapp.com/customers -H 'Content-Type: application/json' -d '{ "source": "tok_1DsnVlHpJ69RA3WHgTUjRHU3" }' 
    ```
    * GET
    ```
        curl -X GET https://boiling-badlands-29297.herokuapp.com/customers/cus_ELUd9Jk8xNNyd4
    ```
    * GET-ALL
    ```
        curl -X GET https://boiling-badlands-29297.herokuapp.com/customers
    ```
6. SUBSCRIPTION
    * POST
    ```
        curl -X POST https://boiling-badlands-29297.herokuapp.com/subscriptions -H 'Content-Type: application/json' -d '{"customer": "cus_ELU1pqi6gp5lQe","plans": [{"plan": "plan_ELTgHnuFtX11a8"}]}'
    ```
    * GET
    ```
        curl -X GET https://boiling-badlands-29297.herokuapp.com/subscriptions/sub_ELUgYbwEL1iCtj
    ```
    * GET-ALL
    ```
        curl -X GET https://boiling-badlands-29297.herokuapp.com/subscriptions
    ```