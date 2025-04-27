import Home from "./pages"
import {BrowserRouter, Route, Routes} from "react-router";
import Books from "./pages/books";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import Team from "./pages/Team";
import Kontak from "./pages/contact";



function App() {
  

  return (
    <>
   <div className="container">
    <BrowserRouter>
    <Routes>
      <Route index element={<Home/>} />
      <Route path="books" element={<Books/>} />
      <Route path="login" element={<Login/>} />
      <Route path="register" element={<Register/>} />
      <Route path="team" element={<Team/>} />
      <Route path="contact" element={<Kontak/>} />
    </Routes>
    </BrowserRouter>
  </div>
    </>
  )
}

export default App
