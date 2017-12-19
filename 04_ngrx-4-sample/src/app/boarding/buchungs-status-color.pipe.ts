import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'buchungsStatusColor',
    pure: true
})
export class BuchungsStatusColorPipe implements PipeTransform {
    
    transform(value: any, args: any[]): any {
        
        switch(value) {
            case 0: return "red";
            case 1: return "orange";
            case 2: return "green";
        }
        return "black";
    }
}