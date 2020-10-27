import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CellModule } from './components/cell/cell.module';
import { FilterModule } from './components/filter/filter.module';
import { PagerModule } from './components/pager/pager.module';
import { TBodyModule } from './components/tbody/tbody.module';
import { THeadModule } from './components/thead/thead.module';
import { Ng2SmartTableComponent } from './ng2-smart-table.component';
import { Ng2SmartTableSolComponent } from './ng2-smart-table-sol.component';
export class Ng2SmartTableModule {
}
Ng2SmartTableModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    ReactiveFormsModule,
                    CellModule,
                    FilterModule,
                    PagerModule,
                    TBodyModule,
                    THeadModule,
                ],
                declarations: [
                    Ng2SmartTableSolComponent,
                    Ng2SmartTableComponent,
                ],
                exports: [
                    Ng2SmartTableSolComponent,
                    Ng2SmartTableComponent,
                ],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmcyLXNtYXJ0LXRhYmxlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIvcHJpdmF0ZS90bXAvbmcybW9lMS43LjAvcHJvamVjdHMvbmcyLXNtYXJ0LXRhYmxlL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9uZzItc21hcnQtdGFibGUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVsRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDM0QsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUM5RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDOUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBRTlELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3JFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBc0I1RSxNQUFNLE9BQU8sbUJBQW1COzs7WUFwQi9CLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixXQUFXO29CQUNYLG1CQUFtQjtvQkFDbkIsVUFBVTtvQkFDVixZQUFZO29CQUNaLFdBQVc7b0JBQ1gsV0FBVztvQkFDWCxXQUFXO2lCQUNaO2dCQUNELFlBQVksRUFBRTtvQkFDWix5QkFBeUI7b0JBQ3pCLHNCQUFzQjtpQkFDdkI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLHlCQUF5QjtvQkFDekIsc0JBQXNCO2lCQUN2QjthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgQ2VsbE1vZHVsZSB9IGZyb20gJy4vY29tcG9uZW50cy9jZWxsL2NlbGwubW9kdWxlJztcbmltcG9ydCB7IEZpbHRlck1vZHVsZSB9IGZyb20gJy4vY29tcG9uZW50cy9maWx0ZXIvZmlsdGVyLm1vZHVsZSc7XG5pbXBvcnQgeyBQYWdlck1vZHVsZSB9IGZyb20gJy4vY29tcG9uZW50cy9wYWdlci9wYWdlci5tb2R1bGUnO1xuaW1wb3J0IHsgVEJvZHlNb2R1bGUgfSBmcm9tICcuL2NvbXBvbmVudHMvdGJvZHkvdGJvZHkubW9kdWxlJztcbmltcG9ydCB7IFRIZWFkTW9kdWxlIH0gZnJvbSAnLi9jb21wb25lbnRzL3RoZWFkL3RoZWFkLm1vZHVsZSc7XG5cbmltcG9ydCB7IE5nMlNtYXJ0VGFibGVDb21wb25lbnQgfSBmcm9tICcuL25nMi1zbWFydC10YWJsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmcyU21hcnRUYWJsZVNvbENvbXBvbmVudCB9IGZyb20gJy4vbmcyLXNtYXJ0LXRhYmxlLXNvbC5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgQ2VsbE1vZHVsZSxcbiAgICBGaWx0ZXJNb2R1bGUsXG4gICAgUGFnZXJNb2R1bGUsXG4gICAgVEJvZHlNb2R1bGUsXG4gICAgVEhlYWRNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIE5nMlNtYXJ0VGFibGVTb2xDb21wb25lbnQsXG4gICAgTmcyU21hcnRUYWJsZUNvbXBvbmVudCxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIE5nMlNtYXJ0VGFibGVTb2xDb21wb25lbnQsXG4gICAgTmcyU21hcnRUYWJsZUNvbXBvbmVudCxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgTmcyU21hcnRUYWJsZU1vZHVsZSB7XG59XG4iXX0=