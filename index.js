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

