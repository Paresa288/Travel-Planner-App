import { Routes, Route } from "react-router";
import { HomePage, LoginPage, RegisterPage, LandingPage } from "./pages";
import { Navbar } from "./components/ui";
import { useLocation } from "react-router";
import { PrivateRoute } from "./guards";

function App() {
  const location = useLocation();
  const invalidLocations = ["/login", "/register"];

  return (
    <div className="bg-secondary bg-gradient bg-opacity-75" style={{ height: "100vh" }}>
    {!invalidLocations.includes(location.pathname) && (<Navbar />)}
    <Routes>
      <Route path="/" element={<LandingPage />}/> 
      <Route path="/login" element={<LoginPage />}/>
      <Route path="/register" element={<RegisterPage />}/>
      <Route path="/home" element={<PrivateRoute><HomePage /></PrivateRoute> }/>
    </Routes>
    </div>
  )
}

export default App
