// Here's a code problem:

// Imagine that we're writing a system where users can write comments to each other. Unfortunately, comments can get ugly. Define a comments table:

// The comment_text column has type TEXT.
// The flag column has type INTEGER, but is used as a boolean: it's set to 1 if a moderator "flags" the comment as inappropriate.
// The flag column should default to 0: we assume that a comment is nice by default.
// When we SELECT comments to show on the site, we'll only select the ones where flag is 0. That way, comments that were flagged by a moderator are hidden.

exec(
  `[{comment_text: 'A cat ate that entire watermelon?!', flag: 0}, {comment_text: 'UMM THE VIDEO WAS EDITED', flag: 1}]`
)
exec(`
  INSERT INTO comments (comment_text)
    VALUES ('A cat ate that entire watermelon?!')
`)
exec(`
  INSERT INTO comments (comment_text, flag)
    VALUES ('UMM THE VIDEO WAS EDITED', 1)
`)
exec(`SELECT * FROM comments`)

// GOAL:

// [{comment_text: 'A cat ate that entire watermelon?!', flag: 0}, {comment_text: 'UMM THE VIDEO WAS EDITED', flag: 1}]
