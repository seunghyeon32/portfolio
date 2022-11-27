import "./App.scss";
import { Route, Routes } from "react-router-dom";

// components
import Index from "./pages/Index";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
    </Routes>
  );
}

export default App;
