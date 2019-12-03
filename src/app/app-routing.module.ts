import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SectionAboutComponent } from './section-about/section-about.component';
import { AddExperimentComponent } from './addexperiment/addexperiment.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { StorefrontComponent } from './storefront/storefront.component';



const routes: Routes = [
  { path: '', component: SectionAboutComponent },
  { path: 'addforsoeg', component: AddExperimentComponent},
  { path: 'editforsoeg/:experimentId', component: AddExperimentComponent},
  { path: 'calculator', component: CalculatorComponent },
  { path: 'storefront', component: StorefrontComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
