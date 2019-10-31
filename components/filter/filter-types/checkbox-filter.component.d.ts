import { OnInit, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DefaultFilter } from './default-filter';
import 'rxjs/add/operator/debounceTime';
export declare class CheckboxFilterComponent extends DefaultFilter implements OnInit {
    filterActive: boolean;
    inputControl: FormControl;
    sFormControl: EventEmitter<any>;
    constructor();
    ngOnInit(): void;
    resetFilter(event: any): void;
}
