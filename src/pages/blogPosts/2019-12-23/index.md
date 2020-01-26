---
date: '2019-12-23'
excerpt: 'The concept of `this` in JavaScript can be confusing. I decided I needed to understand this key feaure of JavaScript better. This is what I learned (pun somewhat intended).'
length: '13 min'
path: '/blog/we-need-to-talk-about-this'
tags: ['javascript']
title: 'We Need to Talk about `this`'
---

In JavaScript (JS), `this` is a dynamic keyword which can have different values associated with it depending on where and how it is invoked. Let’s look at how `this` works in the global execution context.

<br/>

When used outside of any function, `this` is a reference to the global object. In a browser setting `this` has a value of `Window`.

```javascript
console.log(this)
// Window {parent: Window, opener: null, top: Window, length: 2, frames: Window...}
```

In a node repl `this` has a value of `global`, however inside a node module `this` has a value of `module.exports`. The node engine runs each module of code inside of a wrapper function, and that wrapper function is invoked with the `this` value set to `module.exports`.

<br/>

For the purpose of this post, we'll be working in a browser environment.

<br/><br/><br/>

<h2 class="c-heading c-heading--md"><code class="language-text">this</code> in Function Calls</h2>

<br/>

In most cases, the value of a function’s `this` argument is determined by how the function is called. That means `this` can be different each time the function is executed. In a plain, undecorated function call, if you are not using strict mode, the value of `this` is set to the `global` object.

```javascript
function myFunc() {
  console.log(this)
}

myFunc()
// Window {parent: Window, opener: null, top: Window, length: 2, frames: Window...}
```

However, in strict mode, the function’s `this` value is set to `undefined`.

```javascript
function myFunc() {
  'use strict'
  console.log(this)
}

myFunc()
// undefined
```

It doesn’t matter whether the _execution point_ is in strict mode, it matters whether the _function definition_ is in strict mode. This matters when, for example, the code you are writing is written in strict mode, but a third party library you are making use of is not.

<br/>

If you're not using strict mode, it's easy to get unexpected results with `this`.

```javascript
function Person(firstName, lastName) {
  this.firstName = firstName
  this.lastName = lastName
}

const Gob = Person('Gob', 'Bluth')

console.log(Gob)
// undefined

console.log(global.firstName, global.lastName)
// "Gob"
// "Bluth"
```

Here we try to reference the variable `Gob` on line 8, but get `undefined`. This is because the properties `firstName` and `lastName` have been assigned to the global `Window` object, as illustrated on line 9.

<br/>

This is almost never the desired behaviour. If we tried the same code in strict mode, we'd get an error, preventing us from assigning properties to the global object.

```javascript
function Person(firstName, lastName) {
  'use strict'
  this.firstName = firstName
  this.lastName = lastName
}

const Gob = Person('Gob', 'Bluth')

console.log(Gob)
// Uncaught TypeError: Cannot set property 'firstName' of undefined
```

If we call the function as a constructor using the `new` keyword, we no longer pollute the global namespace, and correctly assign the properties as intended.

```javascript
function Person(firstName, lastName) {
  'use strict'
  this.firstName = firstName
  this.lastName = lastName
}

const Gob = new Person('Gob', 'Bluth')

console.log(Gob)
// { firstName: "Gob", lastName: "Bluth" }
```

<br/><br/><br/>

<h2 class="c-heading c-heading--md css-40h810-styles"><code class="language-text">this</code> in Constructor Calls</h2>

<br/>

In JS, a function call preceded with the `new` keyword is a 'constructor' call. When a function is invoked as a constructor, a new object is created automatically, and that new object is then used for the `this` binding for the function call.

<br/>

Note: arrow functions cannot be used as constructor functions, in other words they cannot be invoked with the `new` keyword. Arrow functions have no implicit binding for `this` (more on that later).

```javascript
function Person(firstName, lastName) {
  console.log(this)
  this.firstName = firstName
  console.log(this)
  this.lastName = lastName
  console.log(this)
}

const Tommy = new Person('Tommy', 'Haverford')
// Person {}
// Person { firstName: 'Tommy' }
// Person { firstName: 'Haverford' }
```

