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

<!-- freecodecamp explaining need to listen  -->

# arrow function
