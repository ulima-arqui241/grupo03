# Elementos de arquitecturas y asignacion de responsabilidades

| Código | Decisión de Diseño          | Fundamentación                                                                                                                             |
|--------|-----------------------------|-------------------------------------------------------------------------------------------------------------------------------------------|
| DEC-03  | Retirar las fuentes de datos locales dentro de la aplicación. | No se considera necesario almacenar datos localmente, dado que la conexión suele ser confiable. Se optará por utilizar conexiones directas con bases de datos PostgreSQL y MongoDB. (CON-04, CON-05). |
| DEC-04  | Instanciar API Gateway dedicado para la comunicación con los microservicios propuestos | Encapsula la lógica necesaria para interactuar con los servidores de manera uniforme, ocultando los detalles de implementación específicos de cada servidor detrás de una capa de abstracción. Ayuda con la consecución de QA-04 y tiene impacto en conseguir UC-11.


Usar formato Nygard.