# Implementación de Patrones en el Proyecto
Se implementarion 2 patrones en el proyecto del grupo 3: 
#### Patrón Cliente-Servidor

El patrón cliente-servidor es un modelo de arquitectura en el cual el sistema se divide en dos partes principales: el cliente y el servidor. En nuestro proyecto, implementamos este patrón de la siguiente manera:

**Cliente:**

- **Interfaz de Usuario (UI):** El cliente en nuestro sistema es la interfaz de usuario. Este componente se encarga de interactuar directamente con el usuario, mostrando el catálogo de eventos, gestionando la selección de eventos y la compra de tickets.
- **Interacción con el Servidor:** El cliente envía solicitudes al servidor para obtener datos del catálogo de eventos, procesar transacciones de pago y manejar la autenticación de usuarios.

**Servidor:**

- **Servidor Web:** El servidor recibe y maneja las solicitudes del cliente. Aloja la aplicación y proporciona los datos necesarios a la interfaz de usuario. También gestiona las solicitudes de pago y autenticación.
- **Lógica de Negocio:** El servidor contiene la lógica de negocio, que procesa las solicitudes del cliente, valida los datos, gestiona las transacciones y coordina el flujo de trabajo.
- **Acceso a Datos y Base de Datos Relacional (SQL):** El servidor interactúa con la base de datos para realizar operaciones CRUD (Create, Read, Update, Delete). La base de datos almacena información crítica, como detalles de eventos, transacciones de compra y datos de usuario.

- Este patrón permite una separación clara entre la lógica de presentación (cliente) y la lógica de negocio y datos (servidor), facilitando el mantenimiento y la escalabilidad del sistema.
- Al separar el cliente y el servidor, podemos escalar cada parte de manera independiente. Por ejemplo, podemos agregar más servidores web para manejar un mayor número de solicitudes de clientes.


#### Patrón de Arquitectura en Capas

El patrón de arquitectura en capas divide el sistema en capas distintas, cada una con responsabilidades específicas. En nuestro proyecto, implementamos este patrón de la siguiente manera:

**Capa de Presentación (Interfaz de Usuario):**
- Esta capa se encarga de la interacción con el usuario. Muestra el catálogo de eventos, gestiona la selección y compra de tickets, y presenta notificaciones y mensajes al usuario.

**Capa de Lógica de Negocio:**
- Procesa las reglas de negocio del sistema. Valida los datos de entrada, gestiona las transacciones de compra, y coordina el flujo de trabajo.

**Capa de Acceso a Datos:**
- Gestiona la comunicación con la base de datos. Realiza operaciones CRUD y asegura la integridad de los datos.

**Capa de Almacenamiento (Base de Datos Relacional):**
- Almacena los datos del sistema, incluyendo detalles de eventos, transacciones de compra y datos de usuario.

-  La separación en capas facilita el mantenimiento del sistema, permitiendo realizar cambios en una capa sin afectar las demás.
- Los componentes de cada capa pueden ser reutilizados en diferentes partes del sistema. 

Implementando los patrones de cliente-servidor y arquitectura en capas, nuestro proyecto asegura una separación clara de responsabilidades, mejor mantenibilidad, escalabilidad y seguridad. 