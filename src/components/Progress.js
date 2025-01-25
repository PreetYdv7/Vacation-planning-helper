export const Progress = ({ items }) => {
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

export default Progress;
