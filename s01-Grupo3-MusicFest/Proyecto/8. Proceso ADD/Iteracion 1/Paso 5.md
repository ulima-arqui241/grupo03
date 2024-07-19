# Elementos de arquitecturas y asignacion de responsabilidades

| Código | Decisión de Diseño          |
|--------|-------------------|
| DEC-06  | Instanciar API Gateway dedicado para la comunicación con los microservicios propuestos |

## DEC-06- Instanciar API Gateway dedicado para la comunicación con los microservicios propuestos

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
