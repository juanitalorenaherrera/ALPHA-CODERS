# TODO — Alpha Coders

## Presentación renovada de Alpha Coders
- [x] La página de inicio comunica la propuesta de valor e identidad de Alpha Coders y presenta un llamado claro a contactar.
- [x] La sección Nosotros presenta al equipo y sus perfiles enlazados sin inventar cargos, métricas ni logros ausentes de la fuente.
- [x] La sección Servicios conserva desarrollo web a medida, diseño adaptable, soporte técnico y mentoría para nuevos programadores.
- [x] La sección Metodología presenta las cuatro etapas existentes: descubrimiento, planificación, diseño y desarrollo, lanzamiento y soporte.
- [x] El portafolio destaca CryptoGuard con su descripción existente y un enlace funcional a GitHub.
- [x] La navegación y arquitectura de contenidos reúnen Inicio, Nosotros, Servicios, Metodología, Proyectos y Contacto en una experiencia coherente y profesional.
- [x] La interfaz se adapta a teléfonos, tabletas y escritorio, con navegación móvil operable por teclado y estados de foco visibles.
- [x] Contacto conserva los canales existentes que sigan verificados: enlaces de WhatsApp, GitHub y LinkedIn, además de la información de ubicación de Bogotá, Colombia; no presenta el mapa o coordenadas de prueba como ubicación real.

## Formulario de contacto seguro y persistente
- [x] El formulario permite enviar nombre, correo, mensaje y los campos adicionales opcionales que se definan; valida formatos y límites en cliente y servidor.
- [x] El servidor rechaza solicitudes inválidas y honeypot completado; limita solicitudes repetidas sin revelar errores técnicos ni datos personales en logs públicos.
- [x] Cada mensaje válido se almacena de forma persistente en la base administrada mediante Drizzle y una migración aditiva.
- [x] El visitante recibe confirmación de que el mensaje fue guardado, o un error recuperable si no pudo guardarse.
- [ ] El servidor puede enviar aviso por correo mediante proveedor configurado y secretos protegidos; si el correo no está configurado, el mensaje guardado no se pierde y el sitio no expone credenciales. La integración está implementada, pero faltan la clave API de Resend y una dirección de remitente verificada.

## Entorno seguro y revisión
- [x] La aplicación usa la infraestructura administrada seleccionada, con código React/TypeScript, API de servidor y base MySQL.
- [x] Ninguna credencial expuesta en el ZIP original se copia o reutiliza; los secretos permanecen fuera del código, archivos de proyecto, historial de Git y logs.
- [x] La entrega queda disponible en Preview para revisión y no se publica públicamente hasta recibir autorización expresa.
