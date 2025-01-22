import { useState } from "react";

const App = () => {
  const [items, setItems] = useState([]);
  const handleAddItems = (item) => {
    setItems((items) => [...items, item]);
  };

  const handleTogglePacked = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  const handleDeleteItem = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };
  return (
    <div className="app">
      <Logo />
      <Form onAdditems={handleAddItems} />
      <PackingItems
        items={items}
        onDeleteItems={handleDeleteItem}
        onTogglePacked={handleTogglePacked}
      />
      <Progess items={items} />
    </div>
  );
};

const Logo = () => {
  return <h1> 🌴GET SET GO🎒</h1>;
};

const Form = ({ onAdditems }) => {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);
    onAdditems(newItem);

    setDescription("");
    setQuantity(1);
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What stuff do you need for the trip 😎 ⁉️</h3>

      <select
        value={quantity}
        onChange={(n) => setQuantity(Number(n.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>

      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></input>

      <button>ADD</button>
    </form>
  );
};

const PackingItems = ({ items, onDeleteItems, onTogglePacked }) => {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") sortedItems = items;
  else if (sortBy === "description")
    sortedItems = [...items].sort((a, b) =>
      a.description.localeCompare(b.description)
    );
  else if (sortBy === "packed")
    sortedItems = [...items].sort(
      (a, b) => Number(a.packed) - Number(b.packed)
    );

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItems={onDeleteItems}
            onTogglePacked={onTogglePacked}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
      </div>
    </div>
  );
};

const Item = ({ item, onDeleteItems, onTogglePacked }) => {
  return (
    <li>
      <button onClick={() => onTogglePacked(item.id)}>✅</button>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItems(item.id)}>❌</button>
    </li>
  );
};

const Progess = ({ items }) => {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding items to your packing list</em>
      </p>
    );

  const total = items.length;
  const packed = items.filter((item) => item.packed).length;
  const percentage = total > 0 ? Math.round((packed / total) * 100) : 0;

  return (
    <footer className="stats">
      {percentage === 100 ? (
        "You are ready to go ✈️"
      ) : (
        <em>
          You have {total} items on your list, and you have already packed{" "}
          {packed} ({percentage}%)
        </em>
      )}
    </footer>
  );
};

export default App;
