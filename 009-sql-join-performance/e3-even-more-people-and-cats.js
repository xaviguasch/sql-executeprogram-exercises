// Here's a code problem:

// Write a SELECT ... FROM ... JOIN ... ON ... query to get a list of all cats and people. Remember to select people.name AS person, cats.name AS cat to get the right column names.

exec(`
  CREATE TABLE people (
    id INTEGER PRIMARY KEY NOT NULL,
    name TEXT NOT NULL
  );
  CREATE TABLE cats (
    owner_id INTEGER REFERENCES people(id) NOT NULL,
    name TEXT NOT NULL
  );

  INSERT INTO people (id, name) VALUES (100, 'Amir');
  INSERT INTO cats (owner_id, name) VALUES (100, 'Ms. Fluff');
  INSERT INTO people (id, name) VALUES (200, 'Betty');
  INSERT INTO cats (owner_id, name) VALUES (200, 'Keanu');
`)
exec(`
  SELECT
  people.name AS person,
  cats.name AS cat
  FROM people
  JOIN cats
  ON people.id = cats.owner_id
`)

// GOAL: [{person: 'Amir', cat: 'Ms. Fluff'}, {person: 'Betty', cat: 'Keanu'}]
