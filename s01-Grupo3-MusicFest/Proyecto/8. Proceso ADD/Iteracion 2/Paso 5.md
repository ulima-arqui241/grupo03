# Elementos de arquitecturas y asignacion de responsabilidades

| Código | Decisión de Diseño               | Fundamentación                                                                                                                             |
|--------|----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------|
| DEC-11  | Instanciar diagrama de entidad relacion en la base de datos empleando propiedades ACID | Implementar la conexion, usuarios y tablas en la base de datos (CRN-03, CRN-05). |
| DEC-12  | Instanciar una coleccion de notificiaciones en la base de datos no relacional  | Implementar la conexion y coleccion de notificiaciones en la base de datos no relacional (CRN-03, CRN-05). |

## DC11 - Instanciar diagrama de entidad relacion en la base de datos empleando propiedades ACID

### Estado: Aceptado

### Contexto
La aplicacion al ser un sistema de compra de tickets requiere de mantener una consistencia en los datos de compra de tickets y asegurar que la compra de tickets sea definitiva, se compro o no se compro el ticket.

Se debe de asegurar que las operaciones se ejecuten juntas y que estas ocurran antes o despues que otro usuario que realiza otras operaciones.

### Decision
Para asegurar lo mencionado anteriormente, se debe de utilizar una base de datos que tenga caracterisiticas ACID (Atomicity, Consistency, Insolation, Durability)

![ACID Properties](/s01-Grupo3-MusicFest/Proyecto/Imagenes/ACID-Properties.jpg)

### Consecuencias

- **Positivas**:
    - **Consistencia de data**: Estas propuedades aseguran que la data permanezca consistentey precisa ante cualquier ejecucion de transacicones
    - **Integridad de la data**: Permite mantener la integridad de la data asegurando que cualquier cambio en la base de datos sea permanente y no se pierda.
    - **Control de concurrencia**: Ayuda a manejar transacciones multiples que ocurren concurrentemente al prevenir la interferencia entre transacciones
    - **Recuperacion**: En caso de falla o caida, el sistema puede recuperar la data hasta el punto de falla o caida.
- **Negativas**:
    - **Desempeño**: Estas propiedades pueden causar una caida en el desempeño del sistema, dado que requieren de procesamiento adicional para asegurar la consistencia y integridad de la data
    - **Escalabilidad**: Es posible que causen un problemas de escalabilidad en sistemas largamente distribuidos, en dodne multiples transacciones ocurren concurrentemente.
    - **Complexidad**: Incrementa la complejidad del sistema y requiere de una cantidad significativa de experiencia y recursos.

## DC12 - Instanciar una coleccion de notificiaciones en la base de datos no relacional

### Estado: Aceptado

### Contexto
Se plantea enviar notificacion de diversos servicios a los usuarios correspondientes, estas notificaciones varian por sus distintas fuentes y estas notificaciones podran ser consultadas por los usuarios.

### Decision
Se propone utilizar una base de datos no relacional, para manejar estos datos con formatos variables y el procesamiento de informacion para la consulta de datos.

### Consecuencias

- **Positivas**:
    - **Escalabilidad**: Este tipo de BD esta diseñado para expandirse horizontalmente, siendo beneficioso en aplicaciones con grandes cantidades de data y cargas altas de usuarios.
    - **Flexibilidad**: Permite mayor flexibilidad en el modelo de data. Dado que no requiere de un esquema de datos estatico, permitiendo el almacenamiento de data en formatos diferentes.
    - **Alto desempeño**: Estas bases de datos estan optimizadas para modelos de datos especificos, permitiendo un desempeño alto en operaciones de lectura/escritura, especialmente con grandes volumenes de data.
    - **Alta disponibilidad**: Vienen con mecanismos de replicacion y distribucion, asegurando que la base de datos este disponible, inclusive en casos de fallos o mantenimiento.
- **Negativas**:
    - **Consistencia**: Estas bases de datos no emplean principios ACID por lo que es de esperarse problemas de consistencia, en donde la data no es consistente en todos los nodos.
    - **Complejidad**: Mientras flexible, la falta de un esquema estatico de datos introduce una mayor complejidad en las peticiones y logica de agregacion de data.
    - **Soporte limitado para transacciones**: Mayormente no soporta mutiples grabaciones de transacciones ACID o tiene un soporte limitado. Siendo un detrimental en aplicacion con transacciones complejas.
    - **Madurez y ecosistema**: Falta de madurez en las herramientas y soporte de la comunidad a diferencia de las bases de datos relacionales.