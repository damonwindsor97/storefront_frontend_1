import { Route, Routes } from "react-router-dom"

import Root from "./routes/root"

import Home from "./pages/Home"


function App() {
  return (
    <Routes>
      <Route path="/" element={<Root/>}>

        <Route index element={<Home/>}/>

      </Route>
    </Routes>
  )
}

export default App
