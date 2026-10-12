# pruebas_pipeline

Práctica de una página estática hecha únicamente con HTML y CSS, publicada con un workflow personalizado de GitHub Actions.

## Archivos

```text
.github/
  workflows/
    deploy.yml
index.html
styles.css
```

Para verla localmente, abrir `index.html` en el navegador.

## Despliegue

El archivo `.github/workflows/deploy.yml` sigue el ejemplo del docente:

1. `actions/checkout@v6`: descarga el código.
2. `actions/configure-pages@v5`: prepara Pages.
3. `actions/upload-pages-artifact@v4`: sube los archivos desde `path: '.'`.
4. `actions/deploy-pages@v4`: publica y devuelve `page_url`.

Se ejecuta al hacer push a `main`, o manualmente desde **Actions > Deploy pagina estatica en pages > Run workflow**, seleccionando `main`.

`dev` es la rama de trabajo. Para publicar sus cambios, incorporarlos a `main` y hacer push.

En **Settings > Pages > Source** está seleccionado **GitHub Actions**. El entorno `github-pages` muestra la URL real mediante `${{ steps.deployment.outputs.page_url }}`.

Web: https://chucharizard.github.io/pruebas_pipeline/

Las rutas de los archivos son relativas (`./styles.css`), por lo que funcionan tanto al abrir el HTML localmente como bajo `/pruebas_pipeline/`.
