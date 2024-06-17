import UserGreeting from "./UserGreeting";


function App() {
  return(
    <>
      <UserGreeting isLoggedIn={true} username="Amira👋😎" />
      <UserGreeting />
    </>
  );
}

export default App
