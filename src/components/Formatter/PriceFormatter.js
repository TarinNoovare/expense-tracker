function PriceFormatter(props) {
  const valueFormatted = (Math.round(Math.abs(props.value) * 100) / 100)
    .toFixed(2)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  const signPrefix =
    props.value > 0 && props.isSignPrefix ? "+" : props.value < 0 ? "-" : "";

  return (
    <span>
      {signPrefix}฿ {valueFormatted}
    </span>
  );
}

export default PriceFormatter;
