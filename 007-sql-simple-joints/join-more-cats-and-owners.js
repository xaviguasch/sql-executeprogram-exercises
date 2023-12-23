// Here's a code problem:

// Write a JOIN that joins people and cats on cats.owner_id = people.id. Using AS, return data in the form of [{person: 'Amir', cat: 'Ms. Fluff'}]

exec(`
  CREATE TABLE people (
    id INTEGER PRIMARY KEY NOT NULL,
    first_name TEXT NOT NULL
  );
  CREATE TABLE cats (
    id INTEGER PRIMARY KEY NOT NULL,
    owner_id INTEGER NOT NULL REFERENCES people(id),
    name TEXT NOT NULL
  );

  INSERT INTO people (id, first_name) VALUES (100, 'Amir');
  INSERT INTO cats (id, owner_id, name) VALUES (1, 100, 'Ms. Fluff');
  INSERT INTO people (id, first_name) VALUES (200, 'Betty');
  INSERT INTO cats (id, owner_id, name) VALUES (2, 200, 'Keanu');
`)
exec(`
SELECT people.first_name AS person, cats.name AS cat
FROM people
JOIN cats
  ON people.id = cats.owner_id
`)

// GOAL: [{person: 'Amir', cat: 'Ms. Fluff'}, {person: 'Betty', cat: 'Keanu'}]
