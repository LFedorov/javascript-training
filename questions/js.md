## Теория
1. Что такое DOM?
2. Что такое цикл событий?
3. Что такое замыкание?
4. Как работает прототипное наследование и чем оно отличается от классической модели наследования?
5. Как работает ключевое слово this?
6. Что такое всплытие событий и как работает этот механизм?
7. Опишите несколько способов обмена данными между клиентом и сервером.
8. Какими фреймворками вы пользовались? Каковы их сильные и слабые стороны? Почему программисты пользуются фреймворками? Проблемы какого рода решают фреймворки?

## Отладка
### 1. Необходимо, чтобы этот код выводил в лог hey amy, но он выводит hey arnold. Почему?
```js
function greet(person) {
  if (person == { name: 'amy' }) {
    return 'hey amy'
  } else {
    return 'hey arnold'
  }
}

greet({ name: 'amy' })
```

### 2. Необходимо, чтобы этот код выводил в лог числа 0, 1, 2, 3 в указанном порядке, но он этого не делает. Почему?
```js
for (var i = 0; i < 4; i++) {
  setTimeout(() => console.log(i), 0)
}
```

### 3. Необходимо, чтобы этот код выводил в лог doggo, но он выводит лишь undefined. Почему?
```js
let dog = {
  name: 'doggo',
  sayName() {
    console.log(this.name)
  }
}

let sayName = dog.sayName
sayName()
```

### 4. Попытка вызова метода bark() объекта Dog вызывает ошибку. Почему?
```js
function Dog(name) {
  this.name = name
}

Dog.bark = function() {
  console.log(this.name + ' says woof')
}

let fido = new Dog('fido')
fido.bark()
```

### 5. Почему функция isBig() возвращает именно такой результат?
```js
function isBig(thing) {
  if (thing == 0 || thing == 1 || thing == 2) {
    return false
  }
  return true
}

isBig(1) // false
isBig([2]) // false
isBig([3]) // true
```

### 6. Как сделать, чтобы при клике на любой div внутри root в консоль выводился его id?
```html
<div id="root" style="background: red;">
  root
  <span id="id1" style="background: lightblue;">id1</span>
  <div id="id2" style="background: green;">
    id2
    <div id="id3" style="background: yellow;">id3</div>
  </div>
</div>
```

### 7. Как сделать из массива объект?
```js
var arr = [
 { name: 'width', value: 10 }, 
 { name: 'height', value: 20 }
]

// { width: 10, height: 20 }
```

### 8. Есть функция и объект. Как вывести в консоли значение x из объекта используя функцию?
```js
function f() { console.log(this.x); }
var obj = { x: 'bar' };
```

### 9. Что вернет метод?
```js
function Book() {
  this.name = 'foo';
}

Book.prototype = {
  getName: function() {
    return this.name;
  }
};

let book = new Book();

Book.prototype.getUpperName = function() {
  return this.getName().toUpperCase();
}

book.getUpperName();
```

### 10. Что вернет этот код?
```js
typeof (function(){})();
```

## Практика
### 1. Реализуйте функцию isPrime(), которая возвращает true или false, указывая, является ли переданное ей число простым. Простое число — это натуральное число, большее единицы, имеющее ровно два натуральных делителя: 1 и само себя.
```js
isPrime(0) // false
isPrime(1) // false
isPrime(17) // true
isPrime(10000000000000) // false
```

### 2. Реализуйте функцию factorial(), которая возвращает факториал переданного ей числа.
```js
factorial(0) // 1
factorial(1) // 1
factorial(6) // 720
```

### 3. Реализуйте функцию fib(), возвращающую n-ное число Фибоначчи.
```js
fib(0) // 0
fib(1) // 1
fib(10) // 55
fib(20) // 6765
```

### 4. Реализуйте функцию isSorted(), которая возвращает true или false в зависимости о того, отсортирован ли переданный ей числовой массив.
```js
isSorted([]) // true
isSorted([-Infinity, -5, 0, 3, 9]) // true
isSorted([3, 9, -3, 10]) // false
```

### 5. Создайте собственную реализацию функции filter().
```js
filter([1, 2, 3, 4], n => n < 3) // [1, 2]
```

### 6. Создайте собственную реализацию функции reduce().
```js
reduce([1, 2, 3, 4], (a, b) => a + b, 0) // 10
```

