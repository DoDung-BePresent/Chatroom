import "./App.css";
import ChatRoom from "./components/ChatRoom";
import Login from "./components/Login";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<ChatRoom />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
