import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <nav className="bg-green-700 text-white p-4 flex justify-between">
        <div className="flex items-center space-x-2">
        <img src={logo} alt="logo" className="w-8 h-8" />
        <h1 className="font-bold text-lg">Panel Admin</h1>
      </div>

      <h1 className="font-bold text-lg">Panel Admin</h1>

      <div className="space-x-4">
        <NavLink to="/clientes"
        className={({ isActive }) =>
        isActive ? "font-bold underline" : "hover:underline"
        }
        >Clientes</NavLink>
        <NavLink to="/proveedor"
        className={({ isActive }) =>
        isActive ? "font-bold underline" : "hover:underline"
        }
        >Proveedor</NavLink>
        <NavLink to="/usuarios"
        className={({ isActive }) =>
        isActive ? "font-bold underline" : "hover:underline"
        }
        >Usuarios</NavLink>
        <NavLink to="/logout"
        className={({ isActive }) =>
        isActive ? "font-bold underline" : "hover:underline"
        }
        >Logout</NavLink>
      </div>
    </nav>
  );
}