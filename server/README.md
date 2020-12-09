# Información General
El servidor de rokket_zoo está desarrollado con Express y Typescript.

# Arquitectura
Typescript esta siendo usado como lenguaje base, express como framework api. <br>

3-layers está siendo ocupado como el patron de arquitectura de este proyecto. <br>

Controller se encarga de obtener respuesta de Service, y manejar los objetos req,res. <br>

Service se encarga de obtener respuesta de Model, y aplicar reglas de negocio. <br>

Model se encarga de transparentar la collection que estamos manipulando, entregando metodos CRUD o metodos personalizados de consultas.

# Instalación local
2- npm install <br>
3- npm run dev 

# Instalación prod
1- npm run build
2- npm run prod

# Testing
Jest está siendo ocupado como el test runner base, y supertest es una libreria que nos apoya en el testing e2e.

1-npm install
2-npm run test

# Información Docker
Este Dockerfile genera un build del servidor, en la primera stage genera un build del proyecto y en la segunda stage copia el build generado en el contenedor que usaremos para prod. <br>
