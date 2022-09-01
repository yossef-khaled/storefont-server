CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    "orderStatus" VARCHAR(20),
    "userID" INT NOT NULL,
    FOREIGN KEY ("userID") REFERENCES users(id), 
    UNIQUE (id, "userID")
);