# Elementos de arquitecturas y asignacion de responsabilidades

| Código | Decisión de Diseño          | Fundamentación                                                                                                                             |
|--------|-----------------------------|-------------------------------------------------------------------------------------------------------------------------------------------|
| DEC-06  | Retirar las fuentes de datos locales dentro de la aplicación. | No se considera necesario almacenar datos localmente, dado que la conexión suele ser confiable. Se optará por utilizar conexiones directas con bases de datos PostgreSQL y MongoDB. (CON-04, CON-05). |
| DEC-07  | Instanciar API Gateway dedicado para la comunicación con los microservicios propuestos | Encapsula la lógica necesaria para interactuar con los servidores de manera uniforme, ocultando los detalles de implementación específicos de cada servidor detrás de una capa de abstracción. Ayuda con la consecución de QA-04 y tiene impacto en conseguir UC-11.


## DEC-06 - Retirar las fuentes de datos locales dentro de la aplicación

### Estado: Aceptado

### Contexto
Por considerarse innecesario almacenar datos localmente en la aplicación debido a la confiabilidad de la conexión, se decidió prescindir de las bases de datos locales y adoptar conexiones directas con PostgreSQL y MongoDB.

### Decisión
La decisión de utilizar conexiones directas con bases de datos PostgreSQL y MongoDB, se tomó para simplificar la arquitectura de la aplicación, reducir la complejidad de la sincronización de datos y aprovechar las características avanzadas de las bases de datos mencionadas.

### Consecuencias

- **Positivas:**
    - **Reducción de complejidad:** Eliminar el almacenamiento local simplifica la arquitectura de la aplicación.
    - **Acceso a características avanzadas:** Aprovecha las capacidades avanzadas de PostgreSQL y MongoDB para la gestión de datos.
- **Negativas:**
    - **Dependencia de la conexión:** Requiere una conexión constante y confiable a la base de datos.
    - **Latencia potencial:** Puede introducir latencia en las operaciones de datos debido a la comunicación con la base de datos remota.

## DEC-07- Instanciar API Gateway dedicado para la comunicación con los microservicios propuestos

### Estado: Aceptado

### Contexto
Para optimizar la comunicación con los microservicios propuestos y consolidar la lógica necesaria para interactuar uniformemente con los servidores, se tomó la decisión de implementar un API Gateway dedicado.

### Decisión
Se implementará un API Gateway dedicado para encapsular la lógica necesaria y permitir una interacción uniforme con los servidores, ocultando los detalles específicos de cada servidor detrás de una capa de abstracción. Esta decisión contribuye al cumplimiento del objetivo QA-04 y es crucial para alcanzar el objetivo UC-11.

### Consecuencias

- **Positivas:**
    - **Encapsulación de lógica:** Simplifica la interacción con los microservicios al ocultar los detalles de implementación.
    - **Uniformidad en la comunicación:** Proporciona una capa de abstracción que permite una comunicación uniforme con los microservicios.
- **Negativas:**
    - **Complejidad adicional:** Introduce una capa adicional en la arquitectura que necesita ser gestionada.
    - **Punto único de fallo:** El API Gateway puede convertirse en un punto único de fallo si no se gestiona adecuadamente.
