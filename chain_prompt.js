/**
 * Chain Prompt:
 * 1. Create toKebabCase(str) for spaces/underscores.
 * 2. Handle camelCase by inserting hyphens before capitals.
 * 3. Lowercase final result and throw TypeError for non-strings.
 */
function toKebabCase(str) {
  if (typeof str !== 'string') {
    throw new TypeError('Input must be a string');
  }

  return str
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2') // Step 2: Handle camelCase
    .replace(/[\s_]+/g, '-')                // Step 1: Spaces/underscores to hyphens
    .toLowerCase();                         // Step 3: Lowercase
}

// Test cases
console.log(toKebabCase("helloWorld"));    // hello-world
console.log(toKebabCase("user_id_test"));  // user-id-test