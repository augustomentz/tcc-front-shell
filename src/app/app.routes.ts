import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';
import { environment } from 'src/environments/environment';

export const routes: Routes = [
  {
    path: 'carrinho',
    loadComponent: () => loadRemoteModule({
      remoteEntry : environment.mfe.carrinho,
      remoteName : 'tcc-front-carrinho',
      exposedModule : './Component'
    }).then(m => (m.AppComponent)).catch(err => console.log(err))
  },
  {
    path: 'produtos',
    loadComponent: () => loadRemoteModule({
      remoteEntry : environment.mfe.produtos,
      remoteName : 'tcc-front-produtos',
      exposedModule : './Component'
    }).then(m => (m.AppComponent)).catch(err => console.log(err))
  },
  {
    path: 'vendas',
    loadComponent: () => loadRemoteModule({
      remoteEntry : environment.mfe.vendas,
      remoteName : 'tcc-front-vendas',
      exposedModule : './Component'
    }).then(m => (m.AppComponent)).catch(err => console.log(err))
  }
];
