import { Routes, Route } from "react-router";
import { HomePage } from "./pages";
import { Navbar } from "./components/ui";

function App() {

  return (
    <>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<HomePage />}/>
      </Routes>
    </>
  )
}

export default App
