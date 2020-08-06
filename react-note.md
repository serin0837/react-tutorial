# What Is React?

React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”.

```js
class ShoppingList extends React.Component {
  render() {
    return (
      <div className="shopping-list">
        <h1>Shopping List for {this.props.name}</h1>
    )
  }
}
```

- ShoppingList is a React component class, or React component type.

- A component takes in parameters, called props (short for “properties”), and returns a hierarchy of views to display via the render method.

- render returns a React element

- The ShoppingList component above only renders built-in DOM components like <div /> and <li />. But you can compose and render custom React components too

- use arrow function in Square component (to not confuse with this (?????))

- next, we want the Square component to "remember" that it got clicked **state**
  1. add constructor
