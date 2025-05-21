
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://ArielPugDeveloper.github.io/Catalogo_funcional/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-PXN7EHW4.js",
      "chunk-ZSIHYTTK.js",
      "chunk-FS36DUOG.js"
    ],
    "route": "/Catalogo_funcional"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-PQU5ALRA.js",
      "chunk-ZSIHYTTK.js"
    ],
    "route": "/Catalogo_funcional/producto/custom-id"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-PQU5ALRA.js",
      "chunk-ZSIHYTTK.js"
    ],
    "route": "/Catalogo_funcional/producto/custom-id1"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-PQU5ALRA.js",
      "chunk-ZSIHYTTK.js"
    ],
    "route": "/Catalogo_funcional/producto/etc."
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-PQU5ALRA.js",
      "chunk-ZSIHYTTK.js"
    ],
    "route": "/Catalogo_funcional/producto/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-KMXDGFEK.js",
      "chunk-FS36DUOG.js"
    ],
    "route": "/Catalogo_funcional/carrito"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 23718, hash: 'e2cf757f892405885cc4352b6f142b0a33a12e14482f4ab577c2ac0fb284448d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17292, hash: 'c6781c799be48824cd18fd2f15a5fb8a73688dd991277c2065a4f8a5870a4039', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'producto/custom-id/index.html': {size: 25356, hash: '1c94c7881b1c67a03147058c66abca2a3755fdeb104cfaecf2ca43df04a60f3f', text: () => import('./assets-chunks/producto_custom-id_index_html.mjs').then(m => m.default)},
    'producto/custom-id1/index.html': {size: 25356, hash: '1c94c7881b1c67a03147058c66abca2a3755fdeb104cfaecf2ca43df04a60f3f', text: () => import('./assets-chunks/producto_custom-id1_index_html.mjs').then(m => m.default)},
    'carrito/index.html': {size: 26002, hash: 'bb910cb70feffa978e6e3a2a8905bc866a186f5dae5b18bcafc4af08c51a5bc6', text: () => import('./assets-chunks/carrito_index_html.mjs').then(m => m.default)},
    'producto/etc./index.html': {size: 25356, hash: '1c94c7881b1c67a03147058c66abca2a3755fdeb104cfaecf2ca43df04a60f3f', text: () => import('./assets-chunks/producto_etc__index_html.mjs').then(m => m.default)},
    'index.html': {size: 26021, hash: '22a63a54c1ef8eac7b28ea86672b44bde799258d25049668b2e2aa799eaf3dca', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-36AW6TKX.css': {size: 6979, hash: 'vY6tjD/ce7M', text: () => import('./assets-chunks/styles-36AW6TKX_css.mjs').then(m => m.default)}
  },
};
