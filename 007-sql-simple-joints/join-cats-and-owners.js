// Here's a code problem:

// Write a JOIN that joins people and cats on cats.owner_id = people.id. Make sure that you join people to cats, in that order.

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

  -- Amir owns Ms. Fluff
  INSERT INTO people (id, first_name) VALUES (100, 'Amir');
  INSERT INTO cats (owner_id, name) VALUES (100, 'Ms. Fluff');

  -- Betty owns Keanu
  INSERT INTO people (id, first_name) VALUES (200, 'Betty');
  INSERT INTO cats (owner_id, name) VALUES (200, 'Keanu');
`)
exec(`SELECT * FROM people JOIN cats ON people.id = cats.owner_id`)

// GOAL: [{id: 1, first_name: 'Amir', owner_id: 100, name: 'Ms. Fluff'}, {id: 2, first_name: 'Betty', owner_id: 200, name: 'Keanu'}]
