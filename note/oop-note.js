let dog = {
  sound: "woof",
  talk: function () {
    console.log(this.sound);
  },
};

dog.talk();
let talkFunction = dog.talk;
talkFunction();
// undefined because it lost connect
//but we can bind

let boundFunction = talkFunction.bind(dog);
boundFunction();

//real world example
let button = document.getElementById("myNiceButton");

button.addEventListener("click", dog.talk);
// this is not dog// so add adg.talk.bind(dog)
