
function calculate() {
    console.log("calculate() fonksiyonu çalıştı!"); // Fonksiyonun çağrıldığını kontrol etmek için console.log ekle

    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let operation = document.getElementById('operation').value;

    let result;
    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            result = num1 / num2;
            break;

        default:
            result = "Error: Invalid operation.";
            break;
    }
    document.getElementById('result').value = result;
    document.getElementById('num1').value = "";
    document.getElementById('num2').value = "";
}
