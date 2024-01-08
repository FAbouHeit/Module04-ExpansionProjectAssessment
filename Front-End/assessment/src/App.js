import './App.css';
import AppRoutes from './Routes/AppRoutes';
import { UserProvider } from "./components/UserContext/UserContext";

function App() {
  return (
    <UserProvider>
      <AppRoutes />
    </UserProvider>
  );
}

export default App;
