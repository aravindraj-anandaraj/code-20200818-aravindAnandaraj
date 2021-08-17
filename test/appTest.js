const assert = require('chai').assert;
const app = require('../app');

describe('App', () => {
    describe('overweightCount', () => {
        it('should return correct count of overweight people in jsonData file which contains sample json data', () => {
            let result = app.overweightCount;
            assert.equal(result, '3');
        });
    
        it('checks if all the overweight objects are categorized correctly in accordance with bmi index', () => {
            let bmiCalculatedData = app.bmiCalculatedData;
            bmiCalculatedData.forEach(element => {
                if(element.bmiCategory == 'Overweight') {
                    assert((25 <= element.bmi) && (element.bmi <= 29.9))
                }
            });
        });

        it('overweightCount function should return number type value', () => {
            let result = app.overweightCount;
            assert.typeOf(result, 'number');
        });
    })
    
    describe('bmiCalculation', () => {
        it('checks if all the objects has a key named bmi', () => {
            let bmiCalculatedData = app.bmiCalculatedData;
            bmiCalculatedData.forEach(element => {
                assert.hasAnyKeys(element, "bmi")
            });
        });
    
        it('checks if all the objects has a key named bmiCategory', () => {
            let bmiCalculatedData = app.bmiCalculatedData;
            bmiCalculatedData.forEach(element => {
                assert.hasAnyKeys(element, "bmiCategory")
            });
        });
    
        it('checks if all the objects has a key named healthRisk', () => {
            let bmiCalculatedData = app.bmiCalculatedData;
            bmiCalculatedData.forEach(element => {
                assert.hasAnyKeys(element, "healthRisk")
            });
        });
    })
})