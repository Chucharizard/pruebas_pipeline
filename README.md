# pruebas_pipeline

Demo interactiva con React y Vite para practicar integración continua y despliegue con GitHub Actions.

## Desarrollo local

```bash
npm ci
npm run dev
```

## Workflow personalizado

Archivo: `.github/workflows/deploy.yml`, en la rama `main`.

- Push a `dev`: instala dependencias, revisa el código y compila React.
- Pull request hacia `main`: ejecuta las mismas comprobaciones.
- Push a `main`: comprueba, compila y guarda el artefacto de Pages.
- Con `PAGES_ENABLED=true`: publica desde `main` usando `actions/deploy-pages@v4`.
- `workflow_dispatch`: permite iniciar una ejecución manual desde Actions.

El job de despliegue usa el entorno `github-pages`, con `pages: write` e `id-token: write`. La URL real se muestra en el entorno y en el resumen de la ejecución mediante `steps.deployment.outputs.page_url`.

La compilación usa `/pruebas_pipeline/` como ruta base, incluyendo el favicon y los archivos JavaScript y CSS.

## Activar la publicación

GitHub rechazó activar Pages en este repositorio privado porque el plan actual no lo admite. El build funciona sin activar la publicación.

Una vez que la cuenta y la visibilidad permitan usar Pages:

1. En **Settings > Pages > Build and deployment > Source**, seleccionar **GitHub Actions**.
2. En **Settings > Secrets and variables > Actions > Variables**, crear `PAGES_ENABLED` con valor `true`.
3. En **Actions > React CI y GitHub Pages**, ejecutar **Run workflow** sobre `main`.

URL prevista, todavía no publicada:

https://chucharizard.github.io/pruebas_pipeline/

Documentación: [custom workflows de GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).
