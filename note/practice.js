// function createUser(name) {
//   const newUser = {};
//   newUser.username = name;
//   newUser.basket = [];
//   newUser.addToBasket = addToBasket;
//   return newUser;
// }

// const izzisAccount = createUser("Izzi");
// const anatsAccount = createUser("Anat");

// function addToBasket(item) {
//   this.basket.push(item);
// }

// // izzisAccount.addToBasket("sandwiches");

// // addToBasket.call(izzisAccount, "sandwiches");
// // addToBasket.apply(izzisAccount, ["sandwiches"]);

// const addToIzzisBasket = addToBasket.bind(izzisAccount);
// console.log(addToIzzisBasket);

<div id="root"></div>;

const element = <h1>Hello, World</h1>;
ReactDOM.render(element, document.getElementById("root"));
