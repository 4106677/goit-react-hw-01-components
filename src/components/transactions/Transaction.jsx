import PropTypes from 'prop-types';
import { RowType, RowAmount, Currency } from './Transactions.styled';

export const Transaction = ({
  transaction: { type, id, amount, currency },
}) => {
  return (
    <>
      <RowType>{type}</RowType>
      <RowAmount>{amount}</RowAmount>
      <Currency>{currency}</Currency>
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
