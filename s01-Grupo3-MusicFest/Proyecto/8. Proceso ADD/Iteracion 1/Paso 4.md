# Decisiones de diseño

| Código | Decisión de Diseño |
|----|----|
| DEC-01  | La estructura lógica del cliente utilizará la arquitectura de referencia: Flux  |
| DEC-02  | La estructura lógica del servidor utilizará la arquitectura de referencia: Arquitectura de microservicios |
| DEC-03  | La estructura de la aplicación se realizará utilizando la libreria de JavaScript: React |
| DEC-04  | El despliegue de la aplicación utilizará la tecnología de Github Pages |
| DEC-05  | La construcción de la interfaz de usuario se realizará utilizando el framework de frontend React Bootstrap |

## DC01 - Estructura lógica del cliente: Arquitectura de Flux

### Estado: Aceptado

### Contexto
La aplicación web necesita una arquitectura escalable, robusta y capaz de soportar un despliegue continuo en entornos de alto tráfico de usuarios concurrentes. Basándonos en este contexto, consideramos las siguientes opciones:

- **MVC:** Un diseño donde la aplicación está dividida en tres componentes principales: el Modelo (datos), la Vista (interfaz de usuario) y el Controlador (lógica de negocio). Estos componentes trabajan juntos pero están separados.
- **Flux:** Una arquitectura diseñada por Facebook para aplicaciones de React. Consiste en un flujo de datos unidireccional que simplifica la gestión del estado, con componentes bien definidos como acciones, despachadores, tiendas y vistas.

### Decisión
Se decidió por la arquitectura de Flux debido a su capacidad para escalar y desplegar servicios de manera independiente y por su enfoque estructurado y predecible para la gestión del estado, particularmente para aplicaciones React. Esta elección mejora la flexibilidad y el mantenimiento de la aplicación, permitiendo adaptarnos mejor a las demandas cambiantes del mercado y optimizando los recursos de manera más eficiente comparado con una arquitectura monolítica.

### Consecuencias

- **Positivas:**
    - **Flujo de datos unidireccional**: Facilita el seguimiento y la gestión del estado.
    - **Integración con React**: Diseñado para funcionar perfectamente con React.
- **Negativas:**
    - **Curva de aprendizaje**: Puede ser difícil de entender al principio.
    - **Verboso**: Requiere más código para implementar las acciones.

## DC02 - Estructura lógica del servidor: Arquitectura de Microservicios

### Estado: Aceptado

### Contexto
La aplicación web necesita una arquitectura del servidor que sea altamente escalable, robusta y capaz de soportar un despliegue continuo y autónomo de sus diferentes componentes. Solo se consideró arquitectura de microservicios. En base a este contexto, se contemplan las siguientes opciones:
- **Monolítica**: Implica un diseño y desarrollo centrados en una única entidad donde una aplicación está integrada por un bloque coherente de código.
- **Microservicios**: Implica un estilo arquitectónico donde una aplicación se descompone en múltiples servicios que pueden ser desarrollados y desplegados de manera autónoma, lo cual facilita la implementación y escalado individual de cada servicio.

### Decisión
Se implementará la arquitectura de microservicios debido a que permite escalar y desplegar servicios de manera independiente, facilitando la entrega continua de funcionalidades. Esta elección mejora la flexibilidad y el mantenimiento de la aplicación, permitiendo adaptarnos mejor a las demandas cambiantes del mercado y optimizando recursos de manera más eficiente comparado con una arquitectura monolítica.

### Consecuencias

- **Positivas:**
    - **Escalabilidad independiente**: Cada servicio puede escalarse de manera autónoma según la demanda.
    - **Despliegue continuo**: Facilita la entrega continua de nuevas funcionalidades sin afectar a toda la aplicación.
- **Negativas:**
    - **Desafíos operativos**: Requiere una coordinación continua entre equipos y una gestión compleja de múltiples servicios.
    - **Consistencia y costo inicial de infraestructura**: El manejo de la consistencia de datos entre servicios y la configuración de la infraestructura adecuada requieren atención adicional.

## DC03 - Construir el frontend utilizando la libreria de JavaScript: React

### Estado: Aceptado

### Contexto
La aplicación web necesita una interfaz de usuario moderna, dinámica y altamente interactiva. En base a este contexto, se consideraron las siguientes opciones para construir la interfaz de usuario:
- **React:** Una biblioteca de JavaScript enfocada en la construcción de interfaces de usuario a través de componentes reutilizables.
- **Angular:** Un framework de JavaScript que proporciona una solución completa para el desarrollo de aplicaciones de una sola página.
- **Vue:** Un framework de JavaScript progresivo conocido por su simplicidad y facilidad de integración con otros proyectos.

