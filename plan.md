# Alpha Coders — plan de renovación

## Enfoque de implementación

Renovar el sitio de Alpha Coders como una aplicación React/TypeScript y Express/tRPC administrada por Manus, usando su base de datos MySQL administrada. Conservar la información auténtica del sitio original: desarrollo web a medida, diseño responsive, soporte técnico, mentoría, metodología de cuatro etapas, el proyecto CryptoGuard y los canales sociales/contacto que sigan verificados. No inventar métricas ni resultados comerciales. Se conserva la ubicación textual existente, Puente Aranda, Bogotá, y se elimina el mapa y las coordenadas que parecen de prueba.

El formulario público se validará en servidor, tendrá límites de longitud, un campo trampa antispam y protección sencilla contra ráfagas; los mensajes se almacenarán con consultas parametrizadas de Drizzle. El envío de notificaciones por correo será una integración opcional del servidor basada en Resend, con secretos de entorno y nunca credenciales en el código. Si todavía no hay credenciales configuradas, la entrega del formulario se confirma después de guardar el mensaje; el correo queda como configuración pendiente, sin exponer secretos ni errores al visitante.

El alcance incluye una sola página principal responsive con anclas accesibles y secciones Inicio, Nosotros/equipo, Servicios, Metodología, Proyectos y Contacto. Se conserva el perfil enlazado de Juanita Herrera; los roles no se afirmarán si no constan en las fuentes. El sitio queda en Preview para revisión y no se publica sin autorización.

## Estructura propuesta

- `client/src/pages/Home.tsx`: composición de página y contenido de cada sección.
- `client/src/components/site/`: navegación adaptable, formulario, pie de página y marca.
- `client/src/index.css`: sistema visual responsive, accesibilidad, estados y movimiento reducido.
- `client/public/`: metadatos de rutas y marca del sitio; la ilustración del hero se sirve desde Managed Storage.
- `drizzle/schema.ts` y `drizzle/0001_melodic_doctor_faustus.sql`: esquema y migración aditiva de mensajes de contacto.
- `server/db.ts`: persistencia parametrizada y límite de envíos repetidos.
- `server/contact-email.ts`: notificación opcional vía API Resend leyendo únicamente secretos de entorno.
- `server/routers.ts`: mutación tRPC pública con validación Zod y protección honeypot.
- `client/src/pages/NotFound.tsx`: se conserva para rutas inexistentes.

La aplicación utiliza el runtime de servidor ya habilitado y la base administrada seleccionada. El listener existente sirve Preview y la API; no se migrará la base de datos de desarrollo ni se ejecutará una limpieza/destrucción de datos.

## Dirección de diseño

Tres direcciones posibles seleccionadas de la cola de baja probabilidad: **editorial de estudio creativo (0,07)**, **neo-brutalismo técnico (0,04)** y **soft-tech pastel (0,06)**. Se elige editorial de estudio creativo para conservar la calidez distintiva del sitio sin repetir la plantilla rosa genérica.

- **Movimiento:** editorial digital contemporáneo, entre estudio independiente y revista de diseño tecnológico.
- **Principios:** claridad antes que ornamento; personalidad latina cálida; contenido real y verificable; ritmo visual asimétrico con lectura accesible.
- **Color:** tinta carbón y marfil cálido para confianza, con rosa coral Alpha como acento propietario y pequeños destellos lavanda para energía creativa. Alto contraste y superficies tranquilas.
- **Composición:** hero dividido y desequilibrado —mensaje tipográfico amplio a la izquierda, visual abstracto a la derecha—; secciones alternas con columnas, líneas de tiempo y bloques editoriales en lugar de repetir cuadrículas centradas.
- **Motivos distintivos:** emblema geométrico de doble chevrón inspirado en el logo original; etiquetas de código monoespaciadas; líneas orbitales finas como guiño a “el cielo de las ideas”.
- **Interacción:** navegación clara con CTA visible, foco de teclado evidente, estados de formulario concretos y microinteracciones breves que no estorban.
- **Animación:** aparición sutil de las secciones al entrar en viewport y transiciones cortas en hover; respetar `prefers-reduced-motion`; nada de parallax obligatorio.
- **Tipografía:** Space Grotesk para titulares y marca; DM Sans para texto y formularios; DM Mono para etiquetas y detalles técnicos. Titulares cortos, escalas fluidas y texto base cómodo.
- **Esencia de marca:** un equipo de desarrollo cercano que convierte ideas de emprendedores en experiencias digitales hechas con intención; personalidad creativa, confiable y humana.
- **Voz:** directa, cálida y segura, sin promesas grandilocuentes. Ejemplos: “Tu próxima gran idea merece un buen lugar en internet.” / “Cuéntanos qué imaginas. Lo construimos contigo.”
- **Marca/logotipo:** conservar el nombre Alpha Coders y reinterpretar el isotipo original como dos chevrones/capas que forman una A abstracta; usarlo junto al wordmark, no como fuente predeterminada.
- **Color propio:** coral rosa `#F26387`, evolucionado desde el acento del sitio original.
