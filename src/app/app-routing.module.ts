import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SectionAboutComponent } from './section-about/section-about.component';
import { AddExperimentComponent } from './addexperiment/addexperiment.component';


const routes: Routes = [
  { path: '', component: SectionAboutComponent },
  { path: 'addforsoeg', component: AddExperimentComponent},
  { path: 'editforsoeg/:experimentId', component: AddExperimentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
