[Regresar al Indice](../proyecto.md)

# Decisiones de tecnologias.

## Frontend Framework

Se realizo el análisis comparativo entre los tres frameworks de JavaScript populares: React, Angular y Vue. Cada uno de estos marcos ofrece características y capacidades únicas para la construcción de aplicaciones web modernas.

Se realizo la decision de utilizar el framework de React por los siguientes motivos:

* La facilidad de aprender y utilizar el framework.
* Tamaño pequeño del bundle.
* Permite crear compenentes, renderizar y reaccionar a la entrada del usuario.
* Mediante la mejora de React suspense permite optimizar las actualizaciones del DOM.
* Tiene un rendimiento alto en el tiempo de ejecucion con la optimizacion de React suspense.
* Tiempo de construccion rapido.

El principal incentivo es la reactividad a la entrada del usuario que permitira una mejor experiencia.

## Backend Framework

Se tienen como candidatos las tecnologias:
* Molecular (Framework de microservicios de NodeJS)
* GOMicro (Framework de microservicios de Golang)
* Express.js (Framework de microservicios de NodeJS)
* FastAPI (Framework de microservicios de Python)

Se busca evitar realizar los microservicios con frameworks basados en Java para evitar la verbosidad que estos frameworks proveen y no se considera el framework de DJango por experiencias pasadas que demostraron la impracticidad del framework en el proyecto.

Se empleara kubernetes para alojar los microservicios y asegurar la disponibilidad de los servicios

## Decision de base de datos.

El motor de base de datos para los microservicios se decidio emplear MongoDB por ser un motor NoSQL el cual no tiene un estructura fija y permite el manejo de datos masivos pensados para la aplicacion.
