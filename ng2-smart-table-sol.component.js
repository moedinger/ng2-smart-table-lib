var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Grid } from './lib/grid';
import { DataSource } from './lib/data-source/data-source';
import { deepExtend } from './lib/helpers';
import { LocalDataSource } from './lib/data-source/local/local.data-source';
var Ng2SmartTableSolComponent = (function () {
    function Ng2SmartTableSolComponent() {
        this.settings = {};
        this.rowSelect = new EventEmitter();
        this.userRowSelect = new EventEmitter();
        this.delete = new EventEmitter();
        this.edit = new EventEmitter();
        this.create = new EventEmitter();
        this.custom = new EventEmitter();
        this.deleteConfirm = new EventEmitter();
        this.editConfirm = new EventEmitter();
        this.createConfirm = new EventEmitter();
        this.rowHover = new EventEmitter();
        this.defaultSettings = {
            mode: 'inline',
            selectMode: 'single',
            hideHeader: false,
            hideSubHeader: false,
            actions: {
                columnTitle: 'Actions',
                add: true,
                edit: true,
                delete: true,
                custom: [],
                position: 'left',
            },
            filter: {
                inputClass: '',
            },
            edit: {
                inputClass: '',
                editButtonContent: 'Edit',
                saveButtonContent: 'Update',
                cancelButtonContent: 'Cancel',
                confirmSave: false,
            },
            add: {
                inputClass: '',
                addButtonContent: 'Add New',
                createButtonContent: 'Create',
                cancelButtonContent: 'Cancel',
                confirmCreate: false,
            },
            delete: {
                deleteButtonContent: 'Delete',
                confirmDelete: false,
            },
            attr: {
                id: '',
                class: '',
            },
            noDataMessage: 'No data found',
            columns: {},
            pager: {
                display: true,
                perPage: 10,
            },
            rowClassFunction: function () { return ""; }
        };
        this.isAllSelected = false;
        this.filterItems = new Map();
    }
    Ng2SmartTableSolComponent.prototype.ngOnChanges = function (changes) {
        if (this.grid) {
            if (changes['settings']) {
                this.grid.setSettings(this.prepareSettings());
            }
            if (changes['source']) {
                this.source = this.prepareSource();
                this.grid.setSource(this.source);
            }
        }
        else {
            this.initGrid();
        }
        this.tableId = this.grid.getSetting('attr.id');
        this.tableClass = this.grid.getSetting('attr.class');
        this.isHideHeader = this.grid.getSetting('hideHeader');
        this.isHideSubHeader = this.grid.getSetting('hideSubHeader');
        this.isPagerDisplay = this.grid.getSetting('pager.display');
        this.isPagerDisplay = this.grid.getSetting('pager.display');
        this.perPageSelect = this.grid.getSetting('pager.perPageSelect');
        this.rowClassFunction = this.grid.getSetting('rowClassFunction');
    };
    Ng2SmartTableSolComponent.prototype.editRowSelect = function (row) {
        if (this.grid.getSetting('selectMode') === 'multi') {
            this.onMultipleSelectRow(row);
        }
        else {
            this.onSelectRow(row);
        }
    };
    Ng2SmartTableSolComponent.prototype.onUserSelectRow = function (row) {
        if (this.grid.getSetting('selectMode') !== 'multi') {
            this.grid.selectRow(row);
            this.emitUserSelectRow(row);
            this.emitSelectRow(row);
        }
    };
    Ng2SmartTableSolComponent.prototype.onRowHover = function (row) {
        this.rowHover.emit(row);
    };
    Ng2SmartTableSolComponent.prototype.multipleSelectRow = function (row) {
        this.grid.multipleSelectRow(row);
        this.emitUserSelectRow(row);
        this.emitSelectRow(row);
    };
    Ng2SmartTableSolComponent.prototype.onSelectAllRows = function ($event) {
        this.isAllSelected = !this.isAllSelected;
        this.grid.selectAllRows(this.isAllSelected);
        this.emitUserSelectRow(null);
        this.emitSelectRow(null);
    };
    Ng2SmartTableSolComponent.prototype.onSelectRow = function (row) {
        this.grid.selectRow(row);
        this.emitSelectRow(row);
    };
    Ng2SmartTableSolComponent.prototype.onMultipleSelectRow = function (row) {
        this.emitSelectRow(row);
    };
    Ng2SmartTableSolComponent.prototype.initGrid = function () {
        var _this = this;
        this.source = this.prepareSource();
        this.grid = new Grid(this.source, this.prepareSettings());
        this.grid.onSelectRow().subscribe(function (row) { return _this.emitSelectRow(row); });
    };
    Ng2SmartTableSolComponent.prototype.prepareSource = function () {
        if (this.source instanceof DataSource) {
            return this.source;
        }
        else if (this.source instanceof Array) {
            return new LocalDataSource(this.source);
        }
        return new LocalDataSource();
    };
    Ng2SmartTableSolComponent.prototype.prepareSettings = function () {
        return deepExtend({}, this.defaultSettings, this.settings);
    };
    Ng2SmartTableSolComponent.prototype.changePage = function ($event) {
        this.resetAllSelector();
    };
    Ng2SmartTableSolComponent.prototype.sort = function ($event) {
        this.sortItem = $event;
        for (var _i = 0, _a = Array.from(this.filterItems.keys()); _i < _a.length; _i++) {
            var key = _a[_i];
            if (this.sortItem && key !== this.sortItem.control.column.id) {
                this.filterItems.get(key).control.resetFilter();
                this.filterItems.delete(key);
            }
        }
        this.resetAllSelector();
    };
    Ng2SmartTableSolComponent.prototype.filter = function ($event) {
        if ($event.search && this.sortItem && $event.field !== this.sortItem.control.column.id) {
            this.source.resetSort();
        }
        if ($event.field && $event.field !== "") {
            this.filterItems.set($event.field, $event);
        }
        for (var _i = 0, _a = Array.from(this.filterItems.keys()); _i < _a.length; _i++) {
            var key = _a[_i];
            if ($event.search && key !== $event.field) {
                if (this.filterItems.get(key) && this.filterItems.get(key).control) {
                    this.filterItems.get(key).control.resetFilter();
                    this.filterItems.delete(key);
                }
            }
        }
        this.resetAllSelector();
    };
    Ng2SmartTableSolComponent.prototype.resetAllSelector = function () {
        this.isAllSelected = false;
    };
    Ng2SmartTableSolComponent.prototype.emitUserSelectRow = function (row) {
        var selectedRows = this.grid.getSelectedRows();
        this.userRowSelect.emit({
            data: row ? row.getData() : null,
            isSelected: row ? row.getIsSelected() : null,
            source: this.source,
            selected: selectedRows && selectedRows.length ? selectedRows.map(function (r) { return r.getData(); }) : [],
        });
    };
    Ng2SmartTableSolComponent.prototype.emitSelectRow = function (row) {
        this.rowSelect.emit({
            data: row ? row.getData() : null,
            isSelected: row ? row.getIsSelected() : null,
            source: this.source,
        });
    };
    return Ng2SmartTableSolComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", Object)
], Ng2SmartTableSolComponent.prototype, "source", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], Ng2SmartTableSolComponent.prototype, "settings", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], Ng2SmartTableSolComponent.prototype, "rowSelect", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], Ng2SmartTableSolComponent.prototype, "userRowSelect", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], Ng2SmartTableSolComponent.prototype, "delete", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], Ng2SmartTableSolComponent.prototype, "edit", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], Ng2SmartTableSolComponent.prototype, "create", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], Ng2SmartTableSolComponent.prototype, "custom", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], Ng2SmartTableSolComponent.prototype, "deleteConfirm", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], Ng2SmartTableSolComponent.prototype, "editConfirm", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], Ng2SmartTableSolComponent.prototype, "createConfirm", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Ng2SmartTableSolComponent.prototype, "rowHover", void 0);
Ng2SmartTableSolComponent = __decorate([
    Component({
        selector: 'ng2-smart-table-sol',
        styles: [":host{font-size:1rem}:host /deep/ *{box-sizing:border-box}:host /deep/ button,:host /deep/ input,:host /deep/ optgroup,:host /deep/ select,:host /deep/ textarea{color:inherit;font:inherit;margin:0}:host /deep/ table{line-height:1.5em;border-collapse:collapse;border-spacing:0;display:table;width:100%;max-width:100%;overflow:auto;word-break:normal;word-break:keep-all}:host /deep/ table tr th{font-weight:700}:host /deep/ table tr section{font-size:.75em;font-weight:700}:host /deep/ table tr td,:host /deep/ table tr th{font-size:.875em;margin:0;padding:.5em 1em}:host /deep/ a{color:#1e6bb8;text-decoration:none}:host /deep/ a:hover{text-decoration:underline} /*# sourceMappingURL=ng2-smart-table-sol.component.css.map */ "],
        template: "<table [id]=\"tableId\" [ngClass]=\"tableClass\"><thead ng2-st-thead *ngIf=\"!isHideHeader || !isHideSubHeader\" [grid]=\"grid\" [isAllSelected]=\"isAllSelected\" [source]=\"source\" [createConfirm]=\"createConfirm\" (create)=\"create.emit($event)\" (selectAllRows)=\"onSelectAllRows($event)\" (sort)=\"sort($event)\" (filter)=\"filter($event)\"></thead><tbody ng2-st-tbody [grid]=\"grid\" [source]=\"source\" [deleteConfirm]=\"deleteConfirm\" [editConfirm]=\"editConfirm\" [rowClassFunction]=\"rowClassFunction\" (edit)=\"edit.emit($event)\" (delete)=\"delete.emit($event)\" (custom)=\"custom.emit($event)\" (userSelectRow)=\"onUserSelectRow($event)\" (editRowSelect)=\"editRowSelect($event)\" (multipleSelectRow)=\"multipleSelectRow($event)\" (rowHover)=\"onRowHover($event)\"></tbody></table><ng2-smart-table-pager *ngIf=\"isPagerDisplay\" [source]=\"source\" [perPageSelect]=\"perPageSelect\" (changePage)=\"changePage($event)\"></ng2-smart-table-pager>",
    })
], Ng2SmartTableSolComponent);
export { Ng2SmartTableSolComponent };
//# sourceMappingURL=ng2-smart-table-sol.component.js.map