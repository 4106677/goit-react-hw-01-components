import PropTypes from 'prop-types';

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

Transaction.propTypes = {
  transaction: PropTypes.shape({
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }).isRequired,
};
