# react.org

- smallest react example

```js
ReactDom.render(<h1>Hello, world!</h1>, document.getElementById("root"));
```

## 1. JSX

- tag syntax: neither a string nor HTML ->JSX (syntax extension to Javascript)

```js
const element = <h1>Hello, world!</h1>;
```

- JSX produce React "elements".

- React don't require using JSX but it's helpful.(helpful error, visual aid)
  )

- Embedding expression in JSX : can put any valid JS expression with curly braces{}

- JSX is an Expression too. (?)

- Specifying attributes with JSX

  1. quotes to specify string literal.

  ```js
  const element = <div tabIndex="0"></div>;
  ```

  2. curly braces to embed a JS expression.

  ```js
  const element = <img src={user.avatarUrl}></img>;
  ```

  - JSX is closer to JS than HTML/ camelCase property naming

- Specifying children with JSX

- **JSX represent object**

  - identical examples

  1.

  ```js
  const element = <h1 className="greeting">Hello, World</h1>;
  ```

  2.

  ```js
  const element = React.createElement(
    "h1",
    { className: "greeting" },
    "Hello, World"
  );
  ```

  React.createElement() create object like below(simple ver).
  and this object is called "React element"
  React read this object and use them to construct the DOM.

  ```js
  const element ={
      type:"h1"
      props:{
          className:"greeting"
          children:"Hello, world"
      }
  }
  ```

## 2. Element rendering

- An element describes what you want to see on the screen.

- Rendering an element into the DOM
  - To render a React element into a root DOM node, pass both to ReactDOM.render()

```js
<div id="root"></div>;

const element = <h1>Hello, World</h1>;
ReactDOM.render(element, document.getElementById("root"));
```

- Updating the rendered element

  - React elements are immutable.(? example with call back func???anyway they keep render every second)

- React only updates what's necessary
  - React DOM compares the element and its children to the previous one.

## 3. Components and Props

- components -> independent, reusable, isolation

- components are like JS func. They accept arbitrary input(props) and return React element.

- Define a component: function and class component are same.

```js
//function
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

//class
class Welcome extends React.Component {
  render() {
    return <h1> Hello,{this.props.name}</h1>;
  }
}
```

- Rendering a Component

```js
const element =<Welcome name="Sara">
```

    - User defined components, it passes JSX attributes and children to this component as a single object. this object is "props"
    - *React component always with a capital letter*/ HTML tag:lower case

- Composing components
  components can refer to other components in their output

```js

function App(){
    return (
        <div>
        <welcome name="Sara">
        <welcome name="Serin">
        </div>
    )
}

ReactDOM.render(
    <App/>,document.getElementById("root")
)
```

- Extracting components

- Props are read-only
- All react components must act like pure functions with respect to their props.

## 4. State and Lifecycle

- State is similar to props, but it is private and fully controlled by the component.

- Converting a Function to a Class

  1. class Something extends React.Component{}
  2. render()
  3. move body of function into render()
  4. replace props with this.props
  5. delete the remaining empty function declaration.

- Adding local state to a class

  1. this.props.date -> this.state.date
  2. add class constructor that assigns the initial this.state
  3. remove prop from component

- Adding Lifecycle Methods to a Class

  - mounting: component's output is rendered to the DOM for the first time
    componentDidMount()
  - unmounting:
    componentWillUnmount()

- Using state correctly

  - do not modify state directly, use setState()
    **only place put this.state is the constructor**
  - state updates may be asynchronous
  - state updates are merged(??)

- The data flows down

  - A component may choose to pass its state down as props to its child components

  ```js
  <FormattedDate date={this.state.date} />
  ```

  the `FormattedDate` component would receive the date in its props and don't know wheather it came from Clock's state or Clcok's props

  - top-down data flow

## 5. Handling Events

- HTML/ React
  - React events are named using camelCase, pass function as the event handler
  - React: must call preventDefault
  - React: don't need to call addEventListener/ just provide a listener
  - with class component, common pattern is for an event handler to be a method

```js
//HTML
<button onClick="activateLaser()">Activate Lasers</button>
```

```js
//React
<button onClick={activateLaser}>Activate Lasers</button>
```

- bind or class field syntax or callback function (??)
  _need to study more from here_

- Passing arguments to Event Handler

## 6. Conditional Rendering
