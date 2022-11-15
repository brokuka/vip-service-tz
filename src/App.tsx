import { Routes, Route } from "react-router-dom";
import AviaPage from "./pages/avia";
import InfoPage from "./pages/info";

function App() {
  return (
    <Routes>
      <Route index path="/avia" element={<AviaPage />} />
      <Route path="/avia/info" element={<InfoPage />} />
    </Routes>
  );
}

export default App;
