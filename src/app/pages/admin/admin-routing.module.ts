import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import {AgendaComponent} from './agenda/agenda.component';
import {AlbumsComponent} from './albums/albums.component';
import {ClassesSectionsComponent} from './classes-sections/classes-sections.component';
import {EventsComponent} from './events/events.component';
import {FoodMenusComponent} from './food-menus/food-menus.component';
import {MessagesComponent} from './messages/messages.component';
import {RequestsComponent} from './requests/requests.component';
import {UserManagementComponent} from './user-child-management/user-management.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'agenda', component: AgendaComponent },
      { path: 'album', component: AlbumsComponent },
      { path: 'class', component: ClassesSectionsComponent },
      { path: 'event', component: EventsComponent },
      { path: 'food', component: FoodMenusComponent },
      { path: 'message', component: MessagesComponent },
      { path: 'request', component: RequestsComponent },
      { path: 'user', component: UserManagementComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {
}
