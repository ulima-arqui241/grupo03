[Regresar al Indice](../proyecto.md)

# Requerimientos

## Modulo 1: Compra de Tickets

### Requerimientos funcionales

1. Catalogo de eventos:
    * La pagina debe de mostrar los eventos disponibles con el nombre del evento, marca del evento, fecha limite de compra y numero de asientos disponibles
    * Esta lista debe cargar rapidamente y mostrar los eventos disponibles
    * El orden de los eventos debe de ser por defecto por fecha limite de compra y debe de poder ser ordenado por el numero de asientos disponibles y por nombre del evento
    * Se puede realizar una busqueda por nombre de evento o marca de evento
2. Compra de tickets:
    * El usuario debe de poder seleccionar un evento y la cantidad de tickets que desea comprar
    * El usuario debe de poder ver el precio total de la compra
    * En caso de que multiples usuarios quieran comprar el mismo ticket, el sistema debe de trasladar a la persona a una lista de espera
    * El usuario debe de poder ingresar su informacion de contacto y de pago al final de la espera
    * El usuario debe de poder ver un resumen de la compra antes de confirmar la compra
    * El usuario debe de poder poner la compra en una canasta y seguir comprando
3. Confirmacion de compra:
    * El usuario debe de recibir un correo electronico con la confirmacion de la compra
    * El usuario debe de recibir un correo electronico con el ticket de compra
4. Cancelacion de compra:
    * El usuario debe de poder cancelar la compra antes de la fecha limite de compra
    * El usuario debe de recibir un correo electronico con la confirmacion de la cancelacion de la compra
5. Historial de compras:
    * El usuario debe de poder ver las compras realizadas en la pagina
    * El usuario debe de poder ver los tickets de compra
    * El usuario debe de poder ver el estado de la compra
    * El usuario debe de poder ver la fecha de compra
    * El usuario debe de poder ver la fecha limite de compra
    * El usuario debe de poder cancelar la compra si esta dentro de la fecha limite de compra
6. Lista de espera:
    * El usuario debe de poder ver la lista de espera de un evento
    * El usuario debe de poder ver su posicion en la lista de espera
    * El usuario debe de poder ver el tiempo estimado de espera
    * El usuario debe de poder cancelar la espera antes de que se le asigne un ticket

### Requerimientos de atributo de calidad

#### Rendimiento

| Escenario | Estímulo | Fuente del estímulo | Respuesta | Medida de respuesta | Entorno | Artefacto | 
| ------------- |:-------------:|:-------------:|:-------------:|:-------------:|:-------------:|:-------------:|
| E1 | Multiples usuarios acceden al home page al mismo tiempo | Usuarios que acceden a la pagina | La pagina debe de cargar rapidamente y mostrar los eventos disponibles | Tiempo promedio de respuesta inicial de la pagina, no debe de exceder el segundo y el tiempo de carga final, no debe de exceder los 2 segundos | Momento de alta demanda durante la venta de tickets para eventos populares | Pagina de compra de tickets |
| E2 | Multiples usuarios compran el mismo ticket al mismo tiempo | Usuarios que compran el mismo ticket | El sistema debe de trasladar a la persona a una lista de espera | Tiempo promedio de respuesta del sistema, no debe de exceder los 5 segundos | Momento de alta demanda durante la venta de tickets para eventos populares | Pagina de compra de tickets |
| E3 | Solicitud de historial de compras | Usuarios que desean revisar sus compras anteriores | El sistema debe mostrar el historial de compras rápidamente y sin errores | Tiempo promedio de carga del historial de compras, no debe exceder los 3 segundos | Usuario accediendo al historial de compras en cualquier momento | Historial de compras |

## Modulo 2: Panel de Managers

### Requerimientos funcionales

1. Registro de Clientes:
    * El sistema debe permitir a los managers registrarse como clientes.
    * Debe recopilar la información necesaria del manager, incluyendo nombre, dirección de correo electrónico, y detalles de contacto.
    * Se deben validar las credenciales del manager durante el proceso de registro.
2.	Creación de Eventos:
    * Los managers deben poder crear eventos para vender tickets.
    * Se debe permitir la inclusión de detalles del evento, como nombre, fecha, hora, lugar y descripción.
    * Los managers deben poder especificar la magnitud de evento (Pequeño ~ Masivo).
3.	Gestión de Eventos:
    * Los managers deben tener acceso para editar y eliminar eventos creados por ellos.
    * Deben poder modificar los detalles del evento, incluyendo la fecha, hora, lugar y descripción.
4.	Tarifas de Alojamiento:
    * Para eventos medianos, el sistema debe calcular automáticamente el monto fijo a pagar por el cliente para alojar la venta de tickets en la aplicación.
    * Debe haber un mecanismo para aplicar y cobrar estas tarifas de alojamiento.
5.	Configuración de Precios:
    * Los managers deben poder modificar el precio de los tickets para sus eventos.
    * Se debe aplicar automáticamente una comisión del 3% al precio de los tickets, que se destinará a la plataforma.
