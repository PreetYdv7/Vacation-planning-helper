import { useState } from "react";
import Logo from "./logo";
import Form from "./form";
import PackingItems from "./PackingItems";
import { Progress } from "./Progress";

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

  const handleClearList = () => {
    setItems([]);
  };

  return (
    <div className="app">
      <Logo />
      <Form onAdditems={handleAddItems} />
      <PackingItems
        items={items}
        onDeleteItems={handleDeleteItem}
        onTogglePacked={handleTogglePacked}
        onClearList={handleClearList}
      />
      <Progress items={items} />
    </div>
  );
};

export default App;
