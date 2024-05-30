[Regresar al Indice](../proyecto.md)

# Escenarios y tácticas

# Requerimientos de Atributos de Calidad

## Rendimiento

| Escenario | Estímulo | Fuente del estímulo | Respuesta | Medida de respuesta | Entorno | Artefacto | Táctica Asociada |
|-----------|----------|---------------------|-----------|----------------------|---------|-----------|------------------|
| E1 | Múltiples usuarios acceden al home page al mismo tiempo | Usuarios que acceden a la página | La página debe cargar rápidamente y mostrar los eventos disponibles | Tiempo promedio de respuesta inicial de la página, no debe exceder 1 segundo y el tiempo de carga final no debe exceder 2 segundos | Momento de alta demanda durante la venta de tickets para eventos populares | Página de compra de tickets | Balanceo de Carga |
| E2 | Múltiples usuarios compran el mismo ticket al mismo tiempo | Usuarios que compran el mismo ticket | El sistema debe trasladar a la persona a una lista de espera | Tiempo promedio de respuesta del sistema, no debe exceder 5 segundos | Momento de alta demanda durante la venta de tickets para eventos populares | Página de compra de tickets | Controlar Frecuencia de Llegada |
| E3 | Solicitud de historial de compras | Usuarios que desean revisar sus compras anteriores | El sistema debe mostrar el historial de compras rápidamente y sin errores | Tiempo promedio de carga del historial de compras, no debe exceder 3 segundos | Usuario accediendo al historial de compras en cualquier momento | Historial de compras | Incrementar Eficiencia en el Uso de Recursos |
| E4 | Búsqueda de eventos por nombre o marca | Usuarios buscando eventos específicos | El sistema debe mostrar los resultados de la búsqueda rápidamente | Tiempo promedio de respuesta de la búsqueda, no debe exceder 2 segundos | Usuario buscando eventos en cualquier momento | Catálogo de eventos | Controlar la Demanda de Recursos |

## Disponibilidad

| Escenario | Estímulo | Fuente del estímulo | Respuesta | Medida de respuesta | Entorno | Artefacto | Táctica Asociada |
|-----------|----------|---------------------|-----------|----------------------|---------|-----------|------------------|
| A1 | Fallo en una instancia del servicio de compra de tickets | Falla del servidor o del contenedor | Otra instancia debe asumir la carga sin interrupciones | Tiempo de inactividad cero, failover automático | Durante la operación normal | Microservicio de Compra de Ticket | Redundancia Activa |
| A2 | Sobre carga de solicitudes en el sistema | Usuarios realizando múltiples compras de tickets simultáneamente | El sistema debe balancear la carga y mantener la disponibilidad | Mantener la disponibilidad del sistema al 99.99% | Momento de alta demanda | Todos los microservicios | Monitorización |
| A3 | Fallo en el sistema de notificaciones | Falla del servidor o del contenedor | Otra instancia debe asumir la carga sin interrupciones | Tiempo de inactividad cero, failover automático | Durante la operación normal | Sistema de Notificaciones | Redundancia Activa |

## Mantenibilidad

| Escenario | Estímulo | Fuente del estímulo | Respuesta | Medida de respuesta | Entorno | Artefacto | Táctica Asociada |
|-----------|----------|---------------------|-----------|----------------------|---------|-----------|------------------|
| M1 | Necesidad de actualizar la lógica de negocio | Cambio en los requisitos de la aplicación | Actualizar los microservicios de forma aislada sin afectar otros servicios | Tiempo promedio para desplegar la actualización, no debe exceder 15 minutos | Durante la ventana de mantenimiento | Todos los microservicios | Modularidad |
| M2 | Necesidad de refactorizar código | Mejora continua del código base | Refactorizar y desplegar sin interrumpir el servicio | Tiempo promedio para realizar la refactorización y despliegue, no debe exceder 30 minutos | Durante la ventana de mantenimiento | Microservicio de Compra de Ticket, Registro de Usuario | Refactoring |

## Interoperabilidad

