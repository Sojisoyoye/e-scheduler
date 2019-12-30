import { Directive, OnInit, Inject, ElementRef, Input } from '@angular/core';
import { JQ_TOKEN } from './jQuery.service';
// import * as $ from 'jquery';
// import { JQ_TOKEN } from './jQuery.service';
declare let $: any;

@Directive({
  selector: '[appModalTrigger]'
})
export class ModalTriggerDirective implements OnInit {
  private el: HTMLElement;
  @Input() appModalTrigger;
  // @Input('modal-trigger') modalId : string

  constructor(ref: ElementRef) {
    this.el = ref.nativeElement;
  }

  // constructor(ref: ElementRef, @Inject(JQ_TOKEN) private $: any) {
  //   this.el = ref.nativeElement;
  // }

  ngOnInit() {
    this.el.addEventListener('click', event => {
      $('#app-simple-modal').modal({});
      // this.$(`#$[this.modalId]`).modal({});
    });
  }

}


// Directive to trigger modal opening in search on navbar

// ElementRef is a pointer to a specific element
