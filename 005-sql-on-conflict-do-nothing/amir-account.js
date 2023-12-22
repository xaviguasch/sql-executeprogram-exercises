// Here's a code problem:

// Amir requested account deactivation on 2025-10-03. We deactivated his account as requested. Then he requested deactivation again on 2025-10-22. We want that request to be ignored, and it shouldn't change the deactivation date. Finish the final INSERT here to use ON CONFLICT to ignore the deactivation request if the account is already deactivated.

exec(`
  CREATE TABLE users (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL
  );
  CREATE TABLE deactivations (
    user_id INTEGER UNIQUE REFERENCES users(id),
    date TEXT NOT NULL
  );
  INSERT INTO users (name) VALUES ('Amir');
  INSERT INTO deactivations (user_id, date) VALUES (1, '2025-10-03');
  INSERT INTO deactivations (user_id, date) VALUES (1, '2025-10-22')

  ON CONFLICT (user_id) DO NOTHING
  `)

exec(`SELECT * FROM deactivations`)

// GOAL: [{user_id: 1, date: '2025-10-03'}]
