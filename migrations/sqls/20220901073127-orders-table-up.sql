CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    "orderStatus" VARCHAR(20),
    "userId" INT NOT NULL,
    FOREIGN KEY ("userId") REFERENCES users(id), 
    UNIQUE (id, "userId")
);