| Escenario | Estímulo | Fuente del estímulo | Respuesta | Medida de respuesta | Entorno | Artefacto | Táctica Asociada |
|-----------|----------|---------------------|-----------|----------------------|---------|-----------|------------------|
| I1 | Integración con un sistema de pago externo | Solicitud de transacción desde la API de Transacciones | Realizar la transacción de manera segura y eficiente | Tiempo promedio para completar la transacción, no debe exceder 5 segundos | Durante la operación normal | API de Transacciones | API RESTful |
| I2 | Integración con un sistema de notificaciones | Envío de notificaciones por eventos importantes | Enviar notificaciones en tiempo real | Tiempo promedio para enviar una notificación, no debe exceder 2 segundos | Durante la operación normal | Sistema de Notificaciones | Orquestación |

## Seguridad

| Escenario | Estímulo | Fuente del estímulo | Respuesta | Medida de respuesta | Entorno | Artefacto | Táctica Asociada |
|-----------|----------|---------------------|-----------|----------------------|---------|-----------|------------------|
| S1 | Intento de acceso no autorizado | Usuario o sistema desconocido intentando acceder al sistema | Bloquear el intento de acceso y registrar el incidente | Número de intentos de acceso no autorizado detectados y bloqueados | Persistente amenaza de ataques externos | API de Transacciones, Sistema de Autenticación | Autenticación de Actores |
| S2 | Transmisión de datos sensibles | Transferencia de datos de pago o información personal | Encriptar los datos durante la transmisión | Datos encriptados con SSL/TLS, sin datos comprometidos | Durante la operación normal | Aplicación Web UI, API de Transacciones | Encriptación de Datos |
| S3 | Modificación no autorizada de datos | Intento de modificar datos de eventos o usuarios sin permisos | Prevenir la modificación y alertar al administrador | Número de intentos de modificación no autorizados detectados y prevenidos | Persistente amenaza interna o externa | Microservicios de Gestión de Eventos, Registro de Usuario | Autorización de Actores |


## Descripción de Tácticas

**Disponibilidad**
1. Redundancia Activa (Hot Spare):
Implementar servidores adicionales que procesan las mismas entradas en paralelo.
    * Aplicación : Configurar múltiples instancias de cada microservicio (Aplicación Web UI, Sistema de Notificaciones) usando Kubernetes para orquestar y balancear la carga. Esto asegurará que si una instancia falla, otra puede tomar su lugar sin interrumpir el servicio.
2. Monitorización: Implementar herramientas de monitorización para supervisar la salud del sistema.
    * Aplicación: Utilizar el Sistema de Colección de Datos para monitorizar continuamente todos los contenedores y microservicios (React/NodeJS UI, MKS Connector, Sistema de Notificaciones). Configurar alertas para cualquier anomalía detectada en el rendimiento o disponibilidad de los servicios.
3. Balanceo de Carga: Distribuir el tráfico entre múltiples instancias de servicios.
    *  Aplicación: Utilizar el balanceador de carga de Kubernetes para distribuir las solicitudes entrantes entre las instancias de los microservicios, asegurando que ninguna instancia se sobrecargue y que el servicio se mantenga disponible incluso durante picos de demanda.
    
**Mantenibilidad**
1. Modularidad: Dividir el sistema en módulos pequeños y cohesivos.
    * Aplicación: Mantener cada funcionalidad principal (UI Web, MKS Connector, Sistema de Notificaciones, Compra de Ticket) en contenedores independientes gestionados por Kubernetes. Esto permitirá que las actualizaciones y el mantenimiento se puedan realizar de manera aislada sin afectar a todo el sistema.
2. Refactoring: Refactorizar el código para reducir la duplicación y mejorar la organización.
    * Aplicación: Realizar revisiones periódicas y refactorización del código en los microservicios Node.js (Compra de Ticket, Registro y Login de Usuario, Manejo de Eventos) para mantener el código limpio y fácil de mantener.
3. Encapsulamiento:Encapsular funcionalidades dentro de interfaces bien definidas.
Aplicación: Definir APIs claras y bien documentadas para la comunicación entre los microservicios (API de Transacciones). Esto facilitará las modificaciones internas sin afectar a otros componentes del sistema.

