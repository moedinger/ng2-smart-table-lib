import { EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { DataSource } from '../../lib/data-source/data-source';
import { Column } from '../../lib/data-set/column';
import { Subscription } from 'rxjs/Subscription';
export declare class FilterComponent implements OnChanges {
    column: Column;
    source: DataSource;
    inputClass: string;
    filter: EventEmitter<any>;
    query: string;
    formControl: any;
    protected dataChangedSub: Subscription;
    ngOnChanges(changes: SimpleChanges): void;
    onSFormControl($event: any): void;
    onFilter(query: string): void;
}
