# this

## this point to object that is executing current function

- method ->obj

examples

```js
const video = {
  title: "a",
  play() {
    console.log(this);
  },
};
```

- function -> global(window)
  example

```js
function playVideo() {
  console.log(this);
}
```

- constructor -> empty object
  example

```js
function Video(title) {
  this.title = title;
  console.log(this);
}

const v = new Video("b");
```

# arrow function

1. compact
   arrow function always anonymous

```js
const divide = function(x,y){
    return x/y;
}

const divide = (x,y)=>{
return x/y;
}
// two parameter need ()
const square =(x)=>{
return x*x
}
//don't need to pur () if single parameter

const annoying =()=>
}

```

<all variations>

```js
const isEven = function (num) {
  return num % 2 === 0;
};
//regular function

const isEven = (num) => {
  return num % 2 === 0;
};
//arrow function with parens around param

const isEven = (num) => {
  return num % 2 === 0;
};
// no parens around param

const isEven = (num) => {
  num % 2 === 0;
};
const isEven = (num) => num % 2 === 0;
// implicit return //only with single expression
```

2. no separate `this`
   `this` is not going to change depending on the context

always global?
good with call back fuc

# Binding

- implicit Binding
  normal behave of this

```js
function addToBasket(item) {
  this.basket.push(item);
}

izzisAccount.addToBasket("sandwiches");
```

- Explicit Binding

```js
addToBasket.call(izzisAccount, "sandwiches");
addToBasket.apply(izzisAccount, ["sandwiches"]);
```

Both of the above invoke the function addToBasket, setting the value of this to be izzisAccount. The difference between call and apply is only in how you pass in arguments to addToBasket - call takes multiple arguments, whereas apply takes an array of arguments.

bind

```js
const addToIzzisBasket = addToBasket.bind(izzisAccount);
```

Invoking bind returns a new function - in the example above, it returns a copy of addToBasket where the value of this is always going to be the izzisAccount object. A bound function cannot have the this value changed.
