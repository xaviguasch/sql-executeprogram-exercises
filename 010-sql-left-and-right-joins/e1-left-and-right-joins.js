// Here's a code problem:

// Use a join to get a list of usernames and comment texts for every comment in the system. Make it a left join so that it also includes users who have never written a comment. (They'll have a null comment text.) Select only the name and comment_text columns.

exec(`
  CREATE TABLE users (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL
  );
  CREATE TABLE comments (
    user_id INTEGER REFERENCES users(id) NOT NULL,
    comment_text TEXT NOT NULL
  );

  -- Amir has written two comments.
  INSERT INTO users (name) VALUES ('Amir');
  INSERT INTO comments (
    user_id,
    comment_text
  ) VALUES (1, 'Ms. Fluff needs a bath!');
  INSERT INTO comments (
    user_id,
    comment_text
  ) VALUES (1, 'Ms. Fluff strongly dislikes water.');

  -- Betty has written no comments.
  INSERT INTO users (name) VALUES ('Betty');

  // problem starts

  SELECT
    users.name AS name,
    comments.comment_text AS comment_text
  FROM users LEFT JOIN comments
    ON users.id = comments.user_id

  // problem ends


  `)

// GOAL: [{name: 'Amir', comment_text: 'Ms. Fluff needs a bath!'}, {name: 'Amir', comment_text: 'Ms. Fluff strongly dislikes water.'}, {name: 'Betty', comment_text: null}]
