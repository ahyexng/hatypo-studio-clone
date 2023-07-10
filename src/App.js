import logo from "./logo.svg";
import "./App.css";
import GlobalStyle from "./styles/GlobalStyle";
import Sidebar from "./components/Sidebar";
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Sidebar />
    </div>
  );
}

export default App;
