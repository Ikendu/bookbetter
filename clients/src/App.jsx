import { Routes, Route } from "react-router-dom";
import "./App.css";
import IndexPage from "./Pages/IndexPage";

function App() {
  return (
    <div>
      <Routes>
        <Route index element={<IndexPage />} />
      </Routes>
    </div>
  );
}

export default App;
