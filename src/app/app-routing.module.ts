import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsListComponent } from './events/events-list/events-list.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { ErrorComponent } from './events/error/error.component';
import { EventResolver } from './events/shared/event-resolver.service';
import { EventListResolver } from './events/shared/event-list-resolver.service';
import { CreateSessionComponent } from './events/event-details/create-session/create-session.component';
// import { UserModule } from './user/user.module';

const routes: Routes = [
  { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
  { path: 'events', component: EventsListComponent, resolve: {events: EventListResolver} },
  { path: 'events/:id', component: EventDetailsComponent, resolve: {event: EventResolver} },
  { path: 'events/session/new', component: CreateSessionComponent },
  { path: '404', component: ErrorComponent },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  { path: 'user', loadChildren: 'src/app/user/user.module#UserModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


// Promises => Represent a single value in the future
// Observables => Represent 0 or more values now or in the future
// - can be synchronous
// - improved error handling
// - can be closed independently of returning a Value
// - can deal with time
// - Advanced operations
//     -mathematical aggregation
//     -buffering
//     -debounce
//     -distinct
//     -filtering
//     -combining observables
//     -retry
