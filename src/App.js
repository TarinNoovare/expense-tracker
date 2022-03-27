import "./App.css";

import TotalBalance from "./components/Wallet/TotalBalance";
import IncomeExpenseSummary from "./components/IncomeExpenseSummary/IncomeExpenseSummary";
import Ledger from "./components/IncomeExpenseSummary/Ledger";

import DummyProfileImage from "./resources/myself.jpeg";

function App() {
  return (
    <div className="App">
      <header className="App__wallet-header">
        <TotalBalance profileImage={DummyProfileImage} />
        <IncomeExpenseSummary />
      </header>
      <main className="App__wallet-ledger">
        <Ledger />
      </main>
    </div>
  );
}

export default App;
