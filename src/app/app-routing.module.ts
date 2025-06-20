import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',           // rota vazia: quando abre o app sem caminho
    redirectTo: 'home', // redireciona para a rota 'home'
    pathMatch: 'full'   // para casar a rota vazia exatamente, é obrigatório
  },
  {
    path: 'home',       // rota para a página home
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
    // carrega o módulo da página home de forma lazy loading (sob demanda)
  },
  {
    path: 'details',
    loadChildren: () => import('./pages/details/details.module').then( m => m.DetailsPageModule)
  },
  {
    path: 'detailsgit',
    loadChildren: () => import('./pages/detailsgit/detailsgit.module').then( m => m.DetailsgitPageModule)
  },
  // aqui você pode adicionar outras rotas, tipo 'about', 'profile', etc.
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    // Configura as rotas principais do app e carrega os módulos rapidamente
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'details/:name',
    loadChildren: () =>
      import('./pages/details/details.module').then(m => m.DetailsPageModule)
  }
];
