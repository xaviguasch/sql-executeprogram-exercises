// Here's a code problem:

// Create a cats table with a TEXT name and an owner_id INTEGER foreign key that references the id column of the people table.

exec(`CREATE TABLE people (id INTEGER PRIMARY KEY, name TEXT NOT NULL);`)
exec(`
CREATE TABLE cats (
  owner_id INTEGER REFERENCES people(id),
  name TEXT NOT NULL
);
`)
exec(`INSERT INTO cats (owner_id, name) VALUES (200, 'Keanu')`)

// GOAL: Error: FOREIGN KEY constraint failed
