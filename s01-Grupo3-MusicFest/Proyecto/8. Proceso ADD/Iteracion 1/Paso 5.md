# Elementos de arquitecturas y asignacion de responsabilidades

| Código | Decisión de Diseño                                                                                                                                    |
|-----|----|
| DEC-07  | Retirar las fuentes de datos locales dentro de la aplicación. |
| DEC-08  | Instanciar API Gateway dedicado para la comunicación con los microservicios propuestos |

## DC07 - Retirar las fuentes de datos locales dentro de la aplicación

### Estado: Aceptado

### Contexto
El almacenamiento de datos local dentro de la aplicación se había considerado para mejorar el rendimiento y garantizar la disponibilidad de los datos en caso de fallos de red. Sin embargo, la conectividad ha demostrado ser confiable, y el mantenimiento de fuentes de datos locales introduce complejidades adicionales en términos de sincronización y consistencia de datos.

### Decisión
Retiraremos las fuentes de datos locales dentro de la aplicación. En lugar de ello, utilizaremos conexiones directas con bases de datos remotas como PostgreSQL y MongoDB.

### Ventajas y Desventajas

- **Ventajas de la Arquitectura de Microservicios:**
    - **Simplicidad operativa**: Reducimos la complejidad al eliminar la necesidad de sincronizar datos entre local y remoto.
    - **Consistencia**: Garantizamos que los datos sean consistentes al utilizar una única fuente de datos.
    - **Reducción de overhead**: Disminuimos la carga de trabajo en términos de mantenimiento y actualización de fuentes de datos locales.
- **Desventajas de la Arquitectura de Microservicios:**
    - **Dependencia de la conexión de red**: Aumenta la dependencia de la conectividad de red, lo que podría afectar la disponibilidad de los datos en caso de fallos en la red.
    - **Latencia**: Puede incrementar la latencia de las operaciones debido a la necesidad de interactuar con bases de datos remotas.



## DC08 - Estructura lógica del servidor: Arquitectura de Microservicios

### Estado: Aceptado

### Contexto
La arquitectura basada en microservicios requiere una forma efectiva y uniforme de manejar las comunicaciones entre servicios. Un API Gateway puede encapsular la lógica de comunicación, proporcionando una interfaz única para las interacciones con los diferentes microservicios, lo que simplifica la gestión y mejora la seguridad.

### Decisión
Instanciaremos un API Gateway dedicado para la comunicación con los microservicios propuestos utilizando el servicio de AWS. Esto encapsulará la lógica necesaria para interactuar con los servidores de manera uniforme, ocultando los detalles de implementación específicos de cada servidor detrás de una capa de abstracción.

### Ventajas y Desventajas

- **Ventajas de la Arquitectura de Microservicios:**
    - **Abstracción y uniformidad**: Proporciona una capa de abstracción que oculta la complejidad de los microservicios, facilitando el desarrollo y el mantenimiento.
    - **Seguridad mejorada**: Permite implementar políticas de seguridad de manera centralizada, controlando el acceso a los microservicios.
    - **Escalabilidad**: Facilita el escalado de servicios individuales sin afectar a la aplicación global, mejorando la capacidad de respuesta a picos de demanda.
- **Desventajas de la Arquitectura de Microservicios:**
    - **Punto único de fallo**: Introduce un punto único de fallo que, si no se gestiona adecuadamente, podría afectar la disponibilidad de todos los microservicios.
    - **Latencia adicional**: Puede añadir latencia adicional a las solicitudes debido al paso intermedio a través del API Gateway.
    - **Complejidad inicial**: Requiere una configuración y gestión inicial más compleja para establecer el API Gateway y asegurar su correcto funcionamiento.