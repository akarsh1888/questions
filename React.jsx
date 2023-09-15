/**

// High Order Components

function withLoader(WrappedComponent) {
  return function ({ isLoading, ...otherProps }) {
    return (
      <div>
        {isLoading ? <h1>Loading...</h1> : <WrappedComponent {...otherProps} />}
      </div>
    );
  };
}

const MyComponent = ({ data }) => {
  return (
    <div>
      <h1>{data}</h1>
    </div>
  );
};

const MyComponentWithLoader = withLoader(MyComponent);

function App() {
  const isLoading = true;
  return (
    <MyComponentWithLoader isLoading={isLoading} data="Hello, World!" />
  );
}

export default App;

const loader = withLoading(MyComponent)

// **********************************************************************************************
// *********************************************************************************************
// ********************************************************************************************

*/

import { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [waitlist, setWaitlist] = useState([]);

  const onSubmit = (e) => {
    e.preventDefault();
    setWaitlist([...waitlist, name]);
    setName("");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <button type="submit">Add to Waitlist</button>
      </form>
      <ol>
        {waitlist.map((name) => (
          <li>{name}</li>
        ))}
      </ol>
    </div>
  );
};
