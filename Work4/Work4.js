
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function areaRectangle (a, b) {
    let result = a * b
    console.log(result)
    return result
}
areaRectangle (5,15);

// - створити функцію яка обчислює та повертає площу кола з радіусом r

    function circleArea (radius){
    let result = radius * radius * Math.PI;
    console.log(result)
    return result
    }
    circleArea(7)

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

    function areaCylinder (h, radius){
    let result = 2 * Math.PI * radius * (radius + h)
    console.log(result)
    return result
    }
    areaCylinder(2, 5)

// - створити функцію яка приймає масив та виводить кожен його елемент

    function elemOfArr (items) {
        for (const elem of items) {
            console.log (elem)
        }
    }
    elemOfArr([11, 22, 33, 44])

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

    function parWithText (p){
        document.write (`<p> ${p} </p>`)
    }
    parWithText('bla bla')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

    function list (text) {
        document.write(`<ul>`)
            document.write(`<li>${text}</li>`)
            document.write(`<li>${text}</li>`)
            document.write(`<li>${text}</li>`)
        document.write(`</ul>`)
    }
    list('brainstorm');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
//     Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

    function list2 (text, quan){
        document.write(`<ul>`)
            for (let i = 0; i < quan; i++) {
                document.write(`<li> ${text} </li>`)
            }
        document.write(`</ul>`)
    }
    list2('hello', 3);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

    const arr = [11, 'Lorem', true]
    function primElem (items) {
        document.write (`<ul>`)
            for (const elemOfArr of items) {
                document.write(`<li> ${elemOfArr} </li>`)
            }
        document.write (`</ul>`)
    }
    primElem(arr)

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

    const users = [
        {name: 'Petro', age: 31, id: true},
        {name: 'Max', age: 24, id: true},
        {name: 'Drew', age: 42, id: false},
        {name: 'Josh', age: 50, id: true},
        {name: 'Nathan', age: 19, id: false},
    ]

    function arrUsers (arr) {
        for (let i = 0; i < arr.length; i++){
            const arrElement = arr[i]
        document.write(`<div> id: ${arrElement.id}, name: ${arrElement.name}, age: ${arrElement.age}</div>`)
        }
    }
    arrUsers(users)

// - створити функцію яка повертає найменьше число з масиву

let numbers = [3, 12, 17, 38, 23]

function minNumber (arr){
    let number = Math.min (...arr);
    return number
}
let a = minNumber(numbers);
console.log(a);

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

let numbers = [5, 10, 12]

function sum (arr) {
    let result = 0
    for (let i = 0; i < arr.length; i++) {
        const arrElem = arr[i]
        result = result + arrElem
    }
    return result
}
let b = sum(numbers)
console.log (b)

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

let numbers = [11,22,33,44]

function swap (arr, index1, index2) {
    let x = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = x;
    return arr
}
let c = swap(numbers, 0, 1)
console.log(c)

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

function exchange (sumUAH,currencyValues,exchangeCurrency) {
    let exchangeValue = 0
    for (let i = 0; i < currencyValues.length; i++){
        if (currencyValues[i].currency === exchangeCurrency){
            exchangeValue = currencyValues[i].value
        }
    }
    let result = sumUAH / exchangeValue
    return result
}
let y = exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD')
console.log(y)