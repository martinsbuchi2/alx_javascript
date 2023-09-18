#!usr/bin/node
// Import the request module
const request = require('request');

// Check if the movie ID argument is provided
if (process.argv.length !== 3) {
  console.error('Usage: node 1-starwars_title.js <movieID>');
  process.exit(1);
}

// Get the movie ID from the command line arguments
const movieID = process.argv[2];

// Construct the URL for the Star Wars API
const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movieID}`;

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
      const movieData = JSON.parse(body);

      // Extract and print the movie title
      console.log(movieData.title);
    } catch (parseError) {
      console.error(`Error parsing JSON response: ${parseError.message}`);
      process.exit(1);
    }
  }
});
