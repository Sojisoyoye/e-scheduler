import { Component, OnInit, Input } from '@angular/core';
import { IEvent } from '../shared/event.model';

@Component({
  selector: 'app-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.css']
})
export class EventThumbnailComponent implements OnInit {
  @Input() event: IEvent;

  constructor() { }

  ngOnInit() {
  }

  // getStartTimeClass() {
  //   if (this.event && this.event.time === '8:00 am') {
  //     return ['green', 'bold'];
  //   }
  //   return [];
  // }

  getStartTimeStyle(): any {
    if (this.event && this.event.time === '8:00 am') {
      return {color: '#003300', 'font-weight': 'bold'};
    }
    return {};
  }
}
