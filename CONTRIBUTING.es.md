# Guía de contribución — Blood Studio

## Propósito
Este documento define el proceso oficial para contribuir al repositorio **Blood Studio**, con el objetivo de asegurar consistencia, trazabilidad, calidad del código y reducción de conflictos durante el desarrollo colaborativo. Todas las contribuciones deben alinearse con el modelo de ramas, el flujo de Pull Requests y la convención de commits establecida en el README.

---

## Requisitos previos
Antes de iniciar cualquier cambio, el contribuidor debe asegurar lo siguiente:

- La tarea debe estar registrada en Jira dentro del proyecto **BS** (por ejemplo, `BS-52`).
- Se debe contar con el entorno local configurado con **Node.js 20 LTS**.
- Se debe trabajar únicamente mediante ramas de trabajo creadas desde `develop`.
- No se permiten commits directos en `main` ni en `develop`.

---

## Flujo estándar de trabajo
El flujo oficial para desarrollar cambios es el siguiente:

1. Sincronizar el repositorio local con el remoto.
2. Crear una rama de trabajo desde `develop`.
3. Desarrollar el cambio con alcance acotado a una sola incidencia de Jira.
4. Realizar commits bajo Conventional Commits, en español y con referencia a Jira.
5. Subir la rama al remoto.
6. Abrir un Pull Request hacia `develop`.
7. Atender observaciones de revisión y mantener la rama actualizada.
8. Fusionar el Pull Request únicamente cuando cumpla los criterios de aprobación.
9. Eliminar la rama de trabajo cuando el merge haya concluido (si aplica).

---

## Creación de ramas
Las ramas de trabajo se crean desde `develop` y deben nombrarse con la convención obligatoria:

- `feature/BS-<id>-descripcion-corta`
- `bugfix/BS-<id>-descripcion-corta`
- `docs/BS-<id>-descripcion-corta`
- `chore/BS-<id>-descripcion-corta`
- `hotfix/BS-<id>-descripcion-corta` (uso excepcional)

Ejemplos:
- `feature/BS-51-about-us`
- `feature/BS-52-footer`
- `docs/BS-29-github-repo-config`

---

## Convención de commits (obligatoria)
Todos los commits deben cumplir lo siguiente:

- Seguir **Conventional Commits**.
- Estar redactados en **español**.
- Incluir obligatoriamente el identificador de Jira en la **descripción del commit**.

Formato:
`tipo: descripción (BS-<id>)`

Tipos permitidos:
`feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`.

Ejemplos correctos:
- `docs: actualizar lineamientos de contribución (BS-29)`
- `feat: implementar sección Sobre Nosotros (BS-51)`
- `fix: corregir ruta de navegación en About (BS-51)`

Ejemplos incorrectos:
- `update stuff` (no es Conventional Commits, no está en español, no incluye Jira)
- `feat(bs-51): about us` (el id no está en la descripción, además no está en español)
- `feat: implement about us` (no está en español y no incluye Jira)

---

## Actualización de ramas durante el desarrollo
Para mantener una rama de trabajo actualizada, se adopta como política oficial el uso de **merge desde `develop` hacia la rama de trabajo**.

Se prohíbe usar rebase como práctica estándar en ramas compartidas, con el fin de evitar reescritura de historial y reducir riesgos de integración.

Guía operativa recomendada:
- Antes de abrir un PR, integrar cambios recientes de `develop` mediante merge.
- Resolver conflictos de forma consciente y validar localmente.

---

## Pull Requests: reglas y contenido mínimo
Todo cambio debe integrarse mediante Pull Request.

Reglas:
- El PR debe apuntar a `develop` como rama base (excepto hotfix justificado).
- El PR debe estar vinculado a una sola incidencia de Jira siempre que sea posible.
- No mezclar cambios no relacionados en un mismo PR.
- Mantener el PR legible y revisable.

Contenido mínimo:
- Referencia a Jira (por ejemplo `BS-52`).
- Descripción del objetivo del cambio.
- Resumen de cambios.
- Evidencia de validación cuando aplique.

---

## Revisión y criterios de aprobación
Un Pull Request solo puede fusionarse si cumple con:

- **Dos aprobaciones** mínimas por revisores.
- Checks automáticos en verde (CI).
- Rama sin conflictos y actualizada con la base.
- Cumplimiento del modelo de ramas y convención de commits.
- Alcance coherente con la incidencia de Jira asociada.

---

## Buenas prácticas para evitar conflictos
- Sincronizar `develop` antes de crear la rama de trabajo.
- Mantener PRs pequeños y acotados.
- Integrar cambios desde `develop` con frecuencia razonable (merge).
- Evitar editar masivamente archivos que no corresponden a la incidencia.
- Verificar ejecución local cuando el cambio sea funcional.

---

## Manejo de errores y recuperación
Si ocurre un conflicto o fallo de integración:

- No forzar merges sin entender el conflicto.
- Resolver conflictos localmente y validar que el proyecto compila y ejecuta.
- Si el conflicto excede tu contexto, solicitar apoyo del revisor o del líder técnico.
