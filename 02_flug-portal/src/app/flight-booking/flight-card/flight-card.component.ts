import {
  Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges,
  ViewEncapsulation
} from '@angular/core';
import { Flight } from '../../entities/flight';

@Component({
  selector: 'flight-card',
  templateUrl: './flight-card.component.html'
})
export class FlightCardComponent implements OnInit, OnChanges {

  @Input() item: Flight;
  @Input() selected: boolean;
  @Output() selectedChange = new EventEmitter<boolean>();

  constructor() {
    console.debug('ctor', this.item, this.selected);
  }

  ngOnInit() {
    console.debug('ngOnInit', this.item, this.selected);
    // this.selectedChange.next(true);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.debug('ngOnChanges', this.item, this.selected);
    if (changes['item']) {
      console.debug('\titem changed');
    }
    if (changes['selected']) {
      console.debug('\tselected changed');
    }

  }

  select() {
    this.selected = true;
    this.selectedChange.next(this.selected);
  }

  deselect() {
    this.selected = false;
    this.selectedChange.next(this.selected);
  }
}
