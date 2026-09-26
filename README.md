# 🧸 Peluchitos Bonbin — Frontend

Frontend de **Peluchitos Bonbin**, una tienda web de peluches inspirados en anime, videojuegos, series y otros contenidos pop.

La aplicación permite gestionar el catálogo, autenticar usuarios mediante **AWS Cognito**, administrar un carrito de compras y diferenciar funcionalidades según el rol del usuario.

---

## 📑 Tabla de contenidos

- [Tecnologías](#-tecnologías)
- [Arquitectura](#-arquitectura)
- [Autenticación](#-autenticación)
- [Funcionalidades](#-funcionalidades)
- [Estructura del proyecto](#-estructura-del-proyecto)
- [Configuración](#-configuración)
- [Instalación](#-instalación)
- [Scripts disponibles](#-scripts-disponibles)
- [Seguridad](#-seguridad)
- [API utilizada](#-api-utilizada)
- [Roles y accesos](#-roles-y-accesos)
- [Despliegue](#-despliegue)
- [Contexto académico](#-contexto-académico)

---

## 🚀 Tecnologías

- **React**
- **Vite**
- **React Router**
- **Framer Motion**
- **react-oidc-context**
- **JavaScript**
- **CSS**
- **AWS Cognito**
- **AWS API Gateway**

---

## 🏗️ Arquitectura

El frontend **no se conecta directamente** a la base de datos. Toda comunicación pasa por el API Gateway y un BFF (*Backend for Frontend*):

```
Usuario
  ↓
React
  ↓
AWS Cognito
  ↓
Access Token JWT
  ↓
AWS API Gateway
  ↓
BFF
  ↓
Microservicios
  ↓
AWS RDS MySQL
```

---

## 🔐 Autenticación

La autenticación se realiza mediante **AWS Cognito** utilizando el protocolo **OIDC**.

La librería `react-oidc-context` gestiona:

- Inicio de sesión
- Cierre de sesión
- Sesión del usuario
- Obtención del Access Token
- Envío del JWT en solicitudes protegidas

El Access Token se envía en cada solicitud protegida mediante el encabezado:

```
Authorization: Bearer <access_token>
```

Los roles se obtienen desde los grupos de Cognito mediante el claim `cognito:groups`. Los roles disponibles son:

- `USUARIO`
- `OPERADOR`
- `ADMINISTRADOR`

---

## ✨ Funcionalidades

### 👤 Usuario

- Ver el catálogo de productos
- Ver información y stock de productos
- Agregar productos al carrito
- Modificar cantidades
- Eliminar productos del carrito
- Realizar compras

### 🛠️ Operador

Panel específico en `/operador-panel` para:

- Visualizar los pedidos
- Revisar el estado de los pedidos
- Cambiar el estado de los pedidos

### 👑 Administrador

Panel de administración en `/control-panel` para:

- Crear productos
- Editar productos
- Eliminar productos
- Revisar el catálogo

> ⚠️ Las restricciones de roles también se validan en el backend. Ocultar una opción en React **no** constituye la única medida de seguridad.

---

## 📁 Estructura del proyecto

```
src/
├── components/
│   ├── 01-atoms/
│   ├── 02-molecules/
│   ├── 03-organisms/
│   ├── 04-layouts/
│   ├── 05-pages/
│   │   ├── Home/
│   │   ├── Catalog/
│   │   ├── Cart/
│   │   ├── ControlPanel/
│   │   ├── OperadorPanel/
│   │   ├── Login/
│   │   ├── Register/
│   │   ├── Contact/
│   │   ├── About/
│   │   └── Faq/
│   └── ScrollToTop/
│
├── services/
│   ├── pedidoService.js
│   └── operadorService.js
│
├── App.jsx
└── main.jsx
```

---

## ⚙️ Configuración

El frontend utiliza una variable de entorno para definir la URL del API Gateway.

Crea un archivo `.env` en la raíz del proyecto:

```env
VITE_API_URL=https://griaiqrtxi.execute-api.us-east-1.amazonaws.com
```

> 🚫 No almacenes contraseñas, claves privadas, credenciales de AWS ni otros secretos en este archivo.

---

## 💻 Instalación

```bash
# Clonar el repositorio
git clone <URL_DEL_REPOSITORIO>

# Ingresar al proyecto
cd Proyecto-personal-pagina

# Instalar dependencias
npm install

# Configurar el archivo .env y luego iniciar el entorno de desarrollo
npm run dev
```

La aplicación estará disponible normalmente en:

```
http://localhost:5173
```

---

## 📜 Scripts disponibles

| Comando           | Descripción                          |
|-------------------|---------------------------------------|
| `npm run dev`     | Ejecuta el entorno de desarrollo      |
| `npm run build`   | Genera una compilación de producción  |
| `npm run preview` | Previsualiza la compilación           |

---

## 🛡️ Seguridad

El flujo de seguridad general es:

```
React
  ↓
AWS Cognito
  ↓
Access Token JWT
  ↓
API Gateway
  ↓
Validación del JWT
  ↓
BFF
  ↓
Nueva validación del JWT
  ↓
Microservicio
  ↓
Validación del JWT + autorización por rol
```

El frontend solamente controla la **presentación** de las opciones según el rol. La autorización definitiva siempre se realiza en el backend.

---

## 🔌 API utilizada

El frontend consume las APIs expuestas mediante AWS API Gateway.

```
GET    /api/v1/productos
GET    /api/v1/productos/{id}

GET    /api/v1/pedidos/carrito
POST   /api/v1/pedidos/carrito/productos
PUT    /api/v1/pedidos/carrito/productos/{productoId}
DELETE /api/v1/pedidos/carrito/productos/{productoId}
POST   /api/v1/pedidos/carrito/comprar

GET    /api/v1/pedidos/mis-pedidos

GET    /api/v1/pedidos
PUT    /api/v1/pedidos/{id}/estado
```

---

## 🔑 Roles y accesos

| Funcionalidad          | Usuario | Operador | Administrador |
|-------------------------|:-------:|:--------:|:--------------:|
| Ver catálogo             | ✅      | ✅       | ✅             |
| Carrito                  | ✅      |          |                |
| Comprar                  | ✅      |          |                |
| Panel de operador        |         | ✅       |                |
| Gestionar pedidos        |         | ✅       |                |
| Panel de administración  |         |          | ✅             |
| Crear productos          |         |          | ✅             |
| Editar productos         |         |          | ✅             |
| Eliminar productos       |         |          | ✅             |

---

## 📦 Despliegue

Para desplegar el frontend en la instancia EC2 utilizada por la aplicación:

```bash
git pull
npm install
npm run build
sudo cp -a dist/. /usr/share/nginx/html/
```

Nginx se utiliza como servidor web para entregar los archivos generados por Vite.

---

## 🎓 Contexto académico

Este frontend forma parte de una arquitectura distribuida compuesta por:

- Frontend React
- AWS Cognito
- AWS API Gateway
- BFF desarrollado con Spring Boot
- `producto-service`
- `pedido-service`
- `usuario-service`
- AWS RDS MySQL

La solución utiliza **AWS** como plataforma cloud y **React** como tecnología frontend, de acuerdo con la configuración autorizada para el proyecto.
