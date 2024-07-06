# Implementación del Patrón Publisher/Subscriber con Redis

## ¿Qué es el Patrón Publisher/Subscriber?

El patrón Publisher/Subscriber es un método de comunicación entre componentes de un sistema. En este patrón, los publicadores envían mensajes a un canal, y los suscriptores que están interesados en ese canal reciben los mensajes. Esto permite que los emisores y receptores de mensajes estén desacoplados, facilitando la escalabilidad y el mantenimiento del sistema.

## Beneficios del Patrón Publisher/Subscriber

- **Escalabilidad**: Permite que múltiples servicios de notificación y otros procesos escuchen en el mismo canal de eventos, asegurando que todas las acciones relevantes se ejecuten sin sobrecargar el sistema.
- **Desacoplamiento**: Los módulos de notificación y otros procesos pueden desarrollarse y mantenerse independientemente del módulo de compra de tickets, facilitando las actualizaciones y el mantenimiento.
- **Flexibilidad**: Podemos añadir diferentes tipos de notificaciones (correo electrónico, SMS) y otros procesos automatizados sin modificar el sistema de compra de tickets.
- **Real-time**: Permite notificaciones y procesos en tiempo real, manteniendo a los usuarios informados y ejecutando acciones necesarias inmediatamente sobre la confirmación de sus compras y cualquier cambio en los eventos.

## Demo
### ¿Qué es Redis?
Redis (Remote Dictionary Server) es una base de datos en memoria de código abierto, que se utiliza principalmente como una base de datos clave-valor. Redis es especialmente útil para implementar el patrón Publisher/Subscriber. En este patrón, Redis actúa como un intermediario donde los publicadores envían mensajes a un canal, y los suscriptores interesados en ese canal reciben esos mensajes. Esto es ideal para:

### publisher.py
Este script simula la compra de un ticket y publica una notificación en un canal de Redis.
### subscriber.py
Este script se suscribe al canal de Redis y recibe las notificaciones cuando se publica una nueva compra de ticket.

### Cómo Ejecutar
1. Asegurarse de que Redis esté en ejecución.
2. En una terminal, ejecuta el suscriptor:
   python subscriber.py
3. En otra terminal, ejecuta el publicador para simular una compra de ticket:
    python publisher.py
4. Cada vez que se ejecute publisher.py, se debe ver la notificación correspondiente en la terminal donde está ejecutándose subscriber.py.

### Video: 
https://drive.google.com/file/d/14xmPQk4J0mSXVTilklYhTmabFv-Smwxl/view?usp=sharing
### Código:
https://github.com/lucianavmont/Cloud

## Referencias
1. Redis Official Documentation (https://redis.io/documentation)
