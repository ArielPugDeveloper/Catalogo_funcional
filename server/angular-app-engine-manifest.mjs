
export default {
  basePath: 'https://ArielPugDeveloper.github.io/Catalogo_funcional',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
