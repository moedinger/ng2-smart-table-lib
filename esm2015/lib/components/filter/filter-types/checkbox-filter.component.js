import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DefaultFilter } from './default-filter';
import { debounceTime } from 'rxjs/operators';
export class CheckboxFilterComponent extends DefaultFilter {
    constructor() {
        super();
        this.filterActive = false;
        this.inputControl = new FormControl();
        this.sFormControl = new EventEmitter();
    }
    ngOnInit() {
        this.changesSubscription = this.inputControl.valueChanges
            .pipe(debounceTime(this.delay))
            .subscribe((checked) => {
            this.filterActive = true;
            const trueVal = (this.column.getFilterConfig() && this.column.getFilterConfig().true) || true;
            const falseVal = (this.column.getFilterConfig() && this.column.getFilterConfig().false) || false;
            this.query = checked ? trueVal : falseVal;
            this.setFilter();
        });
        this.sFormControl.emit({ control: this });
    }
    resetFilter(event) {
        if (event) {
            event.preventDefault();
        }
        this.query = '';
        this.inputControl.setValue(false, { emitEvent: false });
        this.filterActive = false;
        this.setFilter();
    }
}
CheckboxFilterComponent.decorators = [
    { type: Component, args: [{
                selector: 'checkbox-filter',
                template: `
    <input type="checkbox" [formControl]="inputControl" [ngClass]="inputClass" class="form-control">
    <a href="#" *ngIf="filterActive"
                (click)="resetFilter($event)">{{column.getFilterConfig()?.resetText || 'reset'}}</a>
  `
            },] }
];
CheckboxFilterComponent.ctorParameters = () => [];
CheckboxFilterComponent.propDecorators = {
    sFormControl: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3gtZmlsdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIvcHJpdmF0ZS90bXAvbmcybW9lMS43LjAvcHJvamVjdHMvbmcyLXNtYXJ0LXRhYmxlL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2ZpbHRlci9maWx0ZXItdHlwZXMvY2hlY2tib3gtZmlsdGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTdDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFVOUMsTUFBTSxPQUFPLHVCQUF3QixTQUFRLGFBQWE7SUFNeEQ7UUFDRSxLQUFLLEVBQUUsQ0FBQztRQUxWLGlCQUFZLEdBQVksS0FBSyxDQUFDO1FBQzlCLGlCQUFZLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQztRQUN2QixpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7SUFJakQsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZO2FBQ3RELElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQzlCLFNBQVMsQ0FBQyxDQUFDLE9BQWdCLEVBQUUsRUFBRTtZQUM5QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztZQUN6QixNQUFNLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxFQUFFLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUM7WUFDOUYsTUFBTSxRQUFRLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsRUFBRSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxDQUFDO1lBQ2pHLElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztZQUMxQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDbkIsQ0FBQyxDQUFDLENBQUM7UUFDTCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRCxXQUFXLENBQUMsS0FBVTtRQUNwQixJQUFJLEtBQUssRUFBRTtZQUNULEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUN4QjtRQUNELElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1FBQ3hELElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBQzFCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNuQixDQUFDOzs7WUF2Q0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLFFBQVEsRUFBRTs7OztHQUlUO2FBQ0Y7Ozs7MkJBS0UsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IERlZmF1bHRGaWx0ZXIgfSBmcm9tICcuL2RlZmF1bHQtZmlsdGVyJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2hlY2tib3gtZmlsdGVyJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgW2Zvcm1Db250cm9sXT1cImlucHV0Q29udHJvbFwiIFtuZ0NsYXNzXT1cImlucHV0Q2xhc3NcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiPlxuICAgIDxhIGhyZWY9XCIjXCIgKm5nSWY9XCJmaWx0ZXJBY3RpdmVcIlxuICAgICAgICAgICAgICAgIChjbGljayk9XCJyZXNldEZpbHRlcigkZXZlbnQpXCI+e3tjb2x1bW4uZ2V0RmlsdGVyQ29uZmlnKCk/LnJlc2V0VGV4dCB8fCAncmVzZXQnfX08L2E+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIENoZWNrYm94RmlsdGVyQ29tcG9uZW50IGV4dGVuZHMgRGVmYXVsdEZpbHRlciBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgZmlsdGVyQWN0aXZlOiBib29sZWFuID0gZmFsc2U7XG4gIGlucHV0Q29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgpO1xuICBAT3V0cHV0KCkgc0Zvcm1Db250cm9sID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuY2hhbmdlc1N1YnNjcmlwdGlvbiA9IHRoaXMuaW5wdXRDb250cm9sLnZhbHVlQ2hhbmdlc1xuICAgICAgLnBpcGUoZGVib3VuY2VUaW1lKHRoaXMuZGVsYXkpKVxuICAgICAgLnN1YnNjcmliZSgoY2hlY2tlZDogYm9vbGVhbikgPT4ge1xuICAgICAgICB0aGlzLmZpbHRlckFjdGl2ZSA9IHRydWU7XG4gICAgICAgIGNvbnN0IHRydWVWYWwgPSAodGhpcy5jb2x1bW4uZ2V0RmlsdGVyQ29uZmlnKCkgJiYgdGhpcy5jb2x1bW4uZ2V0RmlsdGVyQ29uZmlnKCkudHJ1ZSkgfHwgdHJ1ZTtcbiAgICAgICAgY29uc3QgZmFsc2VWYWwgPSAodGhpcy5jb2x1bW4uZ2V0RmlsdGVyQ29uZmlnKCkgJiYgdGhpcy5jb2x1bW4uZ2V0RmlsdGVyQ29uZmlnKCkuZmFsc2UpIHx8IGZhbHNlO1xuICAgICAgICB0aGlzLnF1ZXJ5ID0gY2hlY2tlZCA/IHRydWVWYWwgOiBmYWxzZVZhbDtcbiAgICAgICAgdGhpcy5zZXRGaWx0ZXIoKTtcbiAgICAgIH0pO1xuICAgIHRoaXMuc0Zvcm1Db250cm9sLmVtaXQoeyBjb250cm9sOiB0aGlzIH0pO1xuICB9XG5cbiAgcmVzZXRGaWx0ZXIoZXZlbnQ6IGFueSkge1xuICAgIGlmIChldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gICAgdGhpcy5xdWVyeSA9ICcnO1xuICAgIHRoaXMuaW5wdXRDb250cm9sLnNldFZhbHVlKGZhbHNlLCB7IGVtaXRFdmVudDogZmFsc2UgfSk7XG4gICAgdGhpcy5maWx0ZXJBY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLnNldEZpbHRlcigpO1xuICB9XG59XG4iXX0=