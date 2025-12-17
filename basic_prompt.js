// Prompt: Write a function called toCamelCase that converts a string to camelCase. 
// For example, 'hello world' should return 'helloWorld'.

function toCamelCase(str) {
  return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
    return index === 0 ? word.toLowerCase() : word.toUpperCase();
  }).replace(/\s+/g, '');
}