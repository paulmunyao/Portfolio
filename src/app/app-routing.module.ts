import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { ResearchComponent } from './research/research.component';
import { BlogComponent } from './blog/blog.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'projects', component:ProjectsComponent},
  {path:'research', component:ResearchComponent},
  {path:'blog', component:BlogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
