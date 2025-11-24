import { useState } from "react";
import TransactionList from "./component/TransactionList";
import AddTransaction from "./component/addTransaction";
function App() {
  const [transactions, setTransactions] = useState([]);

  const handleAdd = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  return (
    <div className="max-w-lg mx-auto mt-10">
      <AddTransaction onAdd={handleAdd} />
      <TransactionList items={transactions} />
    </div>
  );
}

export default App;