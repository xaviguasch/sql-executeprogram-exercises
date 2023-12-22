// Here's a code problem:

// Drop the students table by executing a "Bobby Tables" SQL injection attack, as made famous by XKCD. (If you get stuck, try using a text editor to manually combine your attack string with the other strings in the register function. Make sure that that combined SQL string looks right.)

exec(`CREATE TABLE students (name TEXT)`)

function register(name) {
  exec(`INSERT INTO students (name) VALUES ('` + name + `')`)
}

register("Robert'); DROP TABLE students; --")

exec(`SELECT * FROM students`)

// GOAL: Error: no such table: students
