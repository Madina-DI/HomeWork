const name = prompt('Напишите свое имя');
const dateofbirth = prompt('Напишите дату своего рождения');
const date = new Date().getFullYear()
const age = Number(date) - Number(dateofbirth)

alert(`${name}: ${age}`)