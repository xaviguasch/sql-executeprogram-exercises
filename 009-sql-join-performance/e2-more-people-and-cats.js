// Here's a code problem:

// Add an entry to the results array for each person and cat where cat.owner_id equals person.id. (You can use results.push({person: person.name, cat: cat.name}) to add an entry to the results.) You won't need to add any more database queries.

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

function peopleAndCats() {
  const results = []
  const people = exec(`SELECT * FROM people`)
  const cats = exec(`SELECT * FROM cats`)
  for (const person of people) {
    for (const cat of cats) {
      if (cat.owner_id === person.id) {
        results.push({ person: person.name, cat: cat.name })
      }
    }
  }
  return results
}
peopleAndCats()

// GOAL:
// [{person: 'Amir', cat: 'Ms. Fluff'}, {person: 'Betty', cat: 'Keanu'}]
