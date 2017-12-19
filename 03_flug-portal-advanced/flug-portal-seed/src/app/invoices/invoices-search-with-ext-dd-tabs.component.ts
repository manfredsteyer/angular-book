import { Component, OnInit } from '@angular/core';
import { InvoicesService } from './invoices.service';
import { Invoice } from '../entities/invoice';

@Component({
    templateUrl: 'invoices-search-with-ext-dd-tabs.component.html',
    providers: [InvoicesService]
})
export class InvoicesSearchWithExtendedDataDrivenTabsComponent implements OnInit {

    invoices: Array<Invoice> = [];

    constructor(private invoicesService: InvoicesService) {
    }

    ngOnInit() {
        this.invoices = this
                            .invoicesService
                            .findAll();
    }
}
