import { Component, OnInit } from '@angular/core';
import { InvoicesService } from './invoices.service';
import { Invoice } from '../entities/invoice';

@Component({
    templateUrl: './invoices-search-with-tabs.component.html',
    providers: [InvoicesService]
})
export class InvoicesSearchWithTabsComponent implements OnInit {

    invoicesOpen: Array<Invoice> = [];
    invoicesPaid: Array<Invoice> = [];

    page = 1;

    constructor(private invoicesService: InvoicesService) {
    }

    ngOnInit() {
        this.invoicesOpen = this.invoicesService.findOpen();
        this.invoicesPaid = this.invoicesService.findClosed();
    }


}
