---
date: '2020-01-01'
excerpt: 'As JavaScript developers we use prototypal inheritance in our code every day. I decided I needed to understand this key feaure of JavaScript better. This is what I learned.'
length: '7 min'
path: '/blog/prototypal-inheritance-in-javascript'
tags: ['javascript']
title: 'Prototypal Inheritance in JavaScript'
---

Prototypes are the mechanisms which power inheritance in JavaScript (JS). Prototypes are simply objects which contain a predefined set of values, which we can access and make use of.

```javascript
const anObject = {}

console.log(anObject)
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

In the example above, we can see the `__proto__` property (sometimes called the 'dunder proto') on `anObject`. Whenever an object is instantiated in JavaScript, provided it isn't mutated, JS automatically links it to the _global object prototype_ through the `__proto__` property.

<br/>

What does this mean, and why is it relevant?

<br/>

Well, in the example above you'll notice we didn't explicitly define any properties inside of `anObject` - in other words the value of `anObject` is equal to an empty object literal. So if that's the case, how come we can do the following:

```javascript
const anObject = {}

console.log(anObject.toString())
// "[object Object]"
```

We're able to access a property `toString()` on `anObject`, yet we haven't declared a property called `toString` inside `anObject`. `anObject` is just an empty object literal. Notice also the log statement doesn't return an error.

<br/>

What's happening is that when calling a property on an object (or other primitive type), JS will first look inside the definition of the object for the property that is called. If the property does not exist inside the object definition, then JS looks inside the `__proto__` object for the property. In a nutshell, this is what prototypal inheritance means in JS.

<br/>

Now, if we explicitly declare a `toString` property on `anObject`, then it will get priority over the `toString` method set inside `__proto__`:

```javascript
const anObject = {}

anObject.toString = () => {
  console.log('New property `toString` invoked!!')
}

console.log(anObject.toString())
// "New property `toString` invoked!!"
```

All types of objects within JS have their own built-in global prototype objects which are linked as soon as the object is instantiated. This is also true for object sub-types such as arrays, maps, sets and functions.

```javascript
const anArray = []

console.log(anArray)
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
function aFunction() {}

console.log(aFunction.prototype)
// {constructor: ƒ}
//   constructor: ƒ aFunction()
//   __proto__: Object
```

`.prototype` has two properties: `constructor` and `__proto__`. When a property is called on a function using the dot notation, JS _does not_ look in the `.prototype` property, but it _does_ look in the `__proto__` property. In other words, the `.prototype` property is not used for prototypal inheritance, whereas the `__proto__` property is, even though `__proto__` is not a direct property of the function.

<br/><br/><br/>

<h2 class="c-heading c-heading--md css-40h810-styles">Thanks for reading!</h2>

That's it. That's all I've got for today. I hope you found it useful. Feel free to get in touch if I've made any mistakes in this post, if you fancy a chat about prototypal inheritance, or for anything else, by using one of the links below.
