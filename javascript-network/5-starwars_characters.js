#!usr/bin/node 
const request = require('request');

// Check if the movie ID argument is provided
if (process.argv.length !== 3) {
  console.error('Usage: node 5-starwars_characters.js <Movie ID>');
  process.exit(1);
}

// Get the movie ID from the command line arguments
const movieID = process.argv[2];

// Construct the URL for the Star Wars API to get movie details
const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movieID}/`;

// Send a GET request to the API to get movie details
request.get(apiUrl, (error, response, body) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  } else if (response.statusCode !== 200) {
    console.error(`Error: Request failed with status code ${response.statusCode}`);
    process.exit(1);
  } else {
    try {
      // Parse the JSON response to get character URLs
      const movieData = JSON.parse(body);
      const characterUrls = movieData.characters;

      // Fetch and print character names
      characterUrls.forEach((characterUrl) => {
        request.get(characterUrl, (charError, charResponse, charBody) => {
          if (charError) {
            console.error(`Error fetching character data: ${charError.message}`);
          } else if (charResponse.statusCode !== 200) {
            console.error(`Error: Request failed with status code ${charResponse.statusCode}`);
          } else {
            const characterData = JSON.parse(charBody);
            console.log(characterData.name);
          }
        });
      });
    } catch (parseError) {
      console.error(`Error parsing JSON response: ${parseError.message}`);
      process.exit(1);
    }
  }
});
