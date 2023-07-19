export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packking list</em>
      </p>
    );
  const numItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const packedPrecntage = Math.round((packedItems / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {numItems === packedItems
          ? "you got everything! Ready to go"
          : `you have
          ${numItems} items on your list, and you alread packed ${packedItems} (
          ${packedPrecntage}%)`}
      </em>
    </footer>
  );
}
