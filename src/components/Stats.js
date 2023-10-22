export default function Stats({ items }) {
  if (!items.length)
    return (
      <footer className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </footer>
    );
  const numberOfItems = items.length;
  const numberOfPackedItems = items.filter((item) => item.packed).length;
  const percentage = Math.round((numberOfPackedItems / numberOfItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everthing! Ready to go ✈️"
          : `💼 You have ${numberOfItems} items on your list, and you already packed${" "}
        ${numberOfPackedItems} (${percentage}%)`}
      </em>
    </footer>
  );
}
