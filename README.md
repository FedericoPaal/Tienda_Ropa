# 🛍️ Mi E-commerce - Tienda de Ropa Online

Una aplicación de tienda online moderna construida con React para vender ropa. Te permite ver productos, agregar al carrito, hacer compras y administrar el inventario como administrador.

## 🎯 ¿Qué puedes hacer en esta aplicación?

### Para Clientes Normales:
- 🏠 **Página de Inicio**: Ves una página principal atractiva con un botón para ver productos
- 👕 **Ver Productos**: Miras todos los productos disponibles con imágenes, precios y descripciones
- 🔍 **Buscar**: Encuentras productos escribiendo el nombre en la barra de búsqueda
- 📄 **Paginación**: Los productos están divididos en páginas para cargar más rápido
- 🛒 **Carrito de Compras**:
  - Agregas productos al carrito
  - Aumentas o disminuyes la cantidad con los botones + y -
  - Ves el precio total que vas a pagar
  - Haces la compra (simulada)
- 🔐 **Login**: Te registras con un usuario para acceder al carrito

### Para Administradores:
- ➕ **Agregar Productos**: Subes nuevos productos con nombre, precio, descripción e imagen
- ✏️ **Editar Productos**: Cambias la información de productos existentes
- 🗑️ **Eliminar Productos**: Borras productos del catálogo con confirmación
- 📊 **Ver Todos**: Ves una tabla con todos los productos y sus opciones

## 📥 Cómo instalar y ejecutar

### Paso 1: Descargar e Instalar Node.js
Necesitas tener Node.js instalado (es un programa que permite ejecutar aplicaciones JavaScript).
- Descárgalo desde: https://nodejs.org/
- Instálalo siguiendo los pasos (presiona "siguiente" hasta terminar)

### Paso 2: Descargar el Proyecto
```bash
# Abre la terminal/PowerShell en tu computadora
git clone https://github.com/FedericoPaal/Tienda_Ropa.git
cd mi-ecommerce
```

### Paso 3: Instalar las Herramientas que Necesita
```bash
npm install
```
Esto descarga todas las librerías necesarias (solo lo haces una vez).

### Paso 4: Ejecutar la Aplicación
```bash
npm start
```
Se abrirá automáticamente en tu navegador en: **http://localhost:3000**

## 🗂️ Estructura de Carpetas

```
mi-ecommerce/
├── src/
│   ├── components/          # Partes reutilizables de la aplicación
│   │   ├── Navbar.jsx      # Barra de navegación superior
│   │   ├── Cart.jsx        # Vista del carrito
│   │   ├── AddProduct.jsx  # Formulario para agregar productos
│   │   ├── EditProduct.jsx # Formulario para editar productos
│   │   ├── Search.jsx      # Barra de búsqueda
│   │   ├── Pagination.jsx  # Números de páginas
│   │   ├── Modal.jsx       # Ventanas emergentes
│   │   └── PrivateRoute.jsx # Protege páginas que necesitan login
│   │
│   ├── pages/              # Páginas principales
│   │   ├── Home.jsx        # Página de inicio
│   │   ├── Products.jsx    # Página de todos los productos
│   │   ├── ProductDetail.jsx # Detalle de un producto
│   │   ├── Login.jsx       # Página de login
│   │   ├── Admin.jsx       # Panel de administración
│   │   └── Cart.jsx        # Página del carrito
│   │
│   ├── contexts/           # Gestión del estado global
│   │   ├── AuthContext.jsx    # Guarda si estás logueado
│   │   ├── CartContext.jsx    # Guarda los productos en el carrito
│   │   └── ProductContext.jsx # Guarda todos los productos
│   │
│   ├── App.jsx            # Componente principal
│   ├── styles.css         # Estilos de la aplicación
│   └── api.js             # Conexión con el servidor
│
├── public/                # Archivos públicos
│   ├── index.html         # Página HTML principal
│   └── image.png          # Imagen del hero (portada)
│
└── package.json           # Lista de librerías usadas
```

## 💾 Cómo Funciona el Login

**Usuario de prueba:**
- Usuario: `admin`
- Contraseña: cualquier cosa

El login es simulado (no es real). La información se guarda en `localStorage` que es una memoria en tu navegador.

## 🔄 Flujo de la Aplicación

