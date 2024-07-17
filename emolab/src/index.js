import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import Registro from "./pages/Registro";
import Login from "./pages/Login";

export default function App() {
  return (
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="Registro" element={<Registro />} />
      <Route path="Login" element={<Login />} />
      <Route path="*" element={<NoPage />} /> {/* Ruta para páginas no encontradas */}
    </Route>
  </Routes>
</BrowserRouter>

  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);