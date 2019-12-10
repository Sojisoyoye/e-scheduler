import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ToastrService } from '../common/toastr.service';
import { ActivatedRoute } from '@angular/router';


// declare let toastr;
@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {
  events: any;

  constructor(private eventService: EventService, private toastr: ToastrService, private route: ActivatedRoute) {
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

  handleThumbnailClick(eventName) {
    this.toastr.success(eventName);
  }
  // Template reference variable
}
