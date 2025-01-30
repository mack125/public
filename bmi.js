

var bmi = 0

function bmiCalc(height,weight) {
    //let height = indexCopy.getElementById(height).value
    //let weight = indexCopy.getElementById(weight).value
    //bmiCalc.weight = prompt("what is your weight in kg?");
    //bmiCalc.height = prompt("what is your height in meters?");
    bmi = ((weight / (height * height)).toFixed(2));
    alert(" your bmi is " + bmi + "!");
    return bmi;
    };
export {bmiCalc};