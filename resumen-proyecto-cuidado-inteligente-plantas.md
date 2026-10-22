# Proyecto: plataforma inteligente para el cuidado de plantas

## Resumen ejecutivo

Plataforma de cuidado de plantas de interior que combina guía, seguimiento y automatización en una sola experiencia. Cada persona puede empezar solo con la aplicación y avanzar gradualmente hacia sensores y riego automático según su presupuesto, interés y nivel de delegación.

## Concepto y cliente inicial

**Concepto de trabajo:** un sistema inteligente e integral que ayuda a mantener saludables las plantas con poco esfuerzo, adaptándose a cada planta y al grado de automatización que el usuario quiera.

**Cliente inicial:** persona que vive en un apartamento, tiene entre 3 y 10 plantas ornamentales y pocos conocimientos de jardinería. Quiere cuidarlas mejor sin dedicarles demasiado tiempo ni enfrentarse a una instalación compleja.

## Problema

El cuidado falla por olvido, desconocimiento o falta de seguimiento. Es difícil saber cuándo y cuánto regar, qué condiciones requiere cada planta, si su ubicación e iluminación son adecuadas y cómo interpretar cambios en su estado. Las soluciones basadas en muchos dispositivos independientes también pueden resultar costosas y difíciles de instalar.

## Propuesta de valor

Una única plataforma sencilla que orienta y acompaña el cuidado de cada planta y, cuando el usuario lo desea, automatiza tareas. El usuario puede elegir desde una experiencia de guía y journal sin hardware hasta una configuración más autónoma con sensores y riego.

La pizarra añade beneficios a validar: **comodidad, aprendizaje, facilidad y estética**, junto con automatización. Una versión de trabajo sería: *“Ayudamos a personas que olvidan regar sus plantas o desconocen sus necesidades específicas con una solución inteligente, integral, sencilla y adaptable que optimiza su cuidado y les brinda comodidad, facilidad y nuevos conocimientos.”*

## Diferenciadores centrales

- **Automatización progresiva:** comenzar manualmente y añadir capacidades físicas cuando aporten valor.
- **Personalización centrada en IA:** adaptar recomendaciones al tipo de planta, su entorno, historial, observaciones y datos disponibles.
- **Ecosistema integral y modular:** aplicación, datos y dispositivos comparten una experiencia; se busca reducir instalaciones y compras innecesarias.
- **Accesibilidad:** configuración comprensible, instalación práctica y utilidad incluso sin comprar gadgets.

## Módulos funcionales

1. **Plant Intelligence:** perfil y necesidades estimadas de cada planta; recomendaciones contextualizadas y explicación de por qué se sugieren.
2. **Plant Journal:** inventario, registro manual de riegos y observaciones, fotos, historial, guía y recordatorios.
3. **Smart Monitoring:** lectura de sensores compatibles —por ejemplo humedad del sustrato, temperatura y luz— y visualización de tendencias y alertas.
4. **Smart Automation:** ejecución de acciones como riego por goteo mediante dispositivos compatibles, con estado, límites y controles accesibles para el usuario.

Los módulos son capacidades de una plataforma común, no necesariamente productos separados. La persona podría usar solo Plant Journal o combinar los cuatro.

## Niveles de experiencia y flujo de información

La pizarra propone ordenar el producto en cuatro niveles crecientes, según la interacción y el hardware requerido:

| Nivel | Experiencia | Flujo conceptual | Hardware |
|---|---|---|---|
| 1 | Registro y control | Persona ↔ aplicación/IA; orientación educativa y registro | No |
| 2 | Asistente | IA ↔ persona; recomendaciones y seguimiento | No |
| 3 | Monitoreo | Sensores → IA → persona; información y alertas | Sí |
| 4 | Ejecución | Sensores → IA/reglas → dispositivo; acciones automatizadas | Sí |

La secuencia permite que la app sea útil desde los primeros niveles y que la automatización sea opcional. La dirección freemium propuesta es ofrecer journal y guía gratis, con IA y automatización en un plan de pago; falta validarla con usuarios.

## Arquitectura conceptual y seguridad

- **Aplicación:** alta y perfil de plantas, preferencias, journal, recomendaciones, notificaciones y controles.
- **Capa de datos y servicios:** historial por planta, reglas de cuidado, integración de datos ambientales y conexión con dispositivos.
- **Capa de IA:** interpreta contexto, observaciones e historial; genera recomendaciones y ayuda a priorizar posibles problemas. Debe comunicar incertidumbre y pedir confirmación cuando los datos no basten.
- **Capa de dispositivos:** sensores y actuadores comerciales conectados por una pasarela o integración compatible, según la selección del MVP.

**Distinción de seguridad:** la IA asesora e interpreta; los controles deterministas gobiernan los actuadores. El riego debe obedecer límites explícitos (dosis máxima, duración, frecuencia, condiciones de bloqueo), validación de lecturas y un mecanismo para detener o desactivar la automatización. La IA no debería activar directamente una bomba sin pasar por esas reglas. Diseñar para fallos de conexión o sensores y permitir operación manual.

