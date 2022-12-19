import './App.css';
import Main from "./components/Main"
import About from "./components/About"
import Intrest from "./components/Intrest"
import Social from "./components/Social"

export default function App() {
    return(
        <>
          <div className="container">
            <Main />
            <About />
            <Intrest />
            <Social />
          </div>
        </>
    )
}