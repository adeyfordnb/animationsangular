import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Components
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { TeamComponent } from './components/team/team.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

//Routing
import { AppRoutinModule } from './app-routin/app-routin.module';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ProjectsComponent,
    TeamComponent,
    ContactsComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutinModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
