import "./styles.css";
import Home from "./pages/Home"
import RecipePage from "./components/recipepage/indipage";
import { BrowserRouter , Routes , Route , Link ,NavLink } from 'react-router-dom'; 
function App() {
  return (
    <BrowserRouter>
    <main>
      <Routes>
        <Route index element ={<Home />} />
        <Route path= "/find/:id" element={<RecipePage />}/>
      </Routes>
    </main>
    </BrowserRouter>
  );
}
export default App;
