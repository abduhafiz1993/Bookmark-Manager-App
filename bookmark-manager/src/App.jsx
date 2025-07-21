import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"

function App() {

  return (
    <>
      <BrowserRouter>
      <header className="bg-white shadow px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold">📑 Bookmark Manager</h1>
        <nav className="space-x-4">
          <Link className="text-blue-600 font-medium" to="/">Home</Link>
          <Link className="text-blue-600 font-medium" to="/about">About</Link>
        </nav>
      </header> 
           <main className="p-4 max-w-3xl mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </BrowserRouter>

    </>
  )
}

export default App
