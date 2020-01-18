import { NgModule } from '@angular/core';

import {AdminRoutingModule} from './admin-routing.module';

import {AgendaComponent} from './agenda/agenda.component';
import {AlbumsComponent} from './albums/albums.component';
import {ClassesSectionsComponent} from './classes-sections/classes-sections.component';
import {EventsComponent} from './events/events.component';
import {FoodMenusComponent} from './food-menus/food-menus.component';
import {MessagesComponent} from './messages/messages.component';
import {RequestsComponent} from './requests/requests.component';
import {UserManagementComponent} from './user-child-management/user-management.component';

@NgModule({
  imports: [
    AdminRoutingModule
  ],
  declarations: [
    AgendaComponent,
    AlbumsComponent,
    ClassesSectionsComponent,
    EventsComponent,
    FoodMenusComponent,
    MessagesComponent,
    RequestsComponent,
    UserManagementComponent
  ]
})
export class AdminModule { }
