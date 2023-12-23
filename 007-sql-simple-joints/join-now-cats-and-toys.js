// Here's a code problem:

// Use a join to find cats and their toys. The join should return two columns aliased with AS: cat (the cat's name) and toy (the toy's name).

exec(`
  CREATE TABLE cats (
    id INTEGER PRIMARY KEY NOT NULL,
    name TEXT NOT NULL
  );
  CREATE TABLE toys (
    cat_id INTEGER REFERENCES cats(id) NOT NULL,
    name TEXT NOT NULL
  );

  INSERT INTO cats (id, name) VALUES (1, 'Ms. Fluff');
  INSERT INTO cats (id, name) VALUES (2, 'Keanu');

  INSERT INTO toys (cat_id, name) VALUES (1, 'Birdo');
  INSERT INTO toys (cat_id, name) VALUES (2, 'Mouser');
  INSERT INTO toys (cat_id, name) VALUES (2, 'Shy Guy');
`)

exec(`
SELECT
cats.name AS cat,
toys.name AS toy
FROM cats
JOIN toys
ON cats.id = toys.cat_id`)

// GOAL: [{cat: 'Ms. Fluff', toy: 'Birdo'}, {cat: 'Keanu', toy: 'Mouser'}, {cat: 'Keanu', toy: 'Shy Guy'}]
