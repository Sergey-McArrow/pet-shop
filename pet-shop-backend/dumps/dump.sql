BEGIN;

CREATE TABLE IF NOT EXISTS "Category" (
  "id" SERIAL PRIMARY KEY,
  "title" TEXT NOT NULL,
  "image" TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS "Order" (
  "id" SERIAL PRIMARY KEY,
  "name" TEXT NOT NULL,
  "email" TEXT NOT NULL,
  "phone" TEXT NOT NULL,
  "total" INTEGER NOT NULL,
  "status" TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS "Product" (
  "id" SERIAL PRIMARY KEY,
  "title" TEXT NOT NULL,
  "price" INTEGER NOT NULL,
  "discount_price" INTEGER,
  "image" TEXT NOT NULL,
  "categoryId" INTEGER NOT NULL REFERENCES "Category"("id"),
  "orderId" INTEGER REFERENCES "Order"("id")
);

INSERT INTO "Category" ("id", "title", "image") VALUES
(1, 'Dry & Wet Food', '/category_img/1.jpeg'),
(2, 'Litter Boxes & Litter Trays', '/category_img/2.jpeg'),
(3, 'Baskets & Beds', '/category_img/3.jpeg'),
(4, 'Toys', '/category_img/4.jpeg'),
(5, 'Care & Grooming', '/category_img/5.jpeg'),
(6, 'Snacks & Supplements', '/category_img/6.jpeg'),
(7, 'Runs & Fencing', '/category_img/7.jpeg'),
(8, 'Trees & Scratching', '/category_img/8.jpeg');

INSERT INTO "Product" ("id", "title", "price", "discount_price", "image", "categoryId") VALUES
(1, 'BELCANDO Mini Dog Food', 35, 23, '/product_img/1.jpeg', 1),
(2, 'GranataPet Mini Royal Poultry, Dry Food for Dogs', 26, 15, '/product_img/2.jpeg', 1),
(3, 'animonda Carny Dry Cat Food for Adult Cats', 14, 9, '/product_img/3.jpeg', 1),
(4, 'Dehner Wild Nature Wet Dog Food', 20, NULL, '/product_img/4.jpeg', 1),
(5, 'PERFECT FIT Adult Dry Food for Adults', 28, NULL, '/product_img/5.jpeg', 1),
(6, 'MERA Pure Sensitive Turkey, Wet Dog Food', 35, NULL, '/product_img/6.jpeg', 1),
(7, 'Edgard & Cooper Dog Food Wet Godfather Dog Adult', 12, NULL, '/product_img/7.jpeg', 1),
(8, 'Royal Canin Veterinary Renal | Twin Pack', 40, 35, '/product_img/8.jpeg', 1),
(9, 'Dry Dog Food for Adult Dogs', 100, 80, '/product_img/9.jpeg', 1),
(10, 'Feandrea Cat Litter Tray with Lid', 45, NULL, '/product_img/10.jpeg', 2),
(11, 'UBPET C20 Selbstreinigende Katzentoilette', 400, 300, '/product_img/11.jpeg', 2),
(12, 'Ultra Cat Litter Tray Self-Cleaning', 600, 450, '/product_img/12.jpeg', 2),
(13, 'Bedsure Washable Dog Basket Medium Dogs', 31, NULL, '/product_img/13.jpeg', 3),
(14, 'Bedsure Orthopaedic Dog Bed, Ergonomic Dog Sofa', 42, NULL, '/product_img/14.jpeg', 3),
(15, 'Black Dog Bed, Large Dogs', 150, 50, '/product_img/15.jpeg', 3),
(16, 'Cat Toy with Real Random Trajectory', 50, 25, '/product_img/16.jpeg', 4),
(17, 'Acecy Dog Toy, Chew Toy Dog Almost Indestructible', 15, NULL, '/product_img/17.jpeg', 4),
(18, 'Ballistol Animal 28-Piece Towel - Multi-Colour', 13, NULL, '/product_img/18.jpeg', 5),
(19, 'Pet Brush for Short Hair', 20, NULL, '/product_img/19.jpeg', 5),
(20, 'ivvi Skin & Coat Omega 3 for Dogs Against Itching in Treat Format', 29, NULL, '/product_img/20.jpeg', 6),
(21, 'Ida Plus Darmbiotic', 25, NULL, '/product_img/21.jpeg', 6),
(22, 'Foldable Exercise Pet Playpen', 41, NULL, '/product_img/22.jpeg', 7),
(23, 'Puppy Run with 4 Panels and Lockable Door', 39, NULL, '/product_img/23.jpeg', 7),
(24, 'ESTEXO Cat Scratching Post Scratching', 44, 30, '/product_img/24.jpeg', 8),
(25, 'Cat Scratching Post Cat Tree', 39, NULL, '/product_img/25.jpeg', 8);

-- Reset sequences
SELECT setval('"Category_id_seq"', (SELECT MAX(id) FROM "Category"));
SELECT setval('"Product_id_seq"', (SELECT MAX(id) FROM "Product"));
SELECT setval('"Order_id_seq"', (SELECT MAX(id) FROM "Order"));

COMMIT;
