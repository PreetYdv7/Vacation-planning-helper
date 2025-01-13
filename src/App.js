const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 1, packed: true },
];

const App = () => {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingItems items={initialItems} />
      <Progess items={initialItems} />
    </div>
  );
};

const Logo = () => {
  return <h1> 🌴GET SET GO🎒</h1>;
};

const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What stuff do you need for the trip ⁉️</h3>
      <select>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input type="text" placeholder="Item..."></input>
      <button>ADD</button>
    </form>
  );
};

const PackingItems = ({ items }) => {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item item={item} key={item.id} />
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

const Progess = ({ items }) => {
  const total = items.length;
  const packed = items.filter((item) => item.packed).length;
  const percentage = total > 0 ? Math.round((packed / total) * 100) : 0;

  return (
    <footer className="stats">
      <em>
        You have {total} items on your list, and you have already packed{" "}
        {packed} ({percentage}%)
      </em>
    </footer>
  );
};

export default App;
