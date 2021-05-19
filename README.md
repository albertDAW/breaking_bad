# Getting Started with Create React App
Proyecto api Breaking Bad

## Visual
En este apartado haremos un pequeño resumen de las pantallas de las que consta el proyecto, y de que se puede hacer en cada una de ellas

### Listado
En el listado se muestran los personajes de Breaking Bad. Se ha incluido una opción de filtros por nombre para facilitar la búsqueda de un personaje en concreto. En este punto se puede ver una imagen del personaje y su nombre. Si se hace un click dentro de cualquier personaje, esto nos conducira a su detalle

### Detalle
Se muestra un detalle del personaje. El detalle consta de una foto, los datos del personaje, y un boton que nos dara una frase aleatoria del personaje

## Técnico
### Api
Esta web saca sus datos de la api de breaking bad https://www.breakingbadapi.com/. 

### Tecnologia
La aplicación se ha creado usando la biblioteca React.js

### Uso de Gateways
Esta aplicación usa un gateway para enlazar la api con el front. Esto se hace para tener las funciones que llaman a un mismo controlador en el mismo fichero

### Librerias usadas

- @material/ui: Esta libreria es la que nos da el soporte visual
- @material/ui/icons: Libreria que aporta iconos a la mencionada anteriormente
- axios: Libreria que usamos para hacer las llamadas a la API
- react-i18n: Libreria cuya finalidad es encargarse de la internacionalización de los textos
- react-router: Libreria escogida para encargarse del routing de la aplicación

### Apartados no resueltos
En esta primera fase, no se ha podido hacer un diseño responsive.

