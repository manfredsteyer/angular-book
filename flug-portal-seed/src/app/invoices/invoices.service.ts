import { Injectable } from '@angular/core';
import { Invoice } from '../entities/invoice';

@Injectable()
export class InvoicesService {

    private static invoices: Array<Invoice>;

    constructor() {

        if (InvoicesService.invoices) {
            return;
        }

        InvoicesService.invoices = [
            {
                invoiceId: 1,
                date: new Date().toISOString().substr(0, 10),
                price: 300,
                from: 'Graz',
                to: 'Frankfurt',
                paid: true
            },
            {
                invoiceId: 2,
                date: new Date().toISOString().substr(0, 10),
                price: 350,
                from: 'Graz',
                to: 'Hamburg',
                paid: false
            },
            {
                invoiceId: 3,
                date: new Date().toISOString().substr(0, 10),
                price: 290,
                from: 'Graz',
                to: 'Zürich',
                paid: true
            },
            {
                invoiceId: 4,
                date: new Date().toISOString().substr(0, 10),
                price: 450,
                from: 'Graz',
                to: 'Frankfurt',
                paid: false
            }
        ];
    }

    findAll(): Array<Invoice> {
        return InvoicesService.invoices;
    }

    findOpen(): Array<Invoice> {
        return InvoicesService.invoices.filter(inv => inv.invoiceId % 2 === 0);
    }

    findClosed(): Array<Invoice> {
        return InvoicesService.invoices.filter(inv => inv.invoiceId % 2 === 1);
    }
}
