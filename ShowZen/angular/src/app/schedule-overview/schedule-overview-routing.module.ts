import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScheduleOverviewComponent } from './schedule-overview.component';

const routes: Routes = [
    {
        path: '',
        component: ScheduleOverviewComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ScheduleOverviewRoutingModule { }
