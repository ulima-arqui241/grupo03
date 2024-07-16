# Decisiones de diseño

| Código | Decisión de Diseño                       | Fundamentación                                                                                                                                              |
|--------|------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------|
| DEC-07  | Uso de una Base de Datos Relacional (SQL)            | Permite manejar transacciones y relaciones complejas, asegurando la integridad de los datos y optimizando la gestión de pedidos y el historial de compras (CRN-03, CRN-05).                                                 |
| DEC-08  | Uso de una Base de Datos No Relacional (SQL)            | Permite registrar y proveer un registro de las notificaciones de los distintos servicios con formatos no estructurados (CRN-03, CRN-05).                                                 |


1. Crear un modelo de datos para la aplicación (Aplicar esquema híbrido)
2. Identificar objetos de dominio que se relacionan con los casos de uso.
3. Descomponer objetos de dominio en componentes generales y especializados.