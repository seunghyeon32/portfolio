import "./App.scss";
import { Route, Routes } from "react-router-dom";

// components
import Index from "./pages/Index";

function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<Index />} />
      </Routes>
    </div>
  );
}

export default App;
