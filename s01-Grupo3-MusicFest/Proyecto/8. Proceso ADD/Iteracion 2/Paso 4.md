# Decisiones de diseño

| Código | Decisión de Diseño                       | Fundamentación                                                                                                                                              |
|--------|------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------|
| DEC-09  | Uso de una Base de Datos Relacional (SQL)            | Permite manejar transacciones y relaciones complejas, asegurando la integridad de los datos y optimizando la gestión de pedidos y el historial de compras (CRN-03, CRN-05).                                                 |
| DEC-10  | Uso de una Base de Datos No Relacional (SQL)            | Permite registrar y proveer un registro de las notificaciones de los distintos servicios con formatos no estructurados (CRN-03, CRN-05).                                                 |


1. Crear un modelo de datos para la aplicación (Aplicar esquema híbrido)
2. Identificar objetos de dominio que se relacionan con los casos de uso.
3. Descomponer objetos de dominio en componentes generales y especializados.

## DEC-09 - Uso de una Base de Datos Relacional con propiedades ACID (SQL)

### Estado: Aceptado

### Contexto
Par la gestión de transacciones y relaciones complejas, asegurando la integridad de los datos y optimizando la administración de pedidos y el historial de compras. 

### Decisión
Se utilizará una base de datos relacional con propiedades ACID para asegurar la integridad de los datos y manejar transacciones y relaciones complejas. Esta decisión optimiza la gestión de pedidos y el historial de compras, proporcionando una estructura confiable para los datos transaccionales.

### Consecuencias 

- **Positivas:**
    - **Integridad de los datos:** Asegura la consistencia y precisión de los datos.
    - **Manejo de transacciones:** Facilita la gestión de operaciones complejas con múltiples pasos.
- **Negativas:**
    - **Escalabilidad limitada:** Puede tener dificultades para escalar horizontalmente con grandes volúmenes de datos.
    - **Rigidez en el esquema:** Requiere una estructura de datos bien definida y puede ser menos flexible para cambios dinámicos.

## DEC-10 - Uso de una Base de Datos No Relacional (NoSQL)

### Estado: Aceptado

### Contexto
Permite registrar y proporcionar un historial de las notificaciones de los diferentes servicios en formatos no estructurados. 

### Decisión
Se utilizará una base de datos NoSQL para registrar y gestionar las notificaciones de los distintos servicios. Esta decisión permite manejar formatos de datos no estructurados y proporciona flexibilidad para adaptarse a diferentes tipos de información.

### Consecuencias

- **Positivas:**
    - **Flexibilidad en el esquema:** Puede manejar datos no estructurados y semiestructurados con facilidad.
    - **Escalabilidad horizontal:** Se adapta bien al crecimiento de datos, permitiendo escalar horizontalmente.
- **Negativas:**
    - **Consistencia eventual:** Puede no garantizar la consistencia inmediata de los datos en todas las réplicas.
    - **Compatibilidad limitada con transacciones:** No todas las bases de datos NoSQL soportan transacciones ACID complejas.





