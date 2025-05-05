-- Electronics Products
INSERT INTO products (id, name, description, price, brand, category, image_url) VALUES
(UUID(), 'iPhone 13 Pro', 'Latest Apple iPhone with advanced camera system', 999.99, 'Apple', 'ELECTRONICS', '/images/i_phone_13_pro.jpg'),
(UUID(), 'Samsung Galaxy S21', 'Powerful Android smartphone with 5G', 799.99, 'Samsung', 'ELECTRONICS', '/images/samsung_galaxy_s21.jpg'),
(UUID(), 'MacBook Pro M1', 'Apple laptop with M1 chip', 1299.99, 'Apple', 'ELECTRONICS', '/images/MacBook Pro M1.jpg'),
(UUID(), 'Sony WH-1000XM4', 'Premium noise-cancelling headphones', 349.99, 'Sony', 'ELECTRONICS', '/images/Sony-WH-1000XM4.jpg'),
(UUID(), 'Dell XPS 13', 'Ultra-thin laptop with InfinityEdge display', 1199.99, 'Dell', 'ELECTRONICS', '/images/Dell_leptop.jpg');

-- Fashion Products
INSERT INTO products (id, name, description, price, brand, category, image_url) VALUES
(UUID(), 'Nike Air Max', 'Classic running shoes with air cushioning', 129.99, 'Nike', 'FASHION', '/images/Nike_Air_Shoes.jpg'),
(UUID(), 'Levi''s 501 Jeans', 'Classic straight-leg jeans', 59.99, 'Levi''s', 'FASHION', '/images/Levis_Jeans.jpg'),
(UUID(), 'Adidas Ultraboost', 'Responsive running shoes with Boost technology', 179.99, 'Adidas', 'FASHION', '/images/Addidas_Ultra_boost.jpg'),
(UUID(), 'Zara T-Shirt', 'Basic cotton t-shirt', 19.99, 'Zara', 'FASHION', '/images/zara_tshirt.jpg'),
(UUID(), 'H&M Hoodie', 'Comfortable cotton hoodie', 29.99, 'H&M', 'FASHION', '/images/H&M Hoodi.jpg');

-- Books Products
INSERT INTO products (id, name, description, price, brand, category, image_url) VALUES
(UUID(), 'The Great Gatsby', 'Classic novel by F. Scott Fitzgerald', 9.99, 'Penguin Books', 'BOOKS', '/images/The Great Gatsby.jpg'),
(UUID(), 'To Kill a Mockingbird', 'Harper Lee''s masterpiece', 12.99, 'HarperCollins', 'BOOKS', '/images/the_Hobbit.jpg'),
(UUID(), '1984', 'George Orwell''s dystopian classic', 10.99, 'Penguin Books', 'BOOKS', '/images/book_1948.jpg'),
(UUID(), 'The Hobbit', 'J.R.R. Tolkien''s fantasy novel', 14.99, 'Houghton Mifflin', 'BOOKS', '/images/the_Hobbit.jpg'),
(UUID(), 'Pride and Prejudice', 'Jane Austen''s romantic novel', 8.99, 'Penguin Books', 'BOOKS', '/images/book_1948.jpg');