# Blood Studio

## General project description
This repository contains the source code of the **Blood Studio** project, developed under a collaborative approach using Git and GitHub for version control, and Jira for work management. The main purpose of this document is to formally and explicitly define the repository governance rules, ensuring that the entire team works in a consistent, traceable, and professionally aligned manner.

This README defines the branch model, the Pull Request workflow, commit rules, approval criteria, and basic guidelines for local development.

---

## Core project technologies
The project is based on the following technologies and tools:

- Frontend: React with Vite.
- Version control: Git and GitHub.
- Work management and tracking: Jira (BS project).
- Standard runtime environment: Node.js 20 LTS.

---

## Branching model
The repository adopts a simplified GitFlow-inspired branching model, adapted to the needs of the team and the project.

### `main` branch
The `main` branch represents the stable state of the project. It contains only code that has been reviewed, approved, and considered ready for formal integration.

Rules:
- Direct commits are not allowed.
- All changes must be introduced through Pull Requests.
- Prior review and approval are required.
- The branch must always remain in a functional state.

### `develop` branch
The `develop` branch is the main integration branch for ongoing work. It consolidates features and changes that will be part of the next project version.

Rules:
- Direct commits are not allowed.
- All changes must be introduced through Pull Requests from working branches.
- It is the base branch for creating new development branches.

### Working branches
Working branches are always created from `develop` and have a specific and limited purpose. These branches are temporary and must be deleted once the corresponding Pull Request has been merged.

Mandatory naming convention:
- `feature/BS-<id>-short-description`
- `bugfix/BS-<id>-short-description`
- `docs/BS-<id>-short-description`
- `chore/BS-<id>-short-description`
- `hotfix/BS-<id>-short-description` (exceptional and justified use)

Valid examples:
- `feature/BS-51-about-us`
- `feature/BS-52-footer`
- `docs/BS-29-github-repo-config`

---

## Commit convention
The project strictly adopts the **Conventional Commits** specification for all commit messages.

General format:
`type: description`

Allowed types:
- `feat`: new functionality.
- `fix`: bug fix.
- `docs`: documentation changes.
- `style`: formatting changes without logic impact.
- `refactor`: code restructuring without functional changes.
- `test`: addition or modification of tests.
- `chore`: maintenance or configuration tasks.

Mandatory rules:
- All commit messages must be written in **Spanish**.
- The Jira issue identifier must be included in the **commit description**.

Correct examples:
- `docs: configurar documentación del repositorio (BS-29)`
- `feat: implementar sección Sobre Nosotros (BS-51)`
- `chore: configurar workflow de CI para el proyecto (BS-29)`

---

## Pull Request workflow
All changes to the repository must be made through Pull Requests.

General rules:
- Working branches are always merged into `develop`.
- Pull Requests to `main` are only allowed from `develop` or justified `hotfix` branches.
- Each Pull Request should ideally correspond to a single Jira issue.

Minimum Pull Request content:
- Clear reference to the Jira issue (e.g., BS-29).
- Description of the change objective.
- Summary of changes made.
- Validation evidence when applicable.

---

## Merge approval criteria
A Pull Request may only be merged if it meets all of the following criteria:

- A minimum of **two reviewer approvals**.
- All automated checks (CI) passing successfully.
- The branch is up to date with its base (`develop` or `main`).
- Compliance with commit conventions and the branching model.
- Scope aligned with the associated Jira issue.

---

## Branch update policy
To keep working branches up to date, the project adopts a **merge-from-`develop`** policy.

Rebase is not used as a standard practice on shared branches. This approach prioritizes history safety and traceability of the integration process.

---

## Branch protection on GitHub
Branch protection rules must be configured by a repository owner or administrator on GitHub.

Requirements for `main` and `develop`:
- Direct commits blocked.
- Pull Requests required.
- Minimum of two approvals required.
- Required CI checks must pass before merging.
- Recommended: apply rules to administrators as well.

---

## Local development setup
Requirements:
- Node.js 20 LTS.
- npm included with Node.js.

Basic steps:
1. Clone the repository.
2. Run `npm install`.
3. Run `npm run dev` for the development environment.

---

## Final considerations
Compliance with these rules is mandatory for all team members. This document aims to reduce ambiguity, prevent conflicts, and ensure an orderly, auditable development process aligned with professional best practices.
