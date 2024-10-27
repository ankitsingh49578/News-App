import Navbar from "./components/Navbar"
import NewsBoard from "./components/NewsBoard"
import { useState } from "react"

function App() {
  const [category, setCategory] = useState("general")
  return (
    <>
      <div className="">
        <Navbar setCategory={setCategory}/>
        <NewsBoard category={category}/>
      </div>
    </>
  )
}

export default App
