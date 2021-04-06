import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { ContactComponent } from './contact/contact.component';
import { CVComponent } from './cv/cv.component';
import { HeroComponent } from './hero/hero.component';
import { HomeComponent } from './home/home.component';
import { MyskillsComponent } from './myskills/myskills.component';
import { ProjectsComponent } from './projects/projects.component';

// let isUnlocked = false;
const routes: Routes = [
  {
    path:"", component: HomeComponent
  },
  {
    path:"about", component: AboutmeComponent
  },
  {
    path:"projects", component: ProjectsComponent
  },
  {
    path:"contact", component: ContactComponent
  },
  {
    path:"skills", component: MyskillsComponent
  },
  {
    path:"cv", component: CVComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 

 }