Here we can see the output of the constructor function in action line by line. We can see the new object being linked to the `Person` function’s prototype. Since we didn’t include a return statement, the brand new object that was constructed for us was returned automatically.

<br/><br/><br/>

<h2 class="c-heading c-heading--md css-40h810-styles"><code class="language-text">this</code> in Method Calls</h2>

<br/>

When a function is called as a method of an object, the function’s `this` keyword is set to the object the function is defined in.

```javascript
const person = {
  firstName: 'Phil Mitchell',
  greeting() {
    console.log(`Hey, I'm ${this.firstName}!`)
  }
}

person.greeting()
// "Hey, I'm Phil Mitchell!"
```

Here, `person` is the _receiver_ of the method call, and so that becomes the value of `this`.

<br/>

`this` is still bound to the object even if the method is created outside of the function, and added to the object as a property at a later time:

```javascript
function greeting() {
  console.log(`Hey I'm ${this.firstName}!`)
}

const person = {
  firstName: 'Super Hans'
}

person.sayHey = greeting

person.sayHey()
// "Hey I'm Super Hans!"
```

Sometimes, methods are called several layers deep on an object using the dot notation. In this case, `this` is set to the very next property to the left of the method being called.

<br/>

Depending on the circumstances, the intended receiver of the `this` call can be lost. For example, if we initialise a new variable and set it's value to the object method, we lose the receiver:

```javascript
function greeting() {
  console.log(`Hey I'm ${this.firstName}!`)
}

const person = {
  firstName: 'Super Hans'
}

person.sayHey = greeting

person.sayHey()
// "Hey I'm Super Hans!"

const greet = person.sayHey

greet()
// "Hey I'm undefined!"
```

<br/><br/><br/>

<h2 class="c-heading c-heading--md css-40h810-styles">Specify <code class="language-text">this</code> using <code class="language-text">.call()</code> and <code class="language-text">.apply()</code></h2>

We can attach methods to objects without explicitly declaring them using `.call()` or `.apply()`.

```javascript
function greeting() {
  console.log(`Hey I'm ${this.firstName}!`)
}

const person = {
  firstName: 'Super Hans'
}

greeting.call(person)
// "Hey I'm Super Hans!"

greeting.apply(person)
// "Hey I'm Super Hans!"

console.log(person)
// { firstName: "Super Hans" }
```

`.call()` and `.apply()` invoke the function, and on lines 10 and 13 we can see that `greeting` has access to the `this` value of `person`.

<br/><br/><br/>

<h2 class="c-heading c-heading--md css-40h810-styles">Specify <code class="language-text">this</code> using <code class="language-text">.bind()</code></h2>

In certain circumstances, we can lose our intended value of `this`. We can modify the value of `this` in some instances by using the `.bind()` method.

```javascript
const person = {
  firstName: 'Gob',
  greeting() {
    console.log(`Hi, my name is ${this.firstName}!`)
  }
}

setTimeout(person.greeting, 0)
// "Hi, my name is undefined!"

setTimeout(person.greeting.bind(person), 0)
// "Hi, my name is Gob!"
```

Here, `.bind()` creates a new `greeting` function, and permanently sets it's `this` value to `person`, i.e. `person` has permanently become the receiver of `greeting`. This is sometimes referred to as 'hard-binding'. Once `this` has been bound using `.bind()`, it cannot be changed, not even by using `.call()` or `.apply()`.

<br/><br/><br/>

<h2 class="c-heading c-heading--md css-40h810-styles"><code class="language-text">this</code> in Arrow Functions</h2>

Arrow functions do not have their own value for `this`. Instead, they inherit the value for `this` from the enclosing execution context, i.e. one level up.

```javascript
const outerThis = this

const whatIsThis = () => {
  console.log(this === outerThis)
}

