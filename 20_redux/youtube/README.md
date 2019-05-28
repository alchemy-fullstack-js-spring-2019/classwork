# Redux Review

## Agenda

* container vs presentational component
* props
* state
  * react
  * redux
* actions
* reducers
* selectors
* connecting to react
  * mapStateToProps
  * mapDispatchToProps

### Container vs Presentational components

Containers are components that deal with how an application works.
They are responsible for connecting to the store and dispatching
actions to the store.

Presentational components deal with how things look, the layout and
style of a page.

### Props

Props are read only data that is passed to a component.

```js
function MyComponent({ myProp }) {
  // ...
}
```

```js
<MyComponent myProp="A prop" />
```

### State

Application state is changeable data. State moves around an application
as props.

#### React

In React state is owned by one component. Only the owner of a piece of
state can change that state.

```js
class MyComponent extends PureComponent {
  state = {
    myState: 'this is some state'
  }

  updateMyState = myNewState => {
    this.setState({ myState: myNewState })
  }

  // ...
}
```

The above component can pass `myState` to other (children) components by
passing it as a prop.

```js
class MyComponent extends PureComponent {
  state = {
    myState: 'this is some state'
  }

  updateMyState = myNewState => {
    this.setState({ myState: myNewState })
  }

  render() {
    return (
      <MyChildComponent myProp={this.state.myState} />
    )
  }
}
```

Since state is passed as a prop, and props are read-only, children
components have no direct way to update its parents state. Instead
the parent component is responsible for passing a function to update
state to its children.

```js
class MyComponent extends PureComponent {
  state = {
    myState: 'this is some state'
  }

  updateMyState = myNewState => {
    this.setState({ myState: myNewState })
  }

  render() {
    return (
      <MyChildComponent
        myProp={this.state.myState}
        updateMyProp={this.updateMyState}
      />
    )
  }
}
```

#### Redux

State in redux is a bit more flexible. All state is owned by
one store that is accessible anywhere in your application.
This means that any component can get state and update state.
In order to prevent a free-for-all of state manipulation, redux
also provides a state transformation pattern to help us keep our
state organized and predictable.

### Actions

Actions are plain JavaScript objects that are dispatched to the store.
Each action has a type and optional payload.

```js
{
  type: 'DO_STUFF'
}
```

```js
{
  type: 'DO_MORE_STUFF',
  payload: 'hi'
}
```

To make it easier to recreate similar actions, we often create
action creator functions.

```js
const doStuff = () => ({
  type: 'DO_STUFF'
})
```

We also typically use a constant for the action type.

```js
const DO_STUFF = 'DO_STUFF';
const doStuff = ({
  type: DO_STUFF
})
```

### Reducers

Reducers are plain JavaScript functions that take state and action.
A reducer is responsible for taking an action and updating state.

### Selectors

Selectors are JavaScript functions that take state and return a
piece of that state or derive some data from that state.

### Connecting to React

To connect a component to redux we use the `connect` higher order
component.

```js
import { connect } from 'react-redux';
import MyComponent from '../components/MyComponent';

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyComponent)
```

#### mapStateToProps (getters, selectors)

`mapStateToProps` is a function that takes the current redux state
and returns an object where the keys are the names of properties
to pass to a component.

#### mapDispatchToProps (setters, action creators)

`mapDispatchToProps` is a function that takes dispatch and returns
an object where the keys are the names of properties to pass to a
component.

The major difference between `mapStateToProps` and `mapDispatchToProps`
is that the values of the object returned by `mapDispatchToProps` will
be functions. Those functions are responsible for dispatching actions
to update state.

```js
const obj = {
  myFunction() {

  },
  myOtherFunction() {

  }
}
```

```js
const obj = {
  myFunction: () => {},
  myOtherFunction: () => {}
}
```

## Ideas

* soundcloud clone
  * playlists?
  * favorite songs
* goodreads clone
  * favorite books
* Twitch clone
  * favorite streamer
  * sort streamers
* image liker
  * favorites
