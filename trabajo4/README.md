# Registro de Alumnos - App Cliente/Servidor 📝

Una aplicación web sencilla para registrar alumnos (nombre, edad y nota). Los datos se ordenan automáticamente (de mayor a menor nota, y luego alfabéticamente) y persisten en la memoria del servidor. 

Cada dispositivo o navegador que accede a la aplicación mantiene su propia lista de alumnos independiente, sin necesidad de crear cuentas de usuario o contraseñas.

## 🚀 Características

* **Frontend:** HTML, CSS y JavaScript puro (Vanilla JS).
* **Backend:** Node.js con Express.
* **Persistencia por cliente:** El servidor identifica cada navegador mediante un ID único (`x-client-id`) generado en el `localStorage` del frontend.
* **Ordenamiento automático:** El cliente recibe los datos y los ordena antes de mostrarlos.
* **Acceso en red local:** Configurado para escuchar en `0.0.0.0`, permitiendo el acceso desde cualquier dispositivo conectado a la misma red Wi-Fi.

## 📁 Estructura del Proyecto

```text
/
├── server.js           # Servidor backend en Node.js
├── package.json        # Dependencias del proyecto
└── public/
    └── index.html      # Interfaz de usuario (Frontend)
🛠️ Requisitos previos
Necesitas tener instalado Node.js en tu computadora.

📦 Instalación
Descarga o clona este proyecto en tu computadora.

Abre una terminal en la carpeta raíz del proyecto.

Instala las dependencias necesarias ejecutando:

Bash
npm install
🏃‍♂️ Cómo ejecutar el proyecto
En la terminal, dentro de la carpeta del proyecto, inicia el servidor:

Bash
node server.js
El servidor te indicará que está corriendo en el puerto 3000.

🌐 Cómo acceder a la aplicación
Desde la misma computadora donde corre el servidor:
Abre tu navegador y entra a:
http://localhost:3000

Desde otro dispositivo (celular, tablet u otra PC en la misma red):

Averigua la dirección IP local de la computadora donde corre el servidor. Puedes hacerlo abriendo la consola del sistema (CMD o PowerShell) y ejecutando el comando:

DOS
ipconfig
Busca el valor que dice "Dirección IPv4" (ejemplo: 192.168.1.15).

En el navegador del otro dispositivo, ingresa esa IP seguida del puerto 3000:
http://192.168.1.15:3000

🧹 Limpieza de datos
La aplicación incluye un botón rojo en la parte inferior para borrar la lista de alumnos. Al usarlo, el frontend envía una petición DELETE al servidor para vaciar únicamente los datos asociados a ese dispositivo.