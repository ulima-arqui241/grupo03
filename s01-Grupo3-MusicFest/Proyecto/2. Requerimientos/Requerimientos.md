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


Además de estar relacionados a los requerimientos, los escenarios se encuentran asociados a las tácticas del proyecto. Estos se organizaron en la siguiente página: [Tácticas y escenarios del proyecto](EscenariosYTacticas.md)