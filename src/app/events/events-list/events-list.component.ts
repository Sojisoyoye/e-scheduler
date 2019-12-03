import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {
  event = {
    id: 1,
    name: 'Angular',
    date: '12/3/2019',
    time: '10:00 am',
    price: 599.99,
    imageUrl: '/assets/images/basic-shield.png',
    location: {
      address: '105 DT',
      city: 'Las Vegas',
      counrty: 'USA'
    }
  };

  constructor() { }

  ngOnInit() {
  }

  // Template reference variable
}
