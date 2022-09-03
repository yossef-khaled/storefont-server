CREATE TABLE order_product (
    "orderId" INT NOT NULL,
    "productId" INT NOT NULL,
    quantity INT,
    FOREIGN KEY ("orderId") REFERENCES orders(id), 
    FOREIGN KEY ("productId") REFERENCES products(id),
    UNIQUE ("orderId", "productId") 
);