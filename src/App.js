import "./App.css";
import GlobalStyle from "./styles/GlobalStyle";
import Sidebar from "./components/Sidebar";
import Main from "./pages/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route path={"/"} element={<Main />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
