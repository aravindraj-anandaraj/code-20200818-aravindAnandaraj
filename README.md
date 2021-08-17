# code-20200818-aravindAnandaraj
To showcase back end Api skills in node.js, express.js, mocha testing, etc

This simple api is created using express.js, node.js, mocha and chai.
Kindly feel free to change the port number if the existing port : "7867" is occupied.
Json data which needs to be processed is stored and fetched from the file "jsonData.json".


{} Routes are handled using express.js

=> A GET request made to route : "http://localhost:<portNumber>/calculatedBmi" 
will respond with all the modified objects with calculatedBmi key and value pairs.
=> A GET request made to route : "http://localhost:<portNumber>/overweightCount" 
will respond with the count of total number of people who fall under "Overweight" based on bmi categorization.


{} Basic testing is done with the help of mocha and chai.

=> Run "npm run test" inorder to initialize the testing process.
=> Total 6 test cases are written for "overweightCount" and "bmiCaluculation" (each having 3 test case).
