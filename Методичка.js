'use strict'
//эта команда запретит использовать необъявленные переменные
/*Методичка для заметок и записи методов.*/

//Следи за объявлением переменных

const Popular_Frameworks = {
  front_end_development: 'React, Vue, Angular, Node, jQuery', 
  back_end_development: 'Node, Deno',
}
Node_js.what_to_do = "Сервер с интенсивным обменом информации с пользователем: чаты, сервисы."
Popular_Frameworks['Full-stuck'] = 'Meteor', 'Next', 'Express', 'Koa', 'Socet.io';


/* Манипуляции в браузере*/

window
//  содержит множество свойств
// global object
// множество методов по умолчанию
console //свойство глобального объекта window

const get_Name = {
  activity: true,
  myfunct: function () {
      console.log("Победа")
  }
}
//JSON - JAVASCRIPT OBJECT Notation 
//формат обмена данными
// {"userID": 1, "id": 1, "title": "Test title","status": {"completed": false }}
// конвертация JSON в Javascript 
JSON.parse()
// и наоборот
JSON.stringify
//для передачи на сервер, например


const post = {
  title: 'My post',
  likesQty: 5
}
const postStringified = JSON.stringify(post)
JSON.parse(postStringified)
// вернёт обратно начальный объект

//как избежать мутаций?
const post2 = Object.assign({}, post)
// Object - это и тип и класс, прототип всех объектов JavaScript
// assign - это метод создания нового объекта
// в {} запишет свойства объекта post например
// То есть в новые свойства из свойств другого
// НО! вложенные свойства останутся в новом объекте неизменными
// Поэтому этот вариант упрощённого объекта

// Нормальный вариант

const post3 = {...person}
// ... - это оператор разделения объекта на свойства 'sread'
// И потом эти свойства добавляет в новый объект


//Полное избежание мутации 3 вариант

const post4 = JSON.parse(JSON.stringify(post))
//Объект после двойной конвертации получит собственные ссылки и свойства
// Ссылки на вложенные объекты не сохраняются
// Все ссылки будут созданы заново!

// Функция - это блок кода многократного выполнения
console.dir(post)
// покажет структуру функции post
//undefined = no return
//То есть нечего вернуть - вот и не существует

//создание копии объекта функцией
const personOne = {
  name: 'Bob',
  age: 21
}
function increasePersonAge(person) {
  const updatedPerson = Object.assign({}, person)
  updatedPerson.age += 1
  return updatedPerson
}

const updatedPerson = increasePersonAge(personOne)
console.log(personOne.age) //21
console.log(updatedPerson.age) //22

//object personOne не изменился

// Callback !!! функция вызывает внутри себя другую
function anotherFunc() {
  //do some
}
function fnWithCallback(CallbackFunction) {
  CallbackFunction()
}
fnWithCallback(anotherFunc)

setTimeout(fnWithCallback, 1000)
// стандартная функция js вызывает функцию по имени, через 1000 мс
// она же является глобальным методом window или global в node.js

//оператор - внутренняя функция JS
//ОПЕРАТОРЫ
// Арифметические, Сравнения, Логические, Присваивания
// Текстовые:
const operators = {
    typeof:"проверить тип значения",
    instanceof:"проверить принадлежность классу",
    new:"объявить новый объект",
    delete: 'удалить свойство',
    Symbols: "запятая объявит переменные в одной команде",
  } 

  let one, two
one = 1
two = 2
//По факту оператор - внутренняя функция. Все операторы - это функции (методы)
//унарные операторы - один операнд, либо аргумент:
u++
+u
delete Object.u
typeof u // узнаем тип переменной
new Object() // новый экземпляр объекта
//БИНАРНЫЕ - два операнда
bi = 2
bi + u
bi += u
bi === u //сравнит как тип так и значение 
bi && u // "и"

// Инфиксная запись - оператор между операндами
a = true
u + bi 
a += 2 
//Префиксная запись - оператор перед операндом
++bi
delete Object.bi
typeof bi

//Постфиксная запись
bi++
myfunct()
//Приоритет операторов доступна в интернете
// логические операторы возвращают boolean
Boolean(value) = { //эти свойства по умолчанию
  false: "false, 0, пустое место , undefined, null"
}
typeof 10 //'number'
typeof undefined //undefined
typeof true // boolean
typeof 10 === 'number' // true
!10 // false
!0 // true
!'abc' // false
!'' // true
!true // false
!!10 // true
//и тому подобное
// операторы короткого замыкания
false && 2 // false и игнорирует второе
true && 0 // требует правдивости обоих, тут false
false || 1 // 1 - смотрит на истинность одного из них
// || или или вернёт первое попавшееся истинное значение
let huk = 10
huk && console.log('Готово!') // Готово!
let c //undefined
c && console.log("Готово!") // ничего, ибо функция прервётся на переменной c

//Оператор три точки разделения на свойства
const button = {
  width: 200,
  text: "Bue"
}

