import { Routes, Route } from "react-router-dom";
import ValentinePage from "./components/ValentinePage";
import YesPage from "./components/YesPage";

function App() {
  return (
    <Routes>
        <Route path="/" element={<ValentinePage />} />
        <Route path="/yes" element={<YesPage />} />
    </Routes>
  );
}

export default App;
