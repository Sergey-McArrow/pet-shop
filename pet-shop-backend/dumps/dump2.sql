--BEGIN;
CREATE TABLE IF NOT EXISTS categories (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    image VARCHAR(255)
);
-- Inserting values into the 'categories' table
INSERT INTO categories (id, title, createdAt, updatedAt, image) VALUES
(1, 'Dry & Wet Food', '2022-10-02 14:43:29', '2022-10-02 14:43:29', '/category_img/1.jpeg'),
(2, 'Litter Boxes & Litter Trays', '2022-10-02 14:43:29', '2022-10-02 14:43:29', '/category_img/2.jpeg'),
(3, 'Baskets & Beds', '2022-10-02 14:43:29', '2022-10-02 14:43:29', '/category_img/3.jpeg'),
(4, 'Toys', '2022-10-02 14:43:29', '2022-10-02 14:43:29', '/category_img/4.jpeg'),
(5, 'Care & Grooming', '2022-10-02 14:43:29', '2022-10-02 14:43:29', '/category_img/5.jpeg'),
(6, 'Snacks & Supplements', '2022-10-02 14:43:29', '2022-10-02 14:43:29', '/category_img/6.jpeg'),
(7, 'Runs & Fencing', '2022-10-02 14:43:29', '2022-10-02 14:43:29', '/category_img/7.jpeg'),
(8, 'Trees & Scratching', '2022-10-02 14:43:29', '2022-10-02 14:43:29', '/category_img/8.jpeg');

--COMMIT;

CREATE TABLE IF NOT EXISTS products (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    price NUMERIC(10, 2) NOT NULL,
    discount_price NUMERIC(10, 2),
    description TEXT,
    createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    categoryId INT REFERENCES categories(id) ON DELETE SET NULL,
    image VARCHAR(255)
);
-- Inserting values into the 'products' table
INSERT INTO products (id, title, price, discount_price, description, createdAt, updatedAt, categoryId, image) VALUES
(1, 'BELCANDO Mini Dog Food', 35, 23, 'Versatile selection: discover the culinary world for your little four-legged friend with 2 types of dry food and 6 types of wet food. So there is something for every taste. High acceptance: our balanced formula is rich in essential nutrients, vitamins and minerals and is tailored to the needs of small dog breeds. An all-round supply that leaves nothing to be desired. Dry food: Finest GF Lamb - easily digestible and a croquette coated with instant sauce for extra taste. Finest Croc - rich in meat and with grape seed flour. Wet food: you will receive a selection of different types of wet food from our range: single protein chicken, single protein buffalo, duck with rice and cranberries, rabbit with millet and sweet potato, lamb with rice and tomatoes and chicken/duck with millet and potatoes. Made in Germany: Our feed is manufactured under the strictest quality standards in Germany and contains no artificial additives. All meat products used come from food-safe animals.', '2022-10-02 14:43:29', '2022-10-02 14:43:29', 1, '/product_img/1.jpeg'),
(2, 'GranataPet Mini Royal Poultry, Dry Food for Dogs', 26, 15, 'Really delicious: The dry dog food for small breeds up to 10 kg allows a natural diet of your four-legged friend, is completely tailored to his needs, grain-free and made without artificial additives. Only the best ingredients: the food with high-quality muscle meat and offal is easy to digest and provides your fur nose with valuable oils, important vitamins, nutrients and essential fatty acids. Enjoy grain-free: the dry food is a complete food for small dog breeds and does not use grains, sugar additives, artificial colours, flavours and preservatives in all varieties. The plus of nature: the dry food is rich in natural vitamins, nutrients and antioxidants thanks to green-lipped mussel and pomegranate seeds that can support the heart, circulation, cells and immune system.', '2022-10-02 14:43:29', '2022-10-02 14:43:29', 1, '/product_img/2.jpeg'),
(3, 'animonda Carny Dry Cat Food for Adult Cats', 14, 9, 'Premium: 100% fresh, meaty ingredients and offal from the country provide the best proteins and ensure a very special taste experience with this cat food. For adult cats: Carny Adult stands for a balanced, delicious and healthy diet and provides adult cats aged 1-6 years with all the vital nutrients and an extra dose of taurine. Natural: Of course, the wet cat food contains exclusively fresh meat ingredients, no flavour enhancers and neither cereals, sugar and soy, nor dyes and preservatives', '2022-10-02 14:43:29', '2022-10-02 14:43:29', 1, '/product_img/3.jpeg'),
(4, 'Dehner Wild Nature Wet Dog Food', 20, NULL, 'Grain-free premium dog food with wild boar - adult. Original, species-appropriate, 100% natural composition. With 70% animal protein, 30% plant ingredients. High meat content as well as vegetables, fruit, herbs and berries. Free from chemical additives, no sugar or soy.', '2022-10-02 14:43:29', '2022-10-02 14:43:29', 1, '/product_img/4.jpeg'),
(5, 'PERFECT FIT Adult Dry Food for Adults', 28, NULL, 'HEALTHY SKIN & HEALTHY COAT: Contains zinc to support healthy skin and coat. Enriched with Taurine Vitamin E and Vitamin C, which are known to support the natural defences. Made with high quality proteins and yeast, a natural source of prebiotics to support healthy digestion. HEALTHY URINARY TRACT A controlled mineral content helps maintain the lower urinary tract healthy. With tailored protein and energy content to support optimal weight control and physical condition.', '2022-10-02 14:43:29', '2022-10-02 14:43:29', 1, '/product_img/5.jpeg');

-- Add additional rows as needed

--COMMIT;
