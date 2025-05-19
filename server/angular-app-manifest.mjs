
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://ArielPugDeveloper.github.io/Catalogo_funcional/',
  locale: undefined,
  routes: [
  {
    "renderMode": 0,
    "route": "/Catalogo_funcional"
  },
  {
    "renderMode": 0,
    "route": "/Catalogo_funcional/producto/*"
  },
  {
    "renderMode": 0,
    "route": "/Catalogo_funcional/carrito"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 23616, hash: 'a8b31ef9e34703a55e99b6fbab45fa7f27b765d3dd8d6dce3476d1ca076d59e7', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17190, hash: '3f85f8c73348f66301f30535a73f4abe8082eebbb50c4520f323c78f1c340228', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-36AW6TKX.css': {size: 6979, hash: 'vY6tjD/ce7M', text: () => import('./assets-chunks/styles-36AW6TKX_css.mjs').then(m => m.default)}
  },
};
