# Uso de IA

Aquí documento cómo usé IA en este proyecto: qué le pedí, qué entendí y qué cambié yo.


## 1. Herramientas
- Claude
- VS Code, Git y GitHub, sin IA.

## 2. Para qué se usaron
- Guía paso a paso de comandos de terminal y Git, y de la creación del proyecto con Vite, React y TypeScript.
- Generación de código: componentes, tipos, archivos de datos, rutas, hooks (tema, filtro, título de página y repositorios), formulario con validación, servicio de la API de GitHub, contexto del tema y estilos de animación.
- Diagnóstico de errores a partir de capturas de pantalla y dando partes textuales del código.
- Mejora en la Redacción de plantillas de README, INVENTARIO.md y uso_ia.md.
- Lectura de la rúbrica y estimación de puntaje, usada solo como orientación.

## 3. Prompts
Mensajes que envié, parafraseados:
- "Revisa toda la rúbrica, dime un puntaje y si mi página y mi repositorio cumplen con lo solicitado."
- "¿Aparece algo en el README que deba cambiar?"
- Capturas de errores de la terminal y de VS Code, para identificar su causa.
- "Generame ua idea de como deberia de verse la estructura de mi codigo tomando de ejemplo mi proyecto 3.

## 4. Qué se recibió
- Comandos y la estructura de carpetas del proyecto.
- Código de los componentes, hooks, tipos, datos, servicio de la API, contexto del tema y CSS adicional, generado por Claude a partir de mis instrucciones y del diseño de mi portafolio de la E2. Yo lo copié a los archivos del proyecto.
- Plantillas de README, INVENTARIO.md, uso_ia.md y la idea de la descripción de los pull requests.
- Un análisis de la rúbrica que señaló lo pendiente: nombre del repositorio, Context API, documentos y flujo con ramas y pull requests.

## 5. Qué se ajustó y cómo se verificó
Trabajo propio:
- El diseño, los textos, la paleta, las tipografías y el CSS base provienen de mi portafolio de la E2.
- Ubiqué el repositorio de la E2 (web01jesus) y lo clonamos como referencia.
- Resolví errores de ejecución: la creación del proyecto con Vite falló en una carpeta con README y la rehice con una carpeta temporal, corregí rutas al copiar el CSS y reemplacé los archivos App.tsx y main.tsx de la plantilla.
- Trabajé en ramas con pull requests, commits convencionales y revisión de mis propios cambios.

Verificación:
- `npm run build` y `npm run lint`, sin errores.
- Pruebas manuales en el navegador: rutas y página 404, menú móvil, modo claro/oscuro con memoria al recargar, filtro de proyectos, formulario con validación y confirmación, y carga de repositorios desde la API de GitHub.
- Comparación visual con la captura de la E2 
- Revisión de accesibilidad con Lighthouse

## 6. Reflexión final
El uso de IA aceleró el desarrollo y permitió completar un proyecto más amplio dentro del plazo. Su riesgo principal es obtener código que funciona sin comprenderlo, por eso verifiqué cada paso en el navegador, corregí los errores que aparecieron y documenté qué parte proviene de la IA y qué parte es propia.

- Lo que entiendo bien: El funcionamiento de levantar el programa, las ramas, los comandos y en general el como funciona y como llega esa información a la página.
- Lo que debo repasar: El ambito teórico y el poder resolver en momentos cuando tengo poco plazo para entregar el proyecto.
- Lo que haría distinto: Intentar buscar soluciones por mi cuenta.