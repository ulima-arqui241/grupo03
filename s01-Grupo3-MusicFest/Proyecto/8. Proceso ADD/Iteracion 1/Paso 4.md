# Decisiones de diseño

| Código | Decisión de Diseño |
|----|----|
| DEC-01  | La estructura lógica del cliente utilizará la arquitectura de referencia: Flux  |
| DEC-02  | La estructura lógica del servidor utilizará la arquitectura de referencia: Arquitectura de microservicios |
| DEC-03  | La estructura física de la aplicación utilizará el patrón de despliegue en 3 capas (three tier) |
| DEC-04  | La interfaz de usuario se realizará utilizando la libreria de JavaScript: React |
| DEC-05  | El despliegue de la aplicación utilizará la tecnología de Github Pages |
| DEC-06  | La construcción de la interfaz de usuario se realizará utilizando el framework de frontend React Bootstrap |

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
    - **Verboso**: Requiere más código para implementar las acciones y las tiendas.

## DC02 - Estructura lógica del servidor: Arquitectura de Microservicios

### Estado: Aceptado

### Contexto
La aplicación web necesita una arquitectura del servidor que sea altamente escalable, robusta y capaz de soportar un despliegue continuo y autónomo de sus diferentes componentes. Solo se consideró arquitectura de microservicios.

### Decisión
Se implementará la arquitectura de microservicios debido a que permite escalar y desplegar servicios de manera independiente, facilitando la entrega continua de funcionalidades. Esta elección mejora la flexibilidad y el mantenimiento de la aplicación, permitiendo adaptarnos mejor a las demandas cambiantes del mercado y optimizando recursos de manera más eficiente comparado con una arquitectura monolítica.

### Consecuencias

- **Positivas:**
    - Escalabilidad independiente: Cada servicio puede escalarse de manera autónoma según la demanda.
    - Despliegue continuo: Facilita la entrega continua de nuevas funcionalidades sin afectar a toda la aplicación.
- **Negativas:**
    - Desafíos operativos: Requiere una coordinación continua entre equipos y una gestión compleja de múltiples servicios.
    - Consistencia y costo inicial de infraestructura: El manejo de la consistencia de datos entre servicios y la configuración de la infraestructura adecuada requieren atención adicional.

## DC03 - Estructura física de la aplicación: Patrón de despliegue en 3 capas (three-tier)

### Estado: Aceptado

### Contexto
La aplicación web necesita una estructura física que permita una separación clara de las responsabilidades y mejore la seguridad, la escalabilidad y el mantenimiento. En base a este contexto, se decidió implementar un patrón de despliegue en 3 capas (three-tier). No se consideraron otras opciones.

### Decisión
Se implementará el patrón de despliegue en 3 capas debido a su capacidad para separar claramente la presentación, la lógica de negocio y la capa de datos. Esta elección mejora la seguridad al aislar cada capa, facilita el mantenimiento y la escalabilidad de la aplicación, y optimiza el rendimiento al permitir una gestión más eficiente de los recursos.

### Consecuencias

- **Positivas:**
    - Separación de responsabilidades: Mejora la organización del código y facilita el mantenimiento.
    - Seguridad y escalabilidad: Cada capa puede ser escalada y asegurada de manera independiente, optimizando recursos y protegiendo los datos sensibles.
- **Negativas:**
    - Complejidad en la configuración inicial: Requiere una planificación y configuración más detallada al inicio.
    - Latencia potencial: La comunicación entre capas puede introducir latencia si no se optimiza adecuadamente.

## DC04 - Construir interfaz de usuario usando React.js

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

## DC05 - Desplegar aplicación utilizando Github Pages

### Estado: Aceptado

### Contexto
La aplicación web necesita una plataforma de despliegue que sea sencilla, eficiente y compatible con repositorios de código fuente para facilitar la integración y el despliegue continuo. En base a este contexto, se consideraron las siguientes opciones:
- **AWS S3:** Servicio de almacenamiento de Amazon que permite alojar y servir sitios web estáticos.
- **Github Pages:** Servicio de GitHub que permite alojar sitios web directamente desde un repositorio de GitHub.

### Decisión
Se decidió por Github Pages debido a su integración directa con los repositorios de GitHub, lo que facilita el proceso de despliegue continuo y la administración de versiones del sitio web. Además, Github Pages ofrece una configuración sencilla y gratuita para alojar sitios web estáticos, lo cual es ideal para nuestro proyecto.

### Consecuencias

- **Positivas:**
    - Integración con GitHub: Despliegue continuo y fácil administración de versiones directamente desde el repositorio.
    - Gratuito: No tiene costo adicional y es ideal para proyectos de tamaño pequeño a mediano.
- **Negativas:**
    - Limitaciones en características: No es adecuado para aplicaciones dinámicas o con backend complejo.
    - Almacenamiento limitado: No es ideal para proyectos que requieren grandes volúmenes de almacenamiento.

## DC06 - Usar React Bootstrap como framework de estilos CSS

### Estado: Aceptado

### Contexto
La aplicación web necesita un framework de estilos que sea compatible con React y permita un desarrollo rápido y estilizado de la interfaz de usuario. En base a este contexto, se consideraron las siguientes opciones:
- **React Bootstrap:** Una implementación de Bootstrap para React, que proporciona componentes estilizados y responsivos utilizando Bootstrap.
- **Material UI:** Una biblioteca de componentes React que implementa el diseño de Material Design de Google, proporcionando un aspecto moderno y coherente.

### Decisión
Se decidió por React Bootstrap debido a su familiaridad, amplia adopción y la facilidad de integración con proyectos React existentes. React Bootstrap proporciona componentes pre-estilizados que permiten un desarrollo rápido y consistente con los principios de diseño responsivo.

### Consecuencias

- **Positivas:**
    - Familiaridad y popularidad: Bootstrap es ampliamente conocido y utilizado, lo que facilita encontrar recursos y soporte.
    - Componentes responsivos: Facilita el desarrollo de interfaces que se adaptan a diferentes tamaños de pantalla.
- **Negativas:**
    - Estilo clásico: Puede parecer menos moderno comparado con otras librerías de estilo más actuales.
    - Dependencia de Bootstrap: Aunque está integrado con React, sigue dependiendo de Bootstrap, lo cual puede limitar la personalización.