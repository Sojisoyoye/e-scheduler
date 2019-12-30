import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ActivatedRoute, Params } from '@angular/router';
import { IEvent, ISession } from '../shared/event.model';
import { parseLazyRoute } from '@angular/compiler/src/aot/lazy_routes';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  event: IEvent;
  addMode: boolean;
  filterBy = 'all';
  sortBy = 'votes';

  constructor(private eventService: EventService, private route: ActivatedRoute) { }

  ngOnInit() {
    // this is to make the modal value selected route to the selected event.
    this.route.params.forEach((params: Params) => {
      this.event = this.eventService.getEvent(+params.id);
      this.addMode = false;
    });
    // this.event = this.eventService.getEvent(+this.route.snapshot.params.id);
  }


  addSession() {
    return this.addMode = true;
  }

  saveNewSession(session: ISession) {
    const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id));
    session.id = nextId + 1;
    this.event.sessions.push(session);
    this.eventService.updateEvent(this.event);
    this.addMode = false;
  }

  cancelAddSession() {
    this.addMode = false;
  }

}

// it is important to keep track of all the state and reset it whenever we
// subscribe or react to route parameter change. we can create a new method called
// setState or resetState to reset of all the necessary states.
