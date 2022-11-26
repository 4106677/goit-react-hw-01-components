import PropTypes from 'prop-types';

import { Transaction } from './Transaction';

export const TransactionHistory = ({ transaction }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transaction.map(transaction => (
          <tr key={transaction.id}>
            <Transaction transaction={transaction} />
          </tr>
        ))}
      </tbody>
    </table>
  );
};
TransactionHistory.propTypes = {
  transaction: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};
