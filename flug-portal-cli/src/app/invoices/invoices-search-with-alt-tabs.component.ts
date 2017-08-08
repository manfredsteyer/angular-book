import { Component, OnInit } from '@angular/core';
import { InvoicesService } from './invoices.service';
import { Invoice } from '../entities/invoice';

@Component({
    templateUrl: './invoices-search-with-alt-tabs.component.html',
    providers: [InvoicesService]
})
export class InvoicesSearchWithAltTabsComponent implements OnInit {

    invoicesOpen: Array<Invoice> = [];
    invoicesPaid: Array<Invoice> = [];

    constructor(private invoicesService: InvoicesService) {
    }

    ngOnInit() {
        this.invoicesOpen = this.invoicesService.findOpen();
        this.invoicesPaid = this.invoicesService.findClosed();
    }


}
