[Regresar al Indice](../proyecto.md)

# Tema del Proyecto

Desarrollar una pagina web para la venta de tickets de conciertos. La pagina permitira a los managers del evento publicar sus conciertos y a los usuarios comprar tickets para los mismos.

# Estructura de Stakeholders

* Analista: Gerente de proyecto
* Arquitecto: Arquitecto Cloud AWS
* Gestor de negocio: Gerente de porducto
* Conformance Checker: Arquitecto Cloud AWS
* Cliente: Direccion General
* DBA: Administrador de base de datos
* Especialista en Despliegue: Arquitecto AWS
* Diseñador: Diseñador UX/UI y Especialista SEO/SEM
* Evaluador: Gerente de proyecto
* Implementador: Desarrolladores frontend y backend
* Integrador: Arquitecto Cloud AWS
* Mantenedor: Desarrolladores frontend y backend
* Jefe de proyecto: Gerente de proyecto
* Ingeniero de pruebas: Especialista en Seguridad y Desarrolladores Backend
* Usuario: Event manager y personas que quieran comprar tickets para conciertos


# Stack Tecnológico

* Framework de Frontend: React
* Framework de backend: NodeJs
* Motor de BD: PostgreSQL, MongoDB

# Como deberia funcionar
* El cliente puede crear eventos para vender tickets, estos eventos pueden ser masivos o pequeños.
    * A partir de eventos medianos, el cliente debe de pagar un monto fijo por alojar la venta de tickets en la aplicacion.
    * Los clientes pueden modificar el precio de los tickets, aplicando un 3% de comision a nosotros.
* Los usuarios pueden comprar uno o varios tickets, indicando por DNI la identidad de la persona.


# Modelo de negocio
* Segmento de clientes: Asistentes de eventos y organizadores de eventos
* Canales: Pagina web
* Ventaja injusta: En progreso
* Propuesta de valor: Permitir la venta y compra de tickets rapidamente
* Solucion: 
    * Simplicidad
    * Velocidad
    * Seguridad
* Metricas claves: 
    * Carga en la aplicacion (DDOS)
    * Manejo de colas
    * Velocidad en la compra de tickets.
* Costos: 
    * Servidores
    * Mantenimiento
    * Publicidad
    * Comisiones
* Ingresos:
    * Comisiones
    * Publicidad
    * Venta de tickets