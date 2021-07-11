const generator = require("generate-password");

const password = generator.generate({
  length: 10,
  uppercase: true,
});

console.log(password);
