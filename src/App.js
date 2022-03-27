import "./App.css";

import TotalBalance from "./components/Wallet/TotalBalance";
import IncomeExpenseSummary from "./components/IncomeExpenseSummary/IncomeExpenseSummary";
import Ledger from "./components/IncomeExpenseSummary/Ledger";

import DummyProfileImage from "./resources/myself.jpeg";

const ledgerDict = {
  "2022-03-26": [{ id: 1, type: "expense", title: "Gray Bag", price: 780 }],
  "2022-03-27": [{ id: 1, type: "expense", title: "Hat", price: 280 }],
  "2022-03-28": [
    { id: 1, type: "expense", title: "Shirt", price: 200 },
    { id: 2, type: "expense", title: "T-Shirt", price: 300 },
  ],
  "2022-03-31": [
    { id: 1, type: "income", title: "Salary", price: 18000 },
    { id: 2, type: "expense", title: "Nintendo Game", price: 2000 },
    { id: 3, type: "expense", title: "Hand Controller", price: 5000 },
    { id: 4, type: "expense", title: "Babayaka", price: 1000 },
  ],
  "2022-04-01": [
    { id: 1, type: "income", title: "Other Salary", price: 35000 },
    { id: 2, type: "expense", title: "Elden Ring Game", price: 1800 },
    { id: 3, type: "expense", title: "Apple Watch", price: 12900 },
    { id: 4, type: "expense", title: "iPad Mini", price: 19600 },
  ],
};

function App() {
  return (
    <div className="App">
      <header className="App__wallet-header">
        <TotalBalance profileImage={DummyProfileImage} />
        <IncomeExpenseSummary />
      </header>
      <main className="App__wallet-ledger">
        <Ledger ledgerDict={ledgerDict} />
      </main>
    </div>
  );
}

export default App;
