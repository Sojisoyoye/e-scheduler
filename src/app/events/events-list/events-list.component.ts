import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from '../shared/event.model';


// declare let toastr;
@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {
  events: IEvent[];

  constructor(private eventService: EventService, private route: ActivatedRoute) {
   }

   // ngOnInit is called when our component is being loaded
  ngOnInit() {
    // this.events = this.eventService.getEvents();
    // this.events = this.route.snapshot.data.events;
    // this.eventService.getEvents().subscribe(events => {
    //   this.events = events;
    // });
    this.events = this.route.snapshot.data.events; // this is gotten from the route via resolver.
  }
  // Template reference variable
}
