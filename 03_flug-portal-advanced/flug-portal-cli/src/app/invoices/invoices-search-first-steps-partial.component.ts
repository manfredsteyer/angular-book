import { Component, OnInit } from '@angular/core';
import { InvoicesService } from './invoices.service';
import { Invoice } from '../entities/invoice';

// Zeigt die teilweise Verwendung der Tab-Komponenten
// Mit diesem Beispiel nähert sich das Buch der
// endgültigen Lösung.

@Component({
    templateUrl: 'invoices-search-first-steps-partial.component.html',
    providers: [InvoicesService]
})
export class InvoicesSearchFirstStepsPartialComponent implements OnInit {

    invoicesOpen: Array<Invoice> = [];
    invoicesPaid: Array<Invoice> = [];

    constructor(private invoicesService: InvoicesService) {
    }

    ngOnInit() {
        this.invoicesOpen = this.invoicesService.findOpen();
        this.invoicesPaid = this.invoicesService.findClosed();
    }
}
