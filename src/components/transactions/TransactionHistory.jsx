import PropTypes from 'prop-types';

import { Transaction } from './Transaction';
import {
  Table,
  TableHeader,
  TableHeaderGroup,
  TableRow,
  TableBody,
} from './Transactions.styled';

export const TransactionHistory = ({ transaction }) => {
  return (
    <Table>
      <TableHeader>
        <TableHeaderGroup>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </TableHeaderGroup>
      </TableHeader>

      <TableBody>
        {transaction.map(transaction => (
          <TableRow key={transaction.id}>
            <Transaction transaction={transaction} />
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
TransactionHistory.propTypes = {
  transaction: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};
