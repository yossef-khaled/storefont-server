
### All the tables of the schema
|    Schema |     Name      | Type  |  Owner    | 
|   :---    |    :----:     | :----: |     ---: |
|    public | migrations    | table  | postgres |
|    public | order_product | table  | postgres |
|    public | orders        | table  | postgres |
|    public | products      | table  | postgres |
|    public | users         | table  | postgres |

#### Table users, unique with (id) :

|     column    |     Type                |
|---------------|-------------------------|
| id            | SERIAL PRIMARY KEY      |
| firstname     | VARCHAR(50)             |
| lastname      | VARCHAR(50)             |
| password      | VARCHAR(50)             |
 

#### Table products, unique with (id) :

|    column    |         Type           |
|--------------|------------------------|
| id           | SERIAL PRIMARY KEY     |
| name         | VARCHAR(50)            |
| price        | FLOAT                  |
| category     | VARCHAR(50)            |


#### Table orders, unique with (id) :

|    column    |                             Type                         |
|--------------|----------------------------------------------------------|
| id           | SERIAL PRIMARY KEY                                       |
| orderStatus  | VARCHAR(50)                                              |
| userId       | INT NOT NULL FOREIGN KEY ("userId") REFERENCES users(id) |



#### Table order_product, unique with (foregin key orderId, foregin key productId) :
#### This table holds the recordes from the Many-To-Many relationship between `orders` and `products`

|    column  |                         Type                               |
|------------|------------------------------------------------------------|
| orderId    | NOT NULL FOREIGN KEY ("userId") REFERENCES orders(id)      |                                  
| productId  | NOT NULL FOREIGN KEY ("userId") REFERENCES products(id)    |                                 
| quantity   | INT                                                        |


