# Requerimientos funcionales

## Modulo 1: Compra de Tickets


## Modulo 2: Panel de Managers

### Requerimientos funcionales

1. Registro de Clientes:
    * El sistema debe permitir a los managers registrarse como clientes.
    * Debe recopilar la información necesaria del manager, incluyendo nombre, dirección de correo electrónico, y detalles de contacto.
    * Se deben validar las credenciales del manager durante el proceso de registro.
2.	Creación de Eventos:
    * Los managers deben poder crear eventos para vender tickets.
    * Se debe permitir la inclusión de detalles del evento, como nombre, fecha, hora, lugar y descripción.
    * Los managers deben poder especificar si el evento es masivo o pequeño.
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

| Atributo de Calidad  | Estímulo | Fuente del estímulo | Respuesta | Medida de respuesta | Entorno | Artefacto |
| ------------- |:-------------:|:-------------:|:-------------:|:-------------:|:-------------:|:-------------:|
| Rendimiento      | Acceso concurrente de múltiples managers al panel de control durante la venta de tickets. | Managers autenticados que acceden al sistema para gestionar eventos. | El sistema debe responder a las solicitudes de acceso al panel de control de manera eficiente, sin demoras significativas. | Tiempo promedio de respuesta del sistema cuando hay múltiples managers activos, no debe exceder los 5 segundos. | Momento de alta demanda durante la venta de tickets para eventos populares. | Panel de Managers |
| Disponibilidad      | Intento de acceso al panel de control de managers en cualquier momento. | Managers autenticados o no autenticados que intentan acceder al sistema. | El sistema debe estar disponible y responder a las solicitudes de acceso en todo momento. | Porcentaje de tiempo de disponibilidad del sistema, debe ser del 98%. | Considerar la necesidad de disponibilidad constante debido a la naturaleza comercial de la plataforma. | Panel de Managers |
| Modificalidad      | Solicitud de cambio en la estructura de precios de los tickets por parte de los managers. | Managers autenticados que desean actualizar los precios de los tickets de un evento. | El sistema debe permitir cambios en la estructura de precios de manera oportuna y precisa. | Tiempo promedio para implementar cambios en los precios de los tickets, no debe exceder los 15 segundos. | Necesidad de adaptación rápida a cambios en las estrategias de precios del cliente o demandas del mercado. | Panel de Managers |
| Seguridad      | Intento de acceso no autorizado al panel de control de managers. | Intentos de hackers u otros usuarios no autorizados. | El sistema debe detectar y prevenir intentos de acceso no autorizados. | Número de intentos de acceso no autorizado detectados y bloqueados en un período de tiempo determinado. | Persistente amenaza de ataques externos debido a la naturaleza pública de la plataforma web. | Panel de Managers  |
| Usabilidad      | Interacción de los managers con la interfaz de usuario del panel de control. | Managers autenticados que gestionan eventos y ventas de tickets. | La interfaz de usuario debe ser intuitiva y fácil de usar para los managers. | Evaluación de usabilidad mediante encuestas o pruebas de usuario, la puntuación de usabilidad debe ser superior a 4.0. | Necesidad de facilitar la gestión eficiente de eventos en un entorno de alta presión durante períodos de venta activa. | Panel de Managers |
| Escalabilidad      | Incremento en el número de eventos y clientes utilizando la plataforma. | Crecimiento orgánico de la popularidad y demanda del servicio. | El sistema debe ser capaz de manejar un aumento en el volumen de eventos y clientes sin degradación significativa del rendimiento. | Capacidad del sistema para manejar un número creciente de eventos y clientes, medida a través de pruebas de carga y escalabilidad. | Previsión de aumento de la actividad durante eventos populares o temporadas de conciertos. | Panel de Managers |

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


## Modulo 3: TBD


