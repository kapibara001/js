var counter = 0;

function OnClickButton(clicker) {
    counter++;
    clicker.innerHTML = "Вы нажали кнопку " + counter + " раз.";
    clicker.style.cssText = "border-radius: 5px; border: 0; font-size: 20px;"
}

function OnInput(inp) {
    console.log(inp.value);
    inp.style.color = "grey";
    inp.style.cssText = "border-radius: 5px; border: 0; font-size: 20px;"
}