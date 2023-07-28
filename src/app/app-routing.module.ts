import { NgModule } from '@angular/core';
import { MainComponent } from './main/main.component';
import { SetComponent } from './set/set.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    title: 'Main'
  },
  {
    path: 'set/:name',
    component: SetComponent,
    title: 'Set'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
