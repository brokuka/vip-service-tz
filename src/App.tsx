import { Routes, Route } from "react-router-dom";
import AviaPage from "./pages/avia";
import InfoPage from "./pages/avia/info";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AviaPage />} index />
      <Route path="/avia/info" element={<InfoPage />} />
    </Routes>
  );
}

export default App;
