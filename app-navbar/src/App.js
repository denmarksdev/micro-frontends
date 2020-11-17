import React from 'react'
import { Link, BrowserRouter } from 'react-router-dom'

const App = ({ name }) => (
  <BrowserRouter>
    <header>
      <h1>{name}</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/customer">Customer</Link>
          </li>
          <li>
            <Link to="/parcel">Parcel</Link>
          </li>
          <li>
            <Link to="/routes">Routes</Link>
          </li>
          <li>
            <Link to="/route">Route</Link>
          </li>
          <li>
            <Link to="/app-lazy">Lazy</Link>
          </li>
        </ul>
      </nav>
    </header>
  </BrowserRouter>
)

export default App