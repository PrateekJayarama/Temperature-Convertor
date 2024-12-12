const temp_value = document.getElementById("temp_value");
const tof = document.getElementById("ctf");
const toc = document.getElementById("ftc");
const result = document.getElementById("boxcontainer2");
let temp;

function tempget() {
    if (tof.checked) {
        temp = parseFloat(temp_value.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(1) + "°F";
        console.log(temp);
    } else if (toc.checked) {
        temp = parseFloat(temp_value.value);
        temp = (temp - 32) * 5 / 9;
        result.textContent = temp.toFixed(1) + "°C";
    } else {
        result.textContent = "Please select a conversion option";
    }
}