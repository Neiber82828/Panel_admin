import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Clientes from "./pages/Clientes";
import Proveedor from "./pages/Proveedor";
import Usuarios from "./pages/Usuarios";
import Logout from "./pages/Logout";

function App() {
  return (
    <>
      <Navbar />

      <div className="p-4">
        <Routes>
          <Route path="/" element={<Clientes />} />
          <Route path="/clientes" element={<Clientes />} />
          <Route path="/proveedor" element={<Proveedor />} />
          <Route path="/usuarios" element={<Usuarios />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </div>
    </>
  );
}

export default App;