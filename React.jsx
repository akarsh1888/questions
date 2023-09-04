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


// **********************************************************************************************
// *********************************************************************************************
// ********************************************************************************************

*/
