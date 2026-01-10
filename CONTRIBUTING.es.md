# Guía de contribución (Blood Studio)

## Objetivo
Este documento define cómo contribuir al repositorio de manera consistente, minimizando conflictos y asegurando calidad.

## Antes de empezar
- Verifica que tu tarea tenga un issue en Jira (por ejemplo BS-52).
- Asegura que tu rama se cree desde `develop`.

## Flujo estándar
1) Sincroniza `develop` local.
2) Crea tu rama de trabajo.
3) Realiza commits siguiendo Conventional Commits.
4) Sube tu rama y abre PR hacia `develop`.
5) Atiende comentarios de revisión y mantén tu rama actualizada.
6) Una vez mergeado, elimina la rama de trabajo (si aplica).

## Reglas de commits
- Usa Conventional Commits.
- Mensajes claros, en presente, describiendo el propósito.
- No hagas commits enormes sin justificación.

## Revisión de código
- Responde comentarios de forma técnica y concreta.
- No mezcles cambios no relacionados; si es necesario, separa en PRs.
- Todo PR debe pasar CI.

## Resolución de conflictos
- Prioriza rebasing o merge desde `develop` según la política del equipo: [POR DEFINIR: rebase vs merge].
- Nunca resuelvas conflictos “a ciegas”; valida ejecución local.

## Checklist previo a PR
- Build local exitoso (cuando aplique).
- Sin archivos temporales o secretos.
- Documentación actualizada si el cambio lo requiere.
