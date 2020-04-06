import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

//Components
import { ContactsComponent} from "../components/contacts/contacts.component";
import { MainComponent } from "../components/main/main.component";
import { ProjectsComponent } from "../components/projects/projects.component";
import { TeamComponent } from "../components/team/team.component";

//Path
const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'team', component: TeamComponent }
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutinModule { }
