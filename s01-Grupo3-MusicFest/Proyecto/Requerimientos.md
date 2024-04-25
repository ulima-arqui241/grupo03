Volver a [Proyecto](\..\proyecto.md)
# Requerimientos funcionales 

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


### Requerimientos de atributos de calidad

#### Rendimiento

| Escenario | Estímulo | Fuente del estímulo | Respuesta | Medida de respuesta | Entorno | Artefacto | 
| ------------- |:-------------:|:-------------:|:-------------:|:-------------:|:-------------:|:-------------:|
| E1.1 | Multiples usuarios acceden al home page al mismo tiempo | Usuarios que acceden a la pagina | La pagina debe de cargar rapidamente y mostrar los eventos disponibles | Tiempo promedio de respuesta inicial de la pagina, no debe de exceder el segundo y el tiempo de carga final, no debe de exceder los 2 segundos | Momento de alta demanda durante la venta de tickets para eventos populares | Pagina de compra de tickets |
| E1.2 | Multiples usuarios compran el mismo ticket al mismo tiempo | Usuarios que compran el mismo ticket | El sistema debe de trasladar a la persona a una lista de espera | Tiempo promedio de respuesta del sistema, no debe de exceder los 5 segundos | Momento de alta demanda durante la venta de tickets para eventos populares | Pagina de compra de tickets |

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
    * Deben poder ver detalles de las ventas, incluyendo el número de tickets vendidos, el monto total recaudado, y la identidad de los compradores (a través del DNI).
7.	Gestión de Usuarios:
    * Los managers deben poder acceder a la información de los usuarios que han comprado tickets para sus eventos.
    * Deben poder verificar la identidad de los compradores mediante el DNI.
8.	Notificaciones:
    * El sistema debe enviar notificaciones a los managers sobre las ventas de tickets y cualquier otra información relevante sobre sus eventos.


### Requerimientos de atributos de calidad

#### Rendimiento

| Escenario | Estímulo | Fuente del estímulo | Respuesta | Medida de respuesta | Entorno | Artefacto | 
| ------------- |:-------------:|:-------------:|:-------------:|:-------------:|:-------------:|:-------------:|
| Gran cantidad de managers ingresan al panel | Acceso concurrente de múltiples managers al panel de control durante la venta de tickets. | Managers autenticados que acceden al sistema para gestionar eventos. | El sistema debe responder a las solicitudes de acceso al panel de control de manera eficiente, sin demoras significativas. | Tiempo promedio de respuesta del sistema cuando hay múltiples managers activos, no debe exceder los 5 segundos. | Momento de alta demanda durante la venta de tickets para eventos populares. | Panel de Managers |

#### Disponibilidad

| Escenario | Estímulo | Fuente del estímulo | Respuesta | Medida de respuesta | Entorno | Artefacto | 
| ------------- |:-------------:|:-------------:|:-------------:|:-------------:|:-------------:|:-------------:|
| Managers ingresan en cualquier horario del dia | Intento de acceso al panel de control de managers en cualquier momento. | Managers autenticados o no autenticados que intentan acceder al sistema. | El sistema debe estar disponible y responder a las solicitudes de acceso en todo momento. | Porcentaje de tiempo de disponibilidad del sistema, debe ser del 98%. | Considerar la necesidad de disponibilidad constante debido a la naturaleza comercial de la plataforma. | Panel de Managers |

#### Modificalidad

| Escenario | Estímulo | Fuente del estímulo | Respuesta | Medida de respuesta | Entorno | Artefacto | 
| ------------- |:-------------:|:-------------:|:-------------:|:-------------:|:-------------:|:-------------:|
| Cambio de estructura de precio de los tickets | Solicitud de cambio en la estructura de precios de los tickets por parte de los managers. | Managers autenticados que desean actualizar los precios de los tickets de un evento. | El sistema debe permitir cambios en la estructura de precios de manera oportuna y precisa. | Tiempo promedio para implementar cambios en los precios de los tickets, no debe exceder los 15 segundos. | Necesidad de adaptación rápida a cambios en las estrategias de precios del cliente o demandas del mercado. | Panel de Managers |

#### Seguridad

| Escenario | Estímulo | Fuente del estímulo | Respuesta | Medida de respuesta | Entorno | Artefacto | 
| ------------- |:-------------:|:-------------:|:-------------:|:-------------:|:-------------:|:-------------:|
| Acceso no autorizado | Intento de acceso no autorizado al panel de control de managers. | Intentos de hackers u otros usuarios no autorizados. | El sistema debe detectar y prevenir intentos de acceso no autorizados. | Número de intentos de acceso no autorizado detectados y bloqueados en un período de tiempo determinado. | Persistente amenaza de ataques externos debido a la naturaleza pública de la plataforma web. | Panel de Managers  |

#### Usabilidad

| Escenario | Estímulo | Fuente del estímulo | Respuesta | Medida de respuesta | Entorno | Artefacto | 
| ------------- |:-------------:|:-------------:|:-------------:|:-------------:|:-------------:|:-------------:|
| Manager busca visualizar la posible interfaz del usuario | Interacción de los managers con la interfaz de usuario del panel de control. | Managers autenticados que gestionan eventos y ventas de tickets. | La interfaz de usuario debe ser intuitiva y fácil de usar para los managers. | Evaluación de usabilidad mediante encuestas o pruebas de usuario, la puntuación de usabilidad debe ser superior a 4.0. | Necesidad de facilitar la gestión eficiente de eventos en un entorno de alta presión durante períodos de venta activa. | Panel de Managers |

### Escalabilidad

| Escenario | Estímulo | Fuente del estímulo | Respuesta | Medida de respuesta | Entorno | Artefacto | 
| ------------- |:-------------:|:-------------:|:-------------:|:-------------:|:-------------:|:-------------:|
| Incremento de managers en la plataforma | Incremento en el número de eventos y clientes utilizando la plataforma. | Crecimiento orgánico de la popularidad y demanda del servicio. | El sistema debe ser capaz de manejar un aumento en el volumen de eventos y clientes sin degradación significativa del rendimiento. | Capacidad del sistema para manejar un número creciente de eventos y clientes, medida a través de pruebas de carga y escalabilidad. | Previsión de aumento de la actividad durante eventos populares o temporadas de conciertos. | Panel de Managers |

### Restricciones

1. Frontend:
    * Restricción: Utilización de React como framework de frontend.
    * Justificación: Preferencia de la organización para el desarrollo de interfaces de usuario.
2. Backend:
    * Restricción: Utilización de ExpressJS como framework de backend.
    * Justificación: Preferencia técnica para el desarrollo del backend de la aplicación.
3. Motor de Base de Datos:
    * Restricción: Utilización de PostgreSQL como motor de base de datos.
    * Justificación: Decisión previa de la organización para el almacenamiento de datos en la aplicación.


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

## Modulo 4: Registro de usuarios

### Requerimientos funcionales

## Modulo 5: Panel de Administrador

### Requerimientos funcionales

