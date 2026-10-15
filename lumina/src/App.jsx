import { Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home.jsx"
import ShopCatalog from "./pages/Shop-Catalog.jsx"
import Collections from "./pages/Collections.jsx"

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop-catalog" element={<ShopCatalog />} />
        <Route path="/collections" element={<Collections />} />
      </Routes>
    </div >
  )
}

export default App
