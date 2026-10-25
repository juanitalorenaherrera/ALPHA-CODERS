import { ArrowUpRight, Github, Linkedin } from "lucide-react";
import Brand from "./Brand";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand-block">
            <Brand light />
            <p>Tu sueño. Nuestro código.<br />Ideas con intención, hechas realidad.</p>
          </div>
          <div className="footer-nav">
            <span className="footer-label">Explora</span>
            <a href="#nosotros">Nosotros</a>
            <a href="#servicios">Servicios</a>
            <a href="#proyectos">Proyectos</a>
          </div>
          <div className="footer-social">
            <span className="footer-label">Conecta</span>
            <a href="https://github.com/juanitalorenaherrera" target="_blank" rel="noreferrer">Juanita en GitHub <ArrowUpRight size={14} /></a>
            <a href="https://www.linkedin.com/in/juanita-herrera-329064277/" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={14} /></a>
            <div className="footer-icon-links">
              <a href="https://github.com/juanitalorenaherrera" target="_blank" rel="noreferrer" aria-label="GitHub de Juanita"><Github size={17} /></a>
              <a href="https://www.linkedin.com/in/juanita-herrera-329064277/" target="_blank" rel="noreferrer" aria-label="LinkedIn de Juanita"><Linkedin size={17} /></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Alpha Coders</span>
          <span>Hecho con intención en Bogotá, Colombia.</span>
          <a href="#inicio">Volver arriba ↑</a>
        </div>
      </div>
    </footer>
  );
}
