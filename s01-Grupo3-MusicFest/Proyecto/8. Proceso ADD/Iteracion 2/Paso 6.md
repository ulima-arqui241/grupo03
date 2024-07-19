# Bosquejo de vistas de arquitectura

Diagramación por módulo (ampliado)

Modelo entidad relación.
## Modelo de datos relacional

![ModeloDeDatos](/s01-Grupo3-MusicFest/Proyecto/Imagenes/Modelo%20de%20datos%20SQL.png)

## Modelo de datos no relacional

### Colección de notificaciones

    ```
    {
        "_notification_id": ObjectId(".."),
        "user_id": ObjectId(".."),
        "mensaje": "string",
        "fecha_envio": ISODate("2024-01-01T00:00:00Z"),
        "fecha_lectura": ISODate("2024-01-01T00:00:00Z"),
        "leido": "boolean"
    }
    ```

## Arquitectura de Microservicios

![ArquitecturaMicroservicios](/s01-Grupo3-MusicFest/Proyecto/Imagenes/Diagramas_iteraciones-Arquitectura%20de%20microservicios%20segunda%20iteracion.drawio.png)