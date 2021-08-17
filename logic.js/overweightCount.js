//Logic to return count of overweight people

function overweightCount (jsonData) {

    function totalOverweight (element) {
        return element.bmiCategory == 'Overweight'
    }

    return jsonData.filter(totalOverweight).length
}

module.exports = overweightCount;