import { NgModule } from '@angular/core';
import { MainComponent } from './main/main.component';
import { SetComponent } from './set/set.component';
import { SearchPageComponent } from './search-page/search-page.component'
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    title: 'Main'
  },
  {
    path: 'set/:id',
    component: SetComponent,
    title: 'Set'
  },
  {
    path: 'search',
    component: SearchPageComponent,
    title: 'Search'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
