import "./App.css";

import TotalBalance from "./components/Wallet/TotalBalance";
import IncomeExpenseSummary from "./components/IncomeExpenseSummary/IncomeExpenseSummary";
import Ledger from "./components/IncomeExpenseSummary/Ledger";

import DummyProfileImage from "./resources/myself.jpeg";

import { ledgerDict } from "./resources/ledgerExample";

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
