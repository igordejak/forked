import data from './mock/data';

/**
 * Задание 1
 * Обьявить переменную firstVar тремя способами
 * и оставить коментарии с описанием разницы между этими обьявлениями
 */



/**
 * Задание 2
 * Вывести слово Test в консоль из массива и обьекта всеми способами которые знаешь
 */
const obj1 = {
    param: 'Test',
};

const arr1 = ['Test'];

const arrObj = [{
    param: 'Test',
}];

/**
 * Задание 3
 * вывести в консоль названия ключей из обьекта objKeys минимум двумя способами
 */

const objKeys = {
    alias: 'Animals',
    name: 'Животные',
    link: '/animals',
};

/**
 * Задание 4
 * вывести в консоль значения полей из обьекта objValue минимум тремя способами
 */

const objValue = {
    alias: 'Animals',
    name: 'Животные',
    link: '/animals',
};


/**
 * Задача 5
 * Перебрать массив минимум 5-ю способами
 * описать разницу между 'forEach', 'map', 'reduce'
 */

const arr2 = ['for', 'for..in', 'forEach', 'map', 'reduce'];

/**
 * Задача 6
 * Обьяви функицию testFunc тремя способами
 */



/**
 * Задание 7
 * Опиши разницу между promice и async await
 * Опиши вызов асинхронной функции getData и выведи результат в консоль
 * при помощи promice и async await
 */

function getData() {
    return setTimeout(() => (Promice.resolve('Result getData!')), 1000);
}

/**
 * Задание 8
 * Опиши прототип dog с параметрами voice и name, и функцией Say
 */

/**
 * Задание 9
 * Опиши класс из задания 8 в функциональном стиле
 */

/**
 * Задание 10
 * Опиши класс из задания 8 в импеоративном стиле (класический ООП)
 */

/**
 * Задание 11
 * Что будет в консоли?
 */

// 11.1
const a = 5;
const newA = a;

newA = 10;

console.log(a);
console.log(newA);

// 11.2
const obj2 = {
    a: 5,
};

const newObj = obj2;

newObj.a = 10;

console.log(obj2.a);
console.log(newObj.a);

// 11.3
const obj3 = {
    a: 5,
    log: function() {
        console.log(this.a);
    }
};

obj3.log();

// 11.4
const obj4 = {
    a: 5,
    log: function() {
        console.log(this.a);
    }
};

const log = obj4.log;

log();
