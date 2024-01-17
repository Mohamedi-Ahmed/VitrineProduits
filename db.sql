-- Suppression de la table des produits si elle existe déjà
DROP TABLE IF EXISTS products;

-- Création de la table des produits
CREATE TABLE products (
    id INT NOT NULL PRIMARY KEY IDENTITY,
    titre NVARCHAR(255) NOT NULL,
    description NVARCHAR(MAX),
    prix FLOAT NOT NULL,
    categorie NVARCHAR(50) NOT NULL,
    stock INT NOT NULL,
    image NVARCHAR(255)
);

-- Insertion des données dans la table des produits
INSERT INTO products (titre, description, prix, categorie, stock, image) VALUES 
('T-shirt en coton', 'T-shirt confortable en coton, taille M', 19.99, 'Vêtements', 50, 'image_tshirt.jpg'),
('Montre élégante', 'Montre analogique en acier inoxydable', 120.00, 'Accessoires', 30, 'image_montre.jpg'),
('Smartphone XYZ', 'Smartphone dernière génération avec écran 6 pouces', 499.99, 'Électronique', 20, 'image_smartphone.jpg'),
('Blender électrique', 'Blender puissant pour smoothies et jus', 89.99, 'Électroménager', 15, 'image_blender.jpg'),
('Jeans bleu', 'Jeans bleu classique, taille 32', 39.99, 'Vêtements', 40, 'image_jeans.jpg'),
('Casque audio', 'Casque audio sans fil avec réduction de bruit', 149.99, 'Électronique', 25, 'image_casque.jpg'),
('Sac à dos', 'Sac à dos durable pour randonnée', 59.99, 'Accessoires', 30, 'image_sac.jpg'),
('Four micro-ondes', 'Four micro-ondes compact avec plusieurs modes de cuisson', 99.99, 'Électroménager', 10, 'image_four.jpg'),
('Lunettes de soleil', 'Lunettes de soleil polarisées UV protection', 45.00, 'Accessoires', 50, 'image_lunettes.jpg'),
('Ordinateur portable', 'Ordinateur portable léger et performant', 699.99, 'Électronique', 15, 'image_ordinateur.jpg'),
('Basket de sport', 'Chaussures de sport confortables pour le running', 79.99, 'Vêtements', 30, 'image_basket.jpg'),
('Montre connectée', 'Montre connectée avec suivi de l''activité physique', 199.99, 'Électronique', 20, 'image_montre_connectee.jpg'),
('Caméra de surveillance', 'Caméra de surveillance WiFi avec vision nocturne', 159.99, 'Électronique', 15, 'image_camera.jpg'),
('Grille-pain', 'Grille-pain à 2 fentes avec contrôle de brunissement', 29.99, 'Électroménager', 25, 'image_grille_pain.jpg'),
('Sac à main', 'Sac à main en cuir élégant pour femme', 85.00, 'Accessoires', 20, 'image_sac_main.jpg');