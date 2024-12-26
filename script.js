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

    if (tempUnit === "ctf") {
        convertedTemp = (temp * 9/5) + 32;
        result.textContent = `${convertedTemp.toFixed(2)}°F`;
    } else if (tempUnit === "ftc") {
        convertedTemp = (temp - 32) * 5/9;
        result.textContent = `${convertedTemp.toFixed(2)}°C`;
    } else if (tempUnit === "ktc") {
        convertedTemp = temp - 273.15;
        result.textContent = `${convertedTemp.toFixed(2)}°C`;
    } else if (tempUnit === "ctk") {
        convertedTemp = temp + 273.15;
        result.textContent = `${convertedTemp.toFixed(2)}K`;
    } else if (tempUnit === "ftk") {
        convertedTemp = (temp - 32) * 5/9 + 273.15;
        result.textContent = `${convertedTemp.toFixed(2)}K`;
    } else if (tempUnit === "ktf") {
        convertedTemp = (temp - 273.15) * 9/5 + 32;
        result.textContent = `${convertedTemp.toFixed(2)}°F`;
    }
}
