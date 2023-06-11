import db from "./db/connection.js";

db.exec('CREATE TABLE IF NOT EXISTS people (name, age, email)')

db.run('INSERT INTO people VALUES (?,?,?), (?,?,?)', ['alexander', 24, "alex030t@stud.kea.dk",
'veronika', 26, 'vero293sb@gmail.com']
    )

const people = await db.all('SELECT * FROM people');
console.log(people);