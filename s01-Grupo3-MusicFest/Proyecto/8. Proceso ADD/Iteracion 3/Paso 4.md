# Decisiones de diseño

| Código | Decisión de Diseño                       | Fundamentación                                                                                                                                              |
|--------|------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------|
| DEC-13  | Implementación de Caching             | Mejora el rendimiento del sistema y reduce el tiempo de respuesta mediante el almacenamiento en caché de datos frecuentes.      |
| DEC-14  | Optimización de Consultas SQL         | Mejora el rendimiento del sistema optimizando las consultas a la base de datos para reducir el tiempo de ejecución.         |


## DEC-13 - Implementación de Caching

### Estado: Aceptado

### Contexto
Incrementa el rendimiento del sistema y disminuye el tiempo de respuesta mediante el almacenamiento en caché de datos de uso frecuente.

### Decisión
Se implementará caching para mejorar el rendimiento del sistema y reducir el tiempo de respuesta mediante el almacenamiento en caché de datos frecuentes. Esta decisión permite una recuperación más rápida de datos y alivia la carga en las bases de datos.

### Consecuencias: 

- **Positivas:**
    - **Mejora del rendimiento:** Reduce significativamente el tiempo de respuesta al acceder a datos frecuentemente utilizados.
    - **Reducción de la carga en la base de datos:** Almacena en caché datos comunes, lo que disminuye la cantidad de consultas a la base de datos.
- **Negativas:**
    - **Gestión de la coherencia de datos:** Necesita mecanismos para asegurar que los datos en caché estén actualizados.
    - **Consumo adicional de memoria:** Requiere almacenamiento adicional para mantener los datos en caché.

## DEC-14 - Optimización de Consultas SQL

### Estado: Aceptado

### Contexto
Aumenta el rendimiento del sistema optimizando las consultas a la base de datos, reduciendo así el tiempo de ejecución.

### Decisión
Se optimizarán las consultas SQL para mejorar el rendimiento del sistema y reducir el tiempo de ejecución de las consultas a la base de datos. Esta decisión ayuda a acelerar el acceso a los datos y mejora la eficiencia general del sistema.

### Consecuencias: 

- **Positivas:**
    - **Rendimiento mejorado:** Reduce el tiempo de ejecución de las consultas, acelerando el acceso a los datos.
    - **Eficiencia en el uso de recursos:** Optimiza el uso de recursos del sistema al hacer consultas más eficientes.
- **Negativas:**
    - **Complejidad en la optimización:** Requiere un análisis detallado y ajustes precisos para optimizar las consultas de manera efectiva.
    - **Dependencia del diseño de la base de datos:** La optimización de consultas puede estar limitada por la estructura y diseño de la base de datos existente.
