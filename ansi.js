const ansi = require("ansi");
const User = require("./User");

const cursor = ansi(process.stdout);

cursor.white().bg.black().write("hello").reset().bg.reset().write("\n");
console.log(User.data());
