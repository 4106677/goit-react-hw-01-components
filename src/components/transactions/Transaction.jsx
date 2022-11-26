export const Transaction = ({
  transaction: { type, id, amount, currency },
}) => {
  return (
    <>
      <th>{type}</th>
      <th>{amount}</th>
      <th>{currency}</th>
    </>
  );
};
