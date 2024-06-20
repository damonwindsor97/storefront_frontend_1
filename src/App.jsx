import { Route, Routes } from "react-router-dom"

import Root from "./routes/root"

import Home from "./pages/Home"
import ProductsPage from "./pages/ProductsPage"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Root/>}>

        <Route index element={<Home/>}/>
        <Route path="/products" element={<ProductsPage/>}/>

      </Route>
    </Routes>
  )
}

export default App
