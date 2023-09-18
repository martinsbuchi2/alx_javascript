# JavaScript - Network

# Objectives:

    *How to manipulate JSON data
    *How to use request and fetch API
    *How to read and write a file using fs module

# Tasks:

1. Write a script that prints the title of a Star Wars movie where the episode number matches a given integer.

    * The first argument is the movie ID
    * You must use the Star wars API with the endpoint https://swapi-api.alx-tools.com/api/films/:id
    * You must use the module request

2. Write a script that prints the number of movies where the character “Wedge Antilles” is present.

    * The first argument is the API URL of the Star wars API: https://swapi-api.alx-tools.com/api/films/
    * Wedge Antilles is character ID 18 - your script must use this ID for filtering the result of the API
    * You must use the module request

3. Write a script that gets the contents of a webpage and stores it in a file.

    * The first argument is the URL to request
    * The second argument the file path to store the body response
    * The file must be UTF-8 encoded
    * You must use the module request

4. Write a script that computes the number of tasks completed by user id.

    * The first argument is the API URL: https://jsonplaceholder.typicode.com/todos
    * Only print users with completed task
    * You must use the module request

5. Write a script that prints all characters of a Star Wars movie:

    * The first argument is the Movie ID - example: 3 = “Return of the Jedi”
    * Display one character name by line
    * You must use the Star wars API
    * You must use the module request