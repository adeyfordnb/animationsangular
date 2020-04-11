import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

//Components
import { ContactsComponent} from "../components/contacts/contacts.component";
import { MainComponent } from "../components/main/main.component";
import { ProjectsComponent } from "../components/projects/projects.component";
import { TeamComponent } from "../components/team/team.component";

//Path
const routes: Routes = [
  { path: '', component: MainComponent, data: {state: 'main'} },
  { path: 'contacts', component: ContactsComponent, data: {state: 'contacts'} },
  { path: 'projects', component: ProjectsComponent, data: {state: 'projects'} },
  { path: 'team', component: TeamComponent, data: {state: 'team'} }
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutinModule { }
