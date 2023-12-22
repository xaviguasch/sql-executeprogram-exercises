// Quiz: "Two Foreign Keys"
// Create three tables:

// People have an id and a name.
// Cats have an id, an owner_id, and a name.
// Toys have a cat_id and a name.
// Both IDs are integer primary keys.

exec(`
  CREATE TABLE people (id INTEGER PRIMARY KEY, name TEXT NOT NULL);
  CREATE TABLE cats (
    id INTEGER PRIMARY KEY,
    owner_id INTEGER REFERENCES people(id),
    name TEXT NOT NULL
  );
  CREATE TABLE toys (
    cat_id INTEGER REFERENCES cats(id),
    name TEXT NOT NULL
  );
`)

//   exec(`
//   -- We can insert a person, cat, and toy.
//   INSERT INTO people (id, name) VALUES (100, 'Amir');
//   INSERT INTO cats (id, owner_id, name) VALUES (1000, 100, 'Ms. Fluff');
//   INSERT INTO toys (cat_id, name) VALUES (1000, 'Birdo');
// `);
// Expected: [] but got: SyntaxError: on line 4: Unexpected token, expected ","
