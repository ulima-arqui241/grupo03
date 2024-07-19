# Elementos de arquitecturas y asignacion de responsabilidades

| Código | Decisión de Diseño        |
|--------|-------------------------|
| DEC-15 | Integración de APIs de Pago Seguro    |


## DEC-15 - Integración de APIs de Pago Seguro (Stripe, PayPal)

### Estado: Aceptado

### Contexto
El sistema debe gestionar transacciones financieras de manera segura y conforme a los estándares de la industria. Los usuarios deben sentirse seguros al realizar pagos en la plataforma, y la empresa debe cumplir con las normativas de seguridad de datos.

### Decisión
Se decidió integrar APIs de pago seguro utilizando Stripe y PayPal. Estas opciones fueron elegidas por su robustez en la seguridad y facilidad de integración.

### Consecuencias

- **Positivas:**
  - Asegura transacciones financieras seguras, protegiendo los datos sensibles de los usuarios.
  - Cumplimiento con las normativas de seguridad de datos y estándares de la industria.
  - Mayor confianza de los usuarios en la plataforma, lo que puede aumentar la tasa de conversión de ventas.

- **Negativas:**
  - Dependencia de servicios externos para la gestión de pagos, lo que puede introducir riesgos en caso de interrupciones del servicio.
  - Costos asociados a las tarifas de transacción de los proveedores de pago.
  - Necesidad de implementar y mantener un manejo adecuado de errores y excepciones relacionadas con las APIs de pago.




