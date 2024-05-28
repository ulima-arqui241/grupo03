
# API Management

## ¿Qué es una API?

Una API (Application Programming Interface) es un conjunto de definiciones y protocolos que permite que dos aplicaciones se comuniquen entre sí. Las APIs definen los métodos y datos que una aplicación puede utilizar para solicitar servicios de otra aplicación, ya sea en una red local o en internet.

## ¿Qué es API Management?

API Management es el proceso de creación, publicación, seguridad, monitoreo y gestión de APIs en un entorno seguro y escalable. Involucra un conjunto de herramientas y servicios que permiten a las organizaciones gestionar de manera eficiente sus APIs a lo largo de su ciclo de vida.

### Monitoreo
El monitoreo de APIs es una de las principales ventajas de API Management. Permite a las organizaciones supervisar el rendimiento, la disponibilidad y el uso de sus APIs en tiempo real, proporcionando información crucial para mantener la calidad del servicio y detectar problemas antes de que afecten a los usuarios.

#### Beneficios del Monitoreo de APIs:
- **Visibilidad:** Proporciona una visión completa del comportamiento y el rendimiento de las APIs.
- **Detección de Problemas:** Identifica problemas de rendimiento, errores y tiempos de inactividad de manera proactiva.
- **Optimización:** Ayuda a identificar cuellos de botella y áreas para mejorar la eficiencia y la capacidad de las APIs.
- **Seguridad:** Monitorea actividades sospechosas y posibles intentos de ataques, permitiendo respuestas rápidas a amenazas.
- **Toma de Decisiones:** Ofrece datos analíticos que apoyan decisiones estratégicas sobre la evolución y la mejora de las APIs.


# Demo** 
El propósito de esta demo es mostrar la funcionalidad y beneficios de la integración de pruebas de API utilizando APIC Testing y Azure DevOps.

**Link de demo** : https://drive.google.com/file/d/1bhhKKxHGHSLFLyU1cmEDHDmAOvtENx14/view?usp=sharing

## Consideraciones 

### Ambiente Necesario

Para llevar a cabo esta demo, se necesitan los siguientes componentes y configuraciones:

1. **Instancia de API Connect:**
   - Una instancia configurada de API Connect con al menos una API desplegada.
   - Habilitación del módulo de APIC Testing en la consola del Platform Navigator.

2. **Platform Navigator:**
   - Instalación del Platform Navigator bajo una configuración de tipo Cloud Pak.

3. **Azure DevOps:**
   - Acceso a una instancia de Azure DevOps.
   - Configuración de Service Connections en Azure DevOps para permitir la integración con APIC Testing.
   - Repositorio de código (GitHub, Azure Repos, etc.) para almacenar los scripts de pruebas y configuraciones de pipelines.

4. **Herramientas y Configuraciones Adicionales:**
   - Creación de API Hooks para la ejecución de pruebas automatizadas.
   - Generación de API Keys y Secrets para la autenticación y seguridad de las pruebas.
   - YAML file para la configuración de pipelines en Azure DevOps, que ejecute las pruebas utilizando los API Hooks configurados.

**Créditos:** 
    - Pipeline extraído de: https://github.com/jossHD/apic-pipeline