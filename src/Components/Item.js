export default function Item({ item, onRemoveItem, handleToggleItem }) {
  return (
    <div>
      <li>
        <input
          type="checkbox"
          value={item.packed}
          onChange={() => handleToggleItem(item.id)}
        />
        <span style={item.packed ? { textDecoration: "line-through" } : {}}>
          {item.quantity}
          {item.description}
        </span>
        <div onClick={() => onRemoveItem(item.id)}>&times;</div>
      </li>
    </div>
  );
}
