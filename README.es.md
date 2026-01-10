# Blood Studio

## Propósito del repositorio
Este repositorio contiene el código fuente del proyecto Blood Studio. El objetivo de esta documentación es formalizar el modelo de ramas, el flujo de Pull Requests, las reglas de commits y los criterios de aprobación, de modo que el equipo trabaje de forma consistente y auditable.

## Tecnologías base
Frontend: React + Vite.  
Gestión del trabajo: Jira (proyecto BS).  
Control de versiones: Git + GitHub.

## Modelo de ramas
Este repositorio adopta un modelo de ramas basado en GitFlow simplificado.

### main
`main` representa el código estable. No se permiten commits directos. Todo cambio entra únicamente por Pull Request con revisión y checks aprobados.

### develop
`develop` representa la integración del trabajo en curso. No se permiten commits directos. Todo cambio entra únicamente por Pull Request desde ramas de trabajo.

### Ramas de trabajo
Las ramas de trabajo se crean desde `develop` y se eliminan después del merge.

Convención recomendada:
- `feature/BS-<id>-<descripcion-corta>`
- `bugfix/BS-<id>-<descripcion-corta>`
- `hotfix/BS-<id>-<descripcion-corta>` (solo para incidentes urgentes que impacten a `main`)
- `docs/BS-<id>-<descripcion-corta>`
- `chore/BS-<id>-<descripcion-corta>`

Ejemplos:
- `feature/BS-51-about-us`
- `feature/BS-52-footer`
- `docs/BS-29-github-repo-config`

## Convención de commits (Conventional Commits)
Se adopta Conventional Commits para mantener un historial legible y facilitar automatización futura.

Formato:
`tipo(ambito opcional): descripción`

Tipos permitidos (mínimo):
`feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`.

Regla de trazabilidad:
El mensaje del commit debe incluir el identificador de Jira cuando aplique (por ejemplo: `docs(bs-29): ...` o `feat(about): BS-51 ...`). El equipo definirá el estándar exacto para incluir el id en el ámbito o en la descripción.

## Flujo de Pull Requests
Todo cambio debe pasar por Pull Request.

Destino:
- Ramas `feature/*`, `bugfix/*`, `docs/*`, `chore/*` se integran hacia `develop`.
- `hotfix/*` puede integrarse hacia `main` solo con autorización explícita del equipo y el mismo nivel de controles.

Contenido mínimo de un PR:
- Referencia a Jira (por ejemplo `BS-29`) y descripción del objetivo.
- Alcance acotado: un PR debe corresponder idealmente a una sola incidencia de Jira.
- Evidencia mínima: capturas, descripción de pruebas manuales o verificación de build, según aplique.
- Sin cambios no relacionados (no mezclar refactors amplios con cambios funcionales sin justificación).

## Criterios de aprobación para merge
Un PR solo puede fusionarse si cumple:
- Revisiones aprobadas: [POR DEFINIR: 1 o 2] aprobaciones mínimas.
- Checks obligatorios en verde: build/CI (y los que el equipo agregue).
- Rama actualizada: sin conflictos con la base y con cambios integrados recientes.
- Estándares: convención de commits y convenciones de nombres respetadas.

## Protección de ramas (configuración en GitHub)
Nota: esta configuración solo puede aplicarla un propietario/administrador del repositorio.

Requerimientos para `main` y `develop`:
- Bloquear pushes directos (solo PR).
- Requerir revisión antes de merge.
- Requerir aprobación mínima: [POR DEFINIR].
- Requerir status checks antes de merge: `CI` (workflow).
- Recomendado: requerir rama actualizada antes de merge (si se habilita).
- Recomendado: aplicar reglas también a administradores.

## Primeros pasos para desarrollo local
Requisitos:
- Node.js: [POR DEFINIR: versión LTS, ej. 20]
- NPM (incluido con Node)

Instalación:
1) Clonar repositorio
2) Instalar dependencias con `npm install`
3) Ejecutar `npm run dev`

## Contacto y operación del equipo
- Jira: proyecto BS.
- Política de revisión: [POR DEFINIR: rotación de revisores o CODEOWNERS].
