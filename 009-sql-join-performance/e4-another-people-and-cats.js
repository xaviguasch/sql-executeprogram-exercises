// Here's a code problem:

// Write a JOIN query to find all cats that are owned by a person with a name of "Amir".

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
exec(`  SELECT
people.name AS person,
cats.name AS cat
FROM people
JOIN cats
ON people.id = cats.owner_id
WHERE people.name = 'Amir'`)

// GOAL: [{person: 'Amir', cat: 'Ms. Fluff'}]
