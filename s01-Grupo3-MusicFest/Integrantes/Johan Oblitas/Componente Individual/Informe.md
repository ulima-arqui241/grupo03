# Comparación de Frameworks Front End

## Concepto

Se busca realizar un análisis comparativo entre los cuatro frameworks de JavaScript populares: React, Svelte, Angular y Vue. Cada uno de estos marcos ofrece características y capacidades únicas para la construcción de aplicaciones web modernas.

### React

React es una popular biblioteca de JavaScript desarrollada por Facebook para construir interfaces de usuario, particularmente aplicaciones de una sola página. React permite a los desarrolladores crear componentes de IU reutilizables que administran su estado. Cuando se construye una aplicación para producción, el código se optimiza y compila, pero aún así depende de la biblioteca React en tiempo de ejecución. React proporciona un conjunto básico de características para crear componentes, renderizarlos en la pantalla y manejar la entrada del usuario. También ofrece varias mejoras adicionales como React Suspense, que optimiza cómo y cuándo se actualiza el DOM.

### Angular

Angular es un marco integral desarrollado por Google para la construcción de aplicaciones web dinámicas. Proporciona un conjunto robusto de características listas para usar, incluyendo su propio cliente HTTP, validación de formularios y enrutamiento. Cuando se construye una aplicación Angular para producción, el código se optimiza y compila, pero funciona junto con el marco Angular en tiempo de ejecución. Angular ofrece capacidades avanzadas como la carga diferencial, que crea diferentes paquetes para diferentes navegadores para mejorar el rendimiento.

### Vue

Vue es un framework JavaScript progresivo que es fácil de integrar en proyectos. Proporciona un equilibrio entre el completo conjunto de características de Angular y la simplicidad de React. Vue incluye un conjunto de características de tamaño mediano, como una biblioteca de administración del estado y un enrutador, pero no incluye su propio cliente HTTP o validación de formularios. Cuando se crean para producción, las aplicaciones de Vue se optimizan, pero siguen dependiendo de la biblioteca de Vue en tiempo de ejecución. Vue también admite funciones avanzadas como la creación de paquetes diferentes para diferentes navegadores.

## Análisis comparativo

| Framework | Desarrollador | Open-source  | Lanzamiento Inicial  | Repositorio de GitHub                        | Ventajas  | Desventajas  |
|-----------|------------------|-------------|----------------------|----------------------------------------------|-------------------------------------------------------------------------------------------|-------------------------------------------------------|
| **React**  | Facebook         | Sí           | Marzo 2013           | [React GitHub](https://github.com/facebook/react) | - Fácil de aprender y usar<br>- Basado en componentes: código reutilizable<br>- Rápido y eficiente<br>Gran comunidad | - JSX es obligatorio<br>- Poca documentación              |
| **Vue**    | Evan You         | Sí           | Febrero 2014         | [Vue GitHub](https://github.com/vuejs/vue)        | Rápido y eficiente<br>- Basado en componentes: código reutilizable<br>- Fácil de aprender y usar<br>- Buena y intuitiva documentación | - Menos recursos en comparación con React<br>- Excesiva flexibilidad a veces |
| **Angular** | Google           | Sí           | Septiembre 2016      | [Angular GitHub](https://github.com/angular/angular) | - Rápido rendimiento en servidor<br>- Implementación de arquitectura MVC<br>- Basado en componentes: código reutilizable<br>- Buena y intuitiva documentación | - Curva de aprendizaje pronunciada<br>- Angular es muy complejo |

### Características principales

| Característica | React | Angular | Vue |
|----|----|----|----|
| **Tamaño del Bundle**    | Pequeño, bundles rápidos    | Tamaño medio, bundles rápidos    | Pequeño, bundles rápidos     |
| **Características Principales**   | Crear componentes, renderizar y reaccionar a la entrada del usuario | Amplias: cliente HTTP, validación, enrutamiento, etc.    | Tamaño medio: gestión de estado, enrutador (sin validación ni cliente HTTP) |
| **Mejoras Adicionales**    | Numerosas mejoras (e.g., React Suspense para optimizar las actualizaciones del DOM) | Numerosas mejoras (e.g., carga diferencial para diferentes navegadores) | Algunas mejoras (e.g., carga diferencial para diferentes navegadores) |

### Rendimiento y optimización

| Característica | React | Angular | Vue |
|----|----|----|----|
| **Rendimiento en Tiempo de Ejecución**  | Alto, con optimizaciones como React Suspense                     | Alto, con carga diferencial y otras optimizaciones               | Alto, con carga diferencial y otras optimizaciones               |
| **Tiempo de Construcción**  | Rápido, optimizado pero aún requiere la biblioteca React en tiempo de ejecución | Medio, debido al amplio conjunto de características               | Rápido, optimizado pero aún requiere la biblioteca Vue en tiempo de ejecución |
| **Curva de Aprendizaje**  | Moderada, requiere entender la arquitectura basada en componentes de React | Empinada, debido al extenso conjunto de características           | Moderada, requiere entender la arquitectura basada en componentes de Vue |


## Demo

Se propone desarrollar una aplicación sencilla en cada uno de los frameworks estudiados para analizar las diferencias en la construcción del código. La aplicación será una lista de tareas "To-Do", donde el usuario podrá introducir datos y añadirlos a una lista de elementos. Los datos se almacenarán en el localStorage, lo que permitirá que la lista de tareas se mantenga visible al recargar la página.

### Créditos

* [Demo original](https://github.com/fireship-io/10-javascript-frameworks)

### Video de la demo

[Link del video]()

### Consideraciones tecnicas de la demo

* Git
    * Instalar git
* Misc
    * Instalar Python
    * Instalar [Node.js](https://nodejs.org/en/download/prebuilt-installer)
* React
    * Abrir el terminal
    * Dirigirse a la carpeta del proyecto React (cd s01-Grupo3-MusicFest\Integrantes\Johan Oblitas\Componente Individual\Demos\react-app)
    * Ejecutar el comando 'npm install' para instalar las dependencias del proyecto
    * Ejecutar el comando 'npm start' para inicializar la demo
* Angular
    * Instalar Angular CLI (npm install -g @angular/cli)
    * Dirigirse a la carpeta del proyecto React (cd s01-Grupo3-MusicFest\Integrantes\Johan Oblitas\Componente Individual\Demos\angular-app)
    * Ejecutar el comando 'npm install' para instalar las dependencias del proyecto
    * Ejecutar el comando 'ng serve' para inicializar la demo
* Vue
    * Abrir el terminal
    * Dirigirse a la carpeta del proyecto React (cd s01-Grupo3-MusicFest\Integrantes\Johan Oblitas\Componente Individual\Demos\vue-app)
    * Ejecutar el comando 'npm install' para instalar las dependencias del proyecto
    * Ejecutar el comando 'npm run serve' para inicializar la demo

[Regresar al índice](../../../proyecto.md)