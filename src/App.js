import "./App.css";
import "./components/Navbar/Navbar";
import Navbar from "./components/Navbar/Navbar.js";

function App() {
  return (
    <div>
      <div className="fullscreen-bg">
        <video width="100%" height="auto" autoPlay loop playsInline muted>
          <source src="/video/background.mp4" type="video/mp4" />
        </video>
      </div>
      <Navbar />
    </div>
  );
}

export default App;
