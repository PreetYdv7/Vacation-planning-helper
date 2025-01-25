import { useState } from "react";
import Item from "./Item";
const PackingItems = ({
  items,
  onDeleteItems,
  onTogglePacked,
  onClearList,
}) => {
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
        <button className="clear-btn" onClick={() => onClearList(items)}>
          Clear list
        </button>
      </div>
    </div>
  );
};

export default PackingItems;
