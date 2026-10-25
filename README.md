# Alpha Coders

Sitio web de Alpha Coders, un estudio digital en Bogotá, Colombia. Presenta sus servicios de desarrollo web, diseño digital, soporte técnico y mentoría, e incluye un formulario de contacto para nuevos proyectos.

## Características

- Diseño adaptable a dispositivos móviles y escritorio.
- Información sobre el estudio, sus servicios y su proceso de trabajo.
- Formulario de contacto con validación, protección contra spam y almacenamiento de mensajes.
- Notificaciones por correo opcionales mediante Resend.

## Tecnologías

- React 19, TypeScript y Vite.
- Express y tRPC.
- MySQL y Drizzle ORM.
- Tailwind CSS y componentes Radix UI.

## Requisitos

- Node.js 22 o superior.
- pnpm 10.18.0.
- MySQL para guardar los mensajes del formulario de contacto.

## Instalación

Clona el repositorio e instala las dependencias:

```bash
git clone https://github.com/juanitalorenaherrera/ALPHA-CODERS.git
cd ALPHA-CODERS
corepack enable
corepack prepare pnpm@10.18.0 --activate
pnpm install --frozen-lockfile
```

Copia `.env.example` como `.env` y agrega la URL de conexión a MySQL:

```powershell
Copy-Item .env.example .env
```

En macOS o Linux, usa `cp .env.example .env`. Luego, agrega esta variable a `.env`:

```dotenv
DATABASE_URL=mysql://USUARIO:CONTRASEÑA@HOST:3306/alpha_coders
```

Aplica las migraciones de la base de datos:

```bash
pnpm db:migrate
```

El formulario necesita una base de datos configurada para guardar los mensajes. Para recibir notificaciones por correo, configura también `RESEND_API_KEY` y `ALPHA_FROM_EMAIL` en `.env`. `ALPHA_CONTACT_EMAILS` es opcional y permite indicar las direcciones destinatarias separadas por comas. Sin la configuración de Resend, los mensajes se guardan, pero no se envía la notificación.

## Desarrollo

En macOS o Linux, inicia el servidor con:

```bash
pnpm dev
```

En Windows PowerShell, inicia el servidor de desarrollo con:

```powershell
$env:NODE_ENV = "development"
pnpm exec tsx watch server/_core/index.ts
```

Abre [http://localhost:3000](http://localhost:3000). Puedes cambiar el puerto estableciendo la variable de entorno `PORT`.

## Comandos disponibles

| Comando | Descripción |
| --- | --- |
| `pnpm dev` | Inicia el servidor de desarrollo en macOS o Linux. |
| `pnpm build` | Compila la aplicación web y el servidor para producción. |
| `pnpm start` | Inicia el servidor compilado. |
| `pnpm check` | Comprueba los tipos de TypeScript. |
| `pnpm test` | Ejecuta las pruebas automatizadas. |
| `pnpm db:migrate` | Aplica las migraciones existentes en MySQL. |
| `pnpm db:push` | Genera migraciones desde el esquema y las aplica. |

Para ejecutar el servidor compilado en Windows PowerShell, después de `pnpm build` usa:

```powershell
$env:NODE_ENV = "production"
pnpm exec node dist/index.js
```

## Estructura del proyecto

```text
client/    Interfaz de usuario y páginas React
server/    Servidor Express, API tRPC y lógica del formulario
shared/    Tipos y código compartido
drizzle/   Esquema y migraciones de la base de datos
```

## Despliegue

El [Dockerfile](./Dockerfile) instala las dependencias, compila la aplicación y configura el servidor para producción. Configura `DATABASE_URL` y las demás variables necesarias en el entorno de despliegue; no guardes claves ni credenciales en el repositorio.

## Licencia

Este proyecto está bajo la licencia MIT. Consulta el campo `license` de [`package.json`](./package.json).
