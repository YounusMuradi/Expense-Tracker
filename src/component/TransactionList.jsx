function TransactionList({ items, onDelete }) {
  if (items.length === 0)
    return <p className="mt-4 font-bold ">No transactions yet</p>;

return (
    <div className="mt-4">
      <h2 className="mb-3 text-xl font-bold">Transactions</h2>

      <div className="space-y-3">
        {items.map((t) => (
          <div
            key={t.id}
            className="flex items-center justify-between p-3 bg-white rounded shadow"
          >
            <div>
              <p className="font-semibold">{t.title}</p>
              <p className={t.type === "income" ? "text-green-600" : "text-red-600"}>
                {t.type === "income" ? "+" : "-"} {t.amount}
              </p>
              <p className="text-xs text-gray-500">
                {t.date.toLocaleString()}
              </p>
            </div>

            <button
              onClick={() => onDelete(t.id)}
              className="font-bold text-red-600"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TransactionList;