function TransactionList({ items }) {
  if (items.length === 0)
    return <p className="mt-4 font-bold ">No transactions yet</p>;

  return (
    <div className="mt-5 space-y-3">
      {items.map((item) => (
        <div
          key={item.id}
          className={`p-3 shadow rounded flex justify-between ${
            item.type === "income" ? "bg-green-100" : "bg-red-100"
          }`}
        >
          <div>
            <p className="font-bold">{item.title}</p>
            <p className="text-xs text-gray-600">{item.date.toDateString()}</p>
          </div>

          <p className="font-bold">
            {item.type === "expense" ? "-" : "+"}${item.amount}
          </p>
        </div>
      ))}
    </div>
  );
}

export default TransactionList;