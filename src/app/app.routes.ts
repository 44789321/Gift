import { Routes } from '@angular/router';
// Import components
import { FlowerComponent } from './pages/flower/flower.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent},
  {path: 'flower', component: FlowerComponent},
];