## Variables observadas y acciones posibles

La pizarra identifica como entradas ambientales **temperatura, humedad e iluminación**. La cámara sería la del **celular**, usada desde la app para tomar y compartir fotos puntuales de las plantas; no implica instalar una cámara fija. Como salidas se anotan **bomba/agua** y **nutrientes**. Para el primer prototipo se prioriza el riego; la dosificación de nutrientes se reserva para un piloto posterior.

## Hardware modular

Para el MVP, priorizar componentes comerciales existentes —sensores y kits de riego/p bombas de baja tensión compatibles— para validar la experiencia y las integraciones antes de diseñar electrónica propia. Empezar con una configuración mínima y ampliable; la cantidad de sensores dependerá del caso de uso y del costo de instalación. Si se validan demanda, fiabilidad y requisitos de integración, evaluar hardware propio más adelante.

## Alcance propuesto del MVP

- Aplicación con inventario de plantas, perfiles básicos y configuración guiada.
- Journal manual de cuidados y observaciones, con recordatorios configurables.
- Recomendaciones iniciales personalizadas a partir de especie o perfil, entorno declarado e historial; indicar límites cuando falte información.
- Captura opcional de fotos con la cámara del celular desde la app para enriquecer el perfil y las consultas; sin prometer diagnóstico visual avanzado.
- Integración con un conjunto acotado de sensores comerciales y lectura de humedad/temperatura, según disponibilidad técnica.
- Un flujo de riego automatizado y acotado para una configuración controlada, con confirmación, límites, registro y control manual. Nutrientes quedan para un piloto posterior.
- Pruebas con usuarios del perfil inicial para evaluar facilidad de instalación, utilidad, confianza, costo y disposición a continuar.

## Fuera del MVP / por validar después

- **Fertilización automatizada** con cápsulas o dosificación de nutrientes: requiere validar compatibilidad, dosificación y riesgos para las plantas.
- **Diagnóstico visual avanzado** mediante cámara: dejar para después de validar calidad, privacidad, condiciones de captura y utilidad frente a una descripción/foto puntual.
- **Compatibilidad universal** con cualquier planta, sensor, hogar o ecosistema: empezar con un conjunto limitado y documentado.
- Automatización integral de todas las tareas de cuidado; el MVP debe demostrar un caso de valor concreto.

## Modelo de negocio: hipótesis

**Dirección preferida por el equipo, aún por validar comercialmente:** versión gratuita con journal y guía; funciones de IA y automatización en un plan de pago. El hardware modular podría venderse aparte o como kit, sujeto a validar costos y disposición a pagar.

Validar qué funciones de IA tienen suficiente valor para la suscripción, así como disposición a pagar, costos de soporte/hardware, retención y valor recurrente.

## Equipo y contexto de capacidades

El proyecto cuenta con un equipo de aproximadamente **8 personas** y un nivel de habilidades declarado como **intermedio**. La conversación no precisa disciplinas, herramientas, presupuesto ni stack tecnológico; se deben inventariar antes de cerrar el plan técnico. Conviene asignar responsables de producto/UX, aplicación y backend, IoT/hardware, IA/datos y validación con usuarios, aunque una persona pueda cubrir más de un frente.

## Riesgos y preguntas abiertas

- ¿Qué tarea concreta duele más al usuario inicial: recordar, saber cuánto regar o detectar que algo va mal?
- ¿Qué combinación mínima de sensores mejora decisiones lo suficiente como para justificar instalación y costo?
- ¿Qué plantas y condiciones se soportarán primero, y cómo se manejarán recomendaciones con incertidumbre?
- ¿Qué estándar, pasarela y dispositivos comerciales se integrarán en el MVP?
- ¿Cómo garantizar límites de riego seguros, funcionamiento ante fallos y una instalación apta para apartamentos?
- ¿Qué datos e imágenes se guardarán, por cuánto tiempo y con qué controles de privacidad?
- ¿Qué modelo de ingresos mantiene accesible la experiencia básica y cubre costos de IA, hardware y soporte?
- ¿Qué evidencia de entrevistas o pruebas confirma que el problema y la solución importan al segmento elegido?

## Próximos pasos

1. Entrevistar y observar a personas del perfil inicial; ordenar sus problemas y soluciones actuales.
2. Elegir un caso de uso y un conjunto pequeño de plantas para el piloto.
3. Dibujar el recorrido de usuario desde el modo solo-app hasta el primer dispositivo y medir fricción de instalación.
4. Comparar componentes comerciales, costo total, conectividad, disponibilidad y límites seguros; seleccionar una configuración de prueba.
5. Prototipar Plant Journal y recomendaciones básicas antes de ampliar la automatización.
6. Definir criterios de éxito del MVP (activación, facilidad de instalación, seguimiento, confianza, salud de plantas y disposición a pagar).
7. Probar el flujo de riego acotado con controles deterministas y revisión humana antes de considerar mayor autonomía.