6.	Gestión de Ventas:
    * Los managers deben tener acceso a un panel de control donde puedan ver las ventas de tickets para sus eventos.
    * Deben poder ver detalles de las ventas, incluyendo el número de tickets vendidos y el monto total recaudado.
7.	Notificaciones:
    * El sistema debe enviar notificaciones a los managers sobre las ventas de tickets y cualquier otra información relevante sobre sus eventos.

### Requerimientos de atributo de calidad

#### Modificabilidad

| Escenario | Estímulo | Fuente del estímulo | Respuesta | Medida de respuesta | Entorno | Artefacto | 
| ------------- |:-------------:|:-------------:|:-------------:|:-------------:|:-------------:|:-------------:|
| E.1. Cambio de estructura de precio de los tickets | Solicitud de cambio en la estructura de precios de los tickets por parte de los managers. | Managers autenticados que desean actualizar los precios de los tickets de un evento. | El sistema debe permitir cambios en la estructura de precios de manera oportuna y precisa. | Tiempo promedio para implementar cambios en los precios de los tickets, no debe exceder los 15 segundos. | Necesidad de adaptación rápida a cambios en las estrategias de precios del cliente o demandas del mercado. | Panel de Managers |
| E.2. Actualización de detalles del evento | Solicitud de modificación de detalles del evento como fecha, hora, lugar o descripción. | Managers autenticados que desean actualizar la información de sus eventos. | El sistema debe permitir la actualización de los detalles del evento de manera rápida y segura. | Tiempo promedio para actualizar los detalles del evento, no debe exceder los 10 segundos. | Cambios en las circunstancias del evento o la necesidad de corregir errores de información. | Gestión de Eventos |
| E.3. Implementación de nuevas reglas de negocio | Solicitud de incorporación de nuevas reglas de negocio como descuentos especiales o promociones temporales. | Administradores del sistema o directores comerciales. | El sistema debe permitir la incorporación de nuevas reglas de negocio sin afectar la funcionalidad existente. | Tiempo promedio para implementar nuevas reglas de negocio, no debe exceder los 30 segundos. | Adaptación a nuevas estrategias de marketing o cambios en la normativa comercial. | Configuración de Precios |

## Modulo 3: Notificaciones

### Requerimientos funcionales

1. Notificaciones de Compra:
    * El sistema debe enviar notificaciones a los usuarios sobre la confirmación de la compra de tickets.
    * Debe incluir detalles de la compra, como el evento, la cantidad de tickets, el precio total y la fecha del evento.
    * Los usuarios deben poder recibir notificaciones por correo electrónico y/o mensajes de texto.
    * El usuario debe de ser notificado por correo en caso de que se le asigne un ticket
    * El usuario debe de ser notificado por correo en caso de que el evento se cancele
    * El usuario debe de ser notificado por correo en caso de que el evento se posponga
    * El usuario debe de ser notificado por correo en caso de que el evento se cambie de lugar
    * El usuario debe de ser notificado por correo en caso de que los tickets se agoten
    * El usuario debe de ser notificado por correo para confirmar la compra
    * El usuario debe de ser notificado por correo para confirmar la cancelacion de la compra

### Requerimientos de atributo de calidad

#### Confiabilidad

| Escenario | Estímulo | Fuente del estímulo | Respuesta | Medida de respuesta | Entorno | Artefacto | 
| ------------- |:-------------:|:-------------:|:-------------:|:-------------:|:-------------:|:-------------:|
| E.1 | Fallo en el envío de notificaciones de compra | Error del sistema o fallo en la conectividad del servidor de correo | El sistema debe detectar y reintentar el envío de notificaciones de compra | Porcentaje de notificaciones reintentadas con éxito, debe ser superior al 99% | Momento de alta demanda o fallo eventual del sistema de notificaciones | Sistema de notificaciones de compra |
| E.2 | Notificaciones de eventos pospuestos o cancelados | Cambio en el estado del evento, como posposición o cancelación | El sistema debe enviar notificaciones a todos los usuarios afectados sin duplicación ni omisiones | Porcentaje de usuarios notificados correctamente, debe ser superior al 99% | Cambios de último minuto en el estado del evento | Sistema de notificaciones de eventos |
| E.3 | Sobrecarga del sistema durante eventos masivos | Alta concurrencia de usuarios comprando tickets y recibiendo notificaciones simultáneamente | El sistema debe mantener la tasa de entrega de notificaciones sin fallos | Tasa de entrega de notificaciones durante picos de demanda, debe mantenerse al 95% o superior | Momento de venta de tickets para eventos muy populares | Sistema de notificaciones de compra |

## Restricciones

1. Frontend:
    * Restricción: Utilización de React como framework de frontend.
    * Justificación: Preferencia de la organización para el desarrollo de interfaces de usuario.
2. Backend:
    * Restricción: Utilización de ExpressJS como framework de backend.
    * Justificación: Preferencia técnica para el desarrollo del backend de la aplicación.
3. Motor de Base de Datos:
    * Restricción: Utilización de PostgreSQL como motor de base de datos.
    * Justificación: Decisión previa de la organización para el almacenamiento de datos en la aplicación.