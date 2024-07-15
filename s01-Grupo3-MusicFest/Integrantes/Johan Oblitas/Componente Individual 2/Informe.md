# Data Engineering: Spark

## Concepto
Según Sadiku et al. (2018), la ingeniería de datos es un campo multidisciplinario con aplicaciones en control, teoría de decisiones y bioinformática. Esta nueva disciplina se centra en el diseño, implementación y mantenimiento de sistemas de información distribuidos. Es un ámbito amplio en el cual un ingeniero de datos transforma los datos en un formato útil para su análisis. Los componentes de la ingeniería de datos incluyen:

- **Representación y manipulación de datos**: Este componente se refiere a cómo los datos se estructuran y organizan para facilitar su manipulación y uso. Esto incluye técnicas y modelos para representar datos de manera que sean accesibles y útiles para el análisis, como estructuras de datos, esquemas y bases de datos relacionales o no relacionales.
- **Arquitecturas de datos (sistemas expertos)**: Las arquitecturas de datos implican la creación de sistemas complejos que pueden gestionar y procesar grandes volúmenes de datos de manera eficiente. Los sistemas expertos son un ejemplo de estas arquitecturas, diseñados para emular la toma de decisiones de un experto humano en áreas específicas.
- **Construcción de datos**: La construcción de datos involucra la recopilación, limpieza y transformación de datos de diversas fuentes. Este proceso asegura que los datos sean consistentes, precisos y estén en un formato adecuado para su análisis.
- **Problemas de aplicación y gestión**: Este componente aborda los desafíos prácticos de aplicar y gestionar sistemas de datos en entornos reales. Incluye consideraciones sobre la escalabilidad, el rendimiento, la seguridad y el cumplimiento de normativas, así como la gestión continua de estos sistemas para garantizar su eficacia y eficiencia.
- **Herramientas para especificar y desarrollar datos**: Existen diversas herramientas y tecnologías utilizadas para especificar, desarrollar y gestionar datos. Estas herramientas facilitan tareas como el modelado de datos, la creación de pipelines de datos, la integración de datos y la automatización de procesos de manipulación de datos.
- **Implementación y diseño**: La implementación y el diseño se refieren a la fase práctica de crear sistemas de datos, incluyendo la codificación, el desarrollo de algoritmos y la construcción de infraestructuras. Este componente también incluye la planificación y diseño de sistemas que puedan cumplir con los requisitos de rendimiento y escalabilidad necesarios para manejar grandes volúmenes de datos.

Dentro de Data Engineering, se utilizan una variedad de herramientas y tecnologías, como Apache Hadoop, bases de datos NoSQL, SQL, sistemas de mensajería como Kafka, y plataformas de nube como AWS, Google Cloud o Azure. No obstante, el presente trabajo se enfocará en Apache Spark.

### Apache Spark

Apache Spark es una plataforma de computación en clústeres de código abierto que permite el procesamiento de datos a gran escala. Desarrollado originalmente en el laboratorio AMPLab de la Universidad de California, Berkeley, Spark se ha convertido en una herramienta esencial debido a su velocidad, facilidad de uso y capacidad para manejar una variedad de tareas de procesamiento de datos.

### Componentes principales

![Componentes de Spark](/s01-Grupo3-MusicFest/Integrantes/Johan%20Oblitas/Componente%20Individual%202/componentes_spark.png)

- Spark SQL:
    - Spark SQL es el módulo de Spark para trabajar con datos estructurados. Proporciona una API para interactuar con datos mediante consultas SQL, así como DataFrames y Datasets, que son abstracciones de datos estructurados
    - **Aplicación**: Permite ejecutar consultas SQL en datos almacenados en formatos compatibles como JSON, Parquet y Hive. También puede integrarse con herramientas de análisis de datos y BI, permitiendo el análisis interactivo de grandes volúmenes de datos.

- Spark Streaming:
    - Spark Streaming es el componente de Spark para el procesamiento de datos en tiempo real. Permite el procesamiento y análisis de flujos de datos en tiempo real.
    - **Aplicación**: Utilizado para tareas como la detección de fraudes en tiempo real, monitoreo de redes y análisis de logs en tiempo real. Spark Streaming puede consumir datos de fuentes como Kafka, Flume y sockets TCP, procesándolos en intervalos de tiempo pequeños llamados micro-batches.

- Spark MLlib:
    - MLlib es la biblioteca de aprendizaje automático de Spark. Proporciona herramientas para realizar análisis predictivo y modelos de machine learning a gran escala.
    - **Aplicación**: Incluye una amplia gama de algoritmos de aprendizaje automático como regresión, clasificación, clustering y filtrado colaborativo. También ofrece utilidades para el preprocesamiento de datos y la selección de características, facilitando la construcción y escalabilidad de modelos de aprendizaje automático.

- GraphX:
    - GraphX es el componente de Spark para el procesamiento y análisis de grafos. Permite trabajar con datos que pueden ser representados como grafos, donde los nodos representan entidades y los bordes representan relaciones entre esas entidades.
    - **Aplicación**: Utilizado para análisis de redes sociales, detección de comunidades, análisis de enlaces y otros casos donde los datos tienen una estructura de grafo. GraphX proporciona APIs para construir, transformar y consultar grafos, así como algoritmos de grafos predefinidos como PageRank.

## Demo

La demostración se centrará en el componente Spark MLlib, específicamente en la realización de una predicción utilizando el modelo ALS (Alternating Least Squares).

### Escenario de Aplicación

El escenario de la demo se basa en datos de calificaciones de películas proporcionados por usuarios atendidos en MovieLens. El propósito de esta demo es predecir las calificaciones ("ratings") que nuevos usuarios darían a películas que aún no han visto, basándose en las calificaciones de usuarios anteriores.

### Consideraciones tecnicas de la demo

- Entorno de ejecución: Se utilizó la plataforma de Google Colab como entorno de ejecución.
- PySpark: Se realiza a través del comando: !pip install pyspark

### Video de la demo

[Video de la demo](https://www.youtube.com/watch?v=lGSY04bMo8U)

### Créditos

- [Sadiku, M., Eze, K. & Musa, S. (2018). The Essence of Data Engineering. _International Journal of Trend in Research and Development, 5_(3).](https://www.researchgate.net/publication/326752611_The_Essence_of_Data_Engineering)

- [¿Qué Es Spark Y Cómo Revoluciona Al Big Data Y Al Machine Learning?](https://www.bigdata.uma.es/que-es-spark-y-como-revoluciona-al-big-data-y-al-machine-learning/)

- [Group Lens. Dataset de MovieLens](https://grouplens.org/datasets/movielens/)