function App() {
  return <Hello name="licat" />;
}

function Name(props) {
  return <h1>{props.name}</h1>;
}

function NoName() {
  return <h1>name이 없습니다.</h1>;
}

function Hello(props) {
  const name = props.name;
  if (name) {
    return <Name name={name} />;
  } else {
    return <NoName />;
  }
}

export default App;
