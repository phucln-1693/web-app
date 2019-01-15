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

    Basic knowledge about feathers and stripe api is required.
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
6. Last step create [subscription](#subscription). Done this, you'll finished flow, rented a servce a goods. :tada:

## 

######################################################
<a name="user">Test user again</a>
## A demo available at:
    
    https://boiling-badlands-29297.herokuapp.com/ | https://git.heroku.com/boiling-badlands-29297.git
    


The first time you call post-man or curl will be a few second because Heroku idle. The other should be quickly.




This repo support charge but now focus on payment with plan.
### Flow:
1. Create User
2. Create Token (use when create customer)
3. Create plan
4. Create subscription
### POST MAN:
1. USER
    * GET-ALL user
    ```
        https://boiling-badlands-29297.herokuapp.com/user    
    ```
    * GET an user info
    ```
        https://boiling-badlands-29297.herokuapp.com/user/5c3570d0fb99d348c61b6226
    ```
    * POST create an user
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

2. CART
    * POST:
        Cart auto created when you create user. Call from external now disallowed.
    * GET-ALL
    ```
        https://boiling-badlands-29297.herokuapp.com/cart
    ```
    * GET info a cart
    ```
        https://boiling-badlands-29297.herokuapp.com/cart/5c3570d0fb99d348c61b6226
    ```

    * PUT update goods in cart
    ```
        https://boiling-badlands-29297.herokuapp.com/cart/5c3570d0fb99d348c61b6226
    ```
    with header: `application/json` and body as below
    ```json
    {
        "goods": [{
            "_id": "1",
            "num": 1
        },{
            "_id": "2",
            "num": 4
        },{
            "_id": "3",
            "num": 8
        }, {
            "_id": "4",
            "num": 16
        }]
    }
    ```
3. GOODS
    * GET-ALL goods
    ```
        https://boiling-badlands-29297.herokuapp.com/goods
    ```
4. CHARGE
    * CHARGE call from post-man now not available. Just click button `Pay with Card` when you access: https://boiling-badlands-29297.herokuapp.com
    * The data now fixed with userID: `5c3570d0fb99d348c61b6226` has userName: `mLab01`



### CURL
If you want view json format add this at end of each curl command: 
```
    | json_pp
```
Paste those command on terminal to execute
1. USER
    * GET-ALL user
    ```
        curl -X GET https://boiling-badlands-29297.herokuapp.com/user   
    ```
    * GET an user info
    ```
        curl -X GET  https://boiling-badlands-29297.herokuapp.com/user/5c3570d0fb99d348c61b6226
    ```
    * POST create an user
    ```
        curl -X POST  https://boiling-badlands-29297.herokuapp.com/user  -H 'Content-Type: application/json' -d '{ "userName": "your_user_name" }'
    ```
    userName must be unique

2. CART
    * POST:
        Cart auto created when you create user. Call from external now disallowed.
    * GET-ALL
    ```
        curl -X GET  https://boiling-badlands-29297.herokuapp.com/cart 
    ```
    * GET info a cart
    ```
        curl -X GET  https://boiling-badlands-29297.herokuapp.com/cart/5c3570d0fb99d348c61b6226
    ```

    * PUT update goods in cart
    ```
        curl -X PUT https://boiling-badlands-29297.herokuapp.com/cart/5c3570d0fb99d348c61b6226  -H 'Content-Type: application/json' -d '{ "goods": [{ "_id": "1", "num": 1 },{ "_id": "2", "num": 4 },{ "_id": "3", "num": 8 }, { "_id": "4", "num": 16 }] }'
    ```
3. GOODS
    * GET-ALL goods
    ```
        curl -X GET https://boiling-badlands-29297.herokuapp.com/goods
    ```
4. CHARGE
    * SAME as post-man


