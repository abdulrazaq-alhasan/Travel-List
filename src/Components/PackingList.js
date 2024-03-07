import { useState } from "react";
import Item from "./Item";

const PackingList = ({ items, onDeleteItem, onToggleItem, onClearList }) => {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;
  if (sortBy === "input") sortedItems = items;
  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === "stats")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            onDeleteItem={onDeleteItem}
            key={item.id}
            item={item}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>

      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="input">Sort by order</option>
        <option value="description">Sort by description</option>
        <option value="stats">Sort by packed stats</option>
      </select>
      <button onClick={onClearList}>Clear List</button>
    </div>
  );
};

export default PackingList;
