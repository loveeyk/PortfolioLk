import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { FooterComponent } from './footer/footer.component';
import { PhoneframeComponent } from './phoneframe/phoneframe.component';
import { MyskillsComponent } from './myskills/myskills.component';
import { CVComponent } from './cv/cv.component';
import { BarComponent } from './bar/bar.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { SkillbarComponent } from './skillbar/skillbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    HomeComponent,
    ContactComponent,
    ProjectsComponent,
    AboutmeComponent,
    FooterComponent,
    PhoneframeComponent,
    MyskillsComponent,
    CVComponent,
    BarComponent,
    SkillbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
