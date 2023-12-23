// Quiz: "Discounts and Users and Comments"
// Create users, discounts, and comments tables. A user can have one discount (but may have no discount at all). Many comments can belong to the same user.

// We've given you the basic table structure. However, the constraints are missing (foreign keys, nullability, and uniqueness). Insert the appropriate constraints, using the tests as a guide.

exec(`
  CREATE TABLE users (
    id INTEGER PRIMARY KEY,
    discount_id INTEGER REFERENCES discounts(id) UNIQUE,
    name TEXT NOT NULL
  );
  CREATE TABLE discounts (
    id INTEGER PRIMARY KEY,
    discount_code TEXT NOT NULL
  );
  CREATE TABLE comments (
    user_id INTEGER REFERENCES users(id) NOT NULL,
    comment_text TEXT NOT NULL
  );
`)

// Users can't reference discounts that don't exist.
// exec(`INSERT INTO users (name, discount_id) VALUES ('Amir', 1234)`);
// Expected: Error: FOREIGN KEY constraint failed but got: []
