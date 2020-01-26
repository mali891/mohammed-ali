---
date: '2020-01-01'
excerpt: 'As JavaScript developers we use prototypal inheritance in our code every day. I decided I needed to understand this key feaure of JavaScript better. This is what I learned.'
length: '10 min'
path: '/blog/prototypal-inheritance-in-javascript'
tags: ['javascript']
title: 'Prototypal Inheritance in JavaScript'
---

<h2 class="c-heading c-heading--md css-40h810-styles">What is Prototypal Inheritance?</h2>

According to the <a class="c-link u-clr--secondary" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain" target="_blank" rel="noopener noreferrer">MDN docs</a>:
_"When it comes to inheritance, JavaScript only has one construct: objects. Each object has a private property which holds a link to another object called its prototype. That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype. By definition, null has no prototype, and acts as the final link in this prototype chain."_

<br/><br/>

Prototypes are the mechanisms which power inheritance in JavaScript (JS). Prototypes are simply objects which contain a predefined set of values, which we can access and make use of. Each type has it's own predefined prototypal object.

```javascript
const myObj = {}

console.log(myObj)
// {}
//   __proto__:
//   constructor: ƒ Object()
//   __defineGetter__: ƒ __defineGetter__()
//   __defineSetter__: ƒ __defineSetter__()
//   hasOwnProperty: ƒ hasOwnProperty()
//   __lookupGetter__: ƒ __lookupGetter__()
//   __lookupSetter__: ƒ __lookupSetter__()
//   isPrototypeOf: ƒ isPrototypeOf()
//   propertyIsEnumerable: ƒ propertyIsEnumerable()
//   toString: ƒ toString()
//   valueOf: ƒ valueOf()
//   toLocaleString: ƒ toLocaleString()
//   get __proto__: ƒ __proto__()
//   set __proto__: ƒ __proto__()
```

In the example above, we can see the `__proto__` property (sometimes called the 'dunder proto') on `myObj`. Whenever an object is instantiated in JavaScript, provided it isn't mutated, JS automatically links it to the _global object prototype_ through the `__proto__` property.

<br/><br/>

What does this mean, and why is it relevant?

<br/><br/>

Well, in the example above you'll notice we didn't explicitly define any properties inside of `myObj` - in other words the value of `myObj` is equal to an empty object literal. So if that's the case, how come we can do the following:

```javascript
const myObj = {}

console.log(myObj.toString())
// "[object Object]"
```

We're able to access a property `toString()` on `myObj`, yet we haven't declared a property called `toString` inside `myObj`. `myObj` is just an empty object literal. Notice also the log statement doesn't return `undefined`.

<br/>

When calling a property on an object (or other primitive type), JS will first look inside the definition of the object for the property that is called. If the property does not exist inside the object definition, then JS looks inside the `__proto__` object for the property. In a nutshell, this is what prototypal inheritance is in JS.

<br/>

Now, if we explicitly declare a `toString` property on `myObj`, then it will get priority over the `toString` method set inside `__proto__`:

```javascript
const myObj = {}

myObj.toString = () => {
  console.log('New property `toString` invoked!!')
}

console.log(myObj.toString())
// "New property `toString` invoked!!"
```

<br/><br/><br/>

<h2 class="c-heading c-heading--md css-40h810-styles">Primitive Types and Sub-Types</h2>

All types of objects within JS have their own built-in global prototype objects which are linked as soon as the object is instantiated. This is also true for other primitive types (more on this later), and also object sub-types, such as arrays, maps, sets and functions.

```javascript
const myArr = []

console.log(myArr)
// []
//   length: 0
//   __proto__: Array(0)
//   length: 0
//   constructor: ƒ Array()
//   concat: ƒ concat()
//   copyWithin: ƒ copyWithin()
//   fill: ƒ fill()
//   find: ƒ find()
//   findIndex: ƒ findIndex()
//   lastIndexOf: ƒ lastIndexOf()
//   pop: ƒ pop()
//   push: ƒ push()
//   reverse: ƒ reverse()
//   shift: ƒ shift()
//   unshift: ƒ unshift()
//   slice: ƒ slice()
//   sort: ƒ sort()
//   splice: ƒ splice()
//   includes: ƒ includes()
//   indexOf: ƒ indexOf()
//   join: ƒ join()
//   keys: ƒ keys()
//   entries: ƒ entries()
//   values: ƒ values()
//   forEach: ƒ forEach()
//   filter: ƒ filter()
//   flat: ƒ flat()
//   flatMap: ƒ flatMap()
//   map: ƒ map()
//   every: ƒ every()
//   some: ƒ some()
//   reduce: ƒ reduce()
//   reduceRight: ƒ reduceRight()
//   toLocaleString: ƒ toLocaleString()
//   toString: ƒ toString()
//   Symbol(Symbol.iterator): ƒ values()
//   Symbol(Symbol.unscopables): {copyWithin: true, entries: true, fill: true, find: true, findIndex: true, …}
//   __proto__: Object
```

<br/><br/><br/>

