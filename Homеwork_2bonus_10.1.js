const userInput = prompt('Запишите любое число');
const number = +userInput;

if (!isNaN(number)) {
    alert(`Введенное число: ${number}`);
    alert(`Квадрат числа: ${number ** 2}`);
    alert(`Куб числа: ${number ** 3}`);
} else {
    alert('Вы ввели не числовое значение');
}





