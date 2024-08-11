
import "../App/App.module.css";
import Profile from "../Profile/Profile";
import userData from "../Profile/userData.json";

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
         </div>
  );
}
