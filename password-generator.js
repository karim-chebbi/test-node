const generator = require("generate-password");

let password = generator.generate({
  length: 7,
  numbers: false,
  lowercase: false,
});


console.log(password);
