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

// Send a GET request to the API
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
      const filmsData = JSON.parse(body);

      // Initialize a count for movies with Wedge Antilles
      let count = 0;

      // Iterate through the films to count occurrences of Wedge Antilles
      for (const film of filmsData.results) {
        if (film.characters.includes('https://swapi-api.alx-tools.com/api/people/18/')) {
          count++;
        }
      }

      // Print the count
      console.log(count);
    } catch (parseError) {
      console.error(`Error parsing JSON response: ${parseError.message}`);
      process.exit(1);
    }
  }
});
