import { Routes, Route, Navigate } from "react-router-dom";
import AviaPage from "./pages/avia";
import InfoPage from "./pages/info";

function App() {
  return (
    <Routes>
      <Route path="/">
        <Route element={<Navigate to="/avia" replace />} index />
        <Route path="/avia" element={<AviaPage />} />
        <Route path="/avia/info" element={<InfoPage />} />
      </Route>
    </Routes>
  );
}

export default App;
