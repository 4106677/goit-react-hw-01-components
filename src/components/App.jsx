import { GlobalStyle } from './GlobalStyle';
import { Profile } from './profile/Profile';
import { FriendsList } from './friends/FriendsList';

import users from 'data/user.json';
import friends from '../data/friends.json';
import stats from '../data/data.json';
import { Statistics } from './statistic/Statistics';

import transaction from '../data/transactions.json';
import { TransactionHistory } from './transactions/TransactionHistory';

export const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Profile user={users} />
      <Statistics stats={stats} title="Upload stats" />
      <FriendsList friends={friends} />
      <TransactionHistory transaction={transaction} />
    </div>
  );
};
