import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SectionAboutComponent } from './section-about/section-about.component';
import { SectionForsoegComponent } from './section-forsoeg/section-forsoeg.component';


const routes: Routes = [
  { path: '', component: SectionAboutComponent },
  { path: 'forsoeg', component: SectionForsoegComponent, outlet: 'outlet1'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
