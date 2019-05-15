# React Router

## Agenda

* `BrowserRouter`
* `Route`
* `Switch`
* `Link`
* nested `Route`s

## Dependencies

* `npm i react-router-dom`

## Resources

* [React Router Basic Example](https://reacttraining.com/react-router/web/example/basic)
* [React Router Philosophy](https://reacttraining.com/react-router/web/guides/philosophy)

## BrowserRouter

With react router we want to re-create the typical browser experience.
This means changing the URL as users navigate to different views and
allowing users to share views via URL. We can accomplish this by wrapping
our components in `BrowserRouter`.

```js
import React from 'react';
import {
  BrowserRouter as Router
} from 'react-router-dom';

export default function App() {
  return (
    <Router>
      // stuff here
    </Router>
  )
}
```

## Route

The `Route` component allows us to render specific components
dependent on the URL path.

```js
import React from 'react';
import {
  BrowserRouter as Router
  Route
} from 'react-router-dom';

function About() {
  return <h1>About</h1>;
}

export default function App() {
  return (
    <Router>
      <Route path="/about" component={About} />
    </Router>
  )
}
```

Every `Route` that matches a path will render.

```js
import React from 'react';
import {
  BrowserRouter as Router
  Route
} from 'react-router-dom';

function Home() {
  return <h1>Home</h1>;
}

function About() {
  return <h1>About</h1>;
}

export default function App() {
  return (
    <Router>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
    </Router>
  )
}
```

In the above example both the `Home` and `About` components
will render when a use navigates to `/about` because both
`/` and `/about` are contained in `/about`. We can prevent
this by using the `exact` property.

```js
import React from 'react';
import {
  BrowserRouter as Router
  Route
} from 'react-router-dom';

function Home() {
  return <h1>Home</h1>;
}

function About() {
  return <h1>About</h1>;
}

export default function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
    </Router>
  )
}
```
Path can also contain variable, like express.

```js
import React from 'react';
import {
  BrowserRouter as Router
  Route
} from 'react-router-dom';

function Home() {
  return <h1>Home</h1>;
}

function About() {
  return <h1>About</h1>;
}

function User({ match }) {
  return <h1>User {match.params.id}</h1>;
}

export default function App() {
  return (
    <Router>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/user/:id" component={User} />
    </Router>
  )
}
```

The variables are then accessible to our component inside
of the `match.params` (like `req.params`) property.

## Switch

Often we only want one component to render at a time, even
if there are multiple matching routes. In this case we can
use `Switch` which will only render the first match.

```js
import React from 'react';
import {
  BrowserRouter as Router
  Route,
  Switch
} from 'react-router-dom';

function Home() {
  return <h1>Home</h1>;
}

function About() {
  return <h1>About</h1>;
}

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
  )
}
```

In the above example, if a user navigates to `/about`,
the `Home` component (and only the `Home` component) will
load because, like above, `/` and `/about` both match for
the `/about` URL. Since switch only renders the first match
only `Home` will render.

## Link

HTML offers us the `a` tag to link to other pages. With
react-router-dom, we use the `Link` component to accomplish
the same goal. By using `Link` the browser won't reload the
page when a user clicks our link.

```js
import React from 'react';
import {
  BrowserRouter as Router
  Route,
  Switch,
  Link
} from 'react-router-dom';

function Home() {
  return <h1>Home</h1>;
}

function About() {
  return <h1>About</h1>;
}

function Header() {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
    </header>
  )
}

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
  )
}
```

## Nested routes

React router allows us to nest routes, which makes it possible
to modularize our route handling.

```js
import React from 'react';
import {
  BrowserRouter as Router
  Route,
  Switch,
  Link
} from 'react-router-dom';

function Home() {
  return <h1>Home</h1>;
}

function About() {
  return <h1>About</h1>;
}

function User({ match }) {
  return (
    <>
      <h1>User {match.params.id}</h1>
      <Switch>
        <Route path="/user/profile" render={() => <h2>Profile</h2>} />
        <Route path="/user/favorites" render={() => <h2>Favorites</h2>} />
      </Switch>
    </>
  )
}

function Header() {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
    </header>
  )
}

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
  )
}
```
