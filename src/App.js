import TotalBalance from "./components/Wallet/TotalBalance";
import IncomeExpenseSummary from "./components/IncomeExpenseSummary/IncomeExpenseSummary";
import Ledger from "./components/IncomeExpenseSummary/Ledger";
import styled from "styled-components";

// File for testing
import DummyProfileImage from "./resources/myself.jpeg";
import { ledgerDict } from "./resources/ledgerExample";

const AppHeaderStyled = styled.header`
  top: 0;
  position: sticky;
`;

const AppStyled = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 0.8em;
`;

function App() {
  return (
    <AppStyled>
      <AppHeaderStyled>
        <TotalBalance profileImage={DummyProfileImage} />
        <IncomeExpenseSummary />
      </AppHeaderStyled>
      <main>
        <Ledger ledgerDict={ledgerDict} />
      </main>
    </AppStyled>
  );
}

export default App;