**Interoperabilidad** 
1. API RESTful: Diseñar APIs RESTful para la comunicación entre sistemas.
    * Aplicación: Proporcionar APIs RESTful en el MKS Connector y en los microservicios de transacciones para facilitar la integración con otros sistemas externos y servicios de terceros. Esto asegurará una comunicación eficiente y estándar entre los diferentes componentes y servicios externos.
2. Documentación de API: Documentar claramente las APIs para facilitar la integración por parte de terceros.
    * Aplicación: Proveer documentación detallada y ejemplos claros para las APIs utilizadas por el MKS Connector y el Sistema de Notificaciones, facilitando la integración con otros sistemas y servicios externos.
3. Orquestación: Utilizar un motor de orquestación para coordinar las secuencias de invocación de servicios.
    * Aplicación: Implementar un motor de orquestación en Kubernetes para coordinar las interacciones entre la Aplicación Web UI, el MKS Connector, y la API de Transacciones, asegurando que las interacciones entre estos componentes sean gestionadas de manera eficiente.
    
**Rendimiento** 
1. Controlar Frecuencia de Llegada: Reducir la frecuencia de captura de datos para controlar la carga del sistema.
    * Aplicación: Ajustar la frecuencia con la que se actualizan los datos de eventos y tickets en la página web para asegurar que el sistema no se sobrecargue durante picos de tráfico, mejorando así el rendimiento.
2. Limitar la Respuesta de Eventos: Fijar un límite máximo de eventos que pueden ser procesados simultáneamente.
    *  Aplicación: Implementar colas en la API de transacciones y en el microservicio de Compra de Ticket para manejar y priorizar las solicitudes de compra, asegurando que el sistema no se sature durante picos de demanda.
3. Introducir Concurrencia: Atender solicitudes en paralelo utilizando múltiples hilos de ejecución.
    * Aplicación: Utilizar características de concurrencia en Node.js para manejar múltiples solicitudes de compra de tickets en paralelo, mejorando el tiempo de respuesta y la capacidad del sistema para manejar grandes volúmenes de transacciones.
4.  Mantener Réplicas de Computación:  Utilizar múltiples servidores para distribuir la carga.
    * Aplicación : Implementar balanceadores de carga y múltiples instancias de los microservicios gestionados por Kubernetes para distribuir las solicitudes de compra de tickets y notificaciones entre varios servidores, asegurando que el rendimiento del sistema se mantenga óptimo.

**Seguridad** 
1. Autenticación de Actores: Verificar la identidad de los usuarios que acceden al sistema.
    * Aplicación: Implementar mecanismos de autenticación seguros en la Aplicación Web UI y la API de Transacciones, utilizando tokens JWT para asegurar que solo los usuarios autenticados puedan realizar compras y acceder a información sensible.
2.  Autorización de Actores: Asegurar que los usuarios tengan los permisos necesarios para realizar ciertas tareas.
    * Aplicación: Implementar control de acceso basado en roles (RBAC) en la API de Transacciones y en los microservicios de gestión de eventos para asegurar que solo los usuarios con permisos adecuados puedan crear, modificar o eliminar eventos y procesar pagos.
3.  Encriptación de Datos: Proteger los datos transmitidos y almacenados mediante encriptación.
    * Aplicación: Utilizar encriptación SSL/TLS para todas las comunicaciones entre los componentes del sistema (Aplicación Web UI, MKS Connector, API de Transacciones) y encriptar datos sensibles almacenados en MongoDB para proteger contra accesos no autorizados.
4. Detección de Intrusos: Monitorizar el tráfico de red y los patrones de solicitud para detectar actividades maliciosas.
    * Aplicación: Implementar sistemas de detección de intrusos (IDS) para monitorizar y analizar el tráfico hacia la API de Transacciones y el MKS Connector, detectando y mitigando posibles intentos de ataque.
5. Manejo de Excepciones: Implementar un manejo robusto de excepciones para capturar y manejar intentos de ataque.
    * Aplicación : Capturar excepciones relacionadas con intentos de acceso no autorizado y notificar al equipo de seguridad, mientras se toman medidas automáticas para proteger el sistema y mitigar el impacto del ataque.
    