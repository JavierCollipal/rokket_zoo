# Información General
El servidor de rokket_zoo está desarrollado con Express y Typescript.

# Arquitectura
Typescript esta siendo usado como lenguaje base, express como framework api. <br>

3-layers está siendo ocupado como el patron de arquitectura de este proyecto. <br>

Controller se encarga de obtener respuesta de Service, y manejar los objetos req,res. <br>

Service se encarga de obtener respuesta de Model, y aplicar reglas de negocio. <br>

Model se encarga de transparentar la collection que estamos manipulando, entregando metodos CRUD o metodos personalizados de consultas.
# Instalación
1- cd client <br>
2- npm install <br>
3- npm run start

# Información Docker
Este Dockerfile genera un build del servidor, en la primera stage genera un build del proyecto y en la segunda stage copia el build generado en el contenedor que usaremos para prod. <br>