### 7. Реализуйте функцию reverse(), которая обращает порядок следования символов переданной ей строки. Не пользуйтесь встроенной функцией reverse().
```js
reverse('') // ''
reverse('abcdef') // 'fedcba'
```

### 8. Создайте собственную реализацию функции indexOf() для массивов.
```js
indexOf([1, 2, 3], 1) // 0
indexOf([1, 2, 3], 4) // -1
```

### 9. Реализуйте функцию isPalindrome(), которая возвращает true или false в зависимости от того, является ли переданная ей строка палиндромом (функция нечувствительна к регистру и к наличию в строке пробелов).
```js
isPalindrome('') // true
isPalindrome('abcdcba') // true
isPalindrome('abcd') // false
isPalindrome('A man a plan a canal Panama') // true
isPalindrome('А роза упала на лапу Азора.') // true
isPalindrome('Аргентина манит негра') // true
isPalindrome('Казак') // true
isPalindrome('Лев с ума ламу свел') // true
isPalindrome('Замучен он, но не чумаз!') // true
```

### 10. Реализуйте функцию missing(), которая принимает неотсортированный массив уникальных чисел (то есть, числа в нём не повторяются) от 1 до некоего числа n, и возвращает число, отсутствующее в последовательности. Там может быть либо одно отсутствующее число, либо их может не быть вовсе. Способны ли вы добиться того, чтобы функция решала задачу за время O(N)? Подсказка: есть одна хорошая формула, которой вы можете воспользоваться.
```js
missing([]) // undefined
missing([1, 4, 3]) // 2
missing([2, 3, 4]) // 1
missing([5, 1, 4, 2]) // 3
missing([1, 2, 3, 4]) // undefined
```

### 11. Реализуйте функцию isBalanced() которая принимает строку и возвращает true или false, указывая на то, сбалансированы ли фигурные скобки, находящиеся в строке.
```js
isBalanced('}{') // false
isBalanced('{{}') // false
isBalanced('{}{}') // true
isBalanced('foo { bar { baz } boo }') // true
isBalanced('foo { bar { baz }') // false
isBalanced('foo { bar } }') // false
```

### 12. Реализуйте функцию fib2(). Она похожа на функцию fib() из предыдущей группы заданий, но поддерживает числа вплоть до 50. Подсказка: используйте мемоизацию.
```js
fib2(0) // 0
fib2(1) // 1
fib2(10) // 55
fib2(50) // 12586269025
```

### 13. Реализуйте функцию isBalanced2(). Она похожа на функцию isBalanced() из предыдущей группы заданий, но поддерживает три типа скобок: фигурные {}, квадратные [], и круглые (). При передаче функции строки, в которой имеются неправильные скобочные последовательности, функция должна возвращать false.
```js
isBalanced2('(foo { bar (baz) [boo] })') // true
isBalanced2('foo { bar { baz }') // false
isBalanced2('foo { (bar [baz] } )') // false
```

### 14. Реализуйте функцию uniq(), которая принимает массив чисел и возвращает уникальные числа, найденные в нём. Может ли функция решить эту задачу за время O(N)?
```js
uniq([]) // []
uniq([1, 4, 2, 2, 3, 4, 8]) // [1, 4, 2, 3, 8]
```

### 15. Реализуйте функцию intersection(), которая принимает два массива и возвращает их пересечение. Можете ли вы добиться того, чтобы функция решала эту задачу за время O(M+N), где M и N — длины массивов?
```js
intersection([1, 5, 4, 2], [8, 91, 4, 1, 3]) // [4, 1]
intersection([1, 5, 4, 2], [7, 12]) // []
```

### 16. Создайте реализацию функции sort(), которая сортирует числовой массив за время O(N×log(N)).
```js
sort([]) // []
sort([-4, 1, Infinity, 3, 3, 0]) // [-4, 0, 1, 3, 3, Infinity]
```

### 17. Реализуйте функцию includes(), которая возвращает true или false в зависимости от того, встречается ли переданное ей число в переданном ей отсортированном массиве. Может ли функция решить эту задачу за время O(log(N))?
```js
includes([1, 3, 8, 10], 8) // true
includes([1, 3, 8, 8, 15], 15) // true
includes([1, 3, 8, 10, 15], 9) // false
```

