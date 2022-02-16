import { loadRemoteModule } from '@angular-architects/module-federation';

export const registry = {
  computassere: () =>
    loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:4201/remoteEntry.js',
      exposedModule: './web-components',
    }),
  computas: () =>
    loadRemoteModule({
      type: 'script',
      remoteEntry: 'http://localhost:4204/remoteEntry.js',
      remoteName: 'computas',
      exposedModule: './web-components',
    }),
  karriere: () =>
    loadRemoteModule({
      type: 'script',
      remoteEntry: 'http://localhost:8082/remoteEntry.js',
      remoteName: 'karriere',
      exposedModule: './web-components',
    }),
};
