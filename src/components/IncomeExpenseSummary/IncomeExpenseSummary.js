import "./IncomeExpenseSummary.css";
import PriceFormatter from "../Formatter/PriceFormatter";

function IncomeExpenseSummary() {

  const income = 14000.04;
  const expense = -5000;

  const differenceInOut = income + expense;

  return (
    <div className="summary-container">
      <div className="summary-container__income">
        <div>Income</div>
        <div className="summary-container__value">
          <PriceFormatter
            value={income}
            isSignPrefix={true}
          />
        </div>
      </div>
      <div className="summary-container__expense">
        <div>Expense</div>
        <div className="summary-container__value">
          <PriceFormatter
            value={expense}
            isSignPrefix={true}
          />
        </div>
      </div>

      <div className="summary-container__difference">
        <div className="summary-container__value">
        <PriceFormatter
            value={differenceInOut}
            isSignPrefix={true}
          />
        </div>
      </div>
    </div>
  );
}

export default IncomeExpenseSummary;
