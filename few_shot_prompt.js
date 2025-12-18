/**
 * Prompt: Write a JavaScript function toCamelCase that converts strings to camelCase. 
 * Examples: 
 * first name → firstName 
 * user_id → userId 
 * SCREEN_NAME → screenName 
 * mobile-number → mobileNumber
 */

function toCamelCase(str) {
  return str
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
}