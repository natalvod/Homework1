function seasonPlay() {
    let monthNumber = prompt('Введите порядковый номер месяца в году');
    if (monthNumber == 1 || monthNumber == 2 || monthNumber == 12) {
        return alert(`${monthNumber} - зима`);
    } else if (monthNumber == 3 || monthNumber == 4 || monthNumber == 5) {
        return alert(`${monthNumber} - весна`);
    } else if (monthNumber == 6 || monthNumber == 7 || monthNumber == 8) {
        return alert(`${monthNumber} - лето`);
    } else if (monthNumber == 9 || monthNumber == 10 || monthNumber == 11) {
        return alert(`${monthNumber} - осень`);
    } else if (monthNumber < 1 || monthNumber > 12) {
        return alert(`В году нет ${monthNumber}-го месяца`);
    } else if (isNaN(monthNumber)) {
        return alert('Вы ввели не правильное значение');
    }
};

function memoryFruit() {
    let fruit = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    fruit = fruit.sort(() => Math.random() - 0.5);
    alert(fruit);
    let userAnswer1 = prompt('Чему равнялся первый элемент массива?');
    let userAnswer2 = prompt('Чему равнялся последний элемент массива?');
    let answer1 = fruit[0];
    let answer2 = fruit[fruit.length - 1];
    if (userAnswer1.toLowerCase() === answer1.toLowerCase() && userAnswer2.toLowerCase() === answer2.toLowerCase()) {
        alert('Вы угадали! У Вас отличная память!');
    } else if (userAnswer1.toLowerCase() !== answer1.toLowerCase() && userAnswer2.toLowerCase() !== answer2.toLowerCase()) {
        alert('Вы не угадали! Попробуйте еще раз!');
    } else {
        alert('Вы были близки к победе!');
    }
};