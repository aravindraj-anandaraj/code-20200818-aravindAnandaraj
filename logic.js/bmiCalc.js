//Logic to find and modify the given data with additional information like bmi, bmiCategory and healthRisk

function bmiCalculation (element) {
    let bmi = ( element.WeightKg ) / (( element.HeightCm / 100 ) ^ 2)
    element.bmi = bmi;
        if (bmi<18.5){
            element.bmiCategory = 'Underweight';
            element.healthRisk = 'Malnutrition risk';    
        }
        else if ((18.5 <= bmi) && (bmi <= 24.9)){
            element.bmiCategory = 'Normal weight';
            element.healthRisk = 'Low risk';    
        }
        else if ((25 <= bmi) && (bmi <= 29.9)){
            element.bmiCategory = 'Overweight';
            element.healthRisk = 'Enhanced risk';
        }
        else if ((30 <= bmi) && (bmi <= 34.9)){
            element.bmiCategory = 'Moderately obese';
            element.healthRisk = 'Medium risk';    
        }
        else if ((35 <= bmi) && (bmi <= 39.9)){
            element.bmiCategory = 'Severely obese';
            element.healthRisk = 'High risk';
        }
        else if (bmi >= 40){
            element.bmiCategory = 'Very Severely obese';
            element.healthRisk = 'Very High risk';
        }
    return element
};

module.exports = bmiCalculation;