
import "./App.css";
import UserContext from "./context/UserContext";
import UserContextProvider from "./context/UserContextProvider";
import Login from "./components/Login";
import Profile from "./components/Profile";

function App() {
  return (
    <UserContextProvider>
      <h1>Anna is learning React!</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
