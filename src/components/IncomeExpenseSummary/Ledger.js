import "./Ledger.css";
import PriceFormatter from "../Formatter/PriceFormatter";

const DAYS_OF_WEEK = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const MONTHS_OF_YEAR = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const zeroPad = (num, places) => String(num).padStart(places, "0");

function Ledger(props) {
  const ledgerDict = props.ledgerDict;

  const ledgerComponents = [];

  for (const [datetimeKey, ledgerItems] of Object.entries(ledgerDict)) {
    const dateTimeData = new Date(datetimeKey);

    const dateData = zeroPad(dateTimeData.getDate(), 2);
    const dayOfWeek = DAYS_OF_WEEK[dateTimeData.getDay()];
    const monthOfYear = MONTHS_OF_YEAR[dateTimeData.getMonth()];
    const yearData = dateTimeData.getFullYear();

    ledgerComponents.push(
      <div className="ledger-container" key={datetimeKey}>
        <div className="ledger-container__datetime">
          <div className="ledger-container__datetime-date">{dateData}</div>
          <div className="ledger-container__datetime-day">{dayOfWeek}</div>
          <div className="ledger-container__datetime-month-year">
            {monthOfYear} {yearData}
          </div>
        </div>
        <div className="ledger-container__ledger-items">
          {ledgerItems.map((item) => {
            return (
              <div
                className="ledger-container__item"
                key={datetimeKey + "-" + item.id}
              >
                <div className="ledger-container__item-title">{item.title}</div>
                <div className="ledger-container__item-price">
                  <PriceFormatter
                    value={
                      item.type === "expense" ? item.price * -1 : item.price
                    }
                    isSignPrefix={true}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return <div className="ledger">{ledgerComponents}</div>;
}

export default Ledger;
