---
title: "[ES] Fundamentos Ciberseguridad 2"
excerpt: "[EN] Welcome to the red team!"
date: "Mar 21 2024"
cover_image: "/blog/cibersec.webp"
alt: "Cibersec 2"
---

# Acontinuación continuamos con algunos terminos fundamentales para entender esta hermosa rama de la informática (Parte 2).

&nbsp;

Te recomiendo ir al Cheatsheet para una versión mas dinamica y divertida de aprender estos terminos.
[Click para encontrar el Cheatsheet Completo](https://rawier.gitbook.io/glosario-de-hacking-ciberseguridad-y-redes/)

&nbsp;

**ISO/IEC 27032:2021**: Guías para mejorar el estado de la ciberseguridad, destacando los aspectos únicos de esa actividad y sus dependencias de otros dominios de seguridad, en particular.

> Se necesitan especialistas, si existe algún problema con al gún miembro, la cosa se vuelve jodida.

Un framework es un marco de como hacer las cosas y una normativa es como hacerlo.

---

**¿Qúe es el Ethical Hacking (Hacking Ético)?**: El hacking ético es una práctica importante para mejorar la seguridad informática de las organizaciones, ya que permite identificar y remediar vulnerabilidades de manera legal y ética, este simula el comportamiento de un ataque real, con el proposito de comprometer a la organización para posterior mente realizar un informe de prueba de penetración.

&nbsp;

**¿Qué es el Análisis de Vulnerabilidades?**: Análisis de Vulnerabilidades: Esta práctica implica el uso de herramientas y métodos automatizados para escanear sistemas, redes y aplicaciones en busca de fallos de seguridad que ya han sido documentados. El objetivo principal no es simular un ataque real, sino realizar un inventario exhaustivo de las debilidades existentes basándose en las bases de datos de vulnerabilidades conocidas.

---

**¿Qúe son las pruebas de intrusión?**: Las pruebas de intrusión son una práctica de seguridad que consta de un conjunto de técnicas que permiten evaluar el nivel de seguridad tecnológico de una organización o servicio brindado.

&nbsp;

> *"Una prueba de seguridad con un objetivo se termina cuando dicho objetivo se obtiene o cuando se acaba el tiempo disponible para realizarlo", (OSSTMM - Open Source Security Testing Methodology Manual).*

&nbsp;

> *"Prueba de seguridad donde los evaluadores copian ataques reales para subvertir las funciones de seguridad de un aplicativo", (NIST - National Institute of Standards and Technology).*

&nbsp;

**¿Por qué es importante el Pentesting?**: Son una herramienta esencial para mejorar la seguridad informática y proteger la información confidencial. Algunas de las razones por la cual es importante el pentesting son:

- 🖊️ Identificar vulnerabilidades en el sistema
- 🖊️ Protección de datos
- 🖊️ Herramientas de auditoría
- 🖊️ Cumplimiento normativo
- 🖊️ Reducción de riesgos

---

## Tipos de pruebas de intrusión.

### Caja Negra.

Consiste en obtener la mayor información posible debido a que no se tiene NULOS conocimiento ni información previa sobre el sistema o red a ser analizado. *Es la simulación perfecta de un ataque por parte de un autor que no conoce la empresa*.

**VENTAJAS**: Más realista en términos de un ataque real. Rápido de ejecutar.

**DESVENTAJAS**: Puede no identificar todas las vulnerabilidades internas. Menos detallado.

&nbsp;

### Caja Gris: 

Consiste en que el consultor tiene un conocimiento PARCIAL del sistema o red que esta probando y generalmente cuenta con credenciales para acceder a la red o aplicaciones objetivo. *Es la simulación perfecta de un usuario final que intenta comprometer en el sistema sin tener conocimiento completo del mismo*.

**VENTAJAS**: Equilibra el realismo y la profundidad de análisis. Más flexible en términos de enfoque.

**DESVENTAJAS**: Puede no ser tan exhaustivo como el pentesting de caja blanca ni tan realista como el de caja negra.

&nbsp;

### Caja Blanca: 

Consiste en que el consultor tiene un conocimiento COMPLETO del sistema o red que esta probando. *Esto permite que se realice una evaluación completa y rigurosa que resulta en una prueba de penetración mas eficaz*.

**VENTAJAS**: Permite una revisión exhaustiva y detallada. Identifica vulnerabilidades más profundas.

**DESVENTAJAS**: Menos realista desde el punto de vista de un atacante externo. Requiere más tiempo y recursos.

&nbsp;

![Caja NGB](https://auditech.es/wp-content/uploads/2023/01/black-box-white-box-gray-box-ethical-hacking.webp)

&nbsp;

**TIPOS DE INFORME**

- 📕 Informe para *ANÁLISIS DE VULNERABILIDADES*: Informe técnico comprensivo donde se numeran todas las vulnerabilidades identificadas, ranking de vulnerabilidades por riesgo y tareas de remediación recomendadas.

- 📕 Informe para *PENTESTING*: Informe técnico y ejecutivo de las vulnerabilidades, incluyendo vectores de ataque y ataques satisfactorios, ranking de vulnerabilidades por riesgo y tareas de remediación recomendadas.

- 📕 Informe para *ETHICAL HACKING*: Informe técnico y ejecutivo de los vectores de ataque usados en la organización, pruebas de ingeniería social, nivel de concienciación de los empleados e informes de debilidades de la infraestructura de seguridad. Nivel de impacto en el negocio, vectores de ataque satisfactorios e información exfiltrada durante la auditoría, nivel de acceso obtenido. Enumeración de mayor riesgo y tareas de remediación por prioridad.

&nbsp;

- 💜 Acceso al [--> Blog](https://rawier.vercel.app/es/blog/)

## Gracias por leer la parte 2

&nbsp;

### Fuentes de consulta

- 🔖 [Pentesting, qué es y para qué sirve By Josué López 07/03/2024](https://auditech.es/blog/pentesting-que-es-y-para-que-sirve/)
- 🔖 [Pentesting de Caja Gris by DragonJAR](https://www.dragonjar.org/pentesting-de-caja-gris.xhtml)
- 🔖 *Pentesting playground 101*