### Cliente Comprador:
1. Entra a la página → ve el home con imagen bonita
2. Hace clic en "Ver Productos"
3. Ve los productos con búsqueda y paginación
4. Agrega productos al carrito (necesita estar logueado)
5. Va al carrito, ve el precio total
6. Puede aumentar/disminuir cantidades
7. Hace clic en "Realizar Compra"
8. Aparece un mensaje de éxito

### Administrador:
1. Entra a la página y hace login
2. Hace clic en "Admin" (solo aparece si está logueado)
3. Ve un formulario para agregar productos
4. Completa: nombre, precio, descripción e **imagen**
5. Hace clic en "Agregar Producto"
6. Ve la tabla con todos los productos
7. Puede editar o eliminar productos

## 🎨 Características Principales

### 📱 Responsive (Se adapta a cualquier pantalla)
- En computadora: ve todo grande
- En tablet: se reorganiza
- En celular: texto y botones más pequeños

### 🔔 Notificaciones (Mensajitos que aparecen)
- Verde: cuando algo va bien ✅
- Rojo: cuando hay un error ❌
- Amarillo: advertencias ⚠️

### 🖼️ Imágenes
- Los productos muestran imágenes
- Cuando subes un producto nuevo, subes su imagen
- Las imágenes se guardan en formato digital (base64)

### 🎯 Búsqueda Instantánea
- Escribes en la barra de búsqueda
- Los productos se filtran automáticamente

### 📊 Carrito Inteligente
- Suma automáticamente el total
- Cuenta cuántos productos tienes
- Guarda todo en memoria mientras navegas

## 🛠️ Tecnologías Usadas

| Herramienta | Para qué sirve |
|---|---|
| **React** | El motor de la aplicación (lo hace funcionar) |
| **React Router** | Para navegar entre páginas |
| **Context API** | Guarda información global (usuario, carrito) |
| **React Icons** | Íconos bonitos (+, -, 🛒, etc) |
| **React Toastify** | Mensajes de notificación |
| **React Helmet** | Mejora el SEO (para Google) |
| **Styled Components** | Estilos bonitos para el modal |
| **FakeStore API** | Datos de prueba de productos |

## 🚀 Cómo Subir a Internet (Deployment)

Cuando termines y quieras que otros lo usen:

```bash
npm run build
```

Esto crea una versión optimizada en la carpeta `build/`.

Luego puedes subirla a:
- **Vercel**: https://vercel.com (recomendado, es gratis)
- **Netlify**: https://www.netlify.com (también gratis)
- **Heroku**: https://www.heroku.com

## 🐛 Si Algo No Funciona

### El carrito no suma bien:
- Revisa que los productos tengan cantidad (quantity)
- Abre la consola del navegador (F12) y busca errores rojos

### Las imágenes no aparecen:
- Asegúrate de haber subido una imagen al crear el producto
- El archivo debe ser un .jpg, .png, .gif, etc.

### La búsqueda no funciona:
- Revisa que esté escribiendo en la barra de búsqueda
- Limpia los filtros y recarga la página

### No puedes entrar al Admin:
- Necesitas estar logueado primero
- Usa el login (usuario y contraseña cualquier cosa)

## 📝 Variables de Entorno

Por ahora no necesitas configurar nada. La aplicación usa:
- **API**: FakeStore API (https://fakestoreapi.com)
- **Storage**: LocalStorage del navegador

Si quieres cambiar la API, edita `src/api.js`

## 👨‍💻 Desarrollo y Cambios

Si quieres cambiar algo:

1. Abre el proyecto en Visual Studio Code
2. Haz tus cambios
3. Guarda (Ctrl + S)
4. La aplicación se recarga automáticamente en el navegador

Si quieres agregar una página nueva:
1. Crea un archivo en `src/pages/MiPagina.jsx`
2. Importa en `App.jsx`
3. Agrega la ruta en el `<Routes>`

## ✅ Checklist Antes de Publicar

- [ X ] Probé en celular (responsive)
- [ X ] Probé el login y logout
- [ X ] Agregué productos como admin
- [ X ] Hice una compra falsa en el carrito
- [ X ] La búsqueda funciona
- [ X ] La paginación funciona
- [ X ] Las imágenes se ven bien
- [ X ] Los mensajes de notificación aparecen