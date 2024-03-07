const Stats = ({ items }) => {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start add some items to your packing list 🚀</em>
      </p>
    );

  const totalItems = items.length;
  const numOfPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numOfPacked / totalItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything! ready to go ✈️"
          : ` 🛄 You have ${totalItems} items in your list, and you already packed
          ${numOfPacked}(${percentage}%)`}
      </em>
    </footer>
  );
};

export default Stats;
