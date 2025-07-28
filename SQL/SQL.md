```
CRUD -- Create Read Update Destroy

// Create Table -- Syntax
CREATE TABLE table_name (
	column1 datatype,
	column2 datatype,
	...
)

// Example
CREATE TABLE products (
	id INT NOT NULL,
	name STRING,
	price MONEY,
	PRIMARY KEY (id)
)

// Insert Into -- Syntax 
INSERT INTO table_name (
	column1, 
	column2, 
	...
)
VALUES (
	value1, 
	value2, 
	...
)

// Example
INSERT INTO products
VALUES (1, "Pen", 1.20)

INSERT INTO products (id, name) // since we don't have the price data -- so we specify
VALUES (2, "Pencil")
```

```
// Select Statement -- Syntax
SELECT column1, column2, ...
FROM table_name

// Example
SELECT * FROM 'prducts' // shows the entire table

SELECT * FROM products WHERE id=1 // shows just the first row of the table
```

```
// Update data -- Syntax
UPDATE table_name
SET column1 = value1, column2 = value2, ...
WHERE condition

// Example
UPDATE products
SET price = 0.80
WHERE id=2

ALTER TABLE products // to add a column
ADD stock INT

// Update their stock values
UPDATE products
SET stock = 32
WHERE id=1

UPDATE products
SET stock = 12
WHERE id=2
```

```
// Delete statement -- Syntax
DELETE FROM table_name
WHERE condition

// Example
DELETE FROM products
WHERE id = 2
```

```
CREATE TABLE orders (
	id INT NOT NULL,
	order_number INT,
	customer_id INT,
	product_id INT,
	PRIMARY KEY (id),
	FOREIGN KEY (customer_id) REFERENCES customers(id), // foreign key shows relationships between two tables
	FOREIGN KEY (product_id) REFERENCES products(id)
)

INSERT INTO orders
VALUES (1, 4362, 2, 1)

// here we are relating two tables -- first, order and customers table and second, order and products table
SELECT orders.order_number, customers.first_name, customers.last_name, customers.address
FROM orders
INNER JOIN customers ON orders.customer_id = customers.id

SELECT orders.order_number, products.name, products.price, products.stock
FROM orders
INNER JOIN products ON orders.product_id = products.id
```