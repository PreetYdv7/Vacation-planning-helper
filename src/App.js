const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 2, description: "Charger", quantity: 1, packed: true },
];

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
  return <h1> 🌴GET SET GO🎒</h1>;
};
const Form = () => {
  return (
    <div className="add-form">
      <h3>What stuff do you need for the trip ⁉️</h3>
    </div>
  );
};
const PackingItems = () => {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item item={item} />
        ))}
      </ul>
    </div>
  );
};
const Item = ({ item }) => {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
    </li>
  );
};
const Progess = () => {
  return (
    <footer className="stats">
      <em>You have X items on your list, and you have already packed X (X%)</em>
    </footer>
  );
};

export default App;
