# Blood Studio

## Descripción general del proyecto
Este repositorio contiene el código fuente del proyecto **Blood Studio**, desarrollado bajo un enfoque colaborativo, con control de versiones mediante Git y GitHub, y gestión del trabajo a través de Jira. El objetivo principal de este documento es establecer de manera formal y explícita las reglas de gobernanza del repositorio, de modo que todo el equipo trabaje de forma consistente, trazable y alineada a buenas prácticas profesionales.

Este README define el modelo de ramas, el flujo de Pull Requests, las reglas de commits, los criterios de aprobación y los lineamientos básicos para el desarrollo local.

---

## Tecnologías base del proyecto
El proyecto utiliza las siguientes tecnologías y herramientas como base:

- Frontend: React con Vite.
- Control de versiones: Git y GitHub.
- Gestión de trabajo y seguimiento: Jira (proyecto BS).
- Entorno de ejecución estándar: Node.js 20 LTS.

---

## Modelo de ramas
El repositorio adopta un modelo de ramas inspirado en GitFlow simplificado, adaptado a las necesidades del equipo y del proyecto.

### Rama `main`
La rama `main` representa el estado estable del proyecto. Contiene únicamente código que ha sido revisado, aprobado y considerado listo para integración formal.

Reglas:
- No se permiten commits directos.
- Todos los cambios deben ingresar mediante Pull Request.
- Requiere revisión y aprobación previa.
- Debe mantenerse siempre en un estado funcional.

### Rama `develop`
La rama `develop` es la rama principal de integración del trabajo en curso. En ella se consolidan las funcionalidades y cambios que formarán parte de la siguiente versión del proyecto.

Reglas:
- No se permiten commits directos.
- Todos los cambios ingresan mediante Pull Request desde ramas de trabajo.
- Es la rama base para la creación de nuevas ramas de desarrollo.

### Ramas de trabajo
Las ramas de trabajo se crean siempre a partir de `develop` y tienen un propósito específico y acotado. Estas ramas son temporales y deben eliminarse una vez que el Pull Request correspondiente ha sido fusionado.

Convención de nombres obligatoria:
- `feature/BS-<id>-descripcion-corta`
- `bugfix/BS-<id>-descripcion-corta`
- `docs/BS-<id>-descripcion-corta`
- `chore/BS-<id>-descripcion-corta`
- `hotfix/BS-<id>-descripcion-corta` (uso excepcional y justificado)

Ejemplos válidos:
- `feature/BS-51-about-us`
- `feature/BS-52-footer`
- `docs/BS-29-github-repo-config`

---

## Convención de commits
El proyecto adopta estrictamente la especificación **Conventional Commits** para todos los mensajes de commit.

Formato general:
`tipo: descripción`

Tipos permitidos:
- `feat`: nueva funcionalidad.
- `fix`: corrección de errores.
- `docs`: cambios en documentación.
- `style`: cambios de formato sin impacto en lógica.
- `refactor`: reestructuración de código sin cambio funcional.
- `test`: adición o modificación de pruebas.
- `chore`: tareas de mantenimiento o configuración.

Reglas obligatorias:
- Todos los mensajes de commit deben redactarse en **español**.
- El identificador de la incidencia de Jira debe incluirse obligatoriamente en la **descripción del commit**.

Ejemplos correctos:
- `docs: configurar documentación del repositorio (BS-29)`
- `feat: implementar sección Sobre Nosotros (BS-51)`
- `chore: configurar workflow de CI para el proyecto (BS-29)`

---

## Flujo de Pull Requests
Todo cambio al repositorio debe realizarse mediante Pull Request.

Reglas generales:
- Las ramas de trabajo se fusionan siempre hacia `develop`.
- Los Pull Requests hacia `main` se realizan únicamente desde `develop` o desde ramas `hotfix` justificadas.
- Cada Pull Request debe corresponder, idealmente, a una sola incidencia de Jira.

Contenido mínimo de un Pull Request:
- Referencia clara a la incidencia de Jira (por ejemplo BS-29).
- Descripción del objetivo del cambio.
- Resumen de los cambios realizados.
- Evidencia de validación cuando aplique.

---

## Criterios de aprobación para merge
Un Pull Request solo puede ser fusionado si cumple con todos los siguientes criterios:

- Mínimo de **dos aprobaciones** de revisores.
- Todos los checks automáticos (CI) en estado exitoso.
- Rama actualizada respecto a la base (`develop` o `main`).
- Cumplimiento de la convención de commits y del modelo de ramas.
- Alcance coherente con la incidencia de Jira asociada.

---

## Política de actualización de ramas
Para mantener las ramas de trabajo actualizadas, el proyecto adopta la política de **merge desde `develop` hacia la rama de trabajo**.

No se utiliza rebase como práctica estándar en ramas compartidas. Este enfoque prioriza la seguridad del historial y la trazabilidad del proceso de integración.

---

## Protección de ramas en GitHub
La configuración de protección de ramas debe ser aplicada por un propietario o administrador del repositorio en GitHub.

Requisitos para `main` y `develop`:
- Bloqueo de commits directos.
- Obligatoriedad de Pull Requests.
- Requerir mínimo dos aprobaciones.
- Requerir que los checks de CI pasen antes de permitir el merge.
- Recomendado: aplicar reglas también a administradores.

---

## Configuración del entorno local
Requisitos:
- Node.js 20 LTS.
- npm incluido con Node.js.

Pasos básicos:
1. Clonar el repositorio.
2. Ejecutar `npm install`.
3. Ejecutar `npm run dev` para entorno de desarrollo.

---

## Consideraciones finales
El cumplimiento de estas reglas es obligatorio para todos los miembros del equipo. Este documento busca reducir ambigüedad, prevenir conflictos y garantizar un desarrollo ordenado, auditable y alineado con buenas prácticas profesionales.
