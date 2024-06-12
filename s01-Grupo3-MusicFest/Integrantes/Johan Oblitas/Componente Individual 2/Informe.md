# Implementación del Patrón Federated Identity

## ¿Qué es el Patrón Federated Identity?

El patrón de Cloud "Federated Identity" (Identidad Federada) permite a los usuarios autenticarse en una aplicación usando credenciales de una identidad proporcionada por un tercero de confianza (como Google, Facebook, o un proveedor de identidad corporativa). Esto significa que en lugar de crear y gestionar credenciales únicas para cada aplicación, los usuarios pueden utilizar una identidad centralizada que ya poseen, simplificando el proceso de inicio de sesión y mejorando la seguridad.

## Beneficios del Patrón

- **Mejora de la Experiencia del Usuario**: Los usuarios no necesitan recordar múltiples conjuntos de credenciales para diferentes servicios. Una sola autenticación les permite acceder a varios recursos.
- **Seguridad Mejorada**: Centralizar la autenticación en un proveedor de identidad confiable reduce el riesgo de violaciones de seguridad y la necesidad de gestionar múltiples contraseñas.
- **Facilidad de Administración**: La gestión de identidades se simplifica al centralizar las autenticaciones y autorizaciones. Esto también facilita el cumplimiento de políticas de seguridad y auditorías.
- **Interoperabilidad**: Permite la integración de servicios y aplicaciones de diferentes proveedores, mejorando la colaboración entre organizaciones.
- **Reducción de Costes**: Menor necesidad de mantener infraestructuras de autenticación y autorización en cada servicio individual.

## Demo

Para la demo, se utilizará OpenID Connect (OIDC), un protocolo de identidad que permite la federación de identidades a través de OAuth 2.0. Implementaremos un ejemplo básico utilizando Keycloak como Proveedor de Identidad y una aplicación sencilla en Node.js como Proveedor de Servicios.

### Requerimientos
* Docker
* Node.js y npm

### Consideraciones técnicas de la demo
1. **Configurar Keycloak**:
    * **Instalar Keycloak utilizando Docker**: docker run -d --name keycloak -p 8080:8080 -e KEYCLOAK_USER=admin -e KEYCLOAK_PASSWORD=admin jboss/keycloak
    * **Acceder a la consola de administración**: URL: http://localhost:8080, Credenciales: usuario admin, contraseña admin
    * **Crear un cliente**: Dentro del nuevo realm, ir a "Clients" y crear un cliente llamado node-app. Configurar el Client ID como node-app, el Root URL como http://localhost:3000, y habilitar Standard Flow Enabled.
    * **Crear un usuario**: Navegar a "Users" y agregar un nuevo usuario. Asignar credenciales al usuario.
2. **Configurar aplicación Node.js**:


### Video: 


## Referencias
* [Federated Identity](https://learn.microsoft.com/es-es/azure/architecture/patterns/federated-identity)