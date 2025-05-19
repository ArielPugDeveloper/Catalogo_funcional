import { RenderMode, ServerRoute } from '@angular/ssr';
import { routesIDs } from './services/routes-ids';

export const serverRoutes: ServerRoute[] = [
{
   path: 'producto/:id',
   renderMode: RenderMode.Prerender,
   async getPrerenderParams() {
      const ids = routesIDs;
      return ids.map(id => ({ id }));
  },
 },
 {
   path: '**',
   renderMode: RenderMode.Prerender
  }
];