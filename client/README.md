# Información General
El cliente de rokket_zoo está desarrollado con React y Javascript.

# Arquitectura
Todos los componentes están construidos con el modo funcional. <br>

UseEffect y UseState fueron usados para darle estado y ciclos de vida. <br>

Redux es la libreria que está siendo usada para el manejo de estado y como complemento
del reducer para manejar llamadas asincronas, estoy ocupando redux-thunk.

En la parte de diseño, estoy ocupando la libreria de material UI.
# Instalación
 2- npm install <br>
 3- npm run start

# Información Docker
Este Dockerfile genera un build del cliente, para luego apoyarse con nginx y poder mostrar lo que se generó con npm run  build.
