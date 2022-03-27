import "./TotalBalance.css";
import PriceFormatter from "../Formatter/PriceFormatter";

function TotalBalance(props) {
  const walletName = "Tarin's Wallet";
  const totalBalance = 10000;

  return (
    <header className="balance-wallet-contatiner">
      <div className="balance-wallet-contatiner__left">
        <img
          className="balance-wallet-contatiner__profile-picure"
          src={props.profileImage}
          alt="Avatar"
        />
      </div>
      <div className="balance-wallet-contatiner__center">
        <div className="balance-wallet-contatiner__name">{walletName}</div>
        <div className="balance-wallet-contatiner__balance">
          <PriceFormatter value={totalBalance} isSignPrefix={false} />
        </div>
      </div>
      <div className="balance-wallet-contatiner__right"></div>
    </header>
  );
}

export default TotalBalance;
