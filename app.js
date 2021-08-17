const express = require('express');
const app = express();

const jsonData = require('./jsonData.json');
const bmiCalculation = require('./logic.js/bmiCalc')
const overweightCountCalculation = require('./logic.js/overweightCount')

let portNumber = '7867';
jsonData.forEach(bmiCalculation);
let overweightCount = overweightCountCalculation(jsonData);

app.listen(portNumber, () => {
    console.log('listening to port')
});

//To get the modified json data with addition columns for bmi, bmiCategory and healthRisk
app.get('/calculatedBmi', (req, res) => {
    res.send(jsonData);
});

//To get the count of overweight people
app.get('/overweightCount', (req, res) => {
    res.send('No of overweight people in given data : ' + overweightCount);
});

//Exported to perform assertion in appTest.js
module.exports.bmiCalculatedData = jsonData;
module.exports.overweightCount = overweightCount;
