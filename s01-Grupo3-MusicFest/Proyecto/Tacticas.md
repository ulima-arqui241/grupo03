[Regresar al Indice](../proyecto.md)

# Tácticas

**Disponibilidad**
1. Redundancia Activa (Hot Spare):
Implementar servidores adicionales que procesan las mismas entradas en paralelo.
    1. Aplicación : Configurar múltiples instancias de cada microservicio (Aplicación Web UI, Sistema de Notificaciones) usando Kubernetes para orquestar y balancear la carga. Esto asegurará que si una instancia falla, otra puede tomar su lugar sin interrumpir el servicio.
2. Monitorización: Implementar herramientas de monitorización para supervisar la salud del sistema.
    1. Aplicación: Utilizar el Sistema de Colección de Datos para monitorizar continuamente todos los contenedores y microservicios (React/NodeJS UI, MKS Connector, Sistema de Notificaciones). Configurar alertas para cualquier anomalía detectada en el rendimiento o disponibilidad de los servicios.
3. Balanceo de Carga: Distribuir el tráfico entre múltiples instancias de servicios.
    1. Aplicación: Utilizar el balanceador de carga de Kubernetes para distribuir las solicitudes entrantes entre las instancias de los microservicios, asegurando que ninguna instancia se sobrecargue y que el servicio se mantenga disponible incluso durante picos de demanda.
    **Mantenibilidad**
1. Modularidad: Dividir el sistema en módulos pequeños y cohesivos.
    1. Aplicación: Mantener cada funcionalidad principal (UI Web, MKS Connector, Sistema de Notificaciones, Compra de Ticket) en contenedores independientes gestionados por Kubernetes. Esto permitirá que las actualizaciones y el mantenimiento se puedan realizar de manera aislada sin afectar a todo el sistema.
2. Refactoring: Refactorizar el código para reducir la duplicación y mejorar la organización.
    1. Aplicación: Realizar revisiones periódicas y refactorización del código en los microservicios Node.js (Compra de Ticket, Registro y Login de Usuario, Manejo de Eventos) para mantener el código limpio y fácil de mantener.
3. Encapsulamiento:Encapsular funcionalidades dentro de interfaces bien definidas.
Aplicación: Definir APIs claras y bien documentadas para la comunicación entre los microservicios (API de Transacciones). Esto facilitará las modificaciones internas sin afectar a otros componentes del sistema.
 **Interoperabilidad** 
1. API RESTful: Diseñar APIs RESTful para la comunicación entre sistemas.
    1. Aplicación: Proporcionar APIs RESTful en el MKS Connector y en los microservicios de transacciones para facilitar la integración con otros sistemas externos y servicios de terceros. Esto asegurará una comunicación eficiente y estándar entre los diferentes componentes y servicios externos.
2. Documentación de API: Documentar claramente las APIs para facilitar la integración por parte de terceros.
    1. Aplicación: Proveer documentación detallada y ejemplos claros para las APIs utilizadas por el MKS Connector y el Sistema de Notificaciones, facilitando la integración con otros sistemas y servicios externos.
3. Orquestación: Utilizar un motor de orquestación para coordinar las secuencias de invocación de servicios.
    1. Aplicación: Implementar un motor de orquestación en Kubernetes para coordinar las interacciones entre la Aplicación Web UI, el MKS Connector, y la API de Transacciones, asegurando que las interacciones entre estos componentes sean gestionadas de manera eficiente.
    