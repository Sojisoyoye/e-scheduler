import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { EventService } from '../shared/event.service';
// import { map } from 'rxjs/operators';

@Injectable()
export class EventListResolver implements Resolve<any> {
  constructor(private eventService: EventService) {
  }

  resolve() {
    return this.eventService.getEvents();
  }
}

// this is an injectable service that implememts resolve

// resolve route handler helps us wait for data to load before displaying the component
// Typically when we listen to an observable we call subscribe but this is a resolver we use pipe to
// return the observable to angular so that angular can watch and see when the observable finishes
// i.e subscribe returns subscription while pipe returns observables, with map added to it it does the same
// thing as subscription but returning an observable. then we consume the resolver on the route we need it.

// the advantage of this is that we only load our data once
// and it is then available on the route so no need to wait for data to be
// in the resolver and then loaded again in the component

// resolver automatically subscribes to an observable that it gets
