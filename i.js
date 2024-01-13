const age = prompt('Введите Ваш возраст');
let num = null;

function multiple(number) {
    if (number % 1000) {
        return alert(`Вы ввели значение не кратное 1000. Мы можем выдать ${Math.round(num / 1000) * 1000}`);
    }
}

if (age > 35 && age < 65) {
    num = prompt(
        'Мы можем Вам выдать максимум 1000000\n'+
        'Введите сумму кратную 1000');
    multiple(num)
} else if (age > 17 && age < 21) {
    num = prompt(
        'Мы можем Вам выдать максимум 50000\n'+
        'Введите сумму кратную 1000');
    multiple(num)
} else if (age > 21 && age < 35) {
    num = prompt(
        'Мы можем Вам выдать максимум 400000\n'+
        'Введите сумму кратную 1000');
    multiple(num)
} else {
    alert('Мы не можем Вам выдать кредит');
}

    





 