### Decisión
Se decidió por React debido a su flexibilidad, rendimiento y la gran comunidad de desarrolladores que lo respalda. React permite crear interfaces de usuario de manera eficiente utilizando componentes reutilizables y un enfoque basado en el estado de la aplicación.

### Consecuencias

- **Positivas:**
    - Componentización: Facilita la reutilización y el mantenimiento del código.
    - Rendimiento: El uso del Virtual DOM mejora la velocidad de actualización y renderizado.
- **Negativas:**
    - Curva de aprendizaje: Requiere tiempo para dominar conceptos como JSX y el ciclo de vida de los componentes.
    - Ecosistema fragmentado: Depende de otras bibliotecas para funcionalidades completas, lo que puede complicar la integración.

## DC04 - Desplegar aplicación utilizando Github Pages

### Estado: Aceptado

### Contexto
La aplicación web necesita una plataforma de despliegue que sea sencilla, eficiente y compatible con repositorios de código fuente para facilitar la integración y el despliegue continuo. En base a este contexto, se consideraron las siguientes opciones:
- **AWS S3:** Servicio de almacenamiento de Amazon que permite alojar y servir sitios web estáticos.
- **Github Pages:** Servicio de GitHub que permite alojar sitios web directamente desde un repositorio de GitHub.

### Decisión
Se decidió por Github Pages debido a su integración directa con los repositorios de GitHub, lo que facilita el proceso de despliegue continuo y la administración de versiones del sitio web. Además, Github Pages ofrece una configuración sencilla y gratuita para alojar sitios web estáticos, lo cual es ideal para nuestro proyecto.

### Consecuencias

- **Positivas:**
    - **Integración con GitHub**: Despliegue continuo y fácil administración de versiones directamente desde el repositorio.
    - **Gratuito**: No tiene costo adicional y es ideal para proyectos de tamaño pequeño a mediano.
- **Negativas:**
    - **Limitaciones** en características: No es adecuado para aplicaciones dinámicas o con backend complejo.
    - **Almacenamiento** limitado: No es ideal para proyectos que requieren grandes volúmenes de almacenamiento.

## DC05 - Usar React Bootstrap como framework de frontend

### Estado: Aceptado

### Contexto
La aplicación web necesita un framework de estilos que sea compatible con React y permita un desarrollo rápido y estilizado de la interfaz de usuario. Es crucial encontrar una solución que no solo garantice la estética visual, sino que también optimice el rendimiento general de la aplicación, asegurando tiempos de carga reducidos. En base a este contexto, se consideraron las siguientes opciones:
- **React Bootstrap:** Una implementación de Bootstrap para React, que proporciona componentes estilizados y responsivos utilizando Bootstrap.
- **Material UI:** Una biblioteca de componentes React que implementa el diseño de Material Design de Google, proporcionando un aspecto moderno y coherente.

### Decisión
Se decidió implementar **React Bootstrap** como framework de frontend para nuestra aplicación. Además de su familiaridad y la facilidad de integración con proyectos React existentes, Boostrap ofrece una variedad de componentes y estilos predefinidos que simplifican la creación de sitios web visualmente atractivos. Además, está diseñado para ser rápido y eficiente, con una base de código optimizada que ayuda a reducir la cantidad de datos transferidos, lo que se traduce en tiempos de carga más rápidos. Por otro lado, Material UI ofrece un diseño visualmente atractivo inspirado en Material Design (Google). No obstante, requiere dependencias adicionales de JavaScript en comparación con Bootstrap. Estas dependencias pueden impactar en el rendimiento general de la aplicación web, ya que los scripts adicionales necesarios pueden aumentar el tiempo de carga de la página, especialmente cuando hay muchos componentes o interacciones complejas involucradas.

### Consecuencias

- **Positivas:**
    - **Familiaridad y popularidad**: Bootstrap es ampliamente conocido y utilizado, lo que facilita encontrar recursos y soporte.
    - **Rendimiento**: Ofrece un marco ligero con optimización de rendimiento y tiempos de carga rápidos.
    - **Componentes responsivos**: Facilita el desarrollo de interfaces que se adaptan a diferentes tamaños de pantalla.
    - **Soporte y documentación**: Amplio soporte comunitario y documentación extensa para facilitar el aprendizaje rápido y el uso de componentes pre-diseñados.
    - Rendimiento
- **Negativas:**
    - **Estilo clásico**: Puede parecer menos moderno comparado con otras librerías de estilo más actuales.
    - **Personalización y aprendizaje**: Puede requerir personalización para necesidades específicas y una curva de aprendizaje inicial considerable.
    - **Dependencia de Bootstrap**: Aunque está integrado con React, sigue dependiendo de Bootstrap, lo cual puede limitar la personalización.

### Fuente
https://www.material-tailwind.com/blog/bootstrap-vs-material-ui