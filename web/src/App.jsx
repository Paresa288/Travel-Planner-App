import { Routes, Route } from "react-router";
import { TravelsPage, LoginPage, RegisterPage, LandingPage, TravelDetailsPage } from "./pages";
import { Navbar, Footer } from "./components/ui";
import { useLocation } from "react-router";
import { PrivateRoute } from "./guards";

function App() {
  const location = useLocation();
  const invalidLocations = ["/login", "/register"];

  return (
    <>
    {!invalidLocations.includes(location.pathname) && (<Navbar />)}
    <Routes>
      <Route path="/" element={<LandingPage />}/> 
      <Route path="/login" element={<LoginPage />}/>
      <Route path="/register" element={<RegisterPage />}/>
      <Route path="/travels" element={<PrivateRoute><TravelsPage /></PrivateRoute> }/>
      <Route path="/travels/:id" element={<PrivateRoute><TravelDetailsPage /></PrivateRoute> }/>
    </Routes>
    <Footer />
    </>
  )
}

export default App
