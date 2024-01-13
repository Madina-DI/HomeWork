const name = prompt('Напишите свое имя');
const dateofbirth = prompt('Напишите дату своего рождения');
const date = new Date().getFullYear()
const age = String(Number(date) - Number(dateofbirth))
const lastNumber = Number(age.slice(-1))

if (lastNumber === 1) {
    alert(`${name}: ${age} год`)
} else if (1 < lastNumber && lastNumber < 5) {
    console.log(typeof(age))
    alert(`${name}: ${age} годa`)
} else {
    alert(`${name}: ${age} лет`)
}