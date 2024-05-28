[Regresar al Indice](../proyecto.md)

# Tema del Proyecto

Desarrollar una pagina web para la venta de tickets de conciertos. La pagina permitira a los managers del evento publicar sus conciertos y a los usuarios comprar tickets para los mismos.

# Estructura de Stakeholders

![alt text](Imagenes/Organigrama.jpeg)

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

## Pagina web UI

* Framework de Frontend: React
* Framework de backend: NodeJs
* Motor de BD: PostgreSQL

## Microservicios

* Orquestador de microservicios: Kubernetes
* Framework de backend: Dependiendo del microservicio
* Motor de BD: MongoDB


# Como deberia funcionar
* Los event managers pueden crear eventos para vender tickets, estos eventos pueden ser masivos o pequeños.
    * A partir de eventos medianos, el cliente debe de pagar un monto fijo por alojar la venta de tickets en la aplicacion.
    * Los clientes pueden modificar el precio de los tickets, aplicando un 3% de comision a nosotros.
* Los usuarios pueden comprar uno o varios tickets, indicando por DNI la identidad de la persona.
* El sistema de compra tiene que ser rapido y simple para el usuario
* El sistema de creacion de eventos puede ser lento y debe de priorizar la seguridad de la identidad y recomendaciones para satisfacer las regulaciones del evento (Aforo, permisos, publico objetivo, etc)


# Modelo de negocio
* Segmento de clientes: 
    * Entusiastas de distintos géneros musicales
    * Gerente de conciertos inexperimentados o experimentados
* Canales: 
    * Enlace de Google por busqueda
    * Publicidad de google enfocados a publicar eventos o eventos con promociones
* Propuesta de valor: 
    * Permitir la compra rapida de ticket
    * Crear eventos de música con recomendaciones para asegurar la realización del evento
* Solucion: 
    * Simplicidad
    * Velocidad
    * Seguridad
* Metricas claves: 
    * Carga en la aplicacion (DDOS)
    * Manejo de colas
    * Velocidad en la compra de tickets.
* Actividades clave:
    * Creacion de eventos
    * Publicidad de eventos
    * Venta de ticket para los eventos
* Cooperaciones clave
    * Amazon web services para alojar y monitorear el producto
    * Alianzas con los gerentes de eventos en la publicidad de la pagina
* Costos: 
    * Costos de la Nube (servicios AWS)
    * Publicidad de la pagina (Google ads)
    * Comisiones por uso de APIs
    * Costo de equipos y licencias para los desarrolladores
* Ingresos:
    * Comisiones en la creacion de eventos
    * Publicidad de eventos patrocinados
    * Porcentaje en la venta de los tickets

![alt text](<Imagenes/Arquitectura BMC.png>)