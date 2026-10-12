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

## Publicación configurada

El repositorio es público y GitHub Pages está activado con **GitHub Actions** como origen. La variable `PAGES_ENABLED` está configurada con valor `true`.

Para revisar la configuración o repetir un despliegue:

1. En **Settings > Pages > Build and deployment > Source**, comprobar **GitHub Actions**.
2. En **Settings > Secrets and variables > Actions > Variables**, comprobar `PAGES_ENABLED=true`. Usar `false` para detener los futuros despliegues sin desactivar los builds.
3. En **Actions > React CI y GitHub Pages**, ejecutar **Run workflow** sobre `main`.

URL publicada:

https://chucharizard.github.io/pruebas_pipeline/

Documentación: [custom workflows de GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).
