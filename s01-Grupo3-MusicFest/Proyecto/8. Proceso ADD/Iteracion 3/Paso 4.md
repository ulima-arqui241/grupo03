# Decisiones de diseño

| Código | Decisión de Diseño                                      | Fundamentación                                                                                                                              |
|--------|---------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------|
| DEC-13 | Implementación de Caché para Rendimiento con Redis      | Mejorar el rendimiento del sistema y reducir el tiempo de respuesta mediante el almacenamiento en caché de datos frecuentes.                |
| DEC-14 | Implementación de Monitorización y Logging con ELK Stack| Mejorar la observabilidad del sistema y permitir diagnósticos eficientes mediante la centralización de logs y monitorización de rendimiento. |


## DEC-13 - Implementación de Caché para Rendimiento con Redis

### Estado: Aceptado

### Contexto
El sistema necesita mejorar su rendimiento y reducir los tiempos de respuesta debido a la alta demanda de consultas frecuentes y complejas a la base de datos. Sin un mecanismo de caché eficiente, el sistema puede experimentar latencias significativas y sobrecarga del servidor.

### Decisión
Se decidió implementar un sistema de caché utilizando Redis. La alternativa considerada fue Memcached. Redis fue elegido por su soporte para estructuras de datos avanzadas y su capacidad de persistencia de datos.

### Consecuencias

- **Positivas:**
  - Mejora significativa en el rendimiento del sistema al reducir la carga en la base de datos.
  - Reducción de los tiempos de respuesta de las consultas frecuentes.
  - Mayor capacidad para manejar un alto volumen de tráfico sin degradación del rendimiento.

- **Negativas:**
  - Aumento de la complejidad en la arquitectura del sistema al introducir una nueva capa de caché.
  - Necesidad de monitorear y gestionar la coherencia de los datos entre la caché y la base de datos.
  - Potenciales problemas de memoria si no se configura y gestiona correctamente.

## DEC-14 - Implementación de Monitorización y Logging con ELK Stack

### Estado: Aceptado

### Contexto
La plataforma requiere una solución robusta para la monitorización y logging para mejorar la observabilidad y permitir diagnósticos eficientes. Sin una solución centralizada de logs, es difícil rastrear y solucionar problemas en el sistema.

### Decisión
Se decidió implementar una solución de monitorización y logging utilizando ELK Stack (Elasticsearch, Logstash, Kibana). La alternativa considerada fue la combinación de Prometheus y Grafana para la monitorización, complementada con ELK para logging. Finalmente, se optó por ELK Stack debido a su capacidad de gestionar grandes volúmenes de datos y proporcionar mejores visualizaciones .

### Consecuencias

- **Positivas:**
  - Mejora de la observabilidad del sistema mediante la centralización de logs y datos de monitorización.
  - Capacidad para realizar diagnósticos eficientes y rápidos, reduciendo el tiempo de resolución de incidentes.
  - Visualizaciones avanzadas que permiten una mejor comprensión del estado y el rendimiento del sistema.

- **Negativas:**
  - Aumento de la complejidad en la configuración y mantenimiento de la infraestructura de monitorización y logging.
  - Requiere recursos adicionales (almacenamiento y procesamiento) para manejar y analizar grandes volúmenes de datos.