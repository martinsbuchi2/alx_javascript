# Javascript advanced

# Objectives: 

    * What is lexical scoping in Javascript
    * What is closure in Javascript
    * How to use closure
    * How to chain different closures
    * How to simulate private methods with Closure
    * The execution stack order with Javascript
    * How to use binding
    * How to use callbacks

# Tasks:

1. Create a function named welcome:

    * It takes two arguments: firstName (string) and lastName (string)
    * It contains a variable named fullName, that will contains the firstName followed by a space and then the lastName
    * Within the welcome function, write a function named displayFullName:
    * It should display an alert with the message Welcome followed by a space, then the variable fullName followed by an exclamation mark.
    * Call the function displayFullName at the end of the function welcome

2. Create a variable named globalVariable with value Welcome
    * Create a function outer that:
        * alerts the content of the variable globalVariable
        * creates a variable named course with value Holberton
        * creates a function inner that:
            * alerts the content of the variable globalVariable and course (concatenated)
            * creates a variable named exclamation with value !
            * creates a function inception that alerts the content of the variable globalVariable, course, and exclamation (concatenated)
            * calls the function inception
        * calls the function inner
    * Call the function outer

3. Write a function named welcomeMessage:

    * It accepts one argument fullName (string)
    * It should be a closure for an alert displaying Welcome <fullName>
    * After this function definition, create three variables:

guillaume contains a call welcomeMessage with Guillaume as argument
    * alex contains a call welcomeMessage with Alex as argument
    * fred contains a call welcomeMessage with Fred as argument

4. Write a function named createClassRoom:

    * It takes into argument numbersOfStudents (number)
    * Inside, it contains a function studentSeat, that takes into argument seat (number) and returns a function that returns the  * seat number
    * After the definition of studentSeat, create and populate a variable students (array)
        * Using a loop from 0 to numbersOfStudents, pass the number of iteration + 1 to studentSeat and add its return value to the students array
    * Returns the students array
    * Create a closure classRoom, calling createClassRoom with 10 students

5. Create a function divideBy:

    * It takes into argument firstNumber (number)
    * It returns a function that takes into argument secondNumber (number)
        * It returns the second number divided by the first number

Create a function addBy:
    * It takes into argument firstNumber (number)
    * It returns a function that takes into argument secondNumber (number)
        * It returns the sum of the two numbers

6. Create a function named changeMode:

    * It accepts 5 arguments size (number), weight (string), transform (string), background (string), color (string)
    * Using closure, it changes the style of the entire page and set the font-size, font-weight, text-transform, background-  * color, and color

Write a function named main:
    * Set a variable named spooky that passes the arguments 9, bold, uppercase, pink, green to changeMode
    * Set a variable named darkMode that passes the arguments 12, bold, capitalize, black, white to changeMode
    * Set a variable named screamMode that passes the arguments 12, normal, lowercase, white, black to changeMode
    * Add a paragraph to the body of the page with the text Welcome Holberton!
    * Add a button to the body with the text Spooky
    * Add a button to the body with the text Dark mode
    * Add a button to the body with the text Scream mode
    * When clicking on each button, the page CSS should change to the different themes you created previously
 Call the main function