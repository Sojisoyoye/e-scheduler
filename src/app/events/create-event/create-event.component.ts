import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../shared/event.service';
// import { IEvent } from '../shared/event.model';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  isDirty: true;
  event: any;
  constructor(private router: Router, private eventService: EventService) { }

  ngOnInit() {
  }

  cancel() {
    this.router.navigate(['/events']);
  }

  saveEvent(formValues) {
    this.eventService.saveEvent(formValues);
    this.router.navigate(['events']);
  }
}
