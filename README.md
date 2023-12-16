# 17-week-javaScript-Promise

## 1. Double using callback.
### Write a function that takes in an array of intergers and a callback function, and returns a new array where each element is doubled using the callback.

## 2. String Manipulation.
### Write a function "manipulationString" that takes in a string and converts the characters to uppercase letters. the function should return a callback function "loString" that logs the sentence "The manipulated string is. " along with the manipulated string or the new string to the console.

## 3. Age in Days.
### Write a function that takes in an array of integers and a callback function, and ruturns a new array where each Write a javaScript function called ageinDays that accepts an object containing a person's fist name, last name, and age in year as input. The fuchton should concatenate the first and last name into a single string and store it in a variable called fullName. It should then calculate the person's age in day store it in a variable called agaInDays.

### The agaInDays function shoild then return a callback function that logs a message to the console. The message should include the person's full name and age in days, and should be in the format: "The person's full name is [full name ] and their age in days is  [age in days.]."

### Note that the ageInDay function should not log the message to the console directly, but should instead return a callback function that can be used to log the message at a later time.

## 4. Arrange in alphabetical order.
### Write a program that accepts a list of objects representing books [Title, author, and year] and a callback function. The program should use the map function to create a new list containing only the titles of the books, and then pass thos new list to th callback function. the callback function should then log the titles to the console in alphabetical order.

## 5. Greeting Promose.
### You need to write a function that takes a name as input and returns a promise that resolves with a greeting message. The function should greet the person using their name, with a message in the formate 'Hello, {name}!!' 

### for example, if the input to the function is 'Mithun', the promise should resolve with the string "Hello, Mithun!'

## 6. Fetch results asynchronously
### Write a function that asynchronously fetches data from an API [https://jsonplaceholder.typicode.com/todos/1] and logs the result to the console.

## 7. Multiple requests.
### Create an asynchronous function that retrieves data from two different API endpoints: "https://jsonplaceholder.typicode.com/tool/1" and "https://jsonplaceholder.typicode.com/posts/1". the first API returns a to-do task, whilethe second API provides post details. the function shuld combine the results from both APIs and log them as an object, where the keys are "todo" and "post", and the corresponding values, are the responses from the respective APIs.

## 8. Get Data from API and Display it on the browser console.
### Write  a JavaScrit program that uses the Fetch method to retrieve data from an API, and then logs the data to the console. fo example, tou could use the API at https://jsonplaceholder.typicode.com/post to retrieve a list of posts, and then display them to the browser console.