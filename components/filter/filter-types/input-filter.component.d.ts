import { OnInit, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/skip';
import { DefaultFilter } from './default-filter';
export declare class InputFilterComponent extends DefaultFilter implements OnInit {
    sFormControl: EventEmitter<any>;
    inputControl: FormControl;
    constructor();
    ngOnInit(): void;
    resetFilter(): void;
}
