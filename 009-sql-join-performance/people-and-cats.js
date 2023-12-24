// Here's a code problem:

// Finish the function peopleAndCats() so that it creates a list of each pair of cat and person. For every cat, call results.push({person: person.name, cat: cat.name}) to build up a list of results.

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
  for (const person of people) {
    // exercise starts
    const catsOwnedByPerson = exec(
      `
    SELECT * FROM cats WHERE cats.owner_id = ?
  `,
      [person.id]
    )
    for (const cat of catsOwnedByPerson) {
      results.push({ person: person.name, cat: cat.name })
    }
    // exercise ends
  }
  return results
}
peopleAndCats()

// GOAL:
// [{person: 'Amir', cat: 'Ms. Fluff'}, {person: 'Betty', cat: 'Keanu'}]
