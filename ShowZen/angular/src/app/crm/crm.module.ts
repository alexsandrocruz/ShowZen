
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CrmComponent } from './crm.component';
import { CrmRoutingModule } from './crm-routing.module';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { ThemeSharedModule } from '@abp/ng.theme.shared';

@NgModule({
    declarations: [CrmComponent],
    imports: [
        CommonModule,
        CrmRoutingModule,
        DragDropModule,
        NgbDropdownModule,
        ThemeSharedModule
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CrmModule { }
