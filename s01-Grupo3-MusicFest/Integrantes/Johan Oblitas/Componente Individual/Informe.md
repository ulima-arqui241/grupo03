# Comparación de Frameworks Front End

## Concepto

Se busca realizar un análisis comparativo entre los cuatro frameworks de JavaScript populares: React, Svelte, Angular y Vue. Cada uno de estos marcos ofrece características y capacidades únicas para la construcción de aplicaciones web modernas.

### React

React es una popular biblioteca de JavaScript desarrollada por Facebook para construir interfaces de usuario, particularmente aplicaciones de una sola página. React permite a los desarrolladores crear componentes de IU reutilizables que administran su estado. Cuando se construye una aplicación para producción, el código se optimiza y compila, pero aún así depende de la biblioteca React en tiempo de ejecución. React proporciona un conjunto básico de características para crear componentes, renderizarlos en la pantalla y manejar la entrada del usuario. También ofrece varias mejoras adicionales como React Suspense, que optimiza cómo y cuándo se actualiza el DOM.

### Vue

Vue es un framework JavaScript progresivo que es fácil de integrar en proyectos. Proporciona un equilibrio entre el completo conjunto de características de Angular y la simplicidad de React. Vue incluye un conjunto de características de tamaño mediano, como una biblioteca de administración del estado y un enrutador, pero no incluye su propio cliente HTTP o validación de formularios. Cuando se crean para producción, las aplicaciones de Vue se optimizan, pero siguen dependiendo de la biblioteca de Vue en tiempo de ejecución. Vue también admite funciones avanzadas como la creación de paquetes diferentes para diferentes navegadores.

### Angular

Angular es un marco integral desarrollado por Google para la construcción de aplicaciones web dinámicas. Proporciona un conjunto robusto de características listas para usar, incluyendo su propio cliente HTTP, validación de formularios y enrutamiento. Cuando se construye una aplicación Angular para producción, el código se optimiza y compila, pero funciona junto con el marco Angular en tiempo de ejecución. Angular ofrece capacidades avanzadas como la carga diferencial, que crea diferentes paquetes para diferentes navegadores para mejorar el rendimiento.

### Svelte

Svelte es un framework de componentes que se destaca porque es un compilador. A diferencia de los frameworks tradicionales que funcionan en el navegador, Svelte cambia gran parte del trabajo a tiempo de compilación. Cuando se crea una aplicación Svelte para producción, el compilador Svelte procesa todo el proyecto y genera un archivo bundle.js con instrucciones JavaScript optimizadas que se ejecutan en el DOM en tiempo de ejecución. Este enfoque elimina la necesidad de código de marco adicional para ejecutar en tiempo de ejecución, lo que resulta en paquetes más pequeños y rápidos.

## Análisis comparativo

| Framework | Desarrollador | Open-source  | Lanzamiento Inicial  | Repositorio de GitHub                        | Ventajas  | Desventajas  |
|-----------|------------------|-------------|----------------------|----------------------------------------------|-------------------------------------------------------------------------------------------|-------------------------------------------------------|
| **React**  | Facebook         | Sí           | Marzo 2013           | [React GitHub](https://github.com/facebook/react) | - Fácil de aprender y usar<br>- Basado en componentes: código reutilizable<br>- Rápido y eficiente<br>Gran comunidad | - JSX es obligatorio<br>- Poca documentación              |
| **Vue**    | Evan You         | Sí           | Febrero 2014         | [Vue GitHub](https://github.com/vuejs/vue)        | Rápido y eficiente<br>- Basado en componentes: código reutilizable<br>- Fácil de aprender y usar<br>- Buena y intuitiva documentación | - Menos recursos en comparación con React<br>- Excesiva flexibilidad a veces |
| **Angular** | Google           | Sí           | Septiembre 2016      | [Angular GitHub](https://github.com/angular/angular) | - Rápido rendimiento en servidor<br>- Implementación de arquitectura MVC<br>- Basado en componentes: código reutilizable<br>- Buena y intuitiva documentación | - Curva de aprendizaje pronunciada<br>- Angular es muy complejo |
| **Svelte** | Rich Harris      | Sí           | Noviembre 2016       | [Svelte GitHub](https://github.com/sveltejs/svelte) | - Sin DOM virtual<br>- Verdaderamente reactivo<br>- Fácil de aprender y usar<br>- Basado en componentes: código reutilizable | - Comunidad pequeña<br>- Confusión en nombres de variables y sintaxis |

### Características principales

| Característica           | Svelte                                                               | React                                                            | Angular                                                           | Vue                                                              |
|--------------------------|---------------------------------------------------------------------|------------------------------------------------------------------|------------------------------------------------------------------|------------------------------------------------------------------|
| **Tamaño del Bundle**    | Más pequeño, bundles rápidos                                        | Pequeño, bundles rápidos                                         | Tamaño medio, bundles rápidos                                     | Pequeño, bundles rápidos                                         |
| **Características Principales** | Sintaxis principal para mostrar datos y reaccionar a eventos      | Crear componentes, renderizar y reaccionar a la entrada del usuario | Amplias: cliente HTTP, validación, enrutamiento, etc.             | Tamaño medio: gestión de estado, enrutador (sin validación ni cliente HTTP) |
| **Mejoras Adicionales**  | Sin mejoras adicionales                                             | Numerosas mejoras (e.g., React Suspense para optimizar las actualizaciones del DOM) | Numerosas mejoras (e.g., carga diferencial para diferentes navegadores) | Algunas mejoras (e.g., carga diferencial para diferentes navegadores) |

### Rendimiento y optimización

| Criterio                | Svelte                                                               | React                                                            | Angular                                                           | Vue                                                              |
|--------------------------|---------------------------------------------------------------------|------------------------------------------------------------------|------------------------------------------------------------------|------------------------------------------------------------------|
| **Rendimiento en Tiempo de Ejecución** | Alto, debido a la ausencia de código extra del framework en tiempo de ejecución | Alto, con optimizaciones como React Suspense                     | Alto, con carga diferencial y otras optimizaciones               | Alto, con carga diferencial y otras optimizaciones               |
| **Tiempo de Construcción** | Rápido, debido a la compilación en tiempo de construcción           | Rápido, optimizado pero aún requiere la biblioteca React en tiempo de ejecución | Medio, debido al amplio conjunto de características               | Rápido, optimizado pero aún requiere la biblioteca Vue en tiempo de ejecución |
| **Curva de Aprendizaje** | Moderada, requiere entender el enfoque único de Svelte               | Moderada, requiere entender la arquitectura basada en componentes de React | Empinada, debido al extenso conjunto de características           | Moderada, requiere entender la arquitectura basada en componentes de Vue |


## Demo

Aplicación 'To-Do'

### Créditos

* [Demo](https://github.com/fireship-io/10-javascript-frameworks)

### Video de la demo

[Link del video]()

### Consideraciones tecnicas de la demo