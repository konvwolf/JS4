"use strict";

/* Написать функцию, преобразующую число в объект. Передавая на вход число в диапазоне [0, 999],
мы должны получить на выходе объект, в котором в соответствующих свойствах описаны разряды числа:
- единицы (в свойстве firstDigit)
- десятки (в свойстве secondDigit)
- сотни (в свойстве thirdDigit)
Например, для числа 45 мы должны получить следующий объект:
{
 firstDigit: 5,
 secondDigit: 4,
 thirdDigit: 0,
}
Если число было передано вне [0, 999] диапазона, не целое число или вообще не число,
необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект. */

/**
 * Функция digits разбирает указанное пользователем трехзначное число на составные цифры.
 * Если число меньше трехзначного, недостающие цифры заменяются на ноль. Функция ругается
 * на отрицательные и дробные числа, а также числа с количеством цифр больше трех.
 *
 * @param {*} num принимает пользовательский ввод
 */
function digits(num) {
    switch (true) { // конструкцией switch проверяю истинность условий
        case isNaN(num): // если не число
            alert("Вы указали не число!");
            break;

        case !Number.isInteger(+num): // если число не целое
            alert("Укажите целое число!");
            break;

        case Math.sign(num) == -1: // если число отрицательное
            alert("Укажите положительное число!");
            break;

        case num.length > 3: // если число содержит больше трех цифр
            alert("Укажите трехзначное число!");
            break;

        default: // ни одно условие не совпало? - разбираем число на цифры
            let digitsArray = {
                firstDigit: +num.charAt(0),
                secondDigit: +num.charAt(1),
                thirdDigit: +num.charAt(2)
            }
            alert(`Первая цифра вашего числа — ${digitsArray.firstDigit}, вторая — ${digitsArray.secondDigit}, третья — ${digitsArray.thirdDigit}`);
    }
}

digits(prompt("Укажите положительно число, в котором не больше трех цифр"));