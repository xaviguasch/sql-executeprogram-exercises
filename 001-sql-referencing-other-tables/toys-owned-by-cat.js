// Write a function to find the names of all toys owned by a certain cat.

exec(`
  CREATE TABLE cats (id INTEGER PRIMARY KEY, name TEXT NOT NULL);
  CREATE TABLE toys (cat_id INTEGER NOT NULL, name TEXT NOT NULL);
  INSERT INTO cats (name) VALUES ('Ms. Fluff');
  INSERT INTO cats (name) VALUES ('Keanu');
  INSERT INTO toys (cat_id, name) VALUES (1, 'Birdo');
  INSERT INTO toys (cat_id, name) VALUES (2, 'Mouser');
`)

function findToys(catName) {
  const allToyNames = []
  const cats = exec(`SELECT id FROM cats WHERE name = ?`, [catName])
  for (const cat of cats) {
    const toys = exec(`SELECT name FROM toys WHERE cat_id = ?`, [cat.id])
    for (const toy of toys) {
      allToyNames.push(toy.name)
    }
  }
  return allToyNames
}

// findToys('Ms. Fluff');
// GOAL:['Birdo']
