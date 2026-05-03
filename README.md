# API REST con MVC - Gestión de Productos

Una API REST simple para gestionar productos, implementada con arquitectura MVC en Node.js y Express.

## Tecnologías

- **Node.js**
- **Express.js**
- **Arquitectura MVC** (Model-View-Controller)

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/facundohenze/API_REST_MVC_Service.git
   cd API_REST_MVC_Service
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Inicia el servidor:
   ```bash
   node app.js
   ```

El servidor se ejecutará en `http://localhost:3000`.

## Uso

La API permite gestionar productos con operaciones CRUD básicas.

### Endpoints

- **GET /products**: Obtiene todos los productos.
- **GET /products/:id**: Obtiene un producto específico por ID.
- **POST /products**: Crea un nuevo producto. Envía JSON con `name`, `price`, `stock`.
- **PATCH /products/:id/stock**: Actualiza el stock de un producto. Envía JSON con `stock`.
- **DELETE /products/:id**: Elimina un producto por ID.

### Ejemplos de uso

#### Crear producto
```bash
curl -X POST http://localhost:3000/products \
  -H "Content-Type: application/json" \
  -d '{"name": "Producto Nuevo", "price": 50, "stock": 10}'
```

#### Obtener productos
```bash
curl http://localhost:3000/products
```

#### Actualizar stock
```bash
curl -X PATCH http://localhost:3000/products/1/stock \
  -H "Content-Type: application/json" \
  -d '{"stock": 20}'
```

#### Eliminar producto
```bash
curl -X DELETE http://localhost:3000/products/1
```

## Estructura del proyecto

```
├── app.js                 # Servidor principal
├── controllers/
│   └── productController.js # Controladores de productos
├── models/
│   └── productModel.js     # Modelo de datos
├── routes/
│   └── productRoutes.js    # Definición de rutas
├── services/
│   └── productService.js   # Lógica de negocio
└── package.json           # Dependencias y scripts
```

## Validaciones

- Los nombres de productos deben ser únicos (case-insensitive).
- Precio y stock deben ser números no negativos.
- Al intentar acceder a un producto inexistente, se retorna 404.