const redButton = {
  ...button, //унаследует свойства объекта!
  color: "red" // если у родителя есть такое свойство 
  // в зависимости от расположения свойства ДО или ПОСЛЕ ...
  // Если после ... то перезапишет свойство родителя
}
//Конкатенация - соединение 
var hy = "З" + "драсте"
// Здрасте
// + попросту соединяет

//ШАБЛОННЫЕ СТРОКИ
const hello = 'Hello'
const world = 'World'

const greeting = `${hello}${world}`  
//Приведение типов может свести число в строку при объединении с строкой

//Функциональное выражение - анонимны, без имени и нельзя использовать саму по себе
//Её можно использовать только внутри другого кода
//Но переменная может присвоить её
// Можно прописывать как аргумент в другой функции
// function (a, b) {
  // let c 
// }
const myfunction = function(a, b) {
  return a + b
}

setTimeout(function() {
  console.log("Отложенный вызов")
}, 1000)

//Стрелочные функции
// (a, b) => {
//   let c
//   a = 1 + b 
//   return c + a 
// }
const secFunction = (a, b) => {
  let c
  return c = a + b
}
// анонимно присвоили переменной функцию
setTimeout(() => {
  console.log("сокращённая функция отложенного оповещения")
}, 1000)
// не зачем писать имя функции и объявлять функцию, если используешь
// =>
a => {
  // тело функции
}
// Такая функция в сокращённом виде!
// Только с одним параметром!

(a, b) => a+b
// Функция выполняет только ОДНО выражение!
// Неявное возвращение выражения. Нет слова return
// Автоматический возврат.


// Значение параметров функции по умолчанию
// Его можно задать самому в описании функции 
function multByFactor(value, multiplier = 1) {
  return value * multiplier
}
multByFactor(10, 2) //20
multByFactor(5) //5

var anonimus = (x, y=1) => x*y
// такая же структура у следующего выражения!
const newPost = (post, addedAt = Date()) => ({
  ...post,
  addedAt,
})
const firstPost = {
  id: 1,
  author: 'Man',
}
newPost(firstPost)
//{id: 1, author: 'Man', 
//addedAt: 'Mon Sep 05 2022 19:40:09 GMT+0300 (Москва, стандартное время)'}


//ФУНКЦИЯ ОШИБКА

const fnWithError = () => {
  throw new Error('Some Error') 
}
fnWithError()
// throw new Error() генерирует ошибку

// Решение ошибок!!!! Это спасёт краш
"try / catch"
try {
  // Выполнение блока кода
  throw new Error('Some error')
} catch (error) { 
  // Если ошибка, то этот блок сработает
  // Тут можно отправить отчёт
  console.error(error)
  console.log(error.message)
}
console.log("Продолжаем работать, код не сломается")


"Инструкции, выражения, выражения - инструкции"

//выражение всегда возвращает что-то
// инструкция выполняет действия
let a;
const b = 5;
if (a > b) { // инструкция 
  console.log("a is bigger");
}
for (let i = 0; i++; i<5) {
  console.log(i); // инструкция с выражением
}
"Инструкция обычно заканчивается ; "
"Инструкции нельзя вставлять в функции!"

"МАССИВЫ"
//форматы записи

const myArray = [1, 2, 3]
console.log(myArray)

const myArray2 = new Array(1, 2, 3)
console.log(myArray2)

//Но они не равны, так как хранятся в разных ссылках памяти
//Хранятся в разных местах памяти
"Методы массивов - функции высшего порядка массивов"

function countBy(x, n) {
  let z = [];
  for(let i = x; z.length < n; i += x) {
   z.push(i)
    }
  return z;
}
//.length посчитает количество значений массива
// .push() добавит значение в конец массива
// .pop() удаляет последний аргумент
// так же возвращает значение из массива
const removeElement = z.pop()

z.unshift(removeElement)
// .unshift - добавить в начало массива
// .shift - удаляет первый элемент и возвращает в переменную или вывод
const removeFirst = z.shift()
z.push(removeFirst)

//foreach
myArray123 = [1, 2, 3]
myArray123.forEach(element => console.log(element*2))
// вызывает callback функцию внутри массива
// элемент перебирает значения в массиве 
// выполнит функцию
//консоль даст 2 4 6 по очереди как для любого выражения
//НО МАССИВ НЕ МЕНЯЕТ
"Метод .map() всё исправит!"
const newMyArray246 = myArray123.map(element => console.log(element*2))
// [2, 4, 6] благополучно в новом массиве
// .map() перебирает в новый массив
"Деструктуризация объектов"
const userProfile = {
  name: 'Man',
  commentsQty: 23,
  online: false,
}
const {name, commentsQty} = userProfile
const {online} = userProfile

// Меняем их местами
// А теперь глянем что в массивах

const fruits = ['Apple', 'Banana']
const [fruitOne, fruitTwo] = fruits
console.log(fruitOne) // согласно ПОРЯДКУ в списке
console.log(fruitTwo) // Banana

const userInfo = ({ name, commentsQty }) => {
  if (!commentsQty) {
    return `User ${name} has no comments`
  }
  return `User ${name} has ${commentsQty} comments`
}
userInfo(userProfile) // user Man has 23 comments


