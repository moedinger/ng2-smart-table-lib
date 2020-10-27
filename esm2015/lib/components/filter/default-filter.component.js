import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FilterDefault } from "./filter-default";
export class DefaultFilterComponent extends FilterDefault {
    constructor() {
        super(...arguments);
        this.filter = new EventEmitter();
    }
    onSFormControl($event) {
        this.formControl = $event.control;
    }
    onFilter(query) {
        this.filter.emit({
            search: query,
            field: this.column.id,
            control: this.formControl,
        });
    }
}
DefaultFilterComponent.decorators = [
    { type: Component, args: [{
                selector: 'default-table-filter',
                template: `
    <ng-container [ngSwitch]="column.getFilterType()">
      <select-filter *ngSwitchCase="'list'"
                     [query]="query"
                     [ngClass]="inputClass"
                     [column]="column"
                     (filter)="onFilter($event)">
      </select-filter>
      <checkbox-filter *ngSwitchCase="'checkbox'"
                       [query]="query"
                       [ngClass]="inputClass"
                       [column]="column"
                       (filter)="onFilter($event)"
                       (sFormControl)="onSFormControl($event)">
      </checkbox-filter>
      <completer-filter *ngSwitchCase="'completer'"
                        [query]="query"
                        [ngClass]="inputClass"
                        [column]="column"
                        (filter)="onFilter($event)">
      </completer-filter>
      <input-filter *ngSwitchDefault
                    [query]="query"
                    [ngClass]="inputClass"
                    [column]="column"
                    (filter)="onFilter($event)"
                    (sFormControl)="onSFormControl($event)">
      </input-filter>
    </ng-container>
  `
            },] }
];
DefaultFilterComponent.propDecorators = {
    query: [{ type: Input }],
    filter: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1maWx0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii9wcml2YXRlL3RtcC9uZzJtb2UxLjcuMC9wcm9qZWN0cy9uZzItc21hcnQtdGFibGUvc3JjLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZmlsdGVyL2RlZmF1bHQtZmlsdGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3JFLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQW1DL0MsTUFBTSxPQUFPLHNCQUF1QixTQUFRLGFBQWE7SUFqQ3pEOztRQW1DWSxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztJQWU3QyxDQUFDO0lBWEMsY0FBYyxDQUFDLE1BQVc7UUFDeEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDO0lBQ3BDLENBQUM7SUFFRCxRQUFRLENBQUMsS0FBYTtRQUNwQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNmLE1BQU0sRUFBRSxLQUFLO1lBQ2IsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUNyQixPQUFPLEVBQUUsSUFBSSxDQUFDLFdBQVc7U0FDM0IsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7O1lBakRELFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBNkJUO2FBQ0Y7OztvQkFFRSxLQUFLO3FCQUNMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RmlsdGVyRGVmYXVsdH0gZnJvbSBcIi4vZmlsdGVyLWRlZmF1bHRcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGVmYXVsdC10YWJsZS1maWx0ZXInLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy1jb250YWluZXIgW25nU3dpdGNoXT1cImNvbHVtbi5nZXRGaWx0ZXJUeXBlKClcIj5cbiAgICAgIDxzZWxlY3QtZmlsdGVyICpuZ1N3aXRjaENhc2U9XCInbGlzdCdcIlxuICAgICAgICAgICAgICAgICAgICAgW3F1ZXJ5XT1cInF1ZXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cImlucHV0Q2xhc3NcIlxuICAgICAgICAgICAgICAgICAgICAgW2NvbHVtbl09XCJjb2x1bW5cIlxuICAgICAgICAgICAgICAgICAgICAgKGZpbHRlcik9XCJvbkZpbHRlcigkZXZlbnQpXCI+XG4gICAgICA8L3NlbGVjdC1maWx0ZXI+XG4gICAgICA8Y2hlY2tib3gtZmlsdGVyICpuZ1N3aXRjaENhc2U9XCInY2hlY2tib3gnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgW3F1ZXJ5XT1cInF1ZXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwiaW5wdXRDbGFzc1wiXG4gICAgICAgICAgICAgICAgICAgICAgIFtjb2x1bW5dPVwiY29sdW1uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgKGZpbHRlcik9XCJvbkZpbHRlcigkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgKHNGb3JtQ29udHJvbCk9XCJvblNGb3JtQ29udHJvbCgkZXZlbnQpXCI+XG4gICAgICA8L2NoZWNrYm94LWZpbHRlcj5cbiAgICAgIDxjb21wbGV0ZXItZmlsdGVyICpuZ1N3aXRjaENhc2U9XCInY29tcGxldGVyJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBbcXVlcnldPVwicXVlcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwiaW5wdXRDbGFzc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBbY29sdW1uXT1cImNvbHVtblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAoZmlsdGVyKT1cIm9uRmlsdGVyKCRldmVudClcIj5cbiAgICAgIDwvY29tcGxldGVyLWZpbHRlcj5cbiAgICAgIDxpbnB1dC1maWx0ZXIgKm5nU3dpdGNoRGVmYXVsdFxuICAgICAgICAgICAgICAgICAgICBbcXVlcnldPVwicXVlcnlcIlxuICAgICAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJpbnB1dENsYXNzXCJcbiAgICAgICAgICAgICAgICAgICAgW2NvbHVtbl09XCJjb2x1bW5cIlxuICAgICAgICAgICAgICAgICAgICAoZmlsdGVyKT1cIm9uRmlsdGVyKCRldmVudClcIlxuICAgICAgICAgICAgICAgICAgICAoc0Zvcm1Db250cm9sKT1cIm9uU0Zvcm1Db250cm9sKCRldmVudClcIj5cbiAgICAgIDwvaW5wdXQtZmlsdGVyPlxuICAgIDwvbmctY29udGFpbmVyPlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBEZWZhdWx0RmlsdGVyQ29tcG9uZW50IGV4dGVuZHMgRmlsdGVyRGVmYXVsdCB7XG4gIEBJbnB1dCgpIHF1ZXJ5OiBzdHJpbmc7XG4gIEBPdXRwdXQoKSBmaWx0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBmb3JtQ29udHJvbDogYW55O1xuXG4gIG9uU0Zvcm1Db250cm9sKCRldmVudDogYW55KSB7XG4gICAgdGhpcy5mb3JtQ29udHJvbCA9ICRldmVudC5jb250cm9sO1xuICB9XG5cbiAgb25GaWx0ZXIocXVlcnk6IHN0cmluZykge1xuICAgIHRoaXMuZmlsdGVyLmVtaXQoe1xuICAgICAgc2VhcmNoOiBxdWVyeSxcbiAgICAgIGZpZWxkOiB0aGlzLmNvbHVtbi5pZCxcbiAgICAgIGNvbnRyb2w6IHRoaXMuZm9ybUNvbnRyb2wsXG4gICB9KTtcbiB9XG59XG4iXX0=