<h2 class="c-heading c-heading--md css-40h810-styles">The Difference Between <code class="language-text">.prototype</code> and <code class="language-text">__proto__</code></h2>

Functions in JS are first-class objects. This means they can have functions and methods associated with them as properties just like objects can.

<br/>

Whenever we instantiate a new function (not an arrow function), JS automatically creates a property on that function called `.prototype`.

```javascript
function myFunc() {}

console.log(myFunc.prototype)
// {constructor: ƒ}
//   constructor: ƒ myFunc()
//   __proto__: Object
```

`.prototype` has two properties: `constructor` and `__proto__`. When a property is called on a function using the dot notation, JS _does not_ look in the `.prototype` property, but it _does_ look in the `__proto__` property. In other words, the `.prototype` property is not used for prototypal inheritance, whereas the `__proto__` property is, even though `__proto__` is not a direct property of the function.

```javascript
function myFunc() {}

myFunc.prototype.newString = 'Hello I am a new string'

console.log(myFunc.prototype)
// { newString: "Hello I am a new string", constructor: ƒ }
//   newString: "Hello I am a new string"
//   constructor: ƒ myFunc()
//   __proto__: Object

const myNewFunc = new myFunc()

console.log(myNewFunc)
// myFunc {}
//   __proto__:
//     newString: "Hello I am a new string"
//     constructor: ƒ myFunc()
//     __proto__: Object

console.log(myNewFunc.prototype)
// undefined
```

Here we've added a new property `newString` to `myFunc`. Then we instantiated a new constructor of `myFunc` called `myNewFunc`. When adding a property to a function, it is added to the `.prototype` object. But, if we declare a new instance of that function using the `new` keyword, the new instance will have that new property available to it in the `__proto__` object, rather than the `.prototype` object.

<br/>

Why should you care?

<br/>

```javascript
console.log(Object)
// ƒ Object() { [native code] }

console.log(Array)
// ƒ Array() { [native code] }

console.log(Map)
//ƒ Map() { [native code] }

console.log(Set)
// ƒ Set() { [native code] }
```

These are all global functions, not objects. They all have access to a `.prototype` property, which has methods inside of it. Many JS developers use these on a regular basis without even thinking about it. For example, every time you `map` or `forEach` through an array, you're actually using the global `array.prototype.map` or global `array.prototype.forEach` method. When the array is created, JS automatically creates a connection between our new array, and the corresponding `__proto__` property.

```javascript
console.log(Object.prototype)
// {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}

console.log(Array.prototype)
// [constructor: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, find: ƒ, …]

console.log(Map.prototype)
// Map {constructor: ƒ, get: ƒ, set: ƒ, has: ƒ, delete: ƒ, …}

console.log(Set.prototype)
// Set {constructor: ƒ, has: ƒ, add: ƒ, delete: ƒ, clear: ƒ, …}
```

In other words, you're using prototypal inhheritance any time you use any type of object in your code.

<br/><br/><br/>

<h2 class="c-heading c-heading--md css-40h810-styles">Primitive Types and the Prototype Chain</h2>

It's not just objects that have access to the prototype chain:

```javascript
console.log(Boolean.prototype)
// Boolean {false, constructor: ƒ, toString: ƒ, valueOf: ƒ}

console.log(Number.prototype)
// Number {0, constructor: ƒ, toExponential: ƒ, toFixed: ƒ, toPrecision: ƒ, …}

console.log(String.prototype)
// String {"", constructor: ƒ, anchor: ƒ, big: ƒ, blink: ƒ, …}

console.log(Symbol.prototype)
// Symbol {Symbol(Symbol.toStringTag): "Symbol", constructor: ƒ, toString: ƒ, valueOf: ƒ, …}

console.log(BigInt.prototype)
// BigInt {Symbol(Symbol.toStringTag): "BigInt", constructor: ƒ, toLocaleString: ƒ, toString: ƒ, valueOf: ƒ}
```

While these primitive types are not technically objects, JS gives them behaviour which allows them to _behave_ like objects, and so they have access to the prototype chain.

<br/><br/><br/>

<h2 class="c-heading c-heading--md css-40h810-styles">Summary</h2>

Objects in JS give us the ability to create a group of key/value pairs. We can look up properties in objects using the dot notation. As expected, if we tried to look up a property which hasn't been declared on an object, we'd get `undefined`:

```javascript
const myObj = {
  firstName: 'Bobbery'
}

console.log(myObj.firstName)
// Bobbery

console.log(myObj.secondName)
// undefined
```

That's true _unless_ the property is part of the object's prototype chain:

```javascript
const myObj = {
  firstName: 'Bobbery'
}

console.log(myObj.firstName)
// Bobbery

console.log(myObj.toString())
// "[object] [Object]"
```

In which case we can make use of JavaScript's prototypal inheritance system.

<br/><br/><br/>

<h2 class="c-heading c-heading--md css-40h810-styles">Thanks for reading!</h2>

That's it. That's all I've got for today. I hope you found it useful. Feel free to get in touch if I've made any mistakes in this post, if you fancy a chat about prototypal inheritance, or for anything else, by using one of the links below.
