const {parse, stringify} = require('comment-json')


const jsonString = `
{
  "bar": "baz",
  // This is a comment
  "foo": "bar"
}
`
let parsed = parse(jsonString)

console.log(stringify(parsed, null, 2))