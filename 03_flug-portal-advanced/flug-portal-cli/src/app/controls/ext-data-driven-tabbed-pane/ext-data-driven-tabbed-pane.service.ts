import { Injectable } from '@angular/core';

@Injectable()
export class ExtendedAdvancedTabbedPaneService {
    items: any[];
    displayProperties: string[];
    currentItem: any;
    currentLabel: string = 'no selection';
}
