import { Routes, Route } from "react-router";
import { HomePage, LoginPage, RegisterPage } from "./pages";
import { Navbar } from "./components/ui";
import { useLocation } from "react-router";

function App() {
  const location = useLocation();
  const invalidLocations = ["/login", "/register"];

  return (
    <div className="bg-secondary bg-gradient bg-opacity-75" style={{ height: "100vh" }}>
    {!invalidLocations.includes(location.pathname) && (<Navbar />)}
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/login" element={<LoginPage />}/>
      <Route path="/register" element={<RegisterPage />}/>
    </Routes>
    </div>
  )
}

export default App
