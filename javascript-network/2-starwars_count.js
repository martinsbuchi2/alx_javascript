#!usr/bin/node
// Import the request module
const request = require('request');

// Check if the API URL argument is provided
if (process.argv.length !== 3) {
  console.error('Usage: node 2-starwars_count.js <API_URL>');
  process.exit(1);
}

// Get the API URL from the command line arguments
const apiUrl = process.argv[2];

// Send a GET request to the API to retrieve character data for Wedge Antilles
request.get(apiUrl, (error, response, body) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  } else if (response.statusCode !== 200) {
    console.error(`Error: Request failed with status code ${response.statusCode}`);
    process.exit(1);
  } else {
    try {
      // Parse the JSON response
      const characterData = JSON.parse(body);

      // Check the films array in character data and count the occurrences
      const count = characterData.films.length;

      // Print the count
      console.log(count);
    } catch (parseError) {
      console.error(`Error parsing JSON response: ${parseError.message}`);
      process.exit(1);
    }
  }
});
