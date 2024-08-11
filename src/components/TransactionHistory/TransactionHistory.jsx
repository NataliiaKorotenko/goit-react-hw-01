import css  from "../TransactionHistory/TransactionHistory.module.css";

function TransactionHistory({ items }) {
    return (
      <>
        <table className={css.table}>
          <thead className={css.tableThead}>
            <tr className={css.tableTr}>
              <th className={css.tableTh}>Type</th>
              <th className={css.tableTh}>Amount</th>
              <th className={css.tableTh}>Currency</th>
            </tr>
          </thead>
  
          <tbody>
            {items.map(({ id, type, amount, currency }) => {
              return (
                <tr className={css.tableTr} key={id}>
                  <td className={(css.tableTd, css.trans)}>{type}</td>
                  <td className={css.tableTd}>{amount}</td>
                  <td className={css.tableTd}>{currency}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
  }
  export default TransactionHistory;