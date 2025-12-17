/**
 * Refined Prompt: Write a robust toCamelCase function. 
 * Must throw TypeError if input is not a string.
 * Handle empty strings. Strip special characters.
 */
function toCamelCase(str) {
  if (typeof str !== 'string') {
    throw new TypeError('Input must be a string');
  }
  if (str.trim() === '') return '';

  return str
    .replace(/[^a-zA-Z0-9 ]/g, ' ')
    .split(/ |_+|-+/)
    .map((word, index) => {
      if (index === 0) return word.toLowerCase();
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join('');
}

// Copilot context task: Create a function that converts strings to dot.case format
function toDotCase(str) {
  if (typeof str !== 'string') {
    throw new TypeError('Input must be a string');
  }
  if (str.trim() === '') return '';

  return str
    .replace(/[^a-zA-Z0-9 ]/g, ' ')
    .trim()
    .split(/\s+|_|-|(?=[A-Z])/)
    .map(word => word.toLowerCase())
    .join('.');
}