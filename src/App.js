import './App.css';
import PageRoutes from './Routes/Routes';
export const API_URL = "https://af-backend.azurewebsites.net/api";

function App() {
  return (
    <div className="App">
     <PageRoutes />
    </div>
  );
}

export default App;
