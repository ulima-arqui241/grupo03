# Tema del Proyecto

Desarrollar una pagina web para la venta de tickets de conciertos. La pagina permitira a los managers del evento publicar sus conciertos y a los usuarios comprar tickets para los mismos.

# Estructura de Stakeholders

* Analista: Nosotros
* Arquitecto: Nosotros
* Gestor de negocio: Nosotros
* Conformance Checker: Event manager
* Cliente: Event manager
* DBA: Nosotros
* Especialista en Despliegue: Nosotros
* Diseñador: Nosotros
* Evaluador: Auditor de software
* Implementador: Nosotros
* Integrador: Nosotros
* Mantenedor: Nosotros
* Jefe de proyecto: Alejandro
* Ingeniero de pruebas: Nosotros
* Usuario: Event manager y personas que quieran comprar tickets para conciertos


# Stack Tecnológico

* Framework de Frontend: React
* Framework de backend: Por decidir
* Motor de BD: PostgreSQL

# Como deberia funcionar
* El cliente puede crear eventos para vender tickets, estos eventos pueden ser masivos o pequeños.
    * A partir de eventos medianos, el cliente debe de pagar un monto fijo por alojar la venta de tickets en la aplicacion.
    * Los clientes pueden modificar el precio de los tickets, aplicando un 3% de comision a nosotros.
* Los usuarios pueden comprar uno o varios tickets, indicando por DNI la identidad de la persona.


# Modelo de negocio
* Segmento de clientes: jovenes y organizadores de eventos
* Canales: Pagina web
* Ventaja injusta: No tener resticcion en el tipo de tecnologia a implementar
* Propuesta de valor: Permitir la venta y compra de tickets rapidamente
* Solucion: 
    * Simplicidad
    * Velocidad
    * Seguridad
* Metricas claves: 
    * Carga en la aplicacion (DDOS)
    * Manejo de colas
    * Velocidad en la compra de tickets.