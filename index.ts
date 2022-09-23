((exports) => {
  function decimalSubtract(minuend: number, subtrahend: number): number {
    const valueWithMoreDecimals =
      String(minuend).length > String(subtrahend).length ? minuend : subtrahend;
    const multiplier = Number(
      "1" + "0".repeat(String(valueWithMoreDecimals).split(".")[1].length)
    );

    return (
      Math.round(minuend * multiplier - subtrahend * multiplier) / multiplier
    );
  }

  exports.decimalSubtract = decimalSubtract;
})(typeof window === "undefined" ? module.exports : window);
