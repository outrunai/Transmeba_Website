# Transmeba SA — Sitio Web Corporativo

Sitio web corporativo de **Transmeba SA** construido con Next.js 16, React 19, Tailwind CSS 4 y TypeScript. Preparado para integración futura con Strapi CMS como headless backend.

---

## Estructura del Repositorio

```
Transmeba SA/
├── transmeba-web/          # Frontend Next.js (App Router)
│   ├── app/                # Páginas (/, /nosotros, /servicios, /pqrs)
│   ├── components/         # Componentes React (forms, layout, sections, ui)
│   ├── lib/                # Utilidades, datos, cliente Strapi, validaciones
│   ├── types/              # Definiciones TypeScript
│   ├── public/             # Assets estáticos
│   ├── package.json        # Dependencias y scripts
│   ├── .env.example        # Plantilla de variables de entorno
│   └── next.config.mjs     # Configuración de Next.js
├── Documentos útiles/      # Documentos internos de referencia
└── README.md               # Esta guía
```

> **Nota:** Strapi (backend CMS) **no está incluido** en este repositorio. Se instala y configura por separado en el VPS. Ver [Sección 5: Configuración de Strapi](#5-configuración-de-strapi-cms-en-el-vps).

---

## Guía de Despliegue en VPS (Ubuntu / Hostinger)

### Requisitos Previos del Servidor

- Ubuntu 22.04 LTS o superior
- Acceso SSH con usuario root o sudo
- Dominio apuntando al VPS (ej: `transmeba.com.co`)

### 1. Preparación del Servidor

```bash
# Actualizar el sistema
sudo apt update && sudo apt upgrade -y

# Instalar dependencias del sistema
sudo apt install -y curl git build-essential

# Instalar Node.js 20 LTS (recomendado para Next.js 16)
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

# Verificar instalación
node -v   # v20.x.x
npm -v    # 10.x.x

# Instalar PM2 globalmente
sudo npm install -g pm2
```

### 2. Clonar el Repositorio

```bash
# Crear directorio para aplicaciones
sudo mkdir -p /var/www
cd /var/www

# Clonar el repositorio (reemplazar con tu URL real)
git clone https://github.com/tu-usuario/transmeba-sa.git
cd transmeba-sa/transmeba-web
```

Para actualizaciones futuras:

```bash
cd /var/www/transmeba-sa
git pull origin main
cd transmeba-web
npm install
npm run build
pm2 restart transmeba-web
```

### 3. Instalar Dependencias

```bash
cd /var/www/transmeba-sa/transmeba-web

# Instalar dependencias con el lockfile exacto
npm ci
```

> Se usa `npm ci` en lugar de `npm install` para garantizar reproducibilidad con el `package-lock.json`.

### 4. Configurar Variables de Entorno

```bash
# Crear archivo de entorno para producción
cp .env.example .env.local

# Editar con las variables reales
nano .env.local
```

Contenido de `.env.local` para producción:

| Variable | Descripción | Ejemplo |
|---|---|---|
| `NEXT_PUBLIC_STRAPI_URL` | URL del servidor Strapi (descomentar cuando esté activo) | `http://localhost:1337` |
| `STRAPI_API_TOKEN` | Token de API generado en Strapi Admin | *(generar en Strapi)* |
| `SMTP_HOST` | Servidor SMTP para envío de correos PQRS | *(tu proveedor SMTP)* |
| `SMTP_PORT` | Puerto del servidor SMTP | `587` |
| `SMTP_USER` | Usuario/email para autenticación SMTP | *(tu email corporativo)* |
| `SMTP_PASSWORD` | Contraseña o App Password del SMTP | *(tu contraseña)* |
| `SMTP_FROM` | Dirección de remitente en correos | *(email de no-reply)* |
| `NEXT_PUBLIC_SITE_URL` | URL pública del sitio en producción | `https://tu-dominio.com` |

> Consulta `.env.example` en el proyecto para ver la plantilla completa. Copia y renombra a `.env.local` con tus valores reales.

> **Seguridad:** Nunca subas `.env.local` al repositorio. Ya está en `.gitignore`.

### 5. Construir para Producción

```bash
cd /var/www/transmeba-sa/transmeba-web

# Compilar la aplicación
npm run build
```

Este comando ejecuta `next build`, que genera la versión optimizada en `.next/`.

### 6. Desplegar con PM2

```bash
# Iniciar la aplicación en producción (puerto 3000 por defecto)
pm2 start npm --name "transmeba-web" -- start

# Verificar que está corriendo
pm2 status

# Ver logs en tiempo real
pm2 logs transmeba-web

# Configurar PM2 para reiniciar tras reboot del servidor
pm2 save
pm2 startup
# (Ejecutar el comando que PM2 muestre en pantalla)
```

**Comandos útiles de PM2:**

| Comando | Descripción |
|---|---|
| `pm2 status` | Ver estado de todos los procesos |
| `pm2 restart transmeba-web` | Reiniciar la app |
| `pm2 stop transmeba-web` | Detener la app |
| `pm2 delete transmeba-web` | Eliminar proceso de PM2 |
| `pm2 logs transmeba-web` | Ver logs en tiempo real |
| `pm2 logs transmeba-web --lines 100` | Ver últimas 100 líneas de log |
| `pm2 monit` | Monitor interactivo (CPU, RAM) |

#### Puerto Personalizado (Opcional)

Si necesitas un puerto diferente al 3000:

```bash
pm2 start npm --name "transmeba-web" -- start -- -p 8080
```

---

## 5. Configuración de Strapi CMS en el VPS

Strapi se instala como proyecto separado en el mismo servidor. Este frontend ya tiene el cliente preparado en `lib/strapi.ts`.

### 5.1 Instalar Strapi

```bash
cd /var/www

# Crear proyecto Strapi (elegir PostgreSQL para producción)
npx create-strapi-app@latest transmeba-strapi

# Durante la instalación interactiva:
#   - Installation type: Custom
#   - Default database client: postgres
#   - Database name: transmeba_strapi
#   - Host: 127.0.0.1
#   - Port: 5432
#   - Username: strapi_user
#   - Password: (tu contraseña segura)
#   - Enable SSL: No (es conexión local)
```

### 5.2 Instalar y Configurar PostgreSQL

```bash
# Instalar PostgreSQL
sudo apt install -y postgresql postgresql-contrib

# Crear usuario y base de datos
sudo -u postgres psql
```

Dentro de la consola de PostgreSQL, ejecutar (reemplazar `<DB_PASSWORD>` con una contraseña segura generada con `openssl rand -base64 24`):

```sql
CREATE USER strapi_user WITH PASSWORD '<DB_PASSWORD>';
CREATE DATABASE transmeba_strapi OWNER strapi_user;
GRANT ALL PRIVILEGES ON DATABASE transmeba_strapi TO strapi_user;
\q
```

### 5.3 Variables de Entorno de Strapi

```bash
cd /var/www/transmeba-strapi
nano .env
```

| Variable | Descripción |
|---|---|
| `HOST` | `0.0.0.0` |
| `PORT` | `1337` |
| `APP_KEYS` | Generar con `openssl rand -base64 32` |
| `API_TOKEN_SALT` | Generar con `openssl rand -base64 32` |
| `ADMIN_JWT_SECRET` | Generar con `openssl rand -base64 32` |
| `TRANSFER_TOKEN_SALT` | Generar con `openssl rand -base64 32` |
| `JWT_SECRET` | Generar con `openssl rand -base64 32` |
| `DATABASE_CLIENT` | `postgres` |
| `DATABASE_HOST` | `127.0.0.1` |
| `DATABASE_PORT` | `5432` |
| `DATABASE_NAME` | `transmeba_strapi` |
| `DATABASE_USERNAME` | `strapi_user` |
| `DATABASE_PASSWORD` | *(la misma `<DB_PASSWORD>` del paso 5.2)* |
| `DATABASE_SSL` | `false` |

> **Cada clave debe ser única.** Ejecutar `openssl rand -base64 32` una vez por cada variable que requiera generación.

### 5.4 Construir y Desplegar Strapi con PM2

```bash
cd /var/www/transmeba-strapi

# Instalar dependencias
npm ci

# Compilar el admin panel
npm run build

# Iniciar con PM2
pm2 start npm --name "transmeba-strapi" -- start

# Guardar configuración de PM2
pm2 save
```

### 5.5 Crear los Content Types en Strapi

Una vez Strapi esté corriendo, acceder al panel de administración en `http://TU_IP_VPS:1337/admin` y crear los siguientes Content Types (según `types/index.ts` y `lib/strapi.ts`):

| Content Type | Campos |
|---|---|
| **Service** | `title` (Text), `description` (Rich Text), `icon` (Text), `features` (JSON/Array) |
| **Value** | `title` (Text), `description` (Text), `icon` (Text) |
| **Certification** | `name` (Text), `standard` (Text), `description` (Text), `icon` (Text), `year` (Number) |
| **CompanyInfo** | `name` (Text), `foundedYear` (Number), `originalName` (Text), `mission` (Rich Text), `vision` (Rich Text), `history` (Rich Text), `employees` (Number), `mainRoute` (Text) |
| **Route** | `origin` (Text), `destination` (Text), `frequency` (Text), `duration` (Text) |

### 5.6 Conectar el Frontend con Strapi

Una vez creados los Content Types y cargados los datos:

```bash
cd /var/www/transmeba-sa/transmeba-web

# 1. Generar un API Token en Strapi Admin → Settings → API Tokens
# 2. Actualizar .env.local:
nano .env.local
```

```env
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
STRAPI_API_TOKEN=tu_token_generado_en_strapi
```

```bash
# 3. Reconstruir y reiniciar el frontend
npm run build
pm2 restart transmeba-web
```

> **Nota:** También hay que descomentar las funciones en `lib/strapi.ts` y actualizar los componentes para usar los datos de Strapi en lugar de `lib/data.ts`. Esto requiere cambios en el código fuente.

---

## 6. Configurar Nginx como Reverse Proxy

Nginx sirve como punto de entrada público, redirige tráfico HTTPS al frontend (puerto 3000) y opcionalmente a Strapi (puerto 1337).

```bash
# Instalar Nginx
sudo apt install -y nginx

# Crear configuración del sitio
sudo nano /etc/nginx/sites-available/transmeba
```

```nginx
# Redirigir HTTP a HTTPS
server {
    listen 80;
    server_name transmeba.com.co www.transmeba.com.co;
    return 301 https://$server_name$request_uri;
}

# Frontend Next.js
server {
    listen 443 ssl;
    server_name transmeba.com.co www.transmeba.com.co;

    # Los certificados SSL se configuran con Certbot (paso siguiente)
    # ssl_certificate /etc/letsencrypt/live/transmeba.com.co/fullchain.pem;
    # ssl_certificate_key /etc/letsencrypt/live/transmeba.com.co/privkey.pem;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}

# Panel de administración de Strapi (opcional, acceso restringido)
server {
    listen 443 ssl;
    server_name admin.transmeba.com.co;

    # ssl_certificate /etc/letsencrypt/live/admin.transmeba.com.co/fullchain.pem;
    # ssl_certificate_key /etc/letsencrypt/live/admin.transmeba.com.co/privkey.pem;

    location / {
        proxy_pass http://localhost:1337;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

```bash
# Activar el sitio
sudo ln -s /etc/nginx/sites-available/transmeba /etc/nginx/sites-enabled/

# Eliminar configuración por defecto
sudo rm /etc/nginx/sites-enabled/default

# Verificar configuración
sudo nginx -t

# Reiniciar Nginx
sudo systemctl restart nginx
sudo systemctl enable nginx
```

### 7. Certificado SSL con Let's Encrypt

```bash
# Instalar Certbot
sudo apt install -y certbot python3-certbot-nginx

# Obtener certificado (Nginx debe estar corriendo)
sudo certbot --nginx -d transmeba.com.co -d www.transmeba.com.co

# Si usas subdominio para Strapi:
sudo certbot --nginx -d admin.transmeba.com.co

# Certbot configura renovación automática. Verificar:
sudo certbot renew --dry-run
```

Tras ejecutar Certbot, las líneas `ssl_certificate` en la configuración de Nginx se configuran automáticamente.

---

## 8. Firewall

```bash
# Configurar UFW
sudo ufw allow OpenSSH
sudo ufw allow 'Nginx Full'
sudo ufw enable
sudo ufw status
```

> **No** abrir los puertos 3000 ni 1337 directamente. Nginx actúa como proxy.

---

## Resumen de Arquitectura en Producción

```
Internet
  │
  ▼
Nginx (:80/:443)  ─── SSL Termination
  │
  ├──► Next.js (:3000)   ← PM2: "transmeba-web"
  │
  └──► Strapi  (:1337)   ← PM2: "transmeba-strapi"
               │
               └──► PostgreSQL (:5432)
```

## Scripts Disponibles

| Script | Comando | Descripción |
|---|---|---|
| Desarrollo | `npm run dev` | Servidor de desarrollo con hot reload |
| Build | `npm run build` | Compilar para producción |
| Producción | `npm run start` | Iniciar servidor de producción |
| Lint | `npm run lint` | Ejecutar ESLint |

> Todos los scripts se ejecutan desde `transmeba-web/`.

---

## Checklist de Despliegue

- [ ] Servidor Ubuntu actualizado con Node.js 20 y PM2
- [ ] Repositorio clonado en `/var/www/transmeba-sa/`
- [ ] Dependencias instaladas (`npm ci` en `transmeba-web/`)
- [ ] `.env.local` configurado con variables de producción
- [ ] `npm run build` ejecutado sin errores
- [ ] PM2 corriendo `transmeba-web` en puerto 3000
- [ ] Nginx configurado como reverse proxy
- [ ] Certificado SSL instalado con Certbot
- [ ] Firewall (UFW) habilitado con reglas correctas
- [ ] `pm2 save` y `pm2 startup` ejecutados
- [ ] *(Opcional)* Strapi instalado, configurado y corriendo con PM2
- [ ] *(Opcional)* PostgreSQL configurado para Strapi
