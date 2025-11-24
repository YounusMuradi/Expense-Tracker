import { useState } from "react";

function AddTransaction({ onAdd }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("expense");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !amount) return;

    onAdd({
      id: Date.now(),
      title,
      amount: parseFloat(amount),
      type,
      date: new Date()
    });

    setTitle("");
    setAmount("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col p-4 bg-white rounded shadow"
    >
      <h2 className="mb-3 text-xl font-bold">Add Transaction</h2>

      <input
        type="text"
        placeholder="Title"
        className="w-full mb-2 border"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="number"
        placeholder="Amount"
        className="w-full mb-2 border"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <select 
        className="w-full mb-2 border"
        value={type}
        onChange={(e) => setType(e.target.value)}
      >
        <option value="expense">Expense</option>
        <option value="income">Income</option>
      </select>

      <button className="w-full p-2 text-white bg-blue-600 rounded">Add</button>
    </form>
  );
}

export default AddTransaction;