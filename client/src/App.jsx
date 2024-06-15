import { BrowserRouter, Routes, Route } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import Home from "./pages/Home"
import About from "./pages/About"
import SignIn from "./pages/SignIn"
import Signout from "./pages/Signout"
import Projects from "./pages/Projects"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignOut" element={<Signout />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Projects" element={<Projects />} />

      </Routes>
    </BrowserRouter>
  )
}
