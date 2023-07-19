import { useState } from "react";
import Item from "./Item";

export default function PackingList({
  items,
  onRemoveItem,
  handleToggleItem,
  handleClearList,
}) {
  const [sort, setSort] = useState("input");
  let sortedItems;

  if (sort === "input") sortedItems = items;

  if (sort === "description")
    sortedItems = items
      .slice()
      /* localeCompare func to compare first alpha in 
        the word to sort it by returning +ve , -ve or 0 */
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sort === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            onRemoveItem={onRemoveItem}
            handleToggleItem={handleToggleItem}
          />
        ))}
      </ul>
      <div
        className="actions"
        value={sort}
        onChange={(e) => setSort(e.target.value)}
      >
        <select>
          <option value="input">sort by input order</option>
          <option value="description">sort by description</option>
          <option value="packed">sort by packed </option>
        </select>
        <button onClick={handleClearList}>Clear list</button>
      </div>
    </div>
  );
}
