import { useEffect } from "react";
import {
  ArrowDown, ArrowRight, ArrowUpRight, Braces, Check, Code2, Compass,
  Github, GraduationCap, HeartHandshake, Layers3, LifeBuoy, Linkedin,
  MapPin, MessageCircle, MonitorSmartphone, Palette, ShieldCheck, Sparkles,
} from "lucide-react";
import ContactForm from "@/components/site/ContactForm";
import SiteFooter from "@/components/site/SiteFooter";
import SiteHeader from "@/components/site/SiteHeader";

const services = [
  { icon: Code2, number: "01", title: "Desarrollo web a medida", text: "Sitios y experiencias digitales pensadas alrededor de lo que tu proyecto realmente necesita." },
  { icon: Palette, number: "02", title: "Diseño adaptable y con alma", text: "Interfaces claras, cuidadas y preparadas para funcionar en cualquier pantalla." },
  { icon: LifeBuoy, number: "03", title: "Soporte técnico", text: "Acompañamiento para resolver problemas y mantener tu presencia digital en buen estado." },
  { icon: GraduationCap, number: "04", title: "Mentoría para programadores", text: "Compartimos conocimiento para ayudar a nuevas personas desarrolladoras a crecer." },
];

const steps = [
  { number: "01", title: "Descubrimiento", text: "Entendemos tu negocio, tus objetivos y a quién quieres llegar." },
  { number: "02", title: "Planificación", text: "Acordamos el rumbo y organizamos un plan claro para avanzar." },
  { number: "03", title: "Diseño y desarrollo", text: "Convertimos la idea en una experiencia funcional, con código limpio." },
  { number: "04", title: "Lanzamiento y soporte", text: "Te acompañamos después de publicar para seguir mejorando." },
];

