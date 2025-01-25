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

export default Item;
