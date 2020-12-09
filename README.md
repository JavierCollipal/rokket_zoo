# Información General
Rokket_zoo es una página web donde puedes crear tus propios animales!.
Si necesitas mas detalles, puedes leer los Readme encontrados en los folder client y server.

# Información docker
Las imágenes de cliente y servidor fueron construidas con multi-stage pattern. <br>
Las 2 imágenes terminan en el paso anterior antes de hacer correr el contenedor, esto es util para poder manejar a gusto
el contenedor con docker compose.

# Instalación docker
1- docker-compose build <br>
2- docker-compose up <br>
3- visitar localhost:80 o localhost
