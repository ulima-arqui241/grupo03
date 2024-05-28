[Regresar al Indice](../proyecto.md)

# Tácticas

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
    