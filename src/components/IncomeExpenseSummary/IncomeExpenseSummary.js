import PriceFormatter from "../Formatter/PriceFormatter";
import styled from "styled-components";

const IncomeExpenseSummaryStyled = styled.div`
  width: 100%;
  height: 70px;
  background-color: rgb(255, 255, 255);
  border-top: 0.5px solid rgb(87, 87, 87);
  border-bottom: 0.5px solid rgb(87, 87, 87);
  font-size: 0.8em;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  & .income {
    margin-left: 2%;
    margin-right: 2%;
    display: flex;
    justify-content: space-between;
  }

  & .expense {
    margin-left: 2%;
    margin-right: 2%;
    display: flex;
    justify-content: space-between;
  }

  & .difference {
    margin-left: 2%;
    margin-right: 2%;
    display: flex;
    justify-content: flex-end;
    font-weight: 700;
  }

  & .value {
    text-align: end;
    width: 40%;
  }

  & .difference .value {
    padding-top: 0.2em;
    border-top: 0.5px solid rgb(139, 139, 139);
  }
`;

function IncomeExpenseSummary() {
  const income = 14000.04;
  const expense = 5000;

  const differenceInOut = income - expense;

  return (
    <IncomeExpenseSummaryStyled>
      <div className="income">
        <div>Income</div>
        <div className="value">
          <PriceFormatter value={income} isSignPrefix={true} />
        </div>
      </div>

      <div className="expense">
        <div>Expense</div>
        <div className="value">
          <PriceFormatter value={-expense} isSignPrefix={true} />
        </div>
      </div>

      <div className="difference">
        <div className="value">
          <PriceFormatter value={differenceInOut} isSignPrefix={true} />
        </div>
      </div>
    </IncomeExpenseSummaryStyled>
  );
}

export default IncomeExpenseSummary;