### 18. Реализуйте функцию assignDeep(), которая похожа на Object.assign(), но выполняет глубокое объединение объектов. Для того, чтобы не усложнять задачу, можно исходить из допущения, что объекты могут содержать только числа и другие объекты (в них не может быть массивов, строк, и так далее).
``` js
assignDeep({ a: 1 }, {}) // { a: 1 }
assignDeep({ a: 1 }, { a: 2 }) // { a: 2 }
assignDeep({ a: 1 }, { a: { b: 2 } }) // { a: { b: 2 } }
assignDeep({ a: { b: { c: 1 }}}, { a: { b: { d: 2 }}, e: 3 }) // { a: { b: { c: 1, d: 2 }}, e: 3 }
```

### 19. Реализуйте функцию reduceAsync(), которая похожа на функцию reduce() из группы простых заданий, но работает с функциями, возвращающими promise-объекты, каждый из которых должен быть разрешён до перехода к следующему.
```js
let a = () => Promise.resolve('a')
let b = () => Promise.resolve('b')
let c = () => new Promise(resolve => setTimeout(() => resolve('c'), 100))
await reduceAsync([a, b, c], (acc, value) => [...acc, value], []) // ['a', 'b', 'c']
await reduceAsync([a, c, b], (acc, value) => [...acc, value], ['d']) // ['d', 'a', 'c', 'b']
```

### 20. Реализуйте функцию seq(), пользуясь тем же подходом, что и при работе над функцией reduceAsync(). Эта функция должна принимать массив функций, которые возвращают promise-объекты, и разрешать их один за другим.
```js
let a = () => Promise.resolve('a')
let b = () => Promise.resolve('b')
let c = () => Promise.resolve('c')
await seq([a, b, c]) // ['a', 'b', 'c']
await seq([a, c, b]) // ['a', 'c', 'b']
```

### 21. Реализуйте функцию permute(), которая возвращает массив строк, содержащий все пермутации заданной строки.
```js
permute('') // []
permute('abc') // ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']
```

### 22. Создайте самостоятельную реализацию функции debounce().
```js
let a = () => console.log('foo')
let b = debounce(a, 100)
b()
b()
b() // только этот вызов должен вызывать a()
```

### 23. Реализуйте класс LinkedList, не используя встроенные массивы JavaScript ( [] ). Ваш LinkedList должен поддерживать лишь 2 метода: add() и has().
```js
class LinkedList {...}
let list = new LinkedList(1, 2, 3)
list.add(4) // undefined
list.add(5) // undefined
list.has(1) // true
list.has(4) // true
list.has(6) // false
```

### 24. Реализуйте класс HashMap, не используя встроенные объекты JavaScript ( {} ) или функцию map(). Вам дана функция hash(), которая принимает строку и возвращает некое число. Эти числа, в основном, уникальны, но возможна и ситуация, когда двум разным строкам соответствуют одинаковые числа. Ваша реализация HashMap должна поддерживать лишь 2 метода: get() и set().
```js
function hash (string) {
  return string
    .split('')
    .reduce((a, b) => ((a << 5) + a) + b.charCodeAt(0), 5381)
}

let map = new HashMap
map.set('abc', 123) // undefined
map.set('foo', 'bar') // undefined
map.set('foo', 'baz') // undefined
map.get('abc') // 123
map.get('foo') // 'baz'
map.get('def') // undefined
```

### 25. Реализуйте класс BinarySearchTree. Он должен поддерживать 4 метода: add(), has(), remove(), и size().
```js
let tree = new BinarySearchTree
tree.add(1, 2, 3, 4)
tree.add(5)
tree.has(2) // true
tree.has(5) // true
tree.remove(3) // undefined
tree.size() // 4
```

### 26. Реализуйте класс BinaryTree, который поддерживает поиск в ширину, а также функции симметричного, прямого и обратного поиска в глубину.
```js
let tree = new BinaryTree
let fn = value => console.log(value)
tree.add(1, 2, 3, 4)
tree.bfs(fn) // undefined
tree.inorder(fn) // undefined
tree.preorder(fn) // undefined
tree.postorder(fn) // undefined
```

### 27. Реализуйте функцию поиска повторяющихся элементов в массиве.
```js
repeated([1, 2, 2, 3]) // [2]
repeated([1, 2, 2, 3, 4, 4]) // [2, 4]
repeated([1, 2, 3]) // []
```
