<script>

var bmi = 0

function bmiCalc(height, weight) {
    bmiCalc.weight = prompt("what is your weight in kg?");
    bmiCalc.height = prompt("what is your height in meters?");
    bmi = ((weight / (height * height)).toFixed(2));
    return bmi;
}
bmiCalc();
alert(" your bmi is " + bmiCalc.bmi + "!");
</script>