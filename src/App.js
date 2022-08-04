import { Route, Routes, Navigate } from "react-router-dom";

import Home from "./components/views/Home";
import Menu from "./components/views/Menu";
import Footer from "./components/views/Footer";

function App() {
  return (
    <div>
      <Menu />
      <main>
        <Routes>
          <Route path="/home/*" element={<Home />}></Route>
          <Route path="/" element={<Navigate to="/home" />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
