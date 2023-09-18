#!/usr/bin/node 
const request = require('request');

// Check if the API URL argument is provided
if (process.argv.length !== 3) {
  console.error('Usage: node 4-completed_tasks.js <API_URL>');
  process.exit(1);
}

// Get the API URL from the command line arguments
const apiUrl = process.argv[2];

// Initialize an object to store the count of completed tasks per user
const completedTasksByUser = {};

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
      const tasksData = JSON.parse(body);

      // Iterate through the tasks to count completed tasks per user
      for (const task of tasksData) {
        if (task.completed) {
          if (completedTasksByUser[task.userId]) {
            completedTasksByUser[task.userId]++;
          } else {
            completedTasksByUser[task.userId] = 1;
          }
        }
      }

      // Print the completed tasks by user
      console.log(completedTasksByUser);
    } catch (parseError) {
      console.error(`Error parsing JSON response: ${parseError.message}`);
      process.exit(1);
    }
  }
});
