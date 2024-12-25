// GLOBALS -- NO WINDOW !!!!

// __dirname - path to current directory
// __filename - file name
// require - function to use modules (CommonJS)
// module - info about current module (file)
// process - info about env where the program is being executed

// Modules
// commonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const { john, peter} = require('./name');
const sayHi = require('./ultis');

const data = require('./alternative-flavor');
require('./mind-grenade');

sayHi('susan');
sayHi(john);
sayHi(peter);

