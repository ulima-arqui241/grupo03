# Revision de objetivos

| No abordado | Parcialmente Abordado | Completamente abordado | Decision de diseno     |
| ----------- | --------------------- | ---------------------- | ---------------------- |
|             |                       | UC-01                  | DEC-01, DEC-02, DEC-03 |
|             | CU-02                 |                        | DEC-03, DEC-04         |
| CU-04       |                       |                        | -                      |
|             |                       | QA-01                  | DEC-04, DEC-06         |
|             |                       | QA-05                  | DEC-03, DEC-04, DEC-06 |
|             | QA-08                 |                        | DEC-01, DEC-02, DEC-05 |
|             |                       | QA-15                  | DEC-04                 |
|             | CON-2                 |                        | DEC-03                 |
|             | CON-5                 |                        | DEC-03                 |
|             | CRN-1                 |                        | DEC-03, DEC-06         |
|             | CRN-2                 |                        | DEC-02                 |
|             | CRN-3                 |                        | DEC-01, DEC-05         |
|             | CRN-4                 |                        | DEC-02, DEC-04         |

**Casos de Uso:**
- UC-01: Visualizar catálogo de eventos
- UC-03: Comprar tickets
- UC-05: Cancelación de compra
- UC-06: Historial de compras

**Escenarios de Atributos de Calidad:**
- QA-01: Manejar aumento en tráfico sin degradar rendimiento
- QA-02: Visualización de eventos rápida e intuitiva
- QA-10: Contraseñas cifradas para el acceso seguro
- QA-11: Interacción rápida y eficiente con notificaciones de eventos

**Preocupaciones:**
- ARQ-01: Escalabilidad
- ARQ-02: Seguridad
- ARQ-03: Rendimiento

**Restricciones:**
- CON-1: El sistema debe poder ser accedido desde un navegador (Chrome V3+, Firefox V4+, IE8+) en diferentes plataformas: Windows, Mac OS, Linux.
- CON-2: El sistema debe estar desplegado en una infraestructura de nube pública (AWS)
- CON-3: El sistema debe cumplir con los estándares de seguridad PCI-DSS para la gestión de datos de tarjetas de crédito y débito.