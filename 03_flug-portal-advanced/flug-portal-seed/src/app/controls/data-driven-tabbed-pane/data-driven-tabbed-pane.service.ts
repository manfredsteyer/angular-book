import { Injectable } from '@angular/core';

@Injectable()
export class AdvancedTabbedPaneService {
    items: any[];
    displayProperties: string[];
    currentItem: any;
    currentLabel: string = 'no selection';
}