whatIsThis()
// true
```

The value of `this` in an arrow function cannot be manipulated in any way, even by using `.bind()`, `.call()` or `.apply()`. The `this` value of an arrow function will always be the same as it was at the place of the function definition.

<br/>

Arrow functions cannot be used as constructors, i.e. they cannot be invoked with the `new` keyword.

```javascript
const arrowFunc = () => null

const aReferenceToTheArrowFunc = new arrowFunc()
// TypeError: aReferenceToTheArrowFunc is not a constructor
```

The transparent `this` binding of arrow functions is particularly useful when using them as call back functions, as seen in the example below:

```javascript
const counter = {
  count: 0,
  increment() {
    setInterval(function() {
      console.log(this.count++)
    }, 1000)
  }
}

counter.increment()
// NaN
```

The `this` value of `setInterval` is the global `Window` object, which doesn't have a `count` property associated with it, and so we get `NaN`. This example can be re-written as an arrow function, with better results:

```javascript
const counter = {
  count: 0,
  increment() {
    setInterval(() => {
      console.log(this.count++)
    }, 1000)
  }
}

counter.increment()
// 1, 2, 3, 4, 5...
```

<br/><br/><br/>

<h2 class="c-heading c-heading--md css-40h810-styles"><code class="language-text">this</code> in Class Bodies</h2>

Here we have a class, and everything looks like it's working as we might expect:

```javascript
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
  }

  sayHi() {
    console.log(`Hi, my name is ${this.firstName}!`)
  }
}

const tommy = new Person('Tommy', 'Haverford')

tommy.sayHi()
// "Hi, my name is Tommy!"
```

In the constructor, `this` refers to the newly created instance of the class. `tommy` is a newly created object, and is the receiver for the method call `sayHi()`. However, if we save the method reference to a variable, and try to invoke that variable, we lose the receiver, and we lose the intended `this` value along with it.

```javascript
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
  }

  sayHi() {
    console.log(`Hi, my name is ${this.firstName}!`)
  }
}

const tommy = new Person('Tommy', 'Haverford')

tommy.sayHi()
// "Hi, my name is Tommy!"

const introduceTommy = tommy.sayHi

introduceTommy()
// TypeError: Cannot read property 'firstName' of undefined
```

This is because class bodies are implicitly set in strict mode, and we're attempting to invoke `introduceTommy` as an ordinary function. We can work around this by using the `.bind()` method:

```javascript
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
  }

  sayHi() {
    console.log(`Hi, my name is ${this.firstName}!`)
  }
}

const tommy = new Person('Tommy', 'Haverford')

tommy.sayHi()
// "Hi, my name is Tommy!"

const introduceTommy = tommy.sayHi.bind(tommy)

introduceTommy()
// TypeError: Cannot read property 'firstName' of undefined
```

A variation of this would be to bind the `sayHi` method in the constructor:

```javascript
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
    this.sayHi = this.sayHi.bind(this)
  }

  sayHi() {
    console.log(`Hi, my name is ${this.firstName}!`)
  }
}

const tommy = new Person('Tommy', 'Haverford')

tommy.sayHi()
// "Hi, my name is Tommy!"

const introduceTommy = tommy.sayHi

introduceTommy()
// "Hi, my name is Tommy!"
```

Another solution would be to use an arrow function:

```javascript
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
  }

  sayHi = () => {
    console.log(`Hi, my name is ${this.firstName}!`)
  }
}

const tommy = new Person('Tommy', 'Haverford')

tommy.sayHi()
// "Hi, my name is Tommy!"

const introduceTommy = tommy.sayHi

introduceTommy()
// "Hi, my name is Tommy!"
```

Now we don't need to call `.bind()` because `this` is automatically set to the instance of the class.

<br/><br/><br/>

<h2 class="c-heading c-heading--md css-40h810-styles">Thanks for reading!</h2>

That's it. That's all I've got for today. I hope you found it useful. Feel free to get in touch if I've made any mistakes in this post, if you fancy a chat about `this`, or for anything else, by using one of the links below.
