import { Route, Router, Routes } from "react-router-dom"
import Loader from "./pages/loader"
import { Suspense } from "react"
import Approach from "./pages/Approach"

const App = () => {
  return  (
    <Router>

      <Suspense fallback={<Loader/>}>
        <Routes>
          <Route path="/" element={<Approach/>} />
        </Routes>

      </Suspense>
    </Router>
  )
}

export default App