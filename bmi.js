

var bmi = 0

function bmiCalc() {
    let height = document.getElementById('height').value
    let weight = document.getElementById('weight').value
    //bmiCalc.weight = prompt("what is your weight in kg?");
    //bmiCalc.height = prompt("what is your height in meters?");
    bmi = ((weight / (height * height)).toFixed(2));
    alert(" your bmi is " + bmi + "!");
    return bmi;
    };