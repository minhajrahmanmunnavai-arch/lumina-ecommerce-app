import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Main/Hero-section/Hero"
import Value from "./components/Main/Body/Value-props-strips/Value"
import Category from "./components/Main/Category-section/Category"
import Main from "./components/Main/Flash-Offerings/Main-Flash"

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Value />
      <Category />
      <Main />
    </div>
  )
}

export default App
