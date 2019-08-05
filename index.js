import data from './mock/data';
import { promises } from 'fs';

/**
 * Задание 1
 * Обьявить переменную firstVar тремя способами
 * и оставить коментарии с описанием разницы между этими обьявлениями
 */
var  firstVar;
// обьявлено но не присвоено значение, видима в пределах функции в которой создается

var firstVar = 0;
//обьявлено и присвоено значение

let firstVar = 'string';
//ES6, видима только в пределах блока где обьявлено

const firstVar = 'string';
//ES6, нельзя переназначитьно можно изменить свойства, например если
const firstVar = {
    type: 'string'
}
// то тайп можно менять, или добавлять туда что-то еще



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

console.log(obj1.param);
console.log(arr1[0]);
console.log(arr0bj[0].param);

/**
 * Задание 3
 * вывести в консоль названия ключей из обьекта objKeys минимум двумя способами
 */

const objKeys = {
    alias: 'Animals',
    name: 'Животные',
    link: '/animals',
};

console.log(Object.keys(objKeys)[0] + Object.keys(objKeys)[1] + Object.keys(objKeys)[2]);
console.log(Object.keys(objKeys));


/**
 * Задание 4
 * вывести в консоль значения полей из обьекта objValue минимум тремя способами
 */

const objValue = {
    alias: 'Animals',
    name: 'Животные',
    link: '/animals',
};
console.log(objValue.alias + objValue.name + objValue.link);
console.log(Object.values(objValue)[0] + Object.values(objValue)[1] + Object.values(objValue)[2]);
console.log(Object.values(objValue));


/**
 * Задача 5
 * Перебрать массив минимум 5-ю способами
 * описать разницу между 'forEach', 'map', 'reduce'
 */

const arr2 = ['for', 'for..in', 'forEach', 'map', 'reduce'];

for (i=0; i<arr2.length; i++) {
    console.log(arr2[i]);
}
//простой цикл от нуля до последнего элемента массива

for (var i in arr2) 
{
   console.log(i);

}
//еще цикл

arr2.forEach(function(element) {
    console.log(element);
  });
//фор ич вызывает функцию для каждого элемента

arr2.map(function(element) {
    console.log(element);
  });
//вызывает функцию для всех элементов


//редюс добавляет значения всех элементов и выводит одно общее значение, но как с его помощью вывести все эелементы я не понял

/**
 * Задача 6
 * Обьяви функицию testFunc тремя способами
 */

 function testFunc(){
 }
 //1

 var testFunc = new Function('a', 'b', 'return a + b');
console.log(sum(2, 6));
//2

let testFunc = (x, y) => { return x * y };
//3 (ES6)



/**
 * Задание 7
 * Опиши разницу между promice и async await
 * Опиши вызов асинхронной функции getData и выведи результат в консоль
 * при помощи promice и async await
 */

async function getData() {
    return setTimeout(() => (Promice.resolve('Result getData!')), 1000);
    let resultat = await promise;
    console.log(resultat);
}
//promise выполняется сразу, а async await ждет выполнения функции и работает с тем что функция вернула

/**
 * Задание 8
 * Опиши прототип dog с параметрами voice и name, и функцией Say
 */

function dog(voice, name) {
	this.voice = voice,
	this.name = name,
	this.Say = function() {
		return this.voice + " " + this.name;
	}
}

var dog1 = new dog("waff", "Sharik");

console.log(dog1.Say());

/**
 * Задание 9
 * Опиши класс из задания 8 в функциональном стиле
 */

class dog2 {
    constructor (voice, name) {
        this.voice = voice,
        this.name = name
    }
    static isDog2(obj) {
        return obj.constructor === Tuzik;
     }
}

/**
 * Задание 10
 * Опиши класс из задания 8 в импеоративном стиле (класический ООП)
 */

 class dog2 {
     constructor (voice, name) {
         this.voice = voice,
         this.name = name
     }
 }

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
//SyntaxError: redeclaration of const a
//TypeError: invalid assignment to const `newA'
//по идее должно быть 5 и 10 - надо const заменить на let

// 11.2
const obj2 = {
    a: 5,
};

const newObj = obj2;

newObj.a = 10;

console.log(obj2.a);
console.log(newObj.a);
//SyntaxError: redeclaration of const obj2
// undefined
// по идее 10 и 10 - надо первую переменную сделать let

// 11.3
const obj3 = {
    a: 5,
    log: function() {
        console.log(this.a);
    }
};

obj3.log();
// 5

// 11.4
const obj4 = {
    a: 5,
    log: function() {
        console.log(this.a);
    }
};

const log = obj4.log;

log();
//undefined