export default function Home() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(".reveal");
    if (!("IntersectionObserver" in window)) {
      elements.forEach(element => element.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    elements.forEach(element => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="site-shell">
      <SiteHeader />
      <main>
        <section className="hero-section" id="inicio">
          <div className="hero-grid" aria-hidden="true"><span /><span /><span /><span /><span /><span /><span /><span /><span /></div>
          <div className="hero-inner">
            <div className="hero-copy">
              <div className="eyebrow hero-eyebrow"><span className="eyebrow-dot" /> Estudio digital · Bogotá, Colombia</div>
              <h1>Tu próxima gran idea <em>merece código.</em></h1>
              <p className="hero-description">Diseñamos y desarrollamos experiencias digitales a medida, con curiosidad, cercanía y mucho corazón.</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#contacto">Hablemos de tu proyecto <ArrowUpRight size={17} /></a>
                <a className="text-link" href="#proyectos">Ver lo que hacemos <ArrowDown size={15} /></a>
              </div>
              <div className="hero-footnote"><span className="hero-footnote-line" />Ideas con intención. Soluciones que conectan.</div>
            </div>
            <div className="hero-art-wrap" aria-label="Ilustración abstracta de Alpha Coders">
              <div className="hero-orbit orbit-one" /><div className="hero-orbit orbit-two" />
              <div className="hero-art-frame">
                <img src="/manus-storage/async-images/TJeA9FguZMbzGB2hdGufNw/image-1.webp" alt="Composición escultórica coral y lavanda que representa ideas transformándose en código" />
                <span className="art-sticker"><Sparkles size={14} /> ideas en movimiento</span>
              </div>
              <div className="hero-floating-note"><Braces size={18} /><span><strong>Hecho a medida</strong><small>con intención y detalle</small></span></div>
              <span className="hero-index">AC / 01</span>
            </div>
          </div>
          <div className="hero-bottom"><span>Desliza para explorar</span><span className="hero-bottom-line" /><span>01 — 06</span></div>
        </section>

        <section className="intro-band" aria-label="Lo que nos define">
          <div className="intro-band-inner"><span><Check size={15} /> Código a medida</span><i /> <span><Check size={15} /> Diseño adaptable</span><i /> <span><Check size={15} /> Acompañamiento humano</span><i /> <span className="intro-band-note">De la primera idea al próximo paso.</span></div>
        </section>

        <section className="about-section section-pad" id="nosotros">
          <div className="section-layout about-layout">
            <div className="section-aside reveal"><span className="section-index">01 / NOSOTROS</span><span className="aside-mark">A<span>.</span></span><p>Un equipo pequeño.<br />Ideas sin tamaño.</p></div>
            <div className="about-main reveal">
              <span className="eyebrow">La tecnología puede sentirse cercana</span>
              <h2>Construimos con código.<br /><em>Y con corazón.</em></h2>
              <div className="about-columns">
                <p>Nacimos de un sueño y de la certeza de que detrás de cada buena idea hay una historia que merece ser contada… y codificada.</p>
                <p>En Alpha Coders transformamos ideas en experiencias digitales. Escuchamos, pensamos contigo y creamos soluciones hechas para personas reales.</p>
              </div>
              <div className="team-row">
                <div className="team-intro"><span className="team-symbol"><HeartHandshake size={20} /></span><div><strong>La persona detrás del código</strong><small>Conoce a Juanita y su trabajo</small></div></div>
                <div className="team-person"><span className="avatar avatar-coral">JH</span><div><strong>Juanita Herrera</strong><small>GitHub · LinkedIn</small></div><div className="team-links"><a href="https://github.com/juanitalorenaherrera" target="_blank" rel="noreferrer" aria-label="GitHub de Juanita"><Github size={16} /></a><a href="https://www.linkedin.com/in/juanita-herrera-329064277/" target="_blank" rel="noreferrer" aria-label="LinkedIn de Juanita"><Linkedin size={16} /></a></div></div>
              </div>
            </div>
          </div>
          <div className="values-strip reveal"><span>Lo que guía cada proyecto</span><div><b>Innovación</b><b>Colaboración</b><b>Responsabilidad</b><b>Pasión</b></div></div>
        </section>

        <section className="services-section section-pad" id="servicios">
          <div className="section-head reveal"><div><span className="section-index">02 / SERVICIOS</span><span className="eyebrow">¿Qué podemos crear contigo?</span></div><h2>Buenas ideas.<br /><em>Mejor construidas.</em></h2><p>Soluciones digitales a medida para emprendedores, startups y empresas que quieren destacar.</p></div>
          <div className="service-list">
            {services.map(({ icon: Icon, number, title, text }) => <article className="service-item reveal" key={number}><span className="service-number">{number}</span><span className="service-icon"><Icon size={23} strokeWidth={1.65} /></span><div className="service-copy"><h3>{title}</h3><p>{text}</p></div><span className="service-arrow"><ArrowUpRight size={20} /></span></article>)}
          </div>
          <div className="services-note"><span><MonitorSmartphone size={17} /></span><p>Diseñamos pensando en cada pantalla, desde el primer boceto.</p><a href="#contacto">Cuéntanos tu idea <ArrowRight size={15} /></a></div>
        </section>

        <section className="process-section section-pad" id="proceso">
          <div className="process-heading reveal"><div><span className="section-index">03 / METODOLOGÍA</span><span className="eyebrow">Un camino compartido</span></div><h2>De la primera charla<br />al <em>último detalle.</em></h2><p>Trabajamos de forma ágil y flexible. Cada etapa tiene un propósito y tú haces parte del proceso.</p></div>
          <div className="process-track">
            {steps.map(({ number, title, text }) => <article className="process-step reveal" key={number}><div className="process-top"><span>{number}</span><span className="process-dot" /></div><h3>{title}</h3><p>{text}</p></article>)}
          </div>
          <div className="process-foot"><span><Compass size={17} /> Un paso a la vez, contigo.</span><span>COL · COORDINACIÓN CERCANA</span></div>
        </section>

        <section className="projects-section section-pad" id="proyectos">
          <div className="projects-heading reveal"><div><span className="section-index">04 / PORTAFOLIO</span><span className="eyebrow">Ideas que ya toman forma</span></div><h2>Un vistazo a lo que<br /><em>estamos construyendo.</em></h2></div>
          <article className="project-card reveal">
            <div className="project-visual">
              <div className="project-visual-grid" />
              <div className="project-orbit project-orbit-a" /><div className="project-orbit project-orbit-b" />
              <div className="project-shield"><ShieldCheck size={62} strokeWidth={1.15} /></div>
              <span className="project-code project-code-a">SECURE / 01</span><span className="project-code project-code-b">CG—2025</span>
              <div className="project-window"><span /><span /><span /><i>CryptoGuard</i></div>
            </div>
            <div className="project-info"><div className="project-meta"><span>PROYECTO DESTACADO</span><span>01 — SEGURIDAD</span></div><h3>Crypto<span>Guard</span></h3><p>Plataforma de seguridad para criptomonedas con protección avanzada y monitoreo en tiempo real.</p><div className="project-tags"><span>Seguridad digital</span><span>Monitoreo</span><span>Crypto</span></div><a className="project-link" href="https://github.com/juanitalorenaherrera/CryptoGuard-main" target="_blank" rel="noreferrer">Explorar en GitHub <ArrowUpRight size={17} /></a></div>
          </article>
          <div className="project-note"><span className="note-line" /><p>Este es solo el comienzo. <a href="#contacto">La próxima idea podría ser la tuya <ArrowUpRight size={14} /></a></p></div>
        </section>

        <section className="contact-section section-pad" id="contacto">
          <div className="contact-heading reveal"><span className="section-index">05 / CONTACTO</span><span className="eyebrow">¿Tienes algo en mente?</span><h2>Tu idea nos<br /><em>interesa.</em></h2><p>Si tienes una idea, un sueño o un proyecto que necesita código y corazón, aquí estamos para escucharte.</p>
            <div className="contact-direct"><a href="mailto:juanitaherrera846@gmail.com"><span className="contact-icon"><MessageCircle size={18} /></span><span><small>Escríbenos también</small><strong>juanitaherrera846@gmail.com</strong></span><ArrowUpRight size={17} /></a><a href="https://api.whatsapp.com/send/?phone=%2B573213061122&text&type=phone_number&app_absent=0" target="_blank" rel="noreferrer"><span className="contact-icon whatsapp-icon"><MessageCircle size={18} /></span><span><small>Una conversación rápida</small><strong>WhatsApp de Juanita</strong></span><ArrowUpRight size={17} /></a></div>
            <div className="location-note"><MapPin size={17} /><span>Puente Aranda · Bogotá, Colombia</span></div>
          </div>
          <div className="contact-form-wrap reveal"><ContactForm /></div>
        </section>

        <section className="closing-band"><div className="closing-inner"><span className="closing-star"><Layers3 size={23} /></span><p>Tu sueño.<br /><em>Nuestro código.</em></p><a href="#contacto" aria-label="Hablemos de tu proyecto">Vamos a hacerlo <ArrowUpRight size={18} /></a></div></section>
      </main>
      <SiteFooter />
    </div>
  );
}
