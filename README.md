# Instrucciones de Instalación y Uso

Este proyecto requiere de algunas configuraciones iniciales para comenzar a funcionar correctamente.

## 1. Instalación de dependencias

Primero, debes instalar las dependencias del proyecto. Para ello, ejecuta el siguiente comando en la raíz del proyecto:

```bash
npm install


## 2. Configuración de variables de entorno
En la raíz del proyecto, crea un archivo llamado .env con el siguiente contenido:

DATABASE_URL="mongodb+srv://yasser:lamisma1010@cluster0.bllge.mongodb.net/envios?retryWrites=true&w=majority&appName=Cluster0"
JWT_SECRET=clave_secreta_segura
JWT_REFRESH_SECRET=otra_clave_secreta_segura
EXPIRESIN="60 days"
URL_FRONTEND="http://localhost:3000"


## 3. Cambiar la base de datos (Opcional)
Si prefieres usar una base de datos diferente a la proporcionada por MongoDB Atlas, puedes cambiar la URL de DATABASE_URL en el archivo .env. Sin embargo, debes asegurarte de ejecutar el siguiente comando para crear las tablas (colecciones) necesarias en tu base de datos:

npx prisma db push


## 4. Ejecutar el proyecto
Una vez que hayas realizado todas las configuraciones necesarias y las dependencias estén instaladas, puedes levantar el proyecto en modo desarrollo ejecutando:

npm run start:dev