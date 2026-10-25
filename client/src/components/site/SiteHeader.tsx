import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";
import Brand from "./Brand";

const links = [
  ["Nosotros", "#nosotros"],
  ["Servicios", "#servicios"],
  ["Proceso", "#proceso"],
  ["Proyectos", "#proyectos"],
] as const;

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <Brand />
        <button
          className="menu-toggle"
          type="button"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() => setOpen(value => !value)}
        >
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
        <nav id="primary-navigation" className={`primary-nav${open ? " is-open" : ""}`} aria-label="Navegación principal">
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={close}>{label}</a>
          ))}
          <a className="nav-contact" href="#contacto" onClick={close}>Hablemos <ArrowUpRight size={15} /></a>
        </nav>
      </div>
    </header>
  );
}
