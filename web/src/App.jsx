import { Routes, Route } from "react-router";
import { HomePage } from "./pages";
import { Navbar } from "./components/ui";
import LoginPage from "./pages/login-page";

function App() {

  return (
    <>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/login" element={<LoginPage />}/>
      </Routes>
    </>
  )
}

export default App
