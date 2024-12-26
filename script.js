function tempget() {
    const tempValue = document.getElementById("temp_value").value;
    const tempUnit = document.getElementById("temp_unit").value;
    const result = document.getElementById("boxcontainer2");

    if (isNaN(tempValue) || tempValue.trim() === "") {
        result.textContent = "Please enter a valid number.";
        return;
    }

    const temp = parseFloat(tempValue);
    let convertedTemp;

    switch (tempUnit) {
        case "ctf": // Celsius to Fahrenheit
            convertedTemp = (temp * 9/5) + 32;
            result.textContent = `${convertedTemp.toFixed(2)}°F`;
            break;
        case "ftc": // Fahrenheit to Celsius
            convertedTemp = (temp - 32) * 5/9;
            result.textContent = `${convertedTemp.toFixed(2)}°C`;
            break;
        case "ktc": // Kelvin to Celsius
            convertedTemp = temp - 273.15;
            result.textContent = `${convertedTemp.toFixed(2)}°C`;
            break;
        case "ctk": // Celsius to Kelvin
            convertedTemp = temp + 273.15;
            result.textContent = `${convertedTemp.toFixed(2)}K`;
            break;
        case "ftk": // Fahrenheit to Kelvin
            convertedTemp = (temp - 32) * 5/9 + 273.15;
            result.textContent = `${convertedTemp.toFixed(2)}K`;
            break;
        case "ktf": // Kelvin to Fahrenheit
            convertedTemp = (temp - 273.15) * 9/5 + 32;
            result.textContent = `${convertedTemp.toFixed(2)}°F`;
            break;
        default:
            result.textContent = "Invalid temperature unit.";
    }
}
