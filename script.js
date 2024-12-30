// Referencia al display
const display = document.getElementById("display");

// Función para agregar texto al display
function pressKey(key) {
    display.value += key;
}

// Función para borrar el display
function clearDisplay() {
    display.value = "";
}

// Función para cambiar el signo de un número
function toggleSign() {
    if (display.value) {
        display.value = String(-1 * parseFloat(display.value));
    }
}

// Función para calcular el porcentaje
function pressKey(key) {
    if (key === '%') {
        // Evalúa el porcentaje basado en el último número y operador
        display.value += '/100';
    } else {
        display.value += key;
    }
}

// Función para evaluar la expresión matemática
function calculate() {
    try {
        // Evaluar la expresión en el display
        display.value = eval(display.value);
    } catch (error) {
        // Mostrar un mensaje de error si la expresión no es válida
        display.value = "Error";
    }
}
