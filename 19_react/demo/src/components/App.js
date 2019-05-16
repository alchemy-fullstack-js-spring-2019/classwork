import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ComponentDemo from './Comp';

function Header({ title }) {
  return (
    <header>
      <h1>{title}</h1>

    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired
  // dogs: PropTypes.arrayOf(PropTypes.shape({
  //   name: PropTypes.string,
  //   age: PropTypes.number
  // }))
};

Header.defaultProps = {
  title: 'My Default'
};

class Counter extends PureComponent {
  static propTypes = {
    buttonTitle: PropTypes.string.isRequired
  }

  static defaultProps = {
    buttonTitle: 'My Button'
  }

  state = {
    count: 1
  }

  // original count 1 -> count 2
  // original count 1 -> count 2
  incrementCount = () => {
    this.setState(state => (
      { count: state.count + 1 }
    ));
  }

  render() {
    const { buttonTitle } = this.props;
    const { count } = this.state;
    return (
      <>
        <button onClick={this.incrementCount}>{buttonTitle}</button>
        <p>{count}</p>
      </>
    );
  }
}

function Dogs({ dogs }) {
  const dogLis = dogs.map(dog => (
    <li key={`${dog.name}-${dog.weight}`}>
      <p>{dog.name}</p>
    </li >
  ));

  return (
    <ul>
      {dogLis}
    </ul>
  );
}

class ColorApp extends PureComponent {
  state = {
    colors: []
  }

  addColor = color => {
    this.setState(state => (
      { color: [...state.color, color] }
    ));
  }

  render() {
    return (
      <>
        <ColorForm />
        <Colors colors={this.state.colors} />
      </>
    );
  }
}

// used to create a color
// used to edit an existing color
class ColorForm extends PureComponent {
  state = {
    name: '',
    hex: ''
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render() {
    const { name, hex } = this.state;
    return (
      <form>
        <input name="name" value={name} onChange={this.handleChange} />
        <input type="color" name="color" value={hex} />
      </form>
    );
  }
}

function Parent({ children }) {
  return (
    <>
      <h1>My Parent</h1>
      {children}
      <h2>End My Parent</h2>
    </>
  );
}

Parent.propTypes = {
  children: PropTypes.node
};

export default function App() {
  const dogs = [
    { name: 'spot', weight: '20 lbs' },
    { name: 'rover', weight: '50 lbs' }
  ];
  return (
    <>
      <ComponentDemo />
    </>
  );
}
