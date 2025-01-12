const App = () => {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingItems />
      <Progess />
    </div>
  );
};

const Logo = () => {
  return <h1> 🌴Far Away🎒</h1>;
};
const Form = () => {
  return (
    <div className="add-form">
      <h3>What stuff do you need for the trip ⁉️</h3>
    </div>
  );
};
const PackingItems = () => {
  return <div className="list">LIST</div>;
};
const Progess = () => {
  return (
    <footer className="stats">
      <em>You have X items on your list, and you have already packed X (X%)</em>
    </footer>
  );
};

export default App;
