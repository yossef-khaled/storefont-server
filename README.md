
# storefront-server

## First, you need to install the packages listed in the `package.json` file using:


### `yarn install`


### Available Scripts
In the project directory, you can run:

 `yarn build`
### - To build the application
***

 `yarn watch`
### - To build the application and make tsc watch for changes
***

 `yarn test`
### - To run the test units
***

`yarn dev`
### - To run the index.js file 
*Will listen on port 3000*  
***

### End points for each model :

### **Users** :

   #### - index :
- `Route`: /users
- `Action` get
- `Header` Authorization - `Value` for example : 
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlRlc3RfVXNlciIsImlkIjo4NSwiaWF0IjoxNjYyNDc2MTUwfQ.IzhpuSRZowqLnaWe4ewBFn0n9-5oSveijRjwwP6HNqc

   #### - show :
- `Route`: /users/:id
- `Action` get
- `Header` Authorization - `Value` for example : 
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlRlc3RfVXNlciIsImlkIjo4NSwiaWF0IjoxNjYyNDc2MTUwfQ.IzhpuSRZowqLnaWe4ewBFn0n9-5oSveijRjwwP6HNqc
 
   #### - create :
- `Route`: /users
- `Action` post
- `Header` Authorization - `Value` for example : 
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlRlc3RfVXNlciIsImlkIjo4NSwiaWF0IjoxNjYyNDc2MTUwfQ.IzhpuSRZowqLnaWe4ewBFn0n9-5oSveijRjwwP6HNqc
- `Body` {
    firstname: *STRING*, 
    lastname: *STRING*, 
    password: *STRING*
}

*** 

### products :

   ##### - index :
- `Route`: /products
- `Action` get

   ##### - show :
- `Routes`: /products/key=:key&value=:Value for example :
/products/key=id&value=1 Will show product with id = 1
/products/key=category&value=Kitchen Will show products with category = Kitchen
/products/key=topProducts&value=5 Will show top 5 products
- `Action` get

   ##### - create :
- `Route`: /products
- `Action` post
- `Header` Authorization - `Value` for example : 
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlRlc3RfVXNlciIsImlkIjo4NSwiaWF0IjoxNjYyNDc2MTUwfQ.IzhpuSRZowqLnaWe4ewBFn0n9-5oSveijRjwwP6HNqc
- `Body` {
    name: *STRING*, 
    price: *NUMBER*, 
    category: *STRING*
} 
 
   ##### - add product to cart (orders that has a status = 'inCart' are refered to  as carts) :
- `Route`: /products/addToCart=:orderId for example :
products/addToCart=1 Will add 
- `Action` post
- `Header` Authorization - `Value` for example : 
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlRlc3RfVXNlciIsImlkIjo4NSwiaWF0IjoxNjYyNDc2MTUwfQ.IzhpuSRZowqLnaWe4ewBFn0n9-5oSveijRjwwP6HNqc
 
***

### orders :

   ##### - order history :
- `Route`: /orders
- `Action` get
- `Header` Authorization - `Value` for example : 
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlRlc3RfVXNlciIsImlkIjo4NSwiaWF0IjoxNjYyNDc2MTUwfQ.IzhpuSRZowqLnaWe4ewBFn0n9-5oSveijRjwwP6HNqc

   ##### - current order :
- `Route`: /orders/current
- `Action` get
- `Header` Authorization - `Value` for example : 
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlRlc3RfVXNlciIsImlkIjo4NSwiaWF0IjoxNjYyNDc2MTUwfQ.IzhpuSRZowqLnaWe4ewBFn0n9-5oSveijRjwwP6HNqc

   ##### - create an order :
- `Route`: /orders
- `Action` post
- `Header` Authorization - `Value` for example : 
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlRlc3RfVXNlciIsImlkIjo4NSwiaWF0IjoxNjYyNDc2MTUwfQ.IzhpuSRZowqLnaWe4ewBFn0n9-5oSveijRjwwP6HNqc