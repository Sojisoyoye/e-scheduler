import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventsListComponent } from './events/events-list/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail/event-thumbnail.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EventService } from './events/shared/event.service';
import { TOASTR_TOKEN, Toastr } from './events/common/toastr.service';
import { JQ_TOKEN } from './events/common/jQuery.service';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { ErrorComponent } from './events/error/error.component';
import { EventRouteActivator } from './events/event-details/event-route-activator.service';
import { EventListResolver } from './events/shared/event-list-resolver.service';
import { AuthService } from './user/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateSessionComponent } from './events/event-details/create-session/create-session.component';
import { SessionListComponent } from './events/event-details/session-list/session-list.component';
import { CollapsibleWellComponent } from './events/common/collapsible-well/collapsible-well.component';
import { DurationPipe } from './events/shared/duration.pipe';
import { SimpleModalComponent } from './events/common/simple-modal/simple-modal.component';
import { ModalTriggerDirective } from './events/common/modal-trigger.directive';

const toastr: Toastr = window['toastr'];
const jQuery = window['$'];
// declare let toastr: Toastr;
@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    ErrorComponent,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe,
    SimpleModalComponent,
    ModalTriggerDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    EventService,
    { provide: TOASTR_TOKEN, useValue: toastr },
    { provide: JQ_TOKEN, useValue: jQuery },
    AuthService,
    EventRouteActivator,
    EventListResolver,
    { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm('Are you sure?');
  }
  return true;
}
