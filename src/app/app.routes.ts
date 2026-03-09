import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Sobre } from './pages/sobre/sobre';
import { Cadastrar } from './pages/cadastrar/cadastrar';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'sobre', component: Sobre },
  { path: 'cadastrar', component: Cadastrar },
  { path: '**', redirectTo: '' },
];
