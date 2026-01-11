# BS-28 – Inicialización del proyecto React

Este documento define el procedimiento oficial para inicializar el proyecto **Blood Studio** en el entorno local de cada desarrollador. Su objetivo es garantizar que todo el equipo pueda clonar, instalar, ejecutar y contribuir al proyecto de forma consistente, escalable y alineada con la gobernanza establecida en el `README.md` principal del repositorio.

Repositorio oficial del proyecto:  
https://github.com/Naye2008/Blood-Studio

Este archivo complementa al `README.md` principal. El README define la gobernanza (ramas, commits y PRs); este documento describe el **proceso operativo paso a paso** para el arranque del proyecto.

---

## 1. Requisitos previos obligatorios

Antes de iniciar, cada desarrollador debe contar con las herramientas mínimas requeridas por el proyecto. El incumplimiento de estos requisitos provoca inconsistencias de entorno y errores de integración.

Herramientas requeridas:
- Node.js **20 LTS**
- npm
- Git
- Editor de código (VS Code ya está contemplado)

Validación obligatoria en terminal:

node -v  
npm -v  
git --version  
git config --global user.name  
git config --global user.email  

Si alguno de estos comandos falla o no devuelve información válida, el desarrollador debe corregir su instalación antes de continuar.

---

## 2. Clonado del repositorio y validación inicial

El proyecto debe clonarse únicamente desde el repositorio oficial. Después del clonado, es obligatorio validar el estado del repositorio local.

Comandos:

git clone https://github.com/Naye2008/Blood-Studio.git  
cd Blood-Studio  
git remote -v  
git status  
git branch -vv  

Criterio de éxito:
- El remoto `origin` apunta al repositorio oficial
- El árbol de trabajo está limpio
- Se identifica claramente la rama actual

---

## 3. Modelo de ramas y flujo oficial del proyecto

La rama base diaria del proyecto es **develop**.  
La rama **main** representa el estado estable del producto.

Reglas obligatorias:
- No se trabaja directamente sobre `main`
- Todo desarrollo parte desde `develop`
- La integración se realiza mediante Pull Requests
- Flujo confirmado: **PR a develop y posteriormente PR a main**

Posicionamiento obligatorio antes de iniciar cualquier tarea:

git fetch origin  
git checkout develop  
git pull origin develop  

Este paso debe repetirse antes de crear cualquier rama de trabajo.

---

## 4. Instalación y ejecución del proyecto React + Vite

El proyecto React fue inicializado en la **raíz del repositorio** utilizando Vite. No existe carpeta `frontend`.

Instalación de dependencias y ejecución:

npm install  
npm run dev  

Criterio de éxito:
- El servidor de desarrollo levanta sin errores
- Vite muestra la URL local en la terminal

Validación recomendada antes de contribuir:

npm run build  

Si el build falla, el problema debe corregirse antes de abrir Pull Request.

---

## 5. Variables de entorno y preparación para back end

El proyecto no debe utilizar URLs hardcodeadas para consumir el back end. Todas las integraciones se realizan mediante variables de entorno con el prefijo `VITE_`.

Cada desarrollador debe crear un archivo `.env` local (no versionado si contiene datos sensibles).

Creación del archivo:

macOS / Linux:
touch .env

Windows PowerShell:
ni .env

Variable estándar utilizada por el proyecto:

VITE_API_BASE_URL=http://localhost:8080/api

Toda llamada al back end debe construirse a partir de esta variable.

---

## 6. Creación de ramas por tarea (ejemplo BS-28)

Cada tarea se desarrolla en una rama específica creada desde `develop`.

Ejemplo para BS-28:

git checkout develop  
git pull origin develop  
git checkout -b docs/BS-28-inicializacion-react  

Convención general de ramas:
- feature/BS-<id>-descripcion
- bugfix/BS-<id>-descripcion
- docs/BS-<id>-descripcion
- chore/BS-<id>-descripcion
- hotfix/BS-<id>-descripcion (uso excepcional)

---

## 7. Convención de commits y preparación para PR

El proyecto utiliza Conventional Commits en español y con referencia obligatoria a Jira.

Ejemplo válido para esta tarea:

docs: inicialización del proyecto React (BS-28)

Antes de hacer commit, se recomienda validar:

npm run build  

Flujo de commit:

git add .  
git commit -m "docs: inicialización del proyecto React (BS-28)"  
git push -u origin docs/BS-28-inicializacion-react  

---

## 8. Pull Requests y promoción a main

El flujo oficial de integración es de dos etapas:

1. Pull Request desde la rama de trabajo hacia `develop`
2. Pull Request de promoción desde `develop` hacia `main`

Reglas mínimas para permitir merge:
- Pull Request obligatorio
- Revisiones aprobadas
- Checks automáticos en verde
- Rama actualizada respecto a la base

Después de cada merge, el desarrollador debe sincronizar su entorno local:

git checkout develop  
git pull origin develop  

---

## 9. Criterio de finalización

Se considera que un desarrollador inicializó correctamente el proyecto cuando puede clonar el repositorio, posicionarse en `develop`, instalar dependencias, ejecutar el servidor de desarrollo, validar el build y participar en el flujo de Pull Requests conforme a la gobernanza del proyecto.
