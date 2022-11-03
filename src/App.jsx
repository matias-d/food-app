import { Route, Routes } from "react-router-dom"
import { FoodPage } from "./pages/FoodPage"
import { HomePage } from "./pages/HomePage"


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/food/:id" element={<FoodPage />}/>
      </Routes>
    </div>
  )
}

export default App
