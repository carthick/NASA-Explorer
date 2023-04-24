import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MissionListComponent } from './mission-list/mission-list.component';
import { MissionDetailComponent } from './mission-detail/mission-detail.component'


const routes: Routes = [
  { path: 'missions', component: MissionListComponent },
  { path: 'missions/:id', component: MissionDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
