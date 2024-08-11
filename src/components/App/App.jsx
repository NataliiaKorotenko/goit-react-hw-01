
import "../App/App.module.css";
import Profile from "../Profile/Profile";
import userData from "../Profile/userData.json";
import FriendList from "../FriendList/FriendList";
import friends from "../FriendList/friends.json";
import TransactionHistory from "../TransactionHistory/TransactionHistory";
import transactions from "../TransactionHistory/transactions.json"

export default function App() {
    return (
      <div>
        <Profile
          key={userData.tag}
          name={userData.username}
          tag={userData.tag}
          location={userData.location}
          image={userData.avatar}
          stats={userData.stats}
        />
        <FriendList friends={friends} />
        <TransactionHistory items={transactions} />
         </div>
